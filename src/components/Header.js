import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '../utils/translate';

const HeaderContainer = styled.header`
  background-color: var(--background-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 15px 0;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--primary-color-3);
  display: flex;
  align-items: center;
  
  span {
    margin-left: 10px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(Link)`
  margin: 0 15px;
  font-weight: 500;
  color: #333;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--background-color-2);
  border-radius: 20px;
  padding: 5px 15px;
  margin-left: 20px;
  
  input {
    border: none;
    background: transparent;
    padding: 5px;
    outline: none;
    width: 150px;
  }
  
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #666;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
`;



const Header = () => {
  const { t } = useTranslation();
  
  const navigationItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.categories'), path: '/categories' },
    { name: t('nav.allProducts'), path: '/all-products' },
    { name: t('nav.contact'), path: '/contact' }
  ];
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <span>{t('app.name')}</span>
        </Logo>
        
        <Navigation>
          {navigationItems.map((item, index) => (
            <StyledNavLink key={index} to={item.path}>
              {item.name}
            </StyledNavLink>
          ))}
          
          <SearchBar>
            <input type="text" placeholder="Search products..." />
            <button>🔍</button>
          </SearchBar>
        </Navigation>
        
        <UserActions>
          <LanguageSelector />
          <CartIcon />
        </UserActions>
        
        <MobileMenuButton>☰</MobileMenuButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;