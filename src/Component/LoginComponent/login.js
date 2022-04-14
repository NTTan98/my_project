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
  Center,
  Container,
} from '@chakra-ui/react';
import { url } from '../../api/LoginUrl';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import './login.scss';
import {
  ROUTER_OBJECT,
  EXPIRED_TIME_TOKEN,
  COOKIES_NAME,
} from '../../bootstrap/constants';
import { functionCookie } from '../../utils/helpFunction';
import AnimationStar from '../Animation/AnimationStar';

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
        .post(url, data)
        .then(res => {
          // Create token
          functionCookie.createCookie(
            COOKIES_NAME.TOKEN,
            res.data.token,
            EXPIRED_TIME_TOKEN
          );
          setIsLoading(false);
          navigate(ROUTER_OBJECT[1].path);
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
    return <Navigate to={ROUTER_OBJECT[1].path} />;
  }

  return (
    <div>
      <Center h="100vh" m={0} className="Login__Bg">
        <AnimationStar />
        <Container
          maxW="sm"
          boxShadow={
            '0px 0px 10px rgba(0, 0, 0, 0.1), 0px 0px 20px rgba(0, 0, 0, 0.1)'
          }
          borderRadius="10%"
        >
          <Heading
            as="h1"
            size="lg"
            mb={4}
            textAlign="center"
            paddingTop={4}
            color={'white'}
          >
            Login
          </Heading>
          <FormControl isInvalid={isErrorUserName}>
            <FormLabel htmlFor="user" color={'white'}>
              Username
            </FormLabel>
            <Input
              value={username}
              id="user"
              placeholder="Enter your username"
              w={300}
              color={'white'}
              onChange={handleChangeUser}
            />
            {!isErrorUserName ? (
              <FormHelperText>Enter the Username.</FormHelperText>
            ) : (
              <FormErrorMessage>Username is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isErrorPassword}>
            <FormLabel htmlFor="password" color={'white'}>
              Password
            </FormLabel>
            <InputGroup size="md">
              <Input
                value={password}
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                w={300}
                onChange={handleChangePassword}
                color={'white'}
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
              onClick={handleSubmit}
              mb={4}
              isLoading={isLoadingCheck}
            >
              Login
            </Button>
          </FormControl>
        </Container>
      </Center>
    </div>
  );
};

export default Login;
