import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from '../utils/translate';

const FooterContainer = styled.footer`
  background-color: #263238;
  color: #fff;
  padding: 50px 0 20px;
`;

const FooterContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 0 20px;
`;

const FooterColumn = styled.div`
  h3 {
    color: var(--primary-color-2);
    margin-bottom: 20px;
    font-size: 18px;
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: #f5f5f5;
  margin-bottom: 10px;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  
  span {
    margin-left: 10px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: var(--primary-color);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #aaa;
  font-size: 14px;
`;

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h3>{t('footer.contactUs')}</h3>
          <ContactInfo>
            <span>📍</span>
            <span>{t('footer.address')}</span>
          </ContactInfo>
          <ContactInfo>
            <span>📞</span>
            <span>{t('footer.phone')}</span>
          </ContactInfo>
          <ContactInfo>
            <span>✉️</span>
            <span>{t('footer.email')}</span>
          </ContactInfo>
          <SocialIcons>
            <a href="https://facebook.com" aria-label="Facebook">f</a>
            <a href="https://twitter.com" aria-label="Twitter">t</a>
            <a href="https://instagram.com" aria-label="Instagram">i</a>
            <a href="https://youtube.com" aria-label="YouTube">y</a>
          </SocialIcons>
        </FooterColumn>
        
        <FooterColumn>
          <h3>{t('footer.quickLinks.title')}</h3>
          <FooterLink to="/">{t('footer.quickLinks.home')}</FooterLink>
          <FooterLink to="/categories">{t('footer.quickLinks.categories')}</FooterLink>
          <FooterLink to="/new-arrivals">{t('footer.quickLinks.newArrivals')}</FooterLink>
          <FooterLink to="/best-sellers">{t('footer.quickLinks.bestSellers')}</FooterLink>
          <FooterLink to="/offers">{t('footer.quickLinks.offers')}</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <h3>{t('footer.customerService.title')}</h3>
          <FooterLink to="/faq">{t('footer.customerService.faq')}</FooterLink>
          <FooterLink to="/shipping">{t('footer.customerService.shipping')}</FooterLink>
          <FooterLink to="/returns">{t('footer.customerService.returns')}</FooterLink>
          <FooterLink to="/contact">{t('footer.customerService.contact')}</FooterLink>
          <FooterLink to="/bulk-orders">{t('footer.customerService.bulkOrders')}</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <h3>{t('footer.legal.title')}</h3>
          <FooterLink to="/disclaimers">{t('footer.legal.disclaimers')}</FooterLink>
          <FooterLink to="/terms">{t('footer.legal.terms')}</FooterLink>
          <FooterLink to="/privacy">{t('footer.legal.privacy')}</FooterLink>
          <FooterLink to="/safety">{t('footer.legal.safetyGuidelines')}</FooterLink>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;