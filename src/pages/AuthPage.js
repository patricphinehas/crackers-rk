import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    // Login form
    loginEmail: '',
    loginPassword: '',
    // Register form
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerConfirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the redirect path from location state or default to home
  const from = location.state?.from?.pathname || '/';
  
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
  
  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    
    if (!formData.loginEmail) {
      newErrors.loginEmail = 'Email is required';
    }
    
    if (!formData.loginPassword) {
      newErrors.loginPassword = 'Password is required';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Attempt login
    const result = login({
      email: formData.loginEmail,
      password: formData.loginPassword,
    });
    
    if (result.success) {
      // Redirect to previous page or home
      navigate(from, { replace: true });
    } else {
      setErrors({
        loginForm: result.message || 'Invalid email or password',
      });
    }
  };
  
  // Handle register form submission
  const handleRegister = (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    
    if (!formData.registerName) {
      newErrors.registerName = 'Name is required';
    }
    
    if (!formData.registerEmail) {
      newErrors.registerEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.registerEmail)) {
      newErrors.registerEmail = 'Please enter a valid email address';
    }
    
    if (!formData.registerPassword) {
      newErrors.registerPassword = 'Password is required';
    } else if (formData.registerPassword.length < 6) {
      newErrors.registerPassword = 'Password must be at least 6 characters';
    }
    
    if (!formData.registerConfirmPassword) {
      newErrors.registerConfirmPassword = 'Please confirm your password';
    } else if (formData.registerPassword !== formData.registerConfirmPassword) {
      newErrors.registerConfirmPassword = 'Passwords do not match';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Attempt registration
    const result = register({
      name: formData.registerName,
      email: formData.registerEmail,
      password: formData.registerPassword,
      confirmPassword: formData.registerConfirmPassword,
    });
    
    if (result.success) {
      // Show success message and switch to login tab
      setSuccessMessage('Registration successful! You can now log in.');
      setActiveTab('login');
      
      // Clear register form
      setFormData({
        ...formData,
        registerName: '',
        registerEmail: '',
        registerPassword: '',
        registerConfirmPassword: '',
      });
    } else {
      setErrors({
        registerForm: result.message || 'Registration failed. Please try again.',
      });
    }
  };
  
  return (
    <PageContainer>
      <AuthContainer>
        <TabsContainer>
          <Tab
            active={activeTab === 'login'}
            onClick={() => setActiveTab('login')}
          >
            Login
          </Tab>
          <Tab
            active={activeTab === 'register'}
            onClick={() => setActiveTab('register')}
          >
            Register
          </Tab>
        </TabsContainer>
        
        <TabContent>
          {activeTab === 'login' && (
            <Form onSubmit={handleLogin}>
              <h1>Login to Your Account</h1>
              
              {successMessage && (
                <SuccessMessage>{successMessage}</SuccessMessage>
              )}
              
              {errors.loginForm && (
                <ErrorMessage>{errors.loginForm}</ErrorMessage>
              )}
              
              <FormGroup>
                <Label htmlFor="loginEmail">Email Address</Label>
                <Input
                  type="email"
                  id="loginEmail"
                  name="loginEmail"
                  value={formData.loginEmail}
                  onChange={handleChange}
                  error={errors.loginEmail}
                />
                {errors.loginEmail && <ErrorMessage>{errors.loginEmail}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="loginPassword">Password</Label>
                <Input
                  type="password"
                  id="loginPassword"
                  name="loginPassword"
                  value={formData.loginPassword}
                  onChange={handleChange}
                  error={errors.loginPassword}
                />
                {errors.loginPassword && <ErrorMessage>{errors.loginPassword}</ErrorMessage>}
              </FormGroup>
              
              <ForgotPassword>Forgot your password?</ForgotPassword>
              
              <SubmitButton type="submit">Login</SubmitButton>
            </Form>
          )}
          
          {activeTab === 'register' && (
            <Form onSubmit={handleRegister}>
              <h1>Create an Account</h1>
              
              {errors.registerForm && (
                <ErrorMessage>{errors.registerForm}</ErrorMessage>
              )}
              
              <FormGroup>
                <Label htmlFor="registerName">Full Name</Label>
                <Input
                  type="text"
                  id="registerName"
                  name="registerName"
                  value={formData.registerName}
                  onChange={handleChange}
                  error={errors.registerName}
                />
                {errors.registerName && <ErrorMessage>{errors.registerName}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="registerEmail">Email Address</Label>
                <Input
                  type="email"
                  id="registerEmail"
                  name="registerEmail"
                  value={formData.registerEmail}
                  onChange={handleChange}
                  error={errors.registerEmail}
                />
                {errors.registerEmail && <ErrorMessage>{errors.registerEmail}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="registerPassword">Password</Label>
                <Input
                  type="password"
                  id="registerPassword"
                  name="registerPassword"
                  value={formData.registerPassword}
                  onChange={handleChange}
                  error={errors.registerPassword}
                />
                {errors.registerPassword && <ErrorMessage>{errors.registerPassword}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="registerConfirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  id="registerConfirmPassword"
                  name="registerConfirmPassword"
                  value={formData.registerConfirmPassword}
                  onChange={handleChange}
                  error={errors.registerConfirmPassword}
                />
                {errors.registerConfirmPassword && (
                  <ErrorMessage>{errors.registerConfirmPassword}</ErrorMessage>
                )}
              </FormGroup>
              
              <SubmitButton type="submit">Register</SubmitButton>
            </Form>
          )}
        </TabContent>
      </AuthContainer>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
`;

const AuthContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
`;

const Tab = styled.div`
  flex: 1;
  text-align: center;
  padding: 1rem;
  background-color: ${props => props.active ? 'white' : '#f5f5f5'};
  color: ${props => props.active ? '#3498db' : '#666'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${props => props.active ? 'white' : '#e0e0e0'};
  }
`;

const TabContent = styled.div`
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

const FormGroup = styled.div``;

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

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled.div`
  background-color: #2ecc71;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-align: center;
`;

const ForgotPassword = styled.div`
  text-align: right;
  font-size: 0.9rem;
  color: #3498db;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const SubmitButton = styled.button`
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

export default AuthPage;