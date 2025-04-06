
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
import type { CountryCode } from 'libphonenumber-js';

interface ParticipantFieldsProps {
  index: number;
  form: UseFormReturn<FormValues>;
  selectedCountry: string;
  canRemove: boolean;
  onRemove: () => void;
  isOptional?: boolean;
}

const ParticipantFields = ({ 
  index, 
  form, 
  selectedCountry, 
  isOptional = false
}: ParticipantFieldsProps) => {
  // Get country code for default selection
  const getCountryCode = (country: string): CountryCode | undefined => {
    const countryMap: Record<string, CountryCode> = {
      "Kazakhstan": "KZ",
      "Russia": "RU",
      "Kyrgyzstan": "KG",
      "Uzbekistan": "UZ",
      "Tajikistan": "TJ",
      "China": "CN"
    };
    return countryMap[country];
  };

  return (
    <div className={`space-y-6 p-4 border rounded-md ${isOptional ? 'border-dashed' : ''}`}>
      <h4 className="font-medium">
        {isOptional ? `Participant ${index + 1} (Optional)` : `Participant ${index + 1}`}
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Participant Full Name */}
        <FormField
          control={form.control}
          name={`participants.${index}.fullName`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{isOptional ? "Full Name (Optional)" : "Full Name"}</FormLabel>
              <FormControl>
                <Input placeholder="Enter participant's full name" {...field} />
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
              <FormLabel>{isOptional ? "Phone Number (Optional)" : "Phone Number"}</FormLabel>
              <FormControl>
                <div className="phone-input-container">
                  <PhoneInput
                    international
                    defaultCountry={getCountryCode(selectedCountry)}
                    value={field.value}
                    onChange={field.onChange}
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

      {/* Participant Telegram */}
      <FormField
        control={form.control}
        name={`participants.${index}.telegram`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{isOptional ? "Telegram (Optional)" : "Telegram"}</FormLabel>
            <FormControl>
              <Input placeholder="@username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ParticipantFields;
