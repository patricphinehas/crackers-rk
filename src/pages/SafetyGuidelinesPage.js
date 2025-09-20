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

const ImportantNote = styled.div`
  background-color: #fff8e1;
  border-left: 4px solid #ffc107;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
`;

const WarningNote = styled.div`
  background-color: #ffebee;
  border-left: 4px solid #f44336;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
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

const SafetyGuidelinesPage = () => {
  const { t } = useTranslation();

  return (
    <PolicyContainer>
      <PolicyHeader>
        <PolicyTitle>{t('footer.legal.safetyGuidelines')}</PolicyTitle>
        <PolicyDescription>
          Your safety is our top priority. Please read and follow these safety guidelines carefully when handling and using our fireworks products.
        </PolicyDescription>
      </PolicyHeader>

      <WarningNote>
        <strong>IMPORTANT SAFETY WARNING:</strong> Fireworks are explosive devices that can cause serious injury or death if misused. Always follow all safety instructions and local regulations. Keep fireworks away from children and never allow them to handle fireworks without adult supervision.
      </WarningNote>

      <PolicySection>
        <SectionTitle>General Safety Rules</SectionTitle>
        <SectionContent>
          <ol>
            <li>Always read and follow all instructions and warning labels on fireworks packages before use.</li>
            <li>Only adults should handle and light fireworks. Never allow children to handle or ignite fireworks.</li>
            <li>Use fireworks outdoors only, away from buildings, vehicles, and flammable materials.</li>
            <li>Keep a bucket of water, garden hose, or fire extinguisher nearby for emergencies.</li>
            <li>Wear eye protection when lighting fireworks.</li>
            <li>Never carry fireworks in your pocket or shoot them from metal or glass containers.</li>
            <li>Never attempt to re-light or pick up fireworks that have not fully functioned.</li>
            <li>After fireworks complete their burning, douse them with plenty of water before discarding.</li>
            <li>Never consume alcohol or drugs when handling fireworks.</li>
          </ol>
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>Before Using Fireworks</SectionTitle>
        <SectionContent>
          <ul>
            <li>Check local laws and regulations regarding fireworks use in your area.</li>
            <li>Choose a flat, open area free from obstructions, dry leaves, and grass.</li>
            <li>Keep spectators at a safe distance, at least 25-30 feet away from ground-based items.</li>
            <li>Ensure all pets are kept indoors as they may be frightened by the noise.</li>
            <li>Have a designated shooter who remains sober and responsible for handling fireworks.</li>
            <li>Inspect all fireworks before use. Do not use damaged or wet fireworks.</li>
          </ul>
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>Lighting Fireworks</SectionTitle>
        <SectionContent>
          <ol>
            <li>Light one firework at a time, then quickly move back to a safe distance.</li>
            <li>Never place any part of your body directly over a firework when lighting the fuse.</li>
            <li>Use a long-handled lighter or a punk stick to light fireworks.</li>
            <li>Never point or throw fireworks at another person, animal, or building.</li>
            <li>Keep your face and body away from fireworks when lighting them.</li>
            <li>Never attempt to alter, modify, or repackage fireworks.</li>
          </ol>
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>Specific Product Guidelines</SectionTitle>
        <SectionContent>
          <h3>Sparklers</h3>
          <ul>
            <li>Sparklers burn at temperatures of about 2,000 degrees - hot enough to melt some metals.</li>
            <li>Always hold sparklers at arm's length and away from your body.</li>
            <li>Never run while holding sparklers.</li>
            <li>Drop spent sparklers in a bucket of water.</li>
            <li>Children under 5 should not handle sparklers.</li>
          </ul>

          <h3>Ground-Based Items (Fountains, Ground Spinners)</h3>
          <ul>
            <li>Place on level ground to prevent tipping.</li>
            <li>Maintain a minimum distance of 25 feet from spectators.</li>
            <li>Secure items properly before lighting.</li>
          </ul>

          <h3>Aerial Items</h3>
          <ul>
            <li>Maintain a minimum distance of 40 feet from spectators.</li>
            <li>Never lean over the device when lighting.</li>
            <li>Ensure the launch tube is secure and properly positioned.</li>
            <li>Never attempt to relight a "dud" aerial device.</li>
          </ul>
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>In Case of Emergency</SectionTitle>
        <SectionContent>
          <h3>Burns</h3>
          <ul>
            <li>Cool the burn with cool (not cold) running water for 10-15 minutes.</li>
            <li>Do not apply ice directly to the burn.</li>
            <li>Remove jewelry or tight items from the burned area.</li>
            <li>Cover with a clean, dry cloth.</li>
            <li>Seek medical attention for serious burns.</li>
          </ul>

          <h3>Eye Injuries</h3>
          <ul>
            <li>Do not rub or rinse the eye.</li>
            <li>Do not apply pressure or remove any objects stuck in the eye.</li>
            <li>Seek immediate medical attention.</li>
          </ul>

          <ImportantNote>
            <strong>Emergency Contact Numbers:</strong>
            <ul>
              <li>Fire Department: 101</li>
              <li>Ambulance: 108</li>
              <li>Police: 100</li>
              <li>National Emergency Number: 112</li>
            </ul>
          </ImportantNote>
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>Storage and Disposal</SectionTitle>
        <SectionContent>
          <h3>Storage</h3>
          <ul>
            <li>Store fireworks in a cool, dry place away from heat sources.</li>
            <li>Keep fireworks in their original packaging until ready to use.</li>
            <li>Store fireworks out of reach of children and pets.</li>
            <li>Never store fireworks in your pocket or near flammable materials.</li>
          </ul>

          <h3>Disposal</h3>
          <ul>
            <li>Soak used and unused fireworks in water for several hours before disposal.</li>
            <li>Wrap soaked fireworks in plastic wrap or a plastic bag, then place in regular trash.</li>
            <li>Never put fireworks in a fire or attempt to relight "dud" fireworks.</li>
            <li>Contact local fire department for guidance on disposing of large quantities of fireworks.</li>
          </ul>
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>Legal Compliance</SectionTitle>
        <SectionContent>
          <p>Users of our products are responsible for complying with all local, state, and national laws regarding the purchase, possession, and use of fireworks. Regulations vary widely by location, and it is your responsibility to be aware of and follow the laws in your area.</p>
          <p>Failure to comply with applicable laws may result in fines, confiscation of products, or criminal charges.</p>
        </SectionContent>
      </PolicySection>

      <ContactSection>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactInfo>If you have any questions about our Safety Guidelines, please contact us:</ContactInfo>
        <ContactInfo>Email: safety@premiumcrackers.com</ContactInfo>
        <ContactInfo>Phone: +91 98765 43210</ContactInfo>
        <ContactInfo>Address: 123 Fireworks Street, Sivakasi, Tamil Nadu, India</ContactInfo>
        <ContactInfo>
          Visit our <StyledLink to="/contact">Contact Page</StyledLink> for more ways to reach us.
        </ContactInfo>
      </ContactSection>
    </PolicyContainer>
  );
};

export default SafetyGuidelinesPage;