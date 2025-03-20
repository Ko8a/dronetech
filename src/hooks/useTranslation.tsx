
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: string, params?: Record<string, string>): string => {
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
