
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
  // Format phone number as user types
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    const value = e.target.value;
    const formattedValue = formatPhoneNumber(value, selectedCountry);
    onChange(formattedValue);
  };

  return (
    <div className="space-y-6 p-4 border rounded-md">
      <h4 className="font-medium">Participant {index + 1}</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Participant Full Name */}
        <FormField
          control={form.control}
          name={`participants.${index}.fullName`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
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
              <FormLabel>Phone Number</FormLabel>
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

      {/* Participant Telegram */}
      <FormField
        control={form.control}
        name={`participants.${index}.telegram`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telegram</FormLabel>
            <FormControl>
              <Input placeholder="@username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {/* Remove participant button (only shown when allowed) */}
      {canRemove && (
        <Button 
          type="button" 
          variant="outline" 
          onClick={onRemove}
          className="w-full mt-2"
        >
          Remove Participant
        </Button>
      )}
    </div>
  );
};

export default ParticipantFields;
