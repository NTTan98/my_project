import React from 'react';
import {
  Container,
  Flex,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import avatar from '../../../assets/avatar.jpg';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher/ColorModeSwitcher';
import Logout from '../../LoginComponent/logout';
import { NavLink, Outlet } from 'react-router-dom';
import { ROUTER_NAVBAR, ACTIVE_STYLE } from '../../../bootstrap/constants';

const NavBar = () => {
  return (
    <Container p={0} m={0}>
      <Box
        className="navbar"
        h="100%"
        boxShadow="0 1px 5px rgba(0, 0, 0, 0.5)"
        pos="fixed"
        display={{
          lg: 'block',
          md: 'none',
          sm: 'none',
          '2sm': 'none',
        }}
      >
        <Avatar
          borderRadius="full"
          boxSize="100px"
          src={avatar}
          alt="avatar"
          margin={5}
        />
        {ROUTER_NAVBAR.map((item, index) => (
          <Breadcrumb pl={6} py="13px" key={index}>
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
        <Breadcrumb py="13px" pl={6} pt={2}>
          <Logout />
        </Breadcrumb>
        <Breadcrumb pl={6} pb={5}>
          <ColorModeSwitcher />
        </Breadcrumb>
      </Box>
      <Box
        display={{
          lg: 'none',
          md: 'flex',
          sm: 'flex',
          '2sm': 'flex',
        }}
        justifyContent="space-between"
        alignItems="center"
        w="100vw"
        pt={3}
        pl={3}
        pr={3}
        pos="fixed"
        zIndex={1}
      >
        <Menu
          _focus={{
            boxShadow: 'none',
            background: 'none',
          }}
        >
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            _focus={{
              boxShadow: 'none',
            }}
          />
          <MenuList p={2}>
            {ROUTER_NAVBAR.map((item, index) => (
              <MenuItem
                as={NavLink}
                to={item.path}
                key={index}
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
              </MenuItem>
            ))}
            <ColorModeSwitcher />
            <Logout />
          </MenuList>
        </Menu>
      </Box>
      <Box
        pl={{
          lg: '140px',
          md: '0',
          sm: '0',
        }}
        w="100vw"
      >
        <Outlet />
      </Box>
    </Container>
  );
};

export default NavBar;
