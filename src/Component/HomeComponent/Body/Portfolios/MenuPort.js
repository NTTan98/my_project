import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Image, Flex, Container } from '@chakra-ui/react';
import TodoImage from '../../../../assets/todo.jpg';
import WeatherImage from '../../../../assets/weather.jpg';

import { ROUTER_PORTFOLIO } from '../../../../bootstrap/constants';

const MenuPort = () => {
  return (
    <Container
      m={0}
      maxW="100vw"
      h="100vh"
      p={{
        lg: '0',
        md: '0',
        sm: '16px',
        '2sm': '16px',
      }}
      pt={{
        lg: '0',
        md: '0',
        sm: '68px',
        '2sm': '68px',
      }}
      className="Animation"
    >
      <Heading
        as="h1"
        size="2xl"
        pt={4}
        textAlign="center"
        fontWeight="bold"
        fontStyle="italic"
        textDecoration="underline teal"
        mb={'2rem'}
      >
        PORTFOLIO
      </Heading>
      <Flex
        justify={'space-around'}
        align="center"
        direction={{
          lg: 'row',
          md: 'column',
          sm: 'column',
          '2sm': 'column',
        }}
      >
        {ROUTER_PORTFOLIO.map(item => (
          <Link to={item.path} key={item.name}>
            <Image
              mb={'2rem'}
              borderRadius={{
                lg: '40px',
                md: '40px',
                sm: '40px',
                '2sm': '50%',
              }}
              boxSize={{
                lg: '400px',
                md: '350px',
                sm: '250px',
                '2sm': '150px',
              }}
              objectFit="cover"
              src={item.name === 'Todo' ? TodoImage : WeatherImage}
              alt={item.name}
              className="menu__Port__Image"
              _hover={{
                transform: 'scale(1.1)',
                opacity: '0.8',
              }}
            />
          </Link>
        ))}
      </Flex>
    </Container>
  );
};

export default MenuPort;
