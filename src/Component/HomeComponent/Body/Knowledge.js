import React from 'react';

import {
  Heading,
  Container,
  Flex,
  Image,
  Progress,
  Button,
  Collapse,
  Box,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';
import { FaRegLightbulb } from 'react-icons/fa';
import { SKILLS_LOGO } from '../../../bootstrap/constants';

const Knowledge = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Container m={0} p={0} maxW="100vw" h="100vh" className="Animation">
      <Heading as="h1" size="2xl" pt={4} textAlign="center">
        KNOWLEDGE
        <Progress
          size="xs"
          isIndeterminate
          w="300px"
          m="auto"
          borderRadius="25px"
        />
      </Heading>
      <Button
        onClick={onToggle}
        _focus={{
          boxShadow: 'none',
        }}
        backgroundColor="transparent"
        border="none"
      >
        <Icon
          as={FaRegLightbulb}
          size="1.5rem"
          color={isOpen ? '#ffc107' : '#fff'}
        />
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        ></Box>
      </Collapse>
      <Flex
        mt={'2rem'}
        w={'100%'}
        className="Resume__Skill__Details"
        justify="space-around"
        align="center"
        wrap="wrap"
      >
        {SKILLS_LOGO.map(skill => (
          <Image
            key={skill.name}
            src={skill.src}
            alt={skill.name}
            boxSize="150px"
            borderRadius="50%"
            objectFit="cover"
            _hover={{
              boxShadow: '0px 0px 10px #00bfff',
              borderRadius: '50%',
              transform: ' scale(1.5) ',
              animation: '$scale-up-down 1s ease-in-out infinite',
            }}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default Knowledge;
