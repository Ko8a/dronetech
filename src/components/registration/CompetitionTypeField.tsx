
import React from 'react';
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { competitionTypes } from "./utils";
import { FormValues } from "./schema";

interface CompetitionTypeFieldProps {
  form: UseFormReturn<FormValues>;
  onCompetitionTypeChange: (value: string) => void;
}

const CompetitionTypeField = ({ 
  form, 
  onCompetitionTypeChange 
}: CompetitionTypeFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="competitionType"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Competition Type</FormLabel>
          <Select 
            onValueChange={(value) => onCompetitionTypeChange(value)}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select competition type" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {competitionTypes.map((type) => (
                <SelectItem key={type.id} value={type.id}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CompetitionTypeField;
