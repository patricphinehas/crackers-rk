import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';
import { useTranslation } from '../utils/translate';

const CartPage = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCheckout = () => {
    // Navigate to checkout page
    navigate('/checkout');
  };

  return (
    <PageContainer>
      <h1>{t('cart.title')}</h1>
      
      {cart.items.length === 0 ? (
        <EmptyCartMessage>
          <p>{t('cart.empty')}</p>
          <Link to="/">{t('cart.continueShopping')}</Link>
        </EmptyCartMessage>
      ) : (
        <>
          <CartContainer>
            <CartItems>
              <CartHeader>
                <HeaderItem flex={3}>{t('cart.product')}</HeaderItem>
                <HeaderItem flex={1}>{t('cart.price')}</HeaderItem>
                <HeaderItem flex={2}>{t('cart.quantity')}</HeaderItem>
                <HeaderItem flex={1}>{t('cart.total')}</HeaderItem>
                <HeaderItem flex={1}>{t('cart.actions')}</HeaderItem>
              </CartHeader>
              
              {cart.items.map((item) => (
                <CartItem key={item.id}>
                  <ItemInfo flex={3}>
                    <ItemImage src={item.image} alt={item.name} />
                    <ItemDetails>
                      <ItemName>
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </ItemName>
                      <ItemCategory>{item.category}</ItemCategory>
                    </ItemDetails>
                  </ItemInfo>
                  
                  <ItemPrice flex={1}>${item.price.toFixed(2)}</ItemPrice>
                  
                  <ItemQuantity flex={2}>
                    <QuantityControls>
                      <QuantityButton onClick={() => removeFromCart(item)}>-</QuantityButton>
                      <QuantityValue>{item.quantity}</QuantityValue>
                      <QuantityButton onClick={() => addToCart(item)}>+</QuantityButton>
                    </QuantityControls>
                  </ItemQuantity>
                  
                  <ItemTotal flex={1}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </ItemTotal>
                  
                  <ItemActions flex={1}>
                    <DeleteButton onClick={() => deleteFromCart(item)}>
                      <span>×</span>
                    </DeleteButton>
                  </ItemActions>
                </CartItem>
              ))}
            </CartItems>
            
            <CartSummary>
              <h2>{t('cart.orderSummary')}</h2>
              
              <SummaryRow>
                <span>{t('cart.subtotal')}</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </SummaryRow>
              
              <SummaryRow>
                <span>{t('cart.shipping')}</span>
                <span>{t('cart.free')}</span>
              </SummaryRow>
              
              <SummaryRow>
                <span>{t('cart.tax')}</span>
                <span>${(cart.totalPrice * 0.08).toFixed(2)}</span>
              </SummaryRow>
              
              <SummaryTotal>
                <span>{t('cart.total')}</span>
                <span>${(cart.totalPrice + cart.totalPrice * 0.08).toFixed(2)}</span>
              </SummaryTotal>
              
              <CheckoutButton onClick={handleCheckout}>
                {t('cart.proceedToCheckout')}
              </CheckoutButton>
              
              <ContinueShoppingLink to="/">
                {t('cart.continueShopping')}
              </ContinueShoppingLink>
              
              <ClearCartButton onClick={clearCart}>
                Clear Cart
              </ClearCartButton>
            </CartSummary>
          </CartContainer>
        </>
      )}
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

const EmptyCartMessage = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  
  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  a {
    display: inline-block;
    background-color: #3498db;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: #2980b9;
    }
  }
`;

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CartItems = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CartHeader = styled.div`
  display: flex;
  background-color: #f5f5f5;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  font-weight: 600;
  
  @media (max-width: 600px) {
    display: none;
  }
`;

const HeaderItem = styled.div`
  flex: ${props => props.flex || 1};
  text-align: ${props => props.align || 'left'};
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const ItemInfo = styled.div`
  flex: ${props => props.flex || 1};
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 600px) {
    flex: 1 0 100%;
    margin-bottom: 1rem;
  }
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.div`
  font-weight: 500;
  margin-bottom: 0.5rem;
  
  a {
    color: #333;
    text-decoration: none;
    
    &:hover {
      color: #3498db;
    }
  }
`;

const ItemCategory = styled.div`
  font-size: 0.9rem;
  color: #666;
  text-transform: capitalize;
`;

const ItemPrice = styled.div`
  flex: ${props => props.flex || 1};
  
  @media (max-width: 600px) {
    flex: 1;
  }
`;

const ItemQuantity = styled.div`
  flex: ${props => props.flex || 1};
  
  @media (max-width: 600px) {
    flex: 1;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: fit-content;
`;

const QuantityButton = styled.button`
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const QuantityValue = styled.span`
  padding: 0 0.5rem;
  min-width: 32px;
  text-align: center;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;

const ItemTotal = styled.div`
  flex: ${props => props.flex || 1};
  font-weight: 600;
  
  @media (max-width: 600px) {
    flex: 1;
  }
`;

const ItemActions = styled.div`
  flex: ${props => props.flex || 1};
  display: flex;
  justify-content: center;
  
  @media (max-width: 600px) {
    flex: 0;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  span {
    line-height: 1;
  }
`;

const CartSummary = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  height: fit-content;
  
  h2 {
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
  }
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
  margin: 1.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

const CheckoutButton = styled.button`
  width: 100%;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const ContinueShoppingLink = styled(Link)`
  display: block;
  text-align: center;
  color: #3498db;
  text-decoration: none;
  margin-bottom: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ClearCartButton = styled.button`
  width: 100%;
  background-color: #f5f5f5;
  color: #e74c3c;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.8rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

export default CartPage;