import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import { getCategoryPathMapping } from '../data/dataService';

const CategoryPage = () => {
  const { categoryPath } = useParams();
  
  // Get category name from path using data service
  const pathMapping = getCategoryPathMapping();
  const categoryName = pathMapping[categoryPath] || '';
  
  // Filter products by category
  const categoryProducts = products.filter(product => product.category === categoryName);

  return (
    <PageContainer>
      <BreadcrumbNav>
        <Link to="/">Home</Link> &gt; 
        <Link to="/categories">Categories</Link> &gt; 
        <span>{categoryName}</span>
      </BreadcrumbNav>
      
      <CategoryHeader>
        <h1>{categoryName}</h1>
        <p>Explore our collection of premium {categoryName.toLowerCase()} for your celebrations.</p>
      </CategoryHeader>
      
      {categoryProducts.length > 0 ? (
        <ProductsGrid>
          {categoryProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      ) : (
        <EmptyCategory>
          <h2>No products found</h2>
          <p>We're currently updating our {categoryName.toLowerCase()} collection. Please check back soon!</p>
          <Link to="/categories">Browse other categories</Link>
        </EmptyCategory>
      )}
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
`;

const BreadcrumbNav = styled.div`
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #666;
  
  a {
    color: #666;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  span {
    color: #333;
    font-weight: 500;
  }
`;

const CategoryHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  
  h1 {
    font-size: 2.5rem;
    color: var(--primary-color-3);
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    max-width: 700px;
    margin: 0 auto;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const EmptyCategory = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  
  h2 {
    margin-bottom: 1rem;
    color: var(--primary-color-3);
  }
  
  p {
    margin-bottom: 2rem;
    color: #666;
  }
  
  a {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: var(--primary-color-dark);
    }
  }
`;

export default CategoryPage;