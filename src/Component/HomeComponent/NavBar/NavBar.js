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
import { items } from '../../../Const/itemsChangePage';
import avatar from '../../../assets/avatar.jpg';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher/ColorModeSwitcher';
import Logout from '../../LoginComponent/logout';
import { Icon } from '@chakra-ui/icons';
import { FiMenu } from 'react-icons/fi';

import { NavLink, Outlet } from 'react-router-dom';

const NavBar = () => {
  let activeStyle = {
    boxShadow: '0px 0px 10px #00bfff',
    borderRadius: '10px',
  };

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
          <Breadcrumb spacing="8px" pl={8} key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink
                as={NavLink}
                to={item.path}
                padding="0.5rem"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                {item.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        ))}
        <Breadcrumb spacing="8px" pl={8} pt={2}>
          <Logout />
        </Breadcrumb>
        <Breadcrumb spacing="8px" pl={8} pb={5}>
          <ColorModeSwitcher />
        </Breadcrumb>
      </VStack>
      <VStack spacing={4} align="flex-start"></VStack>
      <VStack
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Outlet />
      </VStack>
    </HStack>
  );
};

export default NavBar;
