
import React, { useState, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  AlertDialog,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import { useTranslation } from "@/hooks/useTranslation";

// Import our components and utilities
import { formSchema, FormValues } from './registration/schema';
import { competitionTypes } from './registration/utils';
import BasicInfoFields from './registration/BasicInfoFields';
import MentorFields from './registration/MentorFields';
import CompetitionTypeField from './registration/CompetitionTypeField';
import ParticipantFields from './registration/ParticipantFields';
import RegistrationSuccess from './registration/RegistrationSuccess';

const RegistrationForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCompetitionType, setSelectedCompetitionType] = useState<string>("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
      city: "",
      institution: "",
      teamName: "",
      mentorFullName: "",
      mentorPhone: "+",
      mentorEmail: "",
      competitionType: "",
      participants: [{ fullName: "", phone: "+", telegram: "" }]
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
        const newParticipants = Array(participantsToAdd).fill({ fullName: "", phone: "+", telegram: "" });
        
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
          title: t('validationError'),
          description: `${data.competitionType} ${t('minParticipants')}`,
          variant: "destructive"
        });
        return;
      }
    }

    try {
      await saveRegistrationRecord(data);
      
      // Show success dialog instead of toast
      setShowSuccessDialog(true);
      
      // Reset the form
      form.reset({
        country: "",
        city: "",
        institution: "",
        teamName: "",
        mentorFullName: "",
        mentorPhone: "+",
        mentorEmail: "",
        competitionType: "",
        participants: [{ fullName: "", phone: "+", telegram: "" }]
      });
      setSelectedCountry("");
      setSelectedCompetitionType("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: t('submissionError'),
        description: t('submissionErrorDescription'),
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
    <>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">{t('registrationForm')}</h2>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <h3 className="text-xl font-semibold border-b pb-2">{t('basicInfo')}</h3>
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
                <h3 className="text-xl font-semibold border-b pb-2">{t('participantsInfo')}</h3>
                
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
                        append({ fullName: "", phone: "+", telegram: "" });
                      }
                    }}
                  >
                    {t('addParticipant')}
                  </Button>
                )}
              </>
            )}
            
            <Button type="submit" className="w-full">{t('submit')}</Button>
          </form>
        </Form>
      </div>

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="sm:max-w-md">
          <RegistrationSuccess onClose={() => setShowSuccessDialog(false)} />
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default RegistrationForm;
