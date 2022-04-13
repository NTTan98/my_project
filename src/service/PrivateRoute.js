import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTER_OBJECT } from '../bootstrap/constants';
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('auth');
  if (!token) {
    return <Navigate to={ROUTER_OBJECT[0].path} />;
  }
  return children;
};

export default PrivateRoute;
