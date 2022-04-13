import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Flex } from '@chakra-ui/react';
import TodoImage from '../../../../assets/todo.jpg';
import WeatherImage from '../../../../assets/weather.jpg';

import './style.scss';
import { ROUTER_PORTFOLIO } from '../../../../bootstrap/constants';

const MenuPort = () => {
  return (
    <div className="menu__Port">
      <Flex justify="space-around" align="center" h="100vh">
        {ROUTER_PORTFOLIO.map(item => (
          <Link to={item.path} key={item.name}>
            <Image
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
