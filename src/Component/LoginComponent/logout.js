import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Button, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/');
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
