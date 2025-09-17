import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  font-size: 3rem;
  color: #d32f2f;
  margin-bottom: 1rem;
`;

const NotFoundText = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background-color: #d32f2f;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #b71c1c;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>
        Oops! The page you're looking for seems to have disappeared in a puff of smoke.
        It might have been a dud or just misfired.
      </NotFoundText>
      <HomeButton to="/">Back to Home</HomeButton>
    </NotFoundContainer>
  );
};

export default NotFoundPage;