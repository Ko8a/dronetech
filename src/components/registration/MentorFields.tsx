
import React from 'react';
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
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

interface MentorFieldsProps {
  form: UseFormReturn<FormValues>;
  selectedCountry: string;
}

const MentorFields = ({ form, selectedCountry }: MentorFieldsProps) => {
  const { t } = useTranslation();
  
  // Format phone number as user types
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    const value = e.target.value;
    // Make sure value starts with +
    const formattedValue = value.startsWith('+') ? value : '+' + value;
    // Format according to +X XXX XXX XX XX pattern
    const cleanedValue = formattedValue.replace(/[^\d+]/g, '');
    const result = formatPhoneNumber(cleanedValue, selectedCountry);
    onChange(result);
  };

  return (
    <>
      <h3 className="text-xl font-semibold border-b pb-2">{t('mentorInfo')}</h3>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mentor Full Name */}
        <FormField
          control={form.control}
          name="mentorFullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('mentorFullName')}</FormLabel>
              <FormControl>
                <Input placeholder={t('enterMentorName')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Mentor Phone */}
        <FormField
          control={form.control}
          name="mentorPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('mentorPhone')}</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input 
                    placeholder="+7 XXX XXX XX XX"
                    onChange={(e) => handlePhoneChange(e, field.onChange)}
                    value={field.value || "+"}
                    onBlur={field.onBlur}
                    name={field.name}
                    className="bg-transparent"
                  />
                </FormControl>
                <div className="absolute inset-0 flex items-center pointer-events-none">
                  <span className="text-muted-foreground/30 pl-3 select-none">
                    {!field.value || field.value === "+" ? "+7 XXX XXX XX XX" : ""}
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {t('examplePhoneNumber')}: +7 705 123 45 67
              </p>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Mentor Email */}
      <FormField
        control={form.control}
        name="mentorEmail"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('mentorEmail')}</FormLabel>
            <FormControl>
              <Input type="email" placeholder={t('enterMentorEmail')} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default MentorFields;
