import React, { useState, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

// Import our new components and utilities
import { formSchema } from './registration/schema';
import { competitionTypes } from './registration/utils';
import BasicInfoFields from './registration/BasicInfoFields';
import MentorFields from './registration/MentorFields';
import CompetitionTypeField from './registration/CompetitionTypeField';
import ParticipantFields from './registration/ParticipantFields';

// Import styles for phone input
import 'react-phone-number-input/style.css';

const RegistrationForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCompetitionType, setSelectedCompetitionType] = useState<string>("");
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema(selectedCountry)),
    defaultValues: {
      country: "",
      city: "",
      institution: "",
      teamName: "",
      mentorFullName: "",
      mentorPhone: "",
      mentorEmail: "",
      competitionType: "",
      participants: [{ fullName: "", phone: "", telegram: "" }]
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "participants",
    control: form.control
  });

  // Handle country change
  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    form.setValue("country", value);
    form.setValue("city", "");
    
    // Reset the validation resolver with the new country
    form.clearErrors();
  };

  // Handle competition type change
  const handleCompetitionTypeChange = (value: string) => {
    setSelectedCompetitionType(value);
    form.setValue("competitionType", value);
    
    // Find the selected competition type
    const competition = competitionTypes.find(type => type.id === value);
    
    if (competition) {
      // Get the required number of competitors
      const requiredCompetitors = competition.competitors;
      const currentParticipants = [...fields];
      
      // If we need to add participants
      if (currentParticipants.length < requiredCompetitors) {
        // Add necessary number of empty participants
        const participantsToAdd = requiredCompetitors - currentParticipants.length;
        const newParticipants = Array(participantsToAdd).fill({ fullName: "", phone: "", telegram: "" });
        
        // Use form.setValue to update all participants at once instead of using append multiple times
        const updatedParticipants = [...currentParticipants, ...newParticipants];
        form.setValue("participants", updatedParticipants);
      } 
      // If we need to remove participants
      else if (currentParticipants.length > requiredCompetitors) {
        // For Drone Soccer, keep at least 5 but no more than 6
        const targetCount = value === "drone-soccer" ? 
          6 : requiredCompetitors;
        
        // Use setValue to update all participants at once
        const updatedParticipants = currentParticipants.slice(0, targetCount);
        form.setValue("participants", updatedParticipants);
      }
    }
  };

  async function onSubmit(data: any) {
    // Check minimum required competitors for drone soccer
    if (data.competitionType === "drone-soccer") {
      const validParticipants = data.participants.filter(p => 
        p.fullName.trim() !== "" && p.phone.trim() !== "" && p.telegram.trim() !== ""
      );
      
      if (validParticipants.length < 5) {
        toast({
          title: "Validation Error",
          description: "Drone Soccer requires at least 5 competitors.",
          variant: "destructive"
        });
        return;
      }
    }

    try {
      // Here we would typically send the data to Google Sheets
      // For now, let's just log it and show a success message
      console.log("Form submitted:", data);
      
      toast({
        title: "Registration Submitted",
        description: "Thank you for registering! Your data has been recorded.",
      });
      
      // Log message about Google Sheets integration
      console.log("Note: Data would be sent to Google Sheets in a production environment");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your registration. Please try again.",
        variant: "destructive"
      });
    }
  }

  // Get the selected competition type details
  const selectedCompetition = competitionTypes.find(t => t.id === selectedCompetitionType);

  // This update ensures the fields array is synchronized with the form state
  useEffect(() => {
    if (selectedCompetitionType) {
      const competition = competitionTypes.find(type => type.id === selectedCompetitionType);
      if (competition) {
        // Force re-render of fields by refreshing the form
        form.setValue('participants', form.getValues('participants'));
      }
    }
  }, [selectedCompetitionType, form]);

  // Effect to update resolver when country changes
  useEffect(() => {
    if (selectedCountry) {
      form.clearErrors();
    }
  }, [selectedCountry, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <style jsx>{`
          /* Custom styles for phone input */
          .phone-input-container .PhoneInputCountry {
            margin-right: 0.5rem;
          }
          
          .phone-input {
            border: none !important;
            padding: 0 !important;
          }
          
          .phone-input-container {
            display: flex;
            width: 100%;
            border-radius: 0.375rem;
            border: 1px solid hsl(var(--input));
            background-color: hsl(var(--background));
            padding: 0.5rem 0.75rem;
          }
          
          .phone-input-container:focus-within {
            outline: 2px solid hsl(var(--ring));
            outline-offset: 2px;
          }
        `}</style>

        <BasicInfoFields 
          form={form} 
          selectedCountry={selectedCountry} 
          onCountryChange={handleCountryChange} 
        />
        
        <MentorFields 
          form={form} 
          selectedCountry={selectedCountry} 
        />
        
        <CompetitionTypeField 
          form={form} 
          onCompetitionTypeChange={handleCompetitionTypeChange} 
        />

        {selectedCompetition && (
          <>
            <h3 className="text-xl font-semibold border-b pb-2">Participants Information</h3>
            
            {/* Here we're using the fields from useFieldArray which will reflect the current state */}
            {fields.map((field, index) => (
              <ParticipantFields
                key={field.id}
                index={index}
                form={form}
                selectedCountry={selectedCountry}
                canRemove={false} // Remove ability to remove participants
                onRemove={() => {}} // Empty function since we don't allow removal
                isOptional={selectedCompetition.id === "drone-soccer" && index === 5} // 6th participant (index 5) is optional for drone soccer
              />
            ))}
          </>
        )}
        
        <Button type="submit" className="w-full">Submit Registration</Button>
      </form>
    </Form>
  );
};

export default RegistrationForm;
