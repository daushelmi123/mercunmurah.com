
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations } from '@/types/language';

type TranslationKey = keyof typeof translations | `festivals.${keyof typeof translations.festivals}`;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: TranslationKey): string => {
    if (key.startsWith('festivals.')) {
      const festivalKey = key.replace('festivals.', '') as keyof typeof translations.festivals;
      return translations.festivals[festivalKey][language];
    }
    return translations[key as keyof typeof translations][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
