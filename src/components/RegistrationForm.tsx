import React, { useState, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Import our new components and utilities
import { formSchema, FormValues } from './registration/schema';
import { competitionTypes } from './registration/utils';
import BasicInfoFields from './registration/BasicInfoFields';
import MentorFields from './registration/MentorFields';
import CompetitionTypeField from './registration/CompetitionTypeField';
import ParticipantFields from './registration/ParticipantFields';

const RegistrationForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCompetitionType, setSelectedCompetitionType] = useState<string>("");
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
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

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    form.setValue("country", value);
    form.setValue("city", "");
  };

  const handleCompetitionTypeChange = (value: string) => {
    setSelectedCompetitionType(value);
    form.setValue("competitionType", value);
    
    const competition = competitionTypes.find(type => type.id === value);
    
    if (competition) {
      const requiredCompetitors = competition.competitors;
      const currentParticipants = [...fields];
      
      if (currentParticipants.length < requiredCompetitors) {
        const participantsToAdd = requiredCompetitors - currentParticipants.length;
        const newParticipants = Array(participantsToAdd).fill({ fullName: "", phone: "", telegram: "" });
        
        const updatedParticipants = [...currentParticipants, ...newParticipants];
        form.setValue("participants", updatedParticipants);
      } 
      else if (currentParticipants.length > requiredCompetitors) {
        const targetCount = value === "drone-soccer" ? 
          Math.min(Math.max(currentParticipants.length, 5), 6) : 
          requiredCompetitors;
        
        const updatedParticipants = currentParticipants.slice(0, targetCount);
        form.setValue("participants", updatedParticipants);
      }
    }
  };

  const saveRegistrationRecord = async (data: FormValues) => {
    try {
      const { error } = await supabase
        .from('registration_records')
        .insert({
          team_name: data.teamName,
          institution: data.institution,
          country: data.country,
          city: data.city,
          competition_type: data.competitionType,
          mentor_name: data.mentorFullName,
          mentor_phone: data.mentorPhone,
          mentor_email: data.mentorEmail,
          participants: data.participants as any
        });
      
      if (error) {
        console.error("Error inserting registration record:", error);
        throw error;
      }
    } catch (error) {
      console.error("Error saving registration record:", error);
      throw error;
    }
  };

  async function onSubmit(data: FormValues) {
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
      await saveRegistrationRecord(data);
      
      toast({
        title: "Registration Submitted",
        description: "Thank you for registering! Your data has been recorded.",
      });
      
      form.reset();
      setSelectedCountry("");
      setSelectedCompetitionType("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your registration. Please try again.",
        variant: "destructive"
      });
    }
  }

  const selectedCompetition = competitionTypes.find(t => t.id === selectedCompetitionType);

  useEffect(() => {
    if (selectedCompetitionType) {
      const competition = competitionTypes.find(type => type.id === selectedCompetitionType);
      if (competition) {
        form.setValue('participants', form.getValues('participants'));
      }
    }
  }, [selectedCompetitionType, form]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Registration Form</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              
              {fields.map((field, index) => (
                <ParticipantFields
                  key={field.id}
                  index={index}
                  form={form}
                  selectedCountry={selectedCountry}
                  canRemove={selectedCompetition.id === "drone-soccer" ? 
                    (index >= 5 && fields.length > 5) : 
                    fields.length > selectedCompetition.competitors
                  }
                  onRemove={() => remove(index)}
                />
              ))}
              
              {selectedCompetition.id === "drone-soccer" && fields.length < 6 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    if (fields.length < 6) {
                      append({ fullName: "", phone: "", telegram: "" });
                    }
                  }}
                >
                  Add Participant
                </Button>
              )}
            </>
          )}
          
          <Button type="submit" className="w-full">Submit Registration</Button>
        </form>
      </Form>
    </div>
  );
};

export default RegistrationForm;
