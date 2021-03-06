import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import Image from '@common/Image';

const About: React.FC = () => {
  return (
    <StyledSection id="about">
      <Container>
        <Grid>
          <div>
            <h2>About me</h2>
            <p>
              Hello, I'm <strong>Luca</strong>, a keen learner who loves all
              things tech. I have recently graduated from the{' '}
              <strong>
                <ExternalLink href="https://www.schoolofcode.co.uk/">
                  School of Code
                </ExternalLink>
              </strong>{' '}
              and I am now starting my journey as a{' '}
              <strong>Software Developer</strong> at{' '}
              <strong>
                <ExternalLink href="http://surupartners.com/">
                  Suru Partners
                </ExternalLink>
              </strong>
              .
              <br />
              <br />
              I value being able to grow and learn, so that I can continue to
              contribute my best towards my work.
            </p>
          </div>
          <Art headshot>
            <Image
              src="/images/my_headshot.jpeg"
              width="400"
              height="400"
              layout="responsive"
              alt="Luca headshot"
              loading="lazy"
            />
          </Art>
        </Grid>
      </Container>
    </StyledSection>
  );
};

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 3fr 2fr;
  text-align: left;
  align-items: center;
  justify-items: center;
  margin: 105px;

  h2 {
    margin-bottom: 16px;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: 0.2s;
    &:hover {
      color: #2c2c2c;
    }
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;

    grid-gap: 64px;
    margin: 50px 0px;
  }
`;

const Art = styled.figure<{ headshot?: boolean }>`
  margin: 0;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-top: 3rem;
  }
  max-width: ${(props) => (props.headshot ? '300px' : '380px')};
  width: 100%;
`;

const StyledSection = styled(Section)`
  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding-bottom: 0;
  }
`;

export default About;
