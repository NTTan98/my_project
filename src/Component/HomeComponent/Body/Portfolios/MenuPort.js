import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Flex } from '@chakra-ui/react';
import TodoImage from '../../../../assets/todo.jpg';
import WeatherImage from '../../../../assets/weather.jpg';

import './style.scss';

const MenuPort = () => {
  return (
    <div className="menu__Port">
      <Flex justify="space-around" align="center" h="100vh">
        <Link to="/header/portfolios/:id/todo">
          <Image src={TodoImage} className="menu__Port__Todo" />
        </Link>
        <Flex>
          <Link to="/header/portfolios/:id/weather">
            <Image src={WeatherImage} className="menu__Port__Weather" />
          </Link>
        </Flex>
      </Flex>
    </div>
  );
};

export default MenuPort;
