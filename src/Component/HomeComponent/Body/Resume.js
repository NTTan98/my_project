import React from 'react';
import LogoHtml from '../../../assets/logohtml.svg';
import LogoCss from '../../../assets/logocss.svg';
import LogoSass from '../../../assets/logosass.svg';
import LogoJs from '../../../assets/logojs.svg';
import LogoReact from '../../../assets/logoreact.svg';

import { Heading } from '@chakra-ui/react';
import './style/Resume.scss';
const Resume = () => {
  return (
    <div className="Resume">
      <div className="Resume__Skill">
        <Heading as="h1" size="2xl">
          My Skills
        </Heading>
        <div className="Resume__Skills__List">
          <div class="Resume__Skill">
            <div class="Resume__Skill__Details">
              <span>HTML</span>
              <span>70%</span>
            </div>
            <div class="Resume__Skill__Bar">
              <div id="Resume__Skill__Html__Bar"></div>
            </div>
          </div>
          <div class="Resume__Skill">
            <div class="Resume__Skill__Details">
              <span>CSS</span>
              <span>60%</span>
            </div>
            <div class="Resume__Skill__Bar">
              <div id="Resume__Skill__Css__Bar"></div>
            </div>
          </div>
          <div class="Resume__Skill">
            <div class="Resume__Skill__Details">
              <span>SASS</span>
              <span>60%</span>
            </div>
            <div class="Resume__Skill__Bar">
              <div id="Resume__Skill__Sass__Bar"></div>
            </div>
          </div>
          <div class="Resume__Skill">
            <div class="Resume__Skill__Details">
              <span>JavaScrip</span>
              <span>50%</span>
            </div>
            <div class="Resume__Skill__Bar">
              <div id="Resume__Skill__Js__Bar"></div>
            </div>
          </div>
          <div class="Resume__Skill">
            <div class="Resume__Skill__Details">
              <span>ReactJs</span>
              <span>50%</span>
            </div>
            <div class="Resume__Skill__Bar">
              <div id="Resume__Skill__React__Bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
