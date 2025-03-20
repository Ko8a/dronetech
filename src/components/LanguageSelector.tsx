
import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  
  const languages = [
    { code: 'en', name: t('english') },
    { code: 'kk', name: t('kazakh') },
    { code: 'ru', name: t('russian') },
    { code: 'ar', name: t('arabic') }
  ];
  
  return (
    <div className="relative z-50">
      <Select 
        value={language} 
        onValueChange={(value) => setLanguage(value as Language)}
      >
        <SelectTrigger className="w-[130px] bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
          <SelectValue placeholder={t('language')} />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
