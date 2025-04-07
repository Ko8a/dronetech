
import { Language } from '../contexts/LanguageContext';
import { enTranslations } from './en';
import { kkTranslations } from './kk';
import { ruTranslations } from './ru';
import { arTranslations } from './ar';
import { TranslationKey } from './types';

export const translations = {
  en: enTranslations,
  kk: kkTranslations,
  ru: ruTranslations,
  ar: arTranslations
};

export const getTranslation = (language: Language, key: string): string => {
  if (!translations[language]) return translations.en[key as TranslationKey] || key;
  return translations[language][key as TranslationKey] || translations.en[key as TranslationKey] || key;
};
