import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { Container, Section } from '@components/global';

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <StyledContainer>
        <Grid>
          <h1>Skills and Tools</h1>
          <p>
            From the bootcamp, I have learned some amazing things including
            different technologies, good software practices, love of problem
            solving, clear communication skills, ability to work in an agile
            team and user centered development. <br />
            <br />
            However, the most valuable skill I've developed is learning how to
            learn. This feeds my passion for continuous learning and growth.
          </p>
          <SkillsGrid>
            <div>
              <h2>Languages</h2>
              <p>
                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>HTML</li>
                  <li>CSS / SCSS</li>
                  <li>C#</li>
                </ul>
              </p>
            </div>
            <div>
              <h2>Frontend</h2>
              <p>
                <ul>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Jest</li>
                  <li>Chakra UI</li>
                  <li>Styled Components</li>
                </ul>
              </p>
            </div>
            <div>
              <h2>Backend</h2>
              <p>
                <ul>
                  <li>ASP.NET Core</li>
                  <li>xUnit</li>
                  <li>NSubstitute / Moq</li>
                  <li>FluentAssertions</li>
                  <li>PostgreSQL</li>
                </ul>
              </p>
            </div>
            <div>
              <h2>Other</h2>
              <p>
                <ul>
                  <li>Git </li>
                  <li>GitHub</li>
                  <li>Postman</li>
                  <li>SOLID</li>
                  <li>TDD</li>
                </ul>
              </p>
            </div>
          </SkillsGrid>
        </Grid>
        <Art>
          <Image
            src="/images/art/learn_yourself.png"
            width="100%"
            height="100%"
            layout="responsive"
            alt="learn yourself"
          />
        </Art>
      </StyledContainer>
    </Section>
  );
};

const Grid = styled.div`
  display: grid;
  width: 60%;
  margin-left: 40%;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-left: 0;
    width: 100%;
    padding-top: 0;
  }

  h1,
  h2 {
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 48px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const Art = styled.div`
  width: 1000px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  right: 67.5%;

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    display: none;
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
`;

export default Skills;
