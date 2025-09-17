import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../utils/translate';
import { Link } from 'react-router-dom';

// Styled components for consistent policy page styling
const PolicyContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1.5rem;
  font-family: 'Poppins', sans-serif;
`;

const PolicyHeader = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1rem;
`;

const PolicyTitle = styled.h1`
  font-size: 2rem;
  color: #d32f2f;
  margin-bottom: 0.5rem;
`;

const PolicyDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const PolicySection = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  border-left: 4px solid #d32f2f;
  padding-left: 1rem;
`;

const SectionContent = styled.div`
  font-size: 1rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const ContactSection = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
`;

const ContactTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: #d32f2f;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  return (
    <PolicyContainer>
      <PolicyHeader>
        <PolicyTitle>{t('footer.legal.privacyPolicy')}</PolicyTitle>
        <PolicyDescription>
          This Privacy Policy describes how RK Crackers collects, uses, and shares your personal information when you visit our website, make purchases, or interact with us.
        </PolicyDescription>
      </PolicyHeader>

      <PolicySection>
        <SectionTitle>Information We Collect</SectionTitle>
        <SectionContent>
          <p>We collect information you provide directly to us when you:</p>
          <ul>
            <li>Create an account or place an order</li>
            <li>Contact our customer service</li>
            <li>Sign up for our newsletter</li>
            <li>Participate in surveys, contests, or promotions</li>
          </ul>
          <p>This information may include your name, email address, phone number, billing and shipping address, payment information, and any other information you choose to provide.</p>
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>Automatically Collected Information</SectionTitle>
        <SectionContent>
          <p>When you visit our website, we automatically collect certain information about your device, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Time and date of your visit</li>
            <li>Pages you view</li>
            <li>Links you click</li>
            <li>Items you add to your cart</li>
          </ul>
          <p>We may also use cookies, web beacons, and similar technologies to collect information about your browsing behavior.</p>
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>How We Use Your Information</SectionTitle>
        <SectionContent>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders, products, and services</li>
            <li>Provide customer support</li>
            <li>Send you marketing communications (if you've opted in)</li>
            <li>Improve our website and products</li>
            <li>Detect and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>Information Sharing</SectionTitle>
        <SectionContent>
          <p>We may share your personal information with:</p>
          <ul>
            <li>Service providers who help us operate our business (payment processors, shipping companies, etc.)</li>
            <li>Professional advisors (lawyers, accountants, etc.)</li>
            <li>Government authorities when required by law</li>
            <li>In connection with a business transfer (merger, acquisition, etc.)</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>Data Security</SectionTitle>
        <SectionContent>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or alteration. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>Your Rights</SectionTitle>
        <SectionContent>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your information</li>
            <li>Restriction of processing</li>
            <li>Data portability</li>
            <li>Objection to processing</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided below.</p>
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>Children's Privacy</SectionTitle>
        <SectionContent>
          <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.</p>
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>Changes to This Privacy Policy</SectionTitle>
        <SectionContent>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
        </SectionContent>
      </PolicySection>

      <ContactSection>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactInfo>If you have any questions about our Privacy Policy, please contact us:</ContactInfo>
        <ContactInfo>Email: privacy@rkcrackers.com</ContactInfo>
        <ContactInfo>Phone: +91 98765 43210</ContactInfo>
        <ContactInfo>Address: 123 Fireworks Street, Sivakasi, Tamil Nadu, India</ContactInfo>
        <ContactInfo>
          Visit our <StyledLink to="/contact">Contact Page</StyledLink> for more ways to reach us.
        </ContactInfo>
      </ContactSection>
    </PolicyContainer>
  );
};

export default PrivacyPolicyPage;