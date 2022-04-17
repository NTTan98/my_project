import React from 'react';
import Avatar from '../../../assets/avatar.jpg';
import { Flex, Image, Heading, Box, Text, Link, Icon } from '@chakra-ui/react';
import { SOCIAL_LOGO } from '../../../bootstrap/constants';
const Home = () => {
  return (
    <Flex
      maxW="100vw"
      h="100vh"
      direction={{
        lg: 'row',
        md: 'column',
        sm: 'column',
        '2sm': 'column',
      }}
      align="center"
      // justify="space-around"
      justify={{
        lg: 'space-around',
        md: 'center',
        sm: 'center',
        '2sm': 'center',
      }}
      className="Animation"
    >
      <Box
        className="Home__Avt"
        boxSize={{
          lg: '500px',
          md: '200px',
          sm: '200px',
          '2sm': '200px',
        }}
      >
        <Image
          src={Avatar}
          alt="avatar"
          objectFit="cover"
          boxSize={{
            lg: '500px',
            md: '200px',
            sm: '200px',
          }}
        />
      </Box>
      <Flex m={0} direction="column" align="center">
        <Heading
          as="h1"
          fontSize={{
            lg: '3rem',
            md: '3rem',
            sm: '2.5rem',
            '2sm': '2rem',
          }}
          fontWeight="bold"
          fontStyle="italic"
          textAlign="center"
          p={2}
        >
          NGUYEN THANH TAN
        </Heading>
        <Text
          fontSize={{
            lg: '1.5rem',
            md: '1.5rem',
            sm: '1.5rem',
            '2sm': '1rem',
          }}
          fontStyle="italic"
          textAlign="center"
        >
          Im a Front-End developer, I love to learn new things and
        </Text>
        <Text
          fontSize={{
            lg: '1.5rem',
            md: '1.5rem',
            sm: '1.5rem',
            '2sm': '1rem',
          }}
          fontStyle="italic"
          textAlign="center"
        >
          am passionate about web development.
        </Text>
        <Flex w="100%" p={4} justify="space-evenly">
          {SOCIAL_LOGO.map((item, index) => (
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              _focus={{
                boxShadow: 'none',
              }}
            >
              <Icon
                as={item.as}
                w="2rem"
                h="2rem"
                _hover={{
                  color: item.color,
                  transform: 'translateY(-5px) scale(1.1)',
                  animation: '$bounceIn 0.5s ease-in-out',
                }}
              />
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
