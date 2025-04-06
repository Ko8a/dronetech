
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
import { FormValues } from "./schema";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { getCountryCode, getPhoneMaxLength } from './utils';

interface MentorFieldsProps {
  form: UseFormReturn<FormValues>;
  selectedCountry: string;
}

const MentorFields = ({ form, selectedCountry }: MentorFieldsProps) => {
  // Handle phone number input to limit length
  const handlePhoneChange = (value: string) => {
    // Get max length based on selected country
    const maxLength = getPhoneMaxLength(selectedCountry);
    
    // Limit to country-specific length
    if (value && value.length > maxLength) {
      return;
    }
    form.setValue("mentorPhone", value || "");
  };

  return (
    <>
      <h3 className="text-xl font-semibold border-b pb-2">Mentor Information</h3>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mentor Full Name */}
        <FormField
          control={form.control}
          name="mentorFullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mentor Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter mentor's full name" {...field} />
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
              <FormLabel>Mentor Phone</FormLabel>
              <FormControl>
                <div className="phone-input-container">
                  <PhoneInput
                    international
                    defaultCountry={getCountryCode(selectedCountry) as any}
                    value={field.value}
                    onChange={handlePhoneChange}
                    onBlur={field.onBlur}
                    countries={["KZ", "RU", "KG", "UZ", "TJ", "CN"]}
                    className="phone-input flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
              </FormControl>
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
            <FormLabel>Mentor Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Enter mentor's email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default MentorFields;
