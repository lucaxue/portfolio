import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import ExternalLink from '@common/ExternalLink';
import { Container, Section } from '@components/global';

const PROJECTS = [
  {
    name: 'Boost',
    description:
      'An event making app, where it allows the user to easily keep in touch with their friends through exercise.',
    link: 'https://github.com/lucaxue/boost-app-frontend',
    technologies: [
      'React',
      'Auth0',
      'Chakra UI',
      'Leaflet',
      'Jest',
      'ASP.NET Core',
      'xUnit',
      'NSubstitute',
      'FluentAssertions',
      'PostgreSQL',
      'Heroku',
      'Netlify',
    ],
  },
  {
    name: 'Portfolio',
    description:
      'My personal portfolio page to display my interests, skills, and projects.',
    link: 'https://github.com/lucaxue/portfolio',
    technologies: ['React', 'TypeScript', 'Next SSG', 'Styled Components'],
  },
  {
    name: 'Bikes and Bond Dashboard',
    description:
      'A full-stack James Bond style dashboard app, where you can get recommended a mission with the best bike to complete it.',
    link: 'https://github.com/lucaxue/bikes-and-bond-dashboard',
    technologies: [
      'React',
      'Auth0',
      'CSS Modules',
      'ASP.NET Core',
      'xUnit',
      'Moq',
      'FluentAssertions',
      'PostgreSQL',
    ],
  },
  {
    name: 'Water Thyme',
    description: 'A simple plant watering reminder app.',
    link: 'https://github.com/lucaxue/water-thyme',
    technologies: [
      'React',
      'TypeScript',
      'Styled Components',
      'Firebase Auth + Database',
    ],
  },
];

const Projects: React.FC = () => (
  <Section id="projects" accent>
    <Container style={{ position: 'relative' }}>
      <h1>Projects</h1>
      <Grid>
        {PROJECTS.map(({ name, description, link, technologies }) => (
          <div key={name}>
            <h2>
              <ExternalLink href={link}>{name} &nbsp;&#x2794;</ExternalLink>
            </h2>
            <p>{description}</p>
            <TechWrapper>
              {technologies.map((tool) => (
                <Technology key={tool}>{tool}</Technology>
              ))}
            </TechWrapper>
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
  margin: 56px 0;
  display: grid;
  width: 60%;
  grid-gap: 48px;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 100%;
  }
`;

const Art = styled.figure`
  width: 1000px;
  margin: -80px 0;
  position: absolute;
  bottom: 0;
  left: 60%;

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
  margin-bottom: -30%;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    display: block;
  }
`;

const Technology = styled.p`
  border: solid #211e26 1px;
  border-radius: 2px;
  ${(props) => props.theme.font_size.xsmall};
  color: ${(props) => props.theme.color.black.regular};
  padding: 0 10px;
  margin: 0;
`;

const TechWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export default Projects;
