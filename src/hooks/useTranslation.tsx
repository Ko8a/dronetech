
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { TranslationKey } from '../translations/types';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: TranslationKey, params?: Record<string, string>): string => {
    let translated = getTranslation(language, key);
    
    // Replace parameters if they exist
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translated = translated.replace(`{{${param}}}`, value);
      });
    }
    
    return translated;
  };
  
  return { t };
};
