
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
    { code: 'en', name: t('english'), flag: '🇺🇸' },
    { code: 'kk', name: t('kazakh'), flag: '🇰🇿' },
    { code: 'ru', name: t('russian'), flag: '🇷🇺' },
    { code: 'ar', name: t('arabic'), flag: '🇸🇦' }
  ];
  
  // Find current language flag
  const currentFlag = languages.find(lang => lang.code === language)?.flag || '🌐';

  // Background and text color based on scroll position
  const bgColor = isScrolled ? 'bg-secondary/80' : 'bg-black/20';
  const textColor = isScrolled ? 'text-foreground' : 'text-yellow';
  
  return (
    <div className="relative z-50">
      <Select 
        value={language} 
        onValueChange={(value) => setLanguage(value as Language)}
      >
        <SelectTrigger 
          className={cn(
            "w-[60px] backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all",
            bgColor,
            textColor
          )}
        >
          <SelectValue>
            <div className="flex items-center justify-center">
              <span className="text-lg">{currentFlag}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-background text-foreground">
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code} className="text-foreground">
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
