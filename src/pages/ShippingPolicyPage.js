import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ShippingPolicyPage = () => {

  return (
    <PageContainer>
      <PageHeader>
        <h1>Shipping Policy</h1>
        <Breadcrumb>
          <Link to="/">Home</Link> / Shipping Policy
        </Breadcrumb>
      </PageHeader>

      <PolicySection>
        <h2>Shipping & Delivery</h2>
        <p>
          We are committed to delivering your fireworks safely and efficiently. 
          Please review our shipping policies below to understand our delivery process.
        </p>

        <PolicyBlock>
          <h3>Delivery Areas</h3>
          <p>
            We currently ship to select areas within India where fireworks transportation is permitted by law. 
            Due to safety regulations and legal restrictions, we cannot ship fireworks to certain regions or internationally.
          </p>
          <p>
            Before placing an order, please verify that your delivery location is within our serviceable areas. 
            You can check this during the checkout process or by contacting our customer service team.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Shipping Timeframes</h3>
          <ul>
            <li><strong>Standard Shipping:</strong> 5-7 business days</li>
            <li><strong>Express Shipping:</strong> 2-3 business days (where available)</li>
            <li><strong>Festival Season:</strong> Please allow for additional 2-3 days during peak festival seasons (Diwali, Pongal, etc.)</li>
          </ul>
          <p>
            All shipping timeframes are estimates and begin from the date of shipping confirmation, not the order date. 
            Orders are typically processed within 24-48 hours before shipping.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Shipping Costs</h3>
          <p>
            Shipping costs are calculated based on your location, the weight of your order, and your chosen shipping method:
          </p>
          <ul>
            <li>Orders above ₹5,000: Free standard shipping</li>
            <li>Orders below ₹5,000: Shipping costs calculated at checkout</li>
            <li>Express shipping: Additional charges apply</li>
          </ul>
          <p>
            The exact shipping cost will be displayed during the checkout process before payment is completed.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Order Tracking</h3>
          <p>
            Once your order has been shipped, you will receive a confirmation email with tracking information. 
            You can track your order's status through:
          </p>
          <ul>
            <li>The tracking link in your shipping confirmation email</li>
            <li>Your account dashboard on our website</li>
            <li>Contacting our customer service team with your order number</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Delivery Verification</h3>
          <p>
            Due to the nature of our products, all deliveries require signature verification by an adult (18+ years). 
            We cannot leave packages unattended or deliver to minors.
          </p>
          <p>
            If no one is available to receive the package, our delivery partner will leave a notification and attempt delivery again on the next business day.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Shipping Restrictions</h3>
          <p>
            Please note the following restrictions on our shipping services:
          </p>
          <ul>
            <li>We cannot ship to PO boxes or APO/FPO addresses</li>
            <li>Certain high-powered fireworks may have additional shipping restrictions</li>
            <li>During government-mandated restrictions, shipping may be temporarily suspended</li>
            <li>We reserve the right to refuse shipping to areas with local fireworks bans</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Delayed or Lost Shipments</h3>
          <p>
            While rare, delays can occur due to weather conditions, transportation issues, or other circumstances beyond our control. 
            If your order is significantly delayed:
          </p>
          <ul>
            <li>Check your tracking information for updates</li>
            <li>Contact our customer service if your package shows no movement for 48+ hours</li>
            <li>For lost packages, we will initiate an investigation with our shipping partner</li>
          </ul>
          <p>
            After investigation, if a package is confirmed lost, we will either resend your order or provide a full refund based on your preference.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Contact Us</h3>
          <p>
            If you have any questions about our shipping policy or need assistance with a specific order, 
            please contact our customer service team:
          </p>
          <ContactInfo>
            <p><strong>Email:</strong> shipping@premiumcrackers.com</p>
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

export default ShippingPolicyPage;