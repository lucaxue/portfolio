import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { Section, Container } from '@components/global';

const PROJECTS = [
  {
    name: 'Boost',
    description: 'An exercise focused event making app',
    link: 'https://boostapp.netlify.app',
    github: 'https://github.com/lucaxue/boost-app-front-end',
  },
];

const Projects: React.FC = () => (
  <Section id="projects" accent>
    <Container style={{ position: 'relative' }}>
      <Grid>
        <h1>My Projects</h1>
        <p>
          Some words again and again Some words again and again
          <br />
          Some words again and again Some words again and again
          <br />
          Some words again and again Some words again and again
          <br />
          Some words again and again Some words again and again
          <br />
          Some words again and again Some words again and again
          <br />
          Some words again and again Some words again and again
          <br />
          Some words again and again Some words again and again
          <br />
          Some words again and again Some words again and again
          <br />
          Some words again and again Some words again and again
          <br />
          Some words again and again Some words again and again
          <br />
          Some words again and again Some words again and again
          <br />
          Some words again and again Some words again and again
          <br />
          Some words again and again Some words again and again
          <br />
          Some words again and again Some words again and again
          <br />
        </p>
      </Grid>
      <Art>
        <Image
          src="/images/art/build.png"
          height="100%"
          width="100%"
          layout="responsive"
        />
      </Art>
      <ArtMobile>
        <Image
          src="/images/art/build.png"
          height="100%"
          width="100%"
          layout="responsive"
        />
      </ArtMobile>
    </Container>
  </Section>
);

const Grid = styled.div`
  display: grid;
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    display: block;
  }
`;

export default Projects;
