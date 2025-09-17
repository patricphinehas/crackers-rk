import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for language
const LanguageContext = createContext();

// Available languages
export const languages = {
  ENGLISH: 'en',
  TAMIL: 'ta'
};

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Get saved language from localStorage or use English as default
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || languages.ENGLISH;
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  // Function to change language
  const changeLanguage = (language) => {
    if (Object.values(languages).includes(language)) {
      setCurrentLanguage(language);
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};