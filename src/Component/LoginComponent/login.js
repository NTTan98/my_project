import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Center,
  Container,
} from '@chakra-ui/react';
import { url } from '../../api/LoginUrl';
import { useNavigate } from 'react-router-dom';
//axios
import axios from 'axios';

const Login = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = () => setShow(!show);
  const data = {
    username: username,
    password: password,
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(url, data) //post data to server)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
      })
      .catch(err => {
        console.log(err);
      });
    setUsername('');
    setPassword('');
    navigate('/nav');
  };
  const handleChangeUser = e => {
    setUsername(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };
  const isErrorUserName = username === '';
  const isErrorPassword = password === '';
  const navigate = useNavigate();
  //redirect to navbar if login success
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/nav');
    }
  }, [navigate]);

  return (
    <Center h="100vh" m={0}>
      <Container maxW="sm">
        <FormControl isInvalid={isErrorUserName}>
          <FormLabel htmlFor="user">Username</FormLabel>
          <Input
            value={username}
            id="user"
            placeholder="Enter your username"
            w={300}
            onChange={handleChangeUser}
          />
          {!isErrorUserName ? (
            <FormHelperText>Enter the Username.</FormHelperText>
          ) : (
            <FormErrorMessage>Username is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isErrorPassword}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup size="md">
            <Input
              value={password}
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              w={300}
              onChange={handleChangePassword}
            />
            <InputRightElement pos="relative">
              <Button ml={10} size="sm" pos="absolute" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          {!isErrorPassword ? (
            <FormHelperText>Enter the Password.</FormHelperText>
          ) : (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          )}
          <Button
            mt={4}
            variantColor="teal"
            onClick={handleSubmit}
            isDisabled={isErrorPassword || isErrorUserName}
          >
            Login
          </Button>
        </FormControl>
      </Container>
    </Center>
  );
};

export default Login;
