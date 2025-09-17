import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ReturnsRefundsPage = () => {

  return (
    <PageContainer>
      <PageHeader>
        <h1>Returns & Refunds Policy</h1>
        <Breadcrumb>
          <Link to="/">Home</Link> / Returns & Refunds
        </Breadcrumb>
      </PageHeader>

      <PolicySection>
        <h2>Returns & Refunds</h2>
        <p>
          At RK Crackers, we strive to ensure your complete satisfaction with every purchase. 
          Please review our returns and refunds policy to understand our procedures.
        </p>

        <PolicyBlock>
          <h3>Important Safety Notice</h3>
          <p>
            Due to the nature of fireworks products and safety regulations, we have specific policies regarding returns and refunds:
          </p>
          <ul>
            <li>For safety and legal reasons, we <strong>cannot accept returns of opened fireworks products</strong></li>
            <li>Unopened products in their original packaging may be eligible for return under certain conditions</li>
            <li>All return requests are evaluated on a case-by-case basis</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Return Eligibility</h3>
          <p>
            You may be eligible to return your purchase if:
          </p>
          <ul>
            <li>The product is in its original, unopened packaging</li>
            <li>The return request is made within 7 days of delivery</li>
            <li>You have proof of purchase (order confirmation or receipt)</li>
            <li>The product is not part of a seasonal or clearance sale (marked as "Final Sale")</li>
            <li>The product has not been exposed to moisture, heat, or other conditions that could affect its safety</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Non-Returnable Items</h3>
          <p>
            The following items cannot be returned under any circumstances:
          </p>
          <ul>
            <li>Opened or used fireworks products</li>
            <li>Products marked as "Final Sale" or "Non-Returnable"</li>
            <li>Custom or personalized fireworks packages</li>
            <li>Products purchased during special promotional events (unless otherwise specified)</li>
            <li>Products damaged due to improper storage or handling after delivery</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Refund Process</h3>
          <p>
            If your return is approved, here's how the refund process works:
          </p>
          <ol>
            <li>Once we receive and inspect your return, we will notify you about the status of your refund</li>
            <li>If approved, your refund will be processed to the original payment method</li>
            <li>Credit card refunds typically take 5-10 business days to appear on your statement</li>
            <li>For payment methods other than credit cards, processing times may vary</li>
          </ol>
          <p>
            Please note that shipping charges are non-refundable unless the return is due to our error.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Damaged or Defective Products</h3>
          <p>
            If you receive damaged or defective products:
          </p>
          <ul>
            <li>Contact our customer service within 48 hours of delivery</li>
            <li>Provide clear photos of the damaged products and packaging</li>
            <li>Include your order number and a description of the issue</li>
          </ul>
          <p>
            For verified cases of damaged or defective products, we will offer:
          </p>
          <ul>
            <li>Replacement of the same product (subject to availability)</li>
            <li>Store credit for the value of the product</li>
            <li>Full refund to the original payment method</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Cancellation Policy</h3>
          <p>
            Order cancellations are subject to the following conditions:
          </p>
          <ul>
            <li>Orders can be cancelled within 24 hours of placement for a full refund</li>
            <li>Orders that have already been shipped cannot be cancelled</li>
            <li>For orders cancelled after 24 hours but before shipping, a 5% processing fee may apply</li>
          </ul>
          <p>
            To cancel an order, please contact our customer service team immediately with your order number.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>How to Initiate a Return</h3>
          <p>
            To initiate a return or refund request:
          </p>
          <ol>
            <li>Contact our customer service team via email or phone</li>
            <li>Provide your order number, the items you wish to return, and the reason for return</li>
            <li>Wait for confirmation and return authorization from our team</li>
            <li>Package the unused products securely in their original packaging</li>
            <li>Ship the items to the address provided by our customer service team</li>
          </ol>
          <p>
            Please do not send returns without prior authorization, as they may not be processed.
          </p>
        </PolicyBlock>

        <PolicyBlock>
          <h3>Contact Us</h3>
          <p>
            If you have any questions about our returns and refunds policy, please contact our customer service team:
          </p>
          <ContactInfo>
            <p><strong>Email:</strong> returns@crackersrk.com</p>
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
  
  ul, ol {
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

export default ReturnsRefundsPage;