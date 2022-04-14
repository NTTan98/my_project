import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Image, Flex } from '@chakra-ui/react';
import TodoImage from '../../../../assets/todo.jpg';
import WeatherImage from '../../../../assets/weather.jpg';

import './style.scss';
import { ROUTER_PORTFOLIO } from '../../../../bootstrap/constants';

const MenuPort = () => {
  return (
    <div className="Menu__Port Animation">
      <Heading as="h1" size="2xl">
        Portfolio
      </Heading>
      <div className="Menu__Port__Decoration"></div>
      <Flex justify={'space-around'} align="center">
        {ROUTER_PORTFOLIO.map(item => (
          <Link to={item.path} key={item.name}>
            <Image
              mt={'2rem'}
              borderRadius="40px"
              boxSize="400px"
              objectFit="cover"
              src={item.name === 'Todo' ? TodoImage : WeatherImage}
              alt={item.name}
              className="menu__Port__Image"
            />
          </Link>
        ))}
      </Flex>
    </div>
  );
};

export default MenuPort;
