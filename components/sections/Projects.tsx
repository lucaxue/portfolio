import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const PROJECTS = [
  {
    name: 'Boost',
    description:
      'An event making app, where it allows the user to easily keep in touch with their friends through exercise.',
    image: '/images/projects/landing-page.png',
    link: 'https://boostapp.netlify.app',
    github: 'https://github.com/lucaxue/boost-app-frontend',
  },
];

const Projects: React.FC = () => (
  <Section id="projects" accent>
    <Container style={{ position: 'relative' }}>
      <Grid>
        <h1>Projects</h1>
        {PROJECTS.map(({ name, description, image, link, github }) => (
          <div key={name}>
            <h2>
              <ExternalLink href={github}>
                {name} <span id="arrow">&nbsp;&#x2794;</span>
              </ExternalLink>
            </h2>
            <p>{description}</p>
            <Preview>
              <Image
                src={image}
                height="55%"
                width="100%"
                layout="responsive"
                onClick={() => {
                  window.open(link);
                }}
              />
            </Preview>
          </div>
        ))}
      </Grid>
      <Art>
        <Image
          src="/images/art/build.png"
          height="100%"
          width="100%"
          layout="responsive"
          alt="build"
        />
      </Art>
      <ArtMobile>
        <Image
          src="/images/art/build.png"
          height="100%"
          width="100%"
          layout="responsive"
          alt="build"
        />
      </ArtMobile>
    </Container>
  </Section>
);

const Grid = styled.div`
  display: grid;
  width: 60%;

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    margin-bottom: 48px;
  }

  p {
    margin-bottom: 24px;
  }
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

const Preview = styled.figure`
  width: 500px;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
`;

export default Projects;
