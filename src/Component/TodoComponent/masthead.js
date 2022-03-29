import React from 'react';
import { Box, VStack, Heading } from '@chakra-ui/react';
const Masthead = props => {
  const { title } = props;
  return (
    //make header a box
    <Box
      py={4}
      px={8}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={4}>
        <Heading as="h1" size="lg" fontWeight="bold">
          {title}
        </Heading>
      </VStack>
    </Box>
  );
};

export default Masthead;
