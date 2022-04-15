import React from 'react';
import {
  Flex,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Avatar,
} from '@chakra-ui/react';
import avatar from '../../../assets/avatar.jpg';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher/ColorModeSwitcher';
import Logout from '../../LoginComponent/logout';
import { NavLink, Outlet } from 'react-router-dom';
import './style.scss';
import { ROUTER_NAVBAR, ACTIVE_STYLE } from '../../../bootstrap/constants';

const NavBar = () => {
  console.log(ACTIVE_STYLE.ACTIVE);
  return (
    <Flex w="100vw">
      <Box className="navbar">
        <Avatar
          borderRadius="full"
          boxSize="100px"
          src={avatar}
          alt="avatar"
          margin={5}
        />
        {ROUTER_NAVBAR.map((item, index) => (
          <Breadcrumb pl={8} py="13px" key={index} boxShadow>
            <BreadcrumbItem
              _hover={{
                boxShadow: '0px 0px 10px #00bfff',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              <BreadcrumbLink
                as={NavLink}
                to={item.path}
                padding="0.5rem"
                _hover={{
                  textDecoration: 'none',
                }}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                _focus={{
                  boxShadow: 'none',
                }}
                style={({ isActive }) => {
                  if (isActive) {
                    return ACTIVE_STYLE.ACTIVE;
                  }
                  return ACTIVE_STYLE.INACTIVE;
                }}
              >
                {item.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        ))}
        <Breadcrumb py="13px" pl={8} pt={2}>
          <Logout />
        </Breadcrumb>
        <Breadcrumb pl={8} pb={5}>
          <ColorModeSwitcher />
        </Breadcrumb>
      </Box>
      <Box className="content__nav" flex="1">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default NavBar;
