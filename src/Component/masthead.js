import React from 'react';
import { Box, VStack, Heading, Image } from '@chakra-ui/react';
const Masthead = () => {
  return (
    <VStack h="300px" pb={5}>
      <Image
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        w="full"
        h="300px"
        // resizeMode="cover"
        src="../assets/masthead.png"
        alt="masthead image"
      />
      <Box flex={1} />
      <Heading color="white" p={6} size="xl">
        What's Up, Tan
      </Heading>
    </VStack>
  );
};

export default Masthead;
