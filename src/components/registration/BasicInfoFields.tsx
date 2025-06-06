
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries, citiesByCountry } from "./utils";
import { FormValues } from "./schema";
import { useTranslation } from "@/hooks/useTranslation";

interface BasicInfoFieldsProps {
  form: UseFormReturn<FormValues>;
  selectedCountry: string;
  onCountryChange: (value: string) => void;
}

const BasicInfoFields = ({ 
  form, 
  selectedCountry, 
  onCountryChange 
}: BasicInfoFieldsProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Country Selection */}
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('country')}</FormLabel>
              <Select 
                onValueChange={(value) => onCountryChange(value)}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t('selectCountry')} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* City Selection */}
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('city')}</FormLabel>
              <Select 
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={!selectedCountry}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t('selectCity')} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {selectedCountry && 
                    citiesByCountry[selectedCountry]?.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Institution */}
        <FormField
          control={form.control}
          name="institution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('institution')}</FormLabel>
              <FormControl>
                <Input placeholder={t('enterInstitution')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Team Name */}
        <FormField
          control={form.control}
          name="teamName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('teamName')}</FormLabel>
              <FormControl>
                <Input placeholder={t('enterTeamName')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default BasicInfoFields;
