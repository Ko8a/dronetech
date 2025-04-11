
import React from 'react';
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { formatPhoneNumber } from "./utils";
import { FormValues } from "./schema";
import { useTranslation } from "@/hooks/useTranslation";

interface ParticipantFieldsProps {
  index: number;
  form: UseFormReturn<FormValues>;
  selectedCountry: string;
  canRemove: boolean;
  onRemove: () => void;
}

const ParticipantFields = ({ 
  index, 
  form, 
  selectedCountry, 
  canRemove, 
  onRemove 
}: ParticipantFieldsProps) => {
  const { t } = useTranslation();
  
  // Format phone number as user types
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    const value = e.target.value;
    // Make sure value starts with +
    const formattedValue = value.startsWith('+') ? value : '+' + value;
    // Format according to X XXX XXX XX XX pattern
    const cleanedValue = formattedValue.replace(/[^\d+]/g, '');
    const result = formatPhoneNumber(cleanedValue, selectedCountry);
    onChange(result);
  };

  return (
    <div className="space-y-6 p-4 border rounded-md">
      <h4 className="font-medium">{t('participant')} {index + 1}</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Participant Full Name */}
        <FormField
          control={form.control}
          name={`participants.${index}.fullName`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('fullName')}</FormLabel>
              <FormControl>
                <Input placeholder={t('enterParticipantName')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Participant Phone */}
        <FormField
          control={form.control}
          name={`participants.${index}.phone`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('phoneNumber')}</FormLabel>
              <FormControl>
                <Input 
                  placeholder="+X XXX XXX XX XX"
                  onChange={(e) => handlePhoneChange(e, field.onChange)}
                  value={field.value || "+"}
                  onBlur={field.onBlur}
                  name={field.name}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Participant Telegram */}
      <FormField
        control={form.control}
        name={`participants.${index}.telegram`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('telegram')}</FormLabel>
            <FormControl>
              <Input placeholder={t('enterTelegram')} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {/* Only show Remove button when allowed (not for Drone Soccer's first 5 participants) */}
      {canRemove && (
        <Button 
          type="button" 
          variant="outline" 
          onClick={onRemove}
          className="w-full mt-2"
        >
          {t('removeParticipant')}
        </Button>
      )}
    </div>
  );
};

export default ParticipantFields;
