import React, { useState } from 'react';
import {
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Flex,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import {
  ROUTER_ARRAY,
  EXPIRED_TIME_TOKEN,
  COOKIES_NAME,
  BASE_URL,
} from '../../bootstrap/constants';
import { functionCookie } from '../../utils/helpFunction';

const Login = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorUserName, setIsErrorUserName] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [isLoadingCheck, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);
  const data = {
    username: username,
    password: password,
  };
  const handleSubmit = e => {
    setIsLoading(true);
    if (username === '') {
      setIsErrorUserName(true);
    } else {
      setIsErrorUserName(false);
    }

    if (password === '') {
      setIsErrorPassword(true);
    } else {
      setIsErrorPassword(false);
    }
    if (username !== '' && password !== '') {
      e.preventDefault();
      axios
        .post(BASE_URL.URL_LOGIN, data)
        .then(res => {
          // Create token
          functionCookie.createCookie(
            COOKIES_NAME.TOKEN,
            res.data.token,
            EXPIRED_TIME_TOKEN
          );
          setIsLoading(false);
          navigate(ROUTER_ARRAY[1].path);
        })
        .catch(err => {
          if (err.response.status) {
            setIsErrorPassword(true);
            setIsErrorUserName(true);
            setIsLoading(false);
          }
        });
    }
  };
  const handleChangeUser = e => {
    setUsername(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };
  if (functionCookie.getCookie(COOKIES_NAME.TOKEN)) {
    return <Navigate to={ROUTER_ARRAY[1].path} />;
  }

  return (
    <Flex
      m={0}
      p={0}
      w="100%"
      h="100vh"
      direction="column"
      align="center"
      justify="center"
      border={'1px solid #e6e6e6'}
    >
      <Heading as="h1" size="lg" mb={4} textAlign="center" paddingTop={4}>
        Login
      </Heading>
      <Flex m={0} p={0} direction="column" align="center" justify="center">
        <FormControl isInvalid={isErrorUserName}>
          <FormLabel htmlFor="user" color={'white'}>
            Username
          </FormLabel>
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
            <InputRightElement
              children={
                <Button onClick={handleClick} bg="none">
                  {show ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              }
            ></InputRightElement>
          </InputGroup>
          {!isErrorPassword ? (
            <FormHelperText>Enter the Password.</FormHelperText>
          ) : (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          )}
          <Button
            mt={4}
            onClick={handleSubmit}
            mb={4}
            isLoading={isLoadingCheck}
          >
            Login
          </Button>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Login;
