import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getCategories } from '../data/dataService';
import { useTranslation } from '../utils/translate';
import { getCategoryIconComponent } from '../utils/categoryIcons';

const PageContainer = styled.div`
  padding: 50px 0;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: var(--primary-color-3);
  }
  
  p {
    color: #666;
    max-width: 700px;
    margin: 0 auto;
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
`;

const CategoryCard = styled(Link)`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  color: inherit;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryImage = styled.div`
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-color: #1a1a2e;

  .icon {
    font-size: 3rem;
    color: white;
  }
`;

const CategoryInfo = styled.div`
  padding: 20px;
  text-align: center;
  
  h3 {
    margin-bottom: 10px;
    font-size: 20px;
  }
  
  p {
    color: #666;
    margin-bottom: 15px;
  }
`;

const CategoriesPage = () => {
  const { t } = useTranslation();
  
  // Get categories from data service
  const categoriesData = getCategories();
  
  // Format categories for display with full paths
  const categories = categoriesData.map(category => ({
    ...category,
    path: `/categories/${category.path}`
  }));
  
  return (
    <PageContainer>
      <PageHeader>
        <h1>{t('categories.title')}</h1>
        <p>{t('categories.description')}</p>
      </PageHeader>
      
      <CategoriesGrid>
        {categories.map(category => (
          <CategoryCard key={category.id} to={category.path}>
            <CategoryImage image={category.image}>
              <div className="icon">
                {React.createElement(getCategoryIconComponent(category.icon), { size: 48 })}
              </div>
            </CategoryImage>
            <CategoryInfo>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </CategoryInfo>
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </PageContainer>
  );
};

export default CategoriesPage;