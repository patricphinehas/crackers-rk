import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DisclaimersPage = () => {

  return (
    <PageContainer>
      <PageHeader>
        <h1>Disclaimers</h1>
        <Breadcrumb>
          <Link to="/">Home</Link> / Disclaimers
        </Breadcrumb>
      </PageHeader>

      <PolicySection>
        <h2>Product Disclaimers</h2>
        <p>
          Please read the following disclaimers carefully before purchasing or using any products from our fireworks store.
        </p>

        <PolicyBlock>
          <h3>General Product Disclaimer</h3>
          <p>
            Fireworks are inherently dangerous products that contain explosive materials and are designed to burn, emit sounds, 
            and create visual effects. Our company provides these products for entertainment purposes only, with the understanding 
            that the user accepts all risks associated with their use.
          </p>
          <p>
            By purchasing our products, you acknowledge that you have read, understood, and agree to follow all safety 
            guidelines, instructions, and applicable laws regarding fireworks use in your area.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Safety Disclaimer</h3>
          <p>
            Our company cannot guarantee the safety of individuals using our products. The safe use of fireworks depends 
            entirely on proper handling, storage, and usage according to instructions. Misuse of fireworks can result in 
            serious injury, death, or property damage.
          </p>
          <p>
            We strongly recommend that all users:
          </p>
          <ul>
            <li>Read and follow all product instructions before use</li>
            <li>Never allow children to handle fireworks without adult supervision</li>
            <li>Use fireworks only in open areas away from buildings, vehicles, and flammable materials</li>
            <li>Keep a bucket of water or fire extinguisher nearby when using fireworks</li>
            <li>Never attempt to modify, disassemble, or repackage fireworks</li>
            <li>Never use fireworks while under the influence of alcohol or drugs</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Product Variation Disclaimer</h3>
          <p>
            Due to the nature of fireworks manufacturing and the materials used:
          </p>
          <ul>
            <li>The color, intensity, duration, and effects of fireworks may vary from batch to batch</li>
            <li>Product images on our website are representative only and the actual product may differ slightly</li>
            <li>Performance may be affected by environmental conditions such as humidity, wind, and temperature</li>
            <li>Weight and dimensions listed are approximate and may vary slightly</li>
          </ul>
          <p>
            These variations are normal and do not constitute a defect in the product.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Legal Compliance Disclaimer</h3>
          <p>
            Fireworks regulations vary by location. It is the buyer's responsibility to:
          </p>
          <ul>
            <li>Verify that the purchase, possession, and use of fireworks is legal in their area</li>
            <li>Obtain any necessary permits or licenses required for fireworks use</li>
            <li>Comply with all local, state, and national laws regarding fireworks</li>
            <li>Adhere to seasonal restrictions or bans that may be in place</li>
          </ul>
          <p>
            Our company is not responsible for any legal consequences resulting from the illegal purchase or use of our products.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Health Risk Disclaimer</h3>
          <p>
            Fireworks produce smoke, noise, and light effects that may pose risks to certain individuals. Our products should not be used by or near:
          </p>
          <ul>
            <li>Individuals with respiratory conditions such as asthma</li>
            <li>Individuals with heart conditions or anxiety disorders</li>
            <li>Individuals sensitive to loud noises or bright flashes</li>
            <li>Pets or wildlife that may be frightened by fireworks</li>
            <li>Individuals with photosensitive epilepsy or similar conditions</li>
          </ul>
          <p>
            Pregnant women should consult with a healthcare provider before being in proximity to fireworks displays.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, our company disclaims all liability for any injuries, damages, or losses 
            of any kind (including but not limited to direct, indirect, incidental, consequential, or punitive damages) arising 
            from the purchase, possession, or use of our products.
          </p>
          <p>
            Our maximum liability shall not exceed the purchase price of the specific product(s) that caused the alleged damage or injury.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Storage Disclaimer</h3>
          <p>
            Proper storage of fireworks is essential for safety and product performance. Our company is not responsible for 
            product failure, accidents, or injuries resulting from improper storage. All fireworks should be:
          </p>
          <ul>
            <li>Stored in a cool, dry place away from direct sunlight</li>
            <li>Kept away from heat sources, open flames, and electrical equipment</li>
            <li>Stored out of reach of children and pets</li>
            <li>Kept in their original packaging until ready for use</li>
            <li>Not stored for extended periods (over one year)</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Contact Information</h3>
          <p>
            If you have any questions about these disclaimers, please contact our customer service team:
          </p>
          <ContactInfo>
            <p><strong>Email:</strong> info@premiumcrackers.com</p>
            <p><strong>Phone:</strong> +91 8144 182 182</p>
            <p><strong>Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM IST</p>
          </ContactInfo>
        </PolicyBlock>
      </PolicySection>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    color: var(--primary-color-3);
    margin-bottom: 0.5rem;
  }
`;

const Breadcrumb = styled.div`
  font-size: 0.9rem;
  color: #777;
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const PolicySection = styled.section`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  h2 {
    color: var(--primary-color-3);
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }
  
  > p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: #555;
  }
`;

const PolicyBlock = styled.div`
  margin-bottom: 2.5rem;
  
  h3 {
    color: var(--primary-color-2);
    margin-bottom: 1rem;
    font-size: 1.4rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: #444;
  }
  
  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    
    li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
      color: #444;
    }
  }
`;

const ContactInfo = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 6px;
  margin-top: 1rem;
  
  p {
    margin-bottom: 0.5rem;
  }
`;

export default DisclaimersPage;