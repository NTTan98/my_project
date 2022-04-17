import React from 'react';
import Avatar from '../../../assets/avatar.jpg';
import {
  Heading,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Button,
  Container,
  Flex,
  Box,
  Image,
} from '@chakra-ui/react';
const About = () => {
  return (
    <Container
      m={0}
      p={{
        lg: '0',
        md: '0',
        sm: '16px',
        '2sm': '16px',
      }}
      pt={{
        lg: '0',
        md: '0',
        sm: '68px',
        '2sm': '68px',
      }}
      maxW="100vw"
      h="100vh"
      className="Animation"
    >
      <Heading
        as="h1"
        size="2xl"
        pt={4}
        textAlign="center"
        fontWeight="bold"
        fontStyle="italic"
        textDecoration="underline teal"
      >
        ABOUT ME
      </Heading>
      <Flex
        justify="space-evenly"
        align="center"
        pt="4rem"
        direction={{
          lg: 'row',
          md: 'column',
          sm: 'column',
          '2sm': 'column',
        }}
      >
        <Box>
          <Image
            display={{
              lg: 'block',
              md: 'block',
              sm: 'block',
              '2sm': 'block',
            }}
            src={Avatar}
            alt="avatar"
            objectFit="cover"
            boxSize={{
              lg: '500px',
              md: '200px',
              sm: '100px',
              '2sm': '100px',
            }}
            borderRadius="50px"
          />
        </Box>
        <Flex
          direction="column"
          maxW={{
            lg: '600px',
            md: '600px',
            sm: 'none',
            '2sm': 'none',
          }}
          align={{
            lg: 'normal',
            md: 'normal',
            sm: 'center',
            '2sm': 'center',
          }}
        >
          <Heading
            as="h2"
            size="xl"
            textAlign={{
              lg: 'left',
              md: 'center',
              sm: 'center',
              '2sm': 'center',
            }}
          >
            I am Nguyen Thanh Tan
          </Heading>
          <Text
            fontSize="lg"
            textAlign={{
              lg: 'left',
              md: 'center',
              sm: 'center',
              '2sm': 'center',
            }}
          >
            Im a Front-End developer. I love to learn new things and am
            passionate about web development.
          </Text>
          <TableContainer
            display={{
              lg: 'block',
              md: 'block',
              sm: 'none',
              '2sm': 'none',
            }}
          >
            <Table variant="unstyled">
              <Tbody>
                <Tr>
                  <Td>Full Name</Td>
                  <Td>: Nguyen Thanh Tan</Td>
                </Tr>
                <Tr>
                  <Td>Age</Td>
                  <Td>: 24 Years Old</Td>
                </Tr>
                <Tr>
                  <Td>Nationality</Td>
                  <Td>: Viet Nam</Td>
                </Tr>
                <Tr>
                  <Td>Address</Td>
                  <Td>: 20 Street 13, An Phu Ward, Thu Duc City</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Button
            colorScheme="teal"
            variant="outline"
            maxW="160px"
            mt={{
              lg: '0',
              md: '0',
              sm: '30px',
              '2sm': '30px',
            }}
          >
            Download my CV
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default About;
