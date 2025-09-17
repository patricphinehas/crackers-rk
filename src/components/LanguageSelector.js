import React from 'react';
import styled from 'styled-components';
import { useLanguage, languages } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  // Language options with labels
  const languageOptions = [
    { code: languages.ENGLISH, label: 'English' },
    { code: languages.TAMIL, label: 'தமிழ்' }
  ];

  return (
    <SelectorContainer>
      {languageOptions.map((lang) => (
        <LanguageButton 
          key={lang.code}
          active={(currentLanguage === lang.code).toString()}
          onClick={() => changeLanguage(lang.code)}
        >
          {lang.label}
        </LanguageButton>
      ))}
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const LanguageButton = styled.button`
  background: ${props => props.active === 'true' ? 'var(--primary-color-3)' : 'transparent'};
  color: ${props => props.active === 'true' ? 'white' : 'var(--primary-color-3)'};
  border: 1px solid var(--primary-color-3);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  margin: 0 0.25rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active === 'true' ? 'var(--primary-color-3)' : 'rgba(0, 0, 0, 0.05)'};
  }
`;

export default LanguageSelector;