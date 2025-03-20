
import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LanguageSelectorProps {
  isScrolled?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isScrolled = false }) => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  
  const languages = [
    { code: 'en', name: t('english'), flag: '🇬🇧' },
    { code: 'kk', name: t('kazakh'), flag: '🇰🇿' },
    { code: 'ru', name: t('russian'), flag: '🇷🇺' },
    { code: 'ar', name: t('arabic'), flag: '🇸🇦' }
  ];
  
  // Find current language flag
  const currentFlag = languages.find(lang => lang.code === language)?.flag || '🌐';

  // Text color based on scroll position
  const textColor = isScrolled ? 'text-foreground' : 'text-white';
  
  return (
    <div className="relative z-50">
      <Select 
        value={language} 
        onValueChange={(value) => setLanguage(value as Language)}
      >
        <SelectTrigger 
          className={cn(
            "w-[60px] sm:w-[130px] bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20",
            textColor
          )}
        >
          <SelectValue>
            <div className="flex items-center">
              <span className="text-lg mr-2">{currentFlag}</span>
              <span className="hidden sm:inline">{t('language')}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <div className="flex items-center">
                <span className="text-lg mr-2">{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
