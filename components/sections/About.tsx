import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { Section, Container } from '@components/global';

const About: React.FC = () => {
  return (
    <Section id="about">
      <Container>
        <Grid>
          <div>
            <h2>About me</h2>
            <p>Some stuff about me.</p>
          </div>
          <Art>
            <Image
              src="/images/art/fast.png"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </Art>
        </Grid>
        <Grid inverse>
          <Art>
            <Image
              src="/images/art/fast.png"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </Art>
          <div>
            <h2>About me</h2>
            <p>Some more stuff about me.</p>
          </div>
        </Grid>
      </Container>
    </Section>
  );
};

const Grid = styled.div<{ inverse?: boolean }>`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${(props) =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${(props) =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
