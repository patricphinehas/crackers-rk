import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const CheckoutPage = () => {
  const { cart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: isAuthenticated ? user.name.split(' ')[0] : '',
    lastName: isAuthenticated ? user.name.split(' ')[1] || '' : '',
    email: isAuthenticated ? user.email : '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    paymentMethod: 'credit',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });
  
  const [errors, setErrors] = useState({});
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    const requiredFields = [
      'firstName', 'lastName', 'email', 'address', 'city', 'state', 'zipCode', 'country'
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Payment validation
    if (formData.paymentMethod === 'credit') {
      if (!formData.cardNumber) {
        newErrors.cardNumber = 'Card number is required';
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Please enter a valid 16-digit card number';
      }
      
      if (!formData.cardName) {
        newErrors.cardName = 'Name on card is required';
      }
      
      if (!formData.expiryDate) {
        newErrors.expiryDate = 'Expiry date is required';
      } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = 'Please use MM/YY format';
      }
      
      if (!formData.cvv) {
        newErrors.cvv = 'CVV is required';
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = 'CVV must be 3 or 4 digits';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would send the order to a backend
      // For now, we'll simulate a successful order
      
      // Generate a random order number
      const randomOrderNumber = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
      
      // Create order details object to pass to confirmation page
      const orderDetails = {
        orderNumber: randomOrderNumber,
        orderDate: new Date().toLocaleDateString(),
        totalAmount: cart.totalPrice + cart.totalPrice * 0.08,
        items: cart.items,
        shippingInfo: formData
      };
      
      // Redirect to order confirmation page with order details
      navigate('/order-confirmation', { state: { orderDetails } });
    }
  };
  
  // If cart is empty, redirect to cart
  if (cart.items.length === 0) {
    return (
      <PageContainer>
        <h1>Checkout</h1>
        <EmptyCartMessage>
          <p>Your cart is empty. Please add items before proceeding to checkout.</p>
          <ReturnButton onClick={() => navigate('/cart')}>Return to Cart</ReturnButton>
        </EmptyCartMessage>
      </PageContainer>
    );
  }
  
  // We no longer need this section as we're redirecting to OrderConfirmationPage
  
  return (
    <PageContainer>
      <h1>Checkout</h1>
      
      <CheckoutContainer>
        <CheckoutForm onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>Shipping Information</SectionTitle>
            <ShippingNote>
              <p><strong>Important:</strong> Due to the nature of our products, we can only ship to addresses where fireworks are legal. Please verify local regulations before placing your order.</p>
              <p>Standard delivery takes 3-5 business days. Express shipping (1-2 business days) is available at checkout for an additional fee.</p>
            </ShippingNote>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />
                {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />
                {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="address">Street Address</Label>
              <Input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                error={errors.address}
              />
              {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
            </FormGroup>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="city">City</Label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  error={errors.city}
                />
                {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="state">State</Label>
                <Input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  error={errors.state}
                />
                {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  error={errors.zipCode}
                />
                {errors.zipCode && <ErrorMessage>{errors.zipCode}</ErrorMessage>}
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <Label htmlFor="country">Country</Label>
              <Select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                error={errors.country}
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
              </Select>
              {errors.country && <ErrorMessage>{errors.country}</ErrorMessage>}
            </FormGroup>
          </FormSection>
          
          <FormSection>
            <SectionTitle>Payment Method</SectionTitle>
            <PaymentNote>
              <p>Your payment information is securely processed. We accept all major credit cards and PayPal.</p>
              <p>Your card will only be charged when your order ships. All transactions are encrypted and secure.</p>
            </PaymentNote>
            
            <PaymentOptions>
              <PaymentOption>
                <input
                  type="radio"
                  id="credit"
                  name="paymentMethod"
                  value="credit"
                  checked={formData.paymentMethod === 'credit'}
                  onChange={handleChange}
                />
                <label htmlFor="credit">Credit Card</label>
              </PaymentOption>
              
              <PaymentOption>
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleChange}
                />
                <label htmlFor="paypal">PayPal</label>
              </PaymentOption>
            </PaymentOptions>
            
            {formData.paymentMethod === 'credit' && (
              <>
                <FormGroup>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    error={errors.cardNumber}
                  />
                  {errors.cardNumber && <ErrorMessage>{errors.cardNumber}</ErrorMessage>}
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    error={errors.cardName}
                  />
                  {errors.cardName && <ErrorMessage>{errors.cardName}</ErrorMessage>}
                </FormGroup>
                
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      error={errors.expiryDate}
                    />
                    {errors.expiryDate && <ErrorMessage>{errors.expiryDate}</ErrorMessage>}
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      type="text"
                      id="cvv"
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleChange}
                      error={errors.cvv}
                    />
                    {errors.cvv && <ErrorMessage>{errors.cvv}</ErrorMessage>}
                  </FormGroup>
                </FormRow>
              </>
            )}
            
            {formData.paymentMethod === 'paypal' && (
              <PaypalInfo>
                <p>You will be redirected to PayPal to complete your payment.</p>
              </PaypalInfo>
            )}
          </FormSection>
          
          <PlaceOrderButton type="submit">
            Place Order
          </PlaceOrderButton>
        </CheckoutForm>
        
        <OrderSummary>
            <SectionTitle>Order Summary</SectionTitle>
            <OrderPolicies>
              <h4>Order Policies</h4>
              <ul>
                <li><strong>Cancellation:</strong> Orders can be cancelled within 24 hours of placement for a full refund.</li>
                <li><strong>Returns:</strong> Due to safety regulations, we cannot accept returns on fireworks products.</li>
                <li><strong>Damaged Items:</strong> Please report any damaged items within 48 hours of delivery with photos.</li>
                <li><strong>Seasonal Availability:</strong> Some products may be unavailable during certain seasons due to regulations.</li>
              </ul>
            </OrderPolicies>
          
          <OrderItems>
            {cart.items.map((item) => (
              <OrderItem key={item.id}>
                <ItemImage src={item.image} alt={item.name} />
                <ItemDetails>
                  <ItemName>{item.name}</ItemName>
                  <ItemQuantity>Qty: {item.quantity}</ItemQuantity>
                </ItemDetails>
                <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
              </OrderItem>
            ))}
          </OrderItems>
          
          <SummaryRow>
            <span>Subtotal</span>
            <span>${cart.totalPrice.toFixed(2)}</span>
          </SummaryRow>
          
          <SummaryRow>
            <span>Shipping</span>
            <span>Free</span>
          </SummaryRow>
          
          <SummaryRow>
            <span>Tax</span>
            <span>${(cart.totalPrice * 0.08).toFixed(2)}</span>
          </SummaryRow>
          
          <SummaryTotal>
            <span>Total</span>
            <span>${(cart.totalPrice + cart.totalPrice * 0.08).toFixed(2)}</span>
          </SummaryTotal>
        </OrderSummary>
      </CheckoutContainer>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;

const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormSection = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${props => props.error ? '#e74c3c' : '#ddd'};
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#e74c3c' : '#3498db'};
    box-shadow: 0 0 0 2px ${props => props.error ? 'rgba(231, 76, 60, 0.2)' : 'rgba(52, 152, 219, 0.2)'};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${props => props.error ? '#e74c3c' : '#ddd'};
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#e74c3c' : '#3498db'};
    box-shadow: 0 0 0 2px ${props => props.error ? 'rgba(231, 76, 60, 0.2)' : 'rgba(52, 152, 219, 0.2)'};
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

const ShippingNote = styled.div`
  background-color: #f8f9fa;
  border-left: 3px solid #3498db;
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  line-height: 1.5;
  
  p {
    margin-bottom: 0.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const PaymentNote = styled.div`
  background-color: #f8f9fa;
  border-left: 3px solid #28a745;
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  line-height: 1.5;
  
  p {
    margin-bottom: 0.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const OrderPolicies = styled.div`
  background-color: #fff8e1;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  
  h4 {
    margin-bottom: 0.8rem;
    color: #f57c00;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
    
    &:before {
      content: '•';
      position: absolute;
      left: 0.5rem;
      color: #f57c00;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const PaymentOptions = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  input {
    margin: 0;
  }
  
  label {
    margin: 0;
  }
`;

const PaypalInfo = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const PlaceOrderButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const OrderSummary = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  height: fit-content;
`;

const OrderItems = styled.div`
  margin-bottom: 1.5rem;
  max-height: 300px;
  overflow-y: auto;
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 1rem;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const ItemQuantity = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const ItemPrice = styled.div`
  font-weight: 600;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1rem;
  
  &:last-of-type {
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
  }
`;

const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

const EmptyCartMessage = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  
  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const ReturnButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2980b9;
  }
`;



export default CheckoutPage;