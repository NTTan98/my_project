import React from 'react';
import Avatar from '../../../assets/avatar.jpg';
import { Flex, Image, Heading, Box, Text, Link, Icon } from '@chakra-ui/react';
import { RESPONSIVE_CONFIG } from '../../../utils/config';
import { SOCIAL_LOGO } from '../../../bootstrap/constants';
const Home = () => {
  return (
    <Flex
      {...RESPONSIVE_CONFIG.FLEX_CONFIG}
      maxW="100vw"
      h="100vh"
      className="Animation"
    >
      <Box {...RESPONSIVE_CONFIG.HOME_CONFIG.AVATAR_CONFIG}>
        <Image
          src={Avatar}
          alt="avatar"
          objectFit="cover"
          {...RESPONSIVE_CONFIG.HOME_CONFIG.IMAGE_CONFIG}
        />
      </Box>
      <Flex m={0} direction="column" align="center">
        <Heading
          as="h1"
          p={2}
          {...RESPONSIVE_CONFIG.HOME_CONFIG.HEADING_CONFIG}
        >
          NGUYEN THANH TAN
        </Heading>
        <Text {...RESPONSIVE_CONFIG.HOME_CONFIG.TEXT_CONFIG}>
          Im a Front-End developer, I love to learn new things and
        </Text>
        <Text {...RESPONSIVE_CONFIG.HOME_CONFIG.TEXT_CONFIG}>
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
