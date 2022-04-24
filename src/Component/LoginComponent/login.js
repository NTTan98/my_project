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
  Container,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Icon,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon, QuestionIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import {
  ROUTER_ARRAY,
  EXPIRED_TIME_TOKEN,
  COOKIES_NAME,
  BASE_URL,
} from '../../bootstrap/constants';
import ReactLoading from 'react-loading';
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
    if (username === '') {
      setIsErrorUserName(true);
      setIsLoading(false);
    } else {
      setIsErrorUserName(false);
      setIsLoading(true);
    }

    if (password === '') {
      setIsErrorPassword(true);
      setIsLoading(false);
    } else {
      setIsErrorPassword(false);
      setIsLoading(true);
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
  console.log(isLoadingCheck);
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
    <Container
      m={0}
      p={0}
      maxW="100%"
      h="100vh"
      bgImage="linear-gradient(to top, #00467f, #a5cc82)"
    >
      <Flex h="100vh" justify="center" align="center" color={'white'}>
        <Flex
          m={0}
          p={4}
          h="340px"
          direction="column"
          align="center"
          justify="center"
          borderRadius={10}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
          border={'2px solid #e6e6e6'}
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
                <FormHelperText color={'white'}>
                  Enter the Username.
                </FormHelperText>
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
                  zIndex={0}
                  children={
                    <Button
                      onClick={handleClick}
                      bg="none"
                      boxShadow="none"
                      outline="none"
                      _hover={{
                        bg: 'none',
                      }}
                      _focus={{
                        boxShadow: 'none',
                      }}
                    >
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  }
                ></InputRightElement>
              </InputGroup>
              {!isErrorPassword ? (
                <FormHelperText color={'white'}>
                  Enter the Password.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Password is required.</FormErrorMessage>
              )}
              <Button
                mt={4}
                onClick={handleSubmit}
                mb={4}
                textColor="black"
                bg="white"
                pos={'relative'}
              >
                Login
              </Button>
              <Popover>
                <PopoverTrigger>
                  <Button
                    position="fixed"
                    mt={4}
                    ml="175px"
                    _focus={{
                      outline: 'none',
                    }}
                  >
                    <QuestionIcon color="yellow" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Demo Account!</PopoverHeader>
                  <PopoverBody>
                    Username: thanhtan98 <br /> Password: 123
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </FormControl>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        {...(isLoadingCheck
          ? { background: 'rgba(0,0,0,0.5)' }
          : { display: 'none' })}
        justify="center"
        align="center"
        zIndex={1}
        position="fixed"
        top={0}
        h="100%"
        w="100%"
        m="auto"
      >
        <ReactLoading type="spin" color="#fff" height={100} width={100} />
      </Flex>
    </Container>
  );
};

export default Login;
