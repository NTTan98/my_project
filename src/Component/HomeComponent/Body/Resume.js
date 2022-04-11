import React from 'react';

import { Heading, Text, Box } from '@chakra-ui/react';
import './style/Resume.scss';
const Skills = [
  {
    name: 'HTML',
    value: 70,
    id: 'Resume__Skill__Html__Bar',
  },
  {
    name: 'CSS',
    value: 60,
    id: 'Resume__Skill__Css__Bar',
  },
  {
    name: 'SASS',
    value: 60,
    id: 'Resume__Skill__Sass__Bar',
  },
  {
    name: 'JavaScript',
    value: 50,
    id: 'Resume__Skill__Js__Bar',
  },
  {
    name: 'ReactJs',
    value: 50,
    id: 'Resume__Skill__React__Bar',
  },
];

const Resume = () => {
  return (
    <div className="Resume">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="Resume__Skill">
        <Heading as="h1" size="2xl">
          Skills
        </Heading>
        <div className="Resume__Skill__Decoration"></div>
        <div className="Resume__Skills__List">
          {Skills.map(skill => (
            <div className="Resume__Skill">
              <div className="Resume__Skill__Details">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="Resume__Skill__Bar">
                <div id={skill.id}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Resume__Education">
        <Heading as="h1" size="2xl">
          Education
        </Heading>
        <div className="Resume__Education__Decoration"></div>
        <div className="Resume__Education__TimeLine">
          <div className="Resume__Education__TimeLine__Container Left">
            <Box className="Resume__Education__TimeLine__Content">
              <Heading>2019 - 2020</Heading>
              <Text>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </Box>
          </div>
          <div className="Resume__Education__TimeLine__Container Right">
            <Box className="Resume__Education__TimeLine__Content">
              <Heading>2019 - 2020</Heading>
              <Text>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
