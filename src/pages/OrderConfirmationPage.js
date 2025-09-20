import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const printRef = useRef();
  
  // Get order details from location state
  const { orderDetails } = location.state || {};
  
  useEffect(() => {
    // If no order details, redirect to checkout
    if (!orderDetails) {
      navigate('/checkout');
      return;
    }
    
    // Clear cart after successful order
    clearCart();
  }, [orderDetails, navigate, clearCart]);
  
  const handlePrint = () => {
    const printContent = printRef.current;
    const originalContents = document.body.innerHTML;
    
    document.body.innerHTML = printContent.innerHTML;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Reload to restore Crackers RK
  };
  
  const handleReturnHome = () => {
    navigate('/');
  };
  
  if (!orderDetails) {
    return null; // Will redirect in useEffect
  }
  
  const { orderNumber, orderDate, totalAmount, items, shippingInfo } = orderDetails;
  
  return (
    <PageContainer>
      <OrderConfirmation>
        <SuccessIcon>✓</SuccessIcon>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for your purchase. Your order has been received.</p>
        <p>A confirmation email will be sent to {shippingInfo.email} shortly.</p>
        
        <ButtonsContainer>
          <PrintButton onClick={handlePrint}>Print Receipt</PrintButton>
          <ReturnButton onClick={handleReturnHome}>Return to Home</ReturnButton>
        </ButtonsContainer>
        
        <PrintableReceipt ref={printRef}>
          <ReceiptHeader>
            <h2>Order Receipt</h2>
            <p>Premium Crackers</p>
          </ReceiptHeader>
          
          <OrderDetails>
            <OrderDetail>
              <span>Order Number:</span>
              <strong>{orderNumber}</strong>
            </OrderDetail>
            <OrderDetail>
              <span>Order Date:</span>
              <strong>{orderDate}</strong>
            </OrderDetail>
          </OrderDetails>
          
          <CustomerInfo>
            <h3>Customer Information</h3>
            <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
            <p>{shippingInfo.email}</p>
            <p>{shippingInfo.address}</p>
            <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
            <p>{shippingInfo.country}</p>
          </CustomerInfo>
          
          <ItemsTable>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.price.toFixed(2)}</td>
                  <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </ItemsTable>
          
          <OrderSummary>
            <SummaryRow>
              <span>Subtotal:</span>
              <span>₹{(totalAmount * 0.92).toFixed(2)}</span>
            </SummaryRow>
            <SummaryRow>
              <span>Tax (8%):</span>
              <span>₹{(totalAmount * 0.08).toFixed(2)}</span>
            </SummaryRow>
            <SummaryRow total>
              <span>Total:</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </SummaryRow>
          </OrderSummary>
          
          <ThankYouMessage>
            <p>Thank you for shopping with us!</p>
            <p>For any questions about your order, please contact us at support@premiumcrackers.com</p>
          </ThankYouMessage>
        </PrintableReceipt>
      </OrderConfirmation>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const OrderConfirmation = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #4caf50;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto 1.5rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const PrintButton = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0d8bf2;
  }
`;

const ReturnButton = styled.button`
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const PrintableReceipt = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 2rem;
  margin-top: 2rem;
  text-align: left;
  
  @media print {
    border: none;
    padding: 0;
    margin: 0;
  }
`;

const ReceiptHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h2 {
    margin-bottom: 0.5rem;
  }
`;

const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
`;

const OrderDetail = styled.div`
  display: flex;
  flex-direction: column;
  
  span {
    color: #666;
    margin-bottom: 0.25rem;
  }
`;

const CustomerInfo = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
  }
  
  p {
    margin: 0.25rem 0;
  }
`;

const ItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    background-color: #f5f5f5;
    font-weight: 600;
  }
`;

const OrderSummary = styled.div`
  margin-left: auto;
  width: 300px;
  margin-bottom: 2rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-weight: ${props => props.total ? 'bold' : 'normal'};
  border-top: ${props => props.total ? '2px solid #333' : 'none'};
  margin-top: ${props => props.total ? '0.5rem' : '0'};
  font-size: ${props => props.total ? '1.1rem' : '1rem'};
`;

const ThankYouMessage = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  
  p {
    margin: 0.5rem 0;
  }
`;

export default OrderConfirmationPage;