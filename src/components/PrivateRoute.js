import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, user }) => {
  return user ? element : <Navigate to="blood-donation" />;
};

export default PrivateRoute;
