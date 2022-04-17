import { Container } from '@chakra-ui/react';
import React from 'react';

import { useRoutes } from 'react-router-dom';
import { ROUTER_OBJECT } from '../../bootstrap/constants';
// Private Route

const Home = () => {
  let element = useRoutes(ROUTER_OBJECT);
  return (
    <Container maxW="100%" p={0} m={0}>
      {element}
    </Container>
  );
};

export default Home;
