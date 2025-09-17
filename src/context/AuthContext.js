import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  loading: true,
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialState);

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkLoggedIn = () => {
      const user = localStorage.getItem('user');
      if (user) {
        setAuthState({
          isAuthenticated: true,
          user: JSON.parse(user),
          loading: false,
        });
      } else {
        setAuthState({
          ...initialState,
          loading: false,
        });
      }
    };

    checkLoggedIn();
  }, []);

  // Login function - in a real app, this would make an API call
  const login = (credentials) => {
    // Mock login - in a real app, this would validate against a backend
    const { email, password } = credentials;
    
    // Simple validation
    if (!email || !password) {
      return { success: false, message: 'Please provide email and password' };
    }
    
    // Mock user data - in a real app, this would come from the backend
    const userData = {
      id: '1',
      name: 'Test User',
      email: email,
      // Don't store passwords in state in a real app
    };
    
    // Store in localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Update state
    setAuthState({
      isAuthenticated: true,
      user: userData,
      loading: false,
    });
    
    return { success: true };
  };

  // Register function - in a real app, this would make an API call
  const register = (userData) => {
    const { name, email, password, confirmPassword } = userData;
    
    // Simple validation
    if (!name || !email || !password) {
      return { success: false, message: 'Please fill in all fields' };
    }
    
    if (password !== confirmPassword) {
      return { success: false, message: 'Passwords do not match' };
    }
    
    // Mock user data - in a real app, this would be created in the backend
    const newUser = {
      id: '1',
      name,
      email,
      // Don't store passwords in state in a real app
    };
    
    // Store in localStorage
    localStorage.setItem('user', JSON.stringify(newUser));
    
    // Update state
    setAuthState({
      isAuthenticated: true,
      user: newUser,
      loading: false,
    });
    
    return { success: true };
  };

  // Logout function
  const logout = () => {
    // Remove from localStorage
    localStorage.removeItem('user');
    
    // Update state
    setAuthState({
      isAuthenticated: false,
      user: null,
      loading: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};