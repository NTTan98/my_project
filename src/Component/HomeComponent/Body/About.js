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
  Flex,
  Box,
  Image,
} from '@chakra-ui/react';
import MyPDF from '../../../assets/Nguyen-Thanh-Tan-CV.pdf';
import { RESPONSIVE_CONFIG } from '../../../utils/config';
const About = () => {
  return (
    <Flex {...RESPONSIVE_CONFIG.CONTAINER_FLEX_CONFIG}>
      <Heading {...RESPONSIVE_CONFIG.HEADING_CONFIG}>ABOUT ME</Heading>
      <Flex {...RESPONSIVE_CONFIG.FLEX_CONFIG}>
        <Box>
          <Image
            src={Avatar}
            alt="avatar"
            objectFit="cover"
            {...RESPONSIVE_CONFIG.ABOUT_CONFIG.AVATAR_CONFIG}
          />
        </Box>
        <Flex
          direction="column"
          {...RESPONSIVE_CONFIG.ABOUT_CONFIG.FLEX_CONTENT_CONFIG}
        >
          <Heading
            as="h2"
            size="xl"
            {...RESPONSIVE_CONFIG.ABOUT_CONFIG.FLEX_CONTENT_CONFIG.text_align}
          >
            I am Nguyen Thanh Tan
          </Heading>
          <Text
            fontSize="lg"
            {...RESPONSIVE_CONFIG.ABOUT_CONFIG.FLEX_CONTENT_CONFIG.text_align}
          >
            Im a Front-End developer. I love to learn new things and am
            passionate about web development.
          </Text>
          <TableContainer
            {...RESPONSIVE_CONFIG.ABOUT_CONFIG.FLEX_CONTENT_CONFIG.table_config}
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
                  <Td>:Viet Nam</Td>
                </Tr>
                <Tr>
                  <Td>Address</Td>
                  <Td>: 20 Street 13, An Phu Ward, Thu Duc City</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Button
            as="a"
            href={MyPDF}
            target="_blank"
            download="Nguyen-Thanh-Tan-CV.pdf"
            colorScheme="teal"
            variant="outline"
            maxW="160px"
            {...RESPONSIVE_CONFIG.ABOUT_CONFIG.FLEX_CONTENT_CONFIG
              .button_config}
          >
            Download my CV
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
