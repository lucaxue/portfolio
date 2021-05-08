import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { Section, Container } from '@components/global';

const Projects: React.FC = () => (
  <Section id="projects" accent>
    <Container style={{ position: 'relative' }}>
      <h1>My Projects</h1>
      <p>
        Some words again and again Some words again and again Some words again
        and again Some words again and again Some words again and again Some
        words again and again Some words again and again Some words again and
        again Some words again and again Some words again and again Some words
        again and again Some words again and again
      </p>
      <Art>
        <Image
          src="/images/art/build.png"
          height="100%"
          width="100%"
          layout="responsive"
        />
      </Art>
      <ArtMobile>
        <Image src="/images/art/build.png" height="100%" width="100%" />
      </ArtMobile>
    </Container>
  </Section>
);

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
