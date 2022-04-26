import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Image, Flex, Box } from '@chakra-ui/react';
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
          <Box
            as={Link}
            to={item.path}
            key={item.name}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              {...RESPONSIVE_CONFIG.PORTFOLIO_CONFIG.FLEX_CONFIG
                .link_item_config}
              src={item.name === 'Todo' ? TodoImage : WeatherImage}
              alt={item.name}
              className="menu__Port__Image"
            />
            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {item.name === 'Todo' ? 'Todo' : 'Weather'} App
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default MenuPort;
