import React from 'react';
import { Navigate } from 'react-router-dom';
import { COOKIES_NAME, ROUTER_ARRAY } from '../bootstrap/constants';
import { functionCookie } from '../utils/helpFunction';
const PrivateRoute = ({ children }) => {
  const token = functionCookie.getCookie(COOKIES_NAME.TOKEN);
  if (!token) {
    return <Navigate to={ROUTER_ARRAY[0].path} />;
  }
  return children;
};

export default PrivateRoute;
