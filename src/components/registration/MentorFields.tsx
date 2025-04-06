
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

interface MentorFieldsProps {
  form: UseFormReturn<FormValues>;
  selectedCountry: string;
}

const MentorFields = ({ form, selectedCountry }: MentorFieldsProps) => {
  // Format phone number as user types
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    const value = e.target.value;
    const formattedValue = formatPhoneNumber(value, selectedCountry);
    onChange(formattedValue);
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
                <Input 
                  placeholder={selectedCountry === "Kazakhstan" ? "+7-(7XX)-XXX-XX-XX" : "+X-(XXX)-XXX-XX-XX"} 
                  onChange={(e) => handlePhoneChange(e, field.onChange)}
                  value={field.value}
                  onBlur={field.onBlur}
                  name={field.name}
                />
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
