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
import { Link, Outlet } from 'react-router-dom';
import './style.scss';
import { ROUTER_NAVBAR } from '../../../bootstrap/constants';

const NavBar = () => {
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
                as={Link}
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
