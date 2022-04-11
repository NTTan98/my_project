import React from 'react';
import Avatar from '../../../assets/avatar.jpg';
import './style/About.scss';
import {
  Heading,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Button,
} from '@chakra-ui/react';
const About = () => {
  return (
    <div className="About">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="About__Me">
        <Heading as="h1" size="2xl">
          ABOUT ME
        </Heading>
        <div className="About__Me__Decoration"></div>
        <div className="About__Me__Content">
          <div className="About__Me__Content__Avt">
            <img src={Avatar} alt="avatar" />
          </div>
          <div className="About__Me__Content__Info">
            <Heading as="h2" size="xl">
              I am Nguyen Thanh Tan
            </Heading>
            <Text fontSize="lg" pt="1rem">
              Im a Front-End developer, I love to learn new things and am
              passionate about web development.
            </Text>
            <TableContainer>
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
            <Button colorScheme="teal" variant="outline" mt="1rem">
              Download my CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
