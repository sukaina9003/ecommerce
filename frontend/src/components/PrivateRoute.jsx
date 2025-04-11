import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Check if the user is authenticated

  // If the user is not authenticated, redirect to the login page
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
