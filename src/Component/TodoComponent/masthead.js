import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
const Masthead = props => {
  const { title } = props;
  return (
    //make header a box
    <Box textAlign="center" pt="4rem" pb="2rem">
      <Heading as="h1" size="lg" fontWeight="bold">
        {title}
      </Heading>
    </Box>
  );
};

export default Masthead;
