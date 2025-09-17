import translations from '../translations';
import { useLanguage } from '../context/LanguageContext';

// Function to get translation with variable replacement
export const getTranslation = (key, variables = {}, language = 'en') => {
  // Get the translations for the specified language
  const languageTranslations = translations[language] || translations.en;
  
  // Get the translation string
  let translationString = languageTranslations[key] || key;
  
  // Replace variables in the translation string
  Object.entries(variables).forEach(([varName, varValue]) => {
    translationString = translationString.replace(`{${varName}}`, varValue);
  });
  
  return translationString;
};

// React hook to use translations in components
export const useTranslation = () => {
  const { currentLanguage } = useLanguage();
  
  const t = (key, variables = {}) => {
    return getTranslation(key, variables, currentLanguage);
  };
  
  return { t };
};