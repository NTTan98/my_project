import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Image, Flex } from '@chakra-ui/react';
import TodoImage from '../../../../assets/todo.jpg';
import WeatherImage from '../../../../assets/weather.jpg';
import { RESPONSIVE_CONFIG } from '../../../../utils/config';
import { ROUTER_PORTFOLIO } from '../../../../bootstrap/constants';

const MenuPort = () => {
  return (
    <Flex {...RESPONSIVE_CONFIG.CONTAINER_FLEX_CONFIG}>
      <Heading {...RESPONSIVE_CONFIG.HEADING_CONFIG}>PORTFOLIO</Heading>
      <Flex {...RESPONSIVE_CONFIG.PORTFOLIO_CONFIG.FLEX_CONFIG}>
        {ROUTER_PORTFOLIO.map(item => (
          <Link to={item.path} key={item.name}>
            <Image
              {...RESPONSIVE_CONFIG.PORTFOLIO_CONFIG.FLEX_CONFIG
                .LINK_ITEM_CONFIG}
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
    </Flex>
  );
};

export default MenuPort;
