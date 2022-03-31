// make portfolio page
import React from 'react';
import {
  VStack,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Avatar,
  Button,
} from '@chakra-ui/react';
import { items } from '../../../Const/itemsChangePage';
import avatar from '../../../assets/avatar.jpg';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/');
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
          <Breadcrumb spacing="8px" pl={10} pb={5}>
            <BreadcrumbItem key={index}>
              <BreadcrumbLink as={Link} to={item.path}>
                {item.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        ))}
        <Button
          variantColor="teal"
          variant="outline"
          size="sm"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </VStack>
      <VStack className="Home__Container">
        <Outlet />
      </VStack>
    </HStack>
  );
};

export default NavBar;
