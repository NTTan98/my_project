import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Button, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { COOKIES_NAME, ROUTER_OBJECT } from '../../bootstrap/constants';
import { functionCookie } from '../../utils/helpFunction';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    functionCookie.deleteCookie(COOKIES_NAME.TOKEN);
    navigate(ROUTER_OBJECT[0].path);
  };
  return (
    <div>
      <Button
        style={{
          backgroundColor: '#ff0000',
          color: '#fff',
          borderRadius: '10px',
          fontSize: '14px',
          fontWeight: 'bold',
          padding: '10px',
        }}
        variant="outline"
        size="sm"
        onClick={handleLogout}
        leftIcon={<Icon as={FiLogOut} />}
      >
        LOGOUT
      </Button>
    </div>
  );
};

export default Logout;
