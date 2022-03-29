// make portfolio page
import React from 'react';
import {
  VStack,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Avatar,
} from '@chakra-ui/react';
import avatar from '../../../assets/avatar.jpg';
import { Link, Route, Routes } from 'react-router-dom';
const NavBar = props => {
  const { items } = props;
  console.log(items);
  return (
    <HStack>
      <VStack spacing={4} h="100vh" align="flex-start">
        <Avatar
          borderRadius="full"
          boxSize="100px"
          src={avatar}
          alt="avatar"
          margin={5}
        />
        {items.map((item, index) => (
          <Breadcrumb spacing="8px" pl={10} pb={5}>
            <BreadcrumbItem key={index}>
              <BreadcrumbLink as={Link} to={item.path}>
                {item.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        ))}
      </VStack>
      <VStack className="Home__Container">
        <Routes>
          {items.map(item => (
            <Route
              className="Route"
              path={item.path}
              element={item.element}
              key={item.name}
            />
          ))}
        </Routes>
      </VStack>
    </HStack>
  );
};

export default NavBar;
