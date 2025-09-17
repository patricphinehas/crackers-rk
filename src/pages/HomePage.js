import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import { useTranslation } from '../utils/translate';

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 0;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: var(--primary-color-2);
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
`;

const HeroButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--highlight-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const QuickLinksSection = styled.section`
  padding: 50px 0;
  background-color: var(--background-color-2);
`;

const QuickLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
`;

const QuickLinkCard = styled(Link)`
  background-color: white;
  border-radius: 10px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  h3 {
    margin: 15px 0;
    color: var(--primary-color-3);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  color: var(--primary-color-3);
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: var(--primary-color);
    margin: 15px auto 0;
  }
`;

const ProductsSection = styled.section`
  padding: 50px 0;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
`;



const TrustBadgesSection = styled.section`
  padding: 30px 0;
`;

const TrustBadgesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
`;

const TrustBadge = styled.div`
  text-align: center;
  padding: 15px;
  
  h4 {
    margin-top: 10px;
    color: #333;
  }
`;

const HomePage = () => {
  const { t } = useTranslation();
  
  // Quick links data
  const quickLinks = [
    { name: t('home.quickLinks.categories'), path: "/categories" },
    { name: t('home.quickLinks.giftBoxes'), path: "/gift-boxes" },
    { name: t('home.quickLinks.bulkOrders'), path: "/bulk-orders" },
  ];
  
  // Trust badges data
  const trustBadges = [
    { name: t('home.trustBadges.safety'), icon: "🛡️" },
    { name: t('home.trustBadges.authentic'), icon: "✅" },
    { name: t('home.trustBadges.pricing'), icon: "💰" },
    { name: t('home.trustBadges.experience'), icon: "⭐" },
  ];
  
  // Featured products (showing first 4 products)
  const featuredProducts = products.slice(0, 4);
  
  return (
    <>
      <HeroSection>
        <HeroContent>
          <h1>{t('home.hero.title')}</h1>
          <p>{t('home.hero.description')}</p>
          <HeroButton to="/categories">{t('home.hero.shopNow')}</HeroButton>
        </HeroContent>
      </HeroSection>
      
      <QuickLinksSection>
        <QuickLinksContainer>
          {quickLinks.map((link, index) => (
            <QuickLinkCard key={index} to={link.path}>
              <h3>{link.name}</h3>
            </QuickLinkCard>
          ))}
        </QuickLinksContainer>
      </QuickLinksSection>
      
      <TrustBadgesSection>
        <TrustBadgesContainer>
          {trustBadges.map((badge, index) => (
            <TrustBadge key={index}>
              <div style={{ fontSize: '2rem' }}>{badge.icon}</div>
              <h4>{badge.name}</h4>
            </TrustBadge>
          ))}
        </TrustBadgesContainer>
      </TrustBadgesSection>
      
      <ProductsSection>
        <SectionTitle>{t('home.featuredProducts')}</SectionTitle>
        <ProductsGrid>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      </ProductsSection>
      

    </>
  );
};

export default HomePage;