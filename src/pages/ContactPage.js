import React from 'react';
import { getCategories, getCrackerTypesByCategory } from '../data/dataService';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <h1>Contact Us</h1>
        <Breadcrumb>
          <Link to="/">Home</Link> / Contact Us
        </Breadcrumb>
      </PageHeader>

      <ContactSection>
        <ContactInfo>
          <h2>Get in Touch</h2>
          <p>
            Have questions about our products or need assistance with your order? 
            Our customer service team is here to help you with any inquiries.
          </p>
          
          <ContactDetail>
            <ContactIcon>📍</ContactIcon>
            <div>
              <h3>Address</h3>
              <p>Peacock Crackers, Standard Firework Factory Area, Sivakasi, Tamil Nadu 626189, India</p>
            </div>
          </ContactDetail>
          
          <ContactDetail>
            <ContactIcon>📞</ContactIcon>
            <div>
              <h3>Phone</h3>
              <p>+91 8144 182 182</p>
            </div>
          </ContactDetail>
          
          <ContactDetail>
            <ContactIcon>✉️</ContactIcon>
            <div>
              <h3>Email</h3>
              <p>info@crackersrk.com</p>
            </div>
          </ContactDetail>
          
          <ContactDetail>
            <ContactIcon>🕒</ContactIcon>
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </ContactDetail>
          
          <SocialIcons>
            <SocialIcon href="#" aria-label="Facebook">f</SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">t</SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">i</SocialIcon>
            <SocialIcon href="#" aria-label="YouTube">y</SocialIcon>
          </SocialIcons>
        </ContactInfo>
        
        <ContactForm>
          <h2>Send Us a Message</h2>
          <FormGroup>
            <Label htmlFor="name">Your Name</Label>
            <Input type="text" id="name" name="name" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input type="email" id="email" name="email" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="phone">Phone Number</Label>
            <Input type="tel" id="phone" name="phone" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" name="subject" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Your Message</Label>
            <TextArea id="message" name="message" rows="5"></TextArea>
          </FormGroup>
          
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactSection>
      
      <ProductCategoriesSection>
        <h2>Our Cracker Types</h2>
        <p>Explore our wide range of high-quality fireworks and crackers for all your celebrations.</p>
        
        <CategoriesGrid>
          {getCategories().map(category => {
            const types = getCrackerTypesByCategory(category.name);
            return (
              <CategoryCard key={category.id}>
                <CategoryIcon>{category.icon}</CategoryIcon>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <CategoryTypes>
                  {types && types.map((type, index) => (
                    <TypeItem key={index}>{type}</TypeItem>
                  ))}
                </CategoryTypes>
              </CategoryCard>
            );
          })}
        </CategoriesGrid>
      </ProductCategoriesSection>
      
      <SafetySection>
        <h2>Safety Guidelines</h2>
        <p>At Crackers RK, we prioritize your safety. Please follow these guidelines when using our products:</p>
        
        <SafetyGrid>
          <SafetyItem>
            <SafetyIcon>🔥</SafetyIcon>
            <h3>Keep Away from Flammables</h3>
            <p>Use fireworks in open areas away from buildings, vehicles, and flammable materials.</p>
          </SafetyItem>
          
          <SafetyItem>
            <SafetyIcon>👁️</SafetyIcon>
            <h3>Adult Supervision</h3>
            <p>Children should always be supervised by adults when handling fireworks.</p>
          </SafetyItem>
          
          <SafetyItem>
            <SafetyIcon>💧</SafetyIcon>
            <h3>Keep Water Nearby</h3>
            <p>Always have a bucket of water or fire extinguisher ready for emergencies.</p>
          </SafetyItem>
          
          <SafetyItem>
            <SafetyIcon>📏</SafetyIcon>
            <h3>Safe Distance</h3>
            <p>Maintain a safe distance after lighting fireworks.</p>
          </SafetyItem>
        </SafetyGrid>
      </SafetySection>
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

const ContactSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 1.8rem;
    color: var(--primary-color-3);
    margin-bottom: 1.5rem;
  }
  
  > p {
    margin-bottom: 2rem;
    line-height: 1.6;
    color: #555;
  }
`;

const ContactDetail = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  
  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
    color: var(--primary-color-2);
  }
  
  p {
    margin: 0;
    color: #555;
  }
`;

const ContactIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: var(--primary-color);
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color-3);
  }
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  h2 {
    font-size: 1.8rem;
    color: var(--primary-color-3);
    margin-bottom: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color-3);
  }
`;

const ProductCategoriesSection = styled.section`
  margin: 4rem 0;
  
  h2 {
    font-size: 2rem;
    color: var(--primary-color-3);
    text-align: center;
    margin-bottom: 1rem;
  }
  
  > p {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
    color: #555;
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const CategoryCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    font-size: 1.4rem;
    color: var(--primary-color-2);
    margin: 1rem 0;
  }
  
  p {
    color: #555;
    margin-bottom: 1.5rem;
  }
`;

const CategoryIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
`;

const CategoryTypes = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TypeItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  color: #555;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SafetySection = styled.section`
  background-color: #f9f9f9;
  padding: 3rem;
  border-radius: 8px;
  margin: 4rem 0;
  
  h2 {
    font-size: 2rem;
    color: var(--primary-color-3);
    text-align: center;
    margin-bottom: 1rem;
  }
  
  > p {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
    color: #555;
  }
`;

const SafetyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const SafetyItem = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  
  h3 {
    font-size: 1.2rem;
    color: var(--primary-color-2);
    margin: 1rem 0;
  }
  
  p {
    color: #555;
    margin: 0;
  }
`;

const SafetyIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
`;

export default ContactPage;