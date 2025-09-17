import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TermsOfServicePage = () => {

  return (
    <PageContainer>
      <PageHeader>
        <h1>Terms of Service</h1>
        <Breadcrumb>
          <Link to="/">Home</Link> / Terms of Service
        </Breadcrumb>
      </PageHeader>

      <PolicySection>
        <h2>Terms and Conditions</h2>
        <p>
          Welcome to RK Crackers. These Terms of Service ("Terms") govern your use of our website, services, and products. 
          By accessing our website or purchasing our products, you agree to be bound by these Terms.
        </p>

        <PolicyBlock>
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using our website, placing orders, or interacting with any of our services, you acknowledge that 
            you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy and other policies 
            referenced herein.
          </p>
          <p>
            If you do not agree with any part of these Terms, you must not use our website or services.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>2. Age Restrictions</h3>
          <p>
            Due to the nature of our products:
          </p>
          <ul>
            <li>You must be at least 18 years of age to purchase fireworks from our website</li>
            <li>By placing an order, you confirm that you are at least 18 years old</li>
            <li>We reserve the right to request proof of age before processing any order</li>
            <li>Orders placed by minors will be cancelled and refunded</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock>
          <h3>3. Account Registration</h3>
          <p>
            When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
          </p>
          <ul>
            <li>Maintaining the confidentiality of your account password</li>
            <li>Restricting access to your account</li>
            <li>Accepting responsibility for all activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use of your account</li>
          </ul>
          <p>
            We reserve the right to refuse service, terminate accounts, or cancel orders at our discretion.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>4. Product Information</h3>
          <p>
            We strive to provide accurate product information, including descriptions, images, prices, and availability. However:
          </p>
          <ul>
            <li>Product images are for illustrative purposes only and actual products may vary</li>
            <li>We do not guarantee that product information is error-free</li>
            <li>Product specifications may change without notice</li>
            <li>Prices are subject to change without notice</li>
          </ul>
          <p>
            In the event of a pricing error, we reserve the right to cancel any orders placed for products listed at an incorrect price.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>5. Ordering and Payment</h3>
          <p>
            By placing an order, you make an offer to purchase products. All orders are subject to acceptance and availability. We reserve the right to:
          </p>
          <ul>
            <li>Limit or prohibit orders that appear to be placed by dealers, resellers, or distributors</li>
            <li>Restrict order quantities per person, household, or order</li>
            <li>Verify information before accepting orders</li>
            <li>Refuse or cancel any order at any time</li>
          </ul>
          <p>
            Payment must be made in full at the time of ordering. We accept various payment methods as indicated on our website.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>6. Shipping and Delivery</h3>
          <p>
            Please refer to our <Link to="/shipping">Shipping Policy</Link> for detailed information about shipping methods, timeframes, and restrictions.
          </p>
          <p>
            By placing an order, you agree to our shipping terms, including:
          </p>
          <ul>
            <li>Providing accurate shipping information</li>
            <li>Being available to receive and sign for deliveries when required</li>
            <li>Understanding that delivery timeframes are estimates only</li>
            <li>Accepting that we are not responsible for delays caused by factors beyond our control</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock>
          <h3>7. Returns and Refunds</h3>
          <p>
            Please refer to our <Link to="/returns">Returns & Refunds Policy</Link> for detailed information about our return procedures and eligibility.
          </p>
          <p>
            By purchasing our products, you acknowledge the specific limitations on returns of fireworks products due to safety and regulatory requirements.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>8. Intellectual Property</h3>
          <p>
            All content on our website, including text, graphics, logos, images, product descriptions, and software, is the property of RK Crackers or our content suppliers and is protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, display, sell, lease, transmit, create derivative works from, translate, modify, reverse-engineer, disassemble, decompile, or otherwise exploit our website or any portion of it without our explicit written consent.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>9. User Conduct</h3>
          <p>
            When using our website, you agree not to:
          </p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Submit false or misleading information</li>
            <li>Upload or transmit viruses or malicious code</li>
            <li>Interfere with the proper functioning of the website</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Collect user information without consent</li>
            <li>Engage in any activity that could damage, disable, or impair our services</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock>
          <h3>10. Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, RK Crackers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul>
            <li>Your access to or use of or inability to access or use our services</li>
            <li>Any conduct or content of any third party on our website</li>
            <li>Any content obtained from our website</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
          <p>
            Our liability is limited to the maximum extent permitted by law, and shall not exceed the amount paid by you for the product(s) or service(s) giving rise to such liability.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>11. Indemnification</h3>
          <p>
            You agree to indemnify, defend, and hold harmless RK Crackers, its officers, directors, employees, agents, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of our services.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>12. Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms shall be exclusively brought in the courts located in Tamil Nadu, India.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>13. Changes to Terms</h3>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the modified Terms.
          </p>
          <p>
            We encourage you to review these Terms periodically to stay informed of any updates.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>14. Contact Information</h3>
          <p>
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <ContactInfo>
            <p><strong>Email:</strong> legal@crackersrk.com</p>
            <p><strong>Phone:</strong> +91 8144 182 182</p>
            <p><strong>Address:</strong> Peacock Crackers, Standard Firework Factory Area, Sivakasi, Tamil Nadu 626189, India</p>
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

export default TermsOfServicePage;