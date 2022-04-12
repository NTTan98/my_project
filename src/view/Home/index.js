import React from 'react';

import { useRoutes } from 'react-router-dom';
import { ROUTER_OBJECT } from '../../bootstrap/constants';
// Private Route

const Home = () => {
  let element = useRoutes(ROUTER_OBJECT);
  return <div>{element}</div>;
};

export default Home;
