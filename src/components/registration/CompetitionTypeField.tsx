
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
import { useTranslation } from "@/hooks/useTranslation";

interface CompetitionTypeFieldProps {
  form: UseFormReturn<FormValues>;
  onCompetitionTypeChange: (value: string) => void;
}

const CompetitionTypeField = ({ 
  form, 
  onCompetitionTypeChange 
}: CompetitionTypeFieldProps) => {
  const { t } = useTranslation();
  
  return (
    <FormField
      control={form.control}
      name="competitionType"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t('competitionType')}</FormLabel>
          <Select 
            onValueChange={(value) => {
              field.onChange(value);
              onCompetitionTypeChange(value);
            }}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={t('selectCompetitionType')} />
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
