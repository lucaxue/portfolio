import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { Container, Section } from '@components/global';

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <Container style={{ position: 'relative' }}>
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
                  <ListItem>JavaScript</ListItem>
                  <ListItem>TypeScript</ListItem>
                  <ListItem>HTML</ListItem>
                  <ListItem>CSS / SCSS</ListItem>
                  <ListItem>C#</ListItem>
                </ul>
              </p>
            </div>
            <div>
              <h2>Frontend</h2>
              <p>
                <ul>
                  <ListItem>React.js</ListItem>
                  <ListItem>Next.js</ListItem>
                  <ListItem>Jest</ListItem>
                  <ListItem>Chakra UI</ListItem>
                  <ListItem>Styled Components</ListItem>
                </ul>
              </p>
            </div>
            <div>
              <h2>Backend</h2>
              <p>
                <ul>
                  <ListItem>ASP.NET Core</ListItem>
                  <ListItem>xUnit</ListItem>
                  <ListItem>NSubstitute / Moq</ListItem>
                  <ListItem>FluentAssertions</ListItem>
                  <ListItem>PostgreSQL</ListItem>
                </ul>
              </p>
            </div>
            <div>
              <h2>Other</h2>
              <p>
                <ul>
                  <ListItem>Git </ListItem>
                  <ListItem>GitHub</ListItem>
                  <ListItem>Postman</ListItem>
                  <ListItem>SOLID</ListItem>
                  <ListItem>TDD</ListItem>
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
      </Container>
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

const ListItem = styled.li`
  cursor: default;
  transition: 0.2s;
  &:hover {
    color: ${(props) => props.theme.color.black.regular};
  }
`;

export default Skills;
