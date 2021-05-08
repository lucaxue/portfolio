import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const About: React.FC = () => {
  return (
    <Section id="about">
      <Container>
        <Grid>
          <div>
            <h2>About me</h2>
            <p>
              Hello, I'm Luca, a keen learner who loves all things tech. <br />
              I have recently graduated from the School of Code and I am now
              starting my journey as a Software Developer at Suru Partners.
              <br />
              <br />
              Some technologies I have been recently working with include
              TypeScript, React, Next,
              C#, ASP.NET Core and PostgreSQL.
            </p>
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
              src="/images/art/learn_yourself.png"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </Art>
          <div>
            <h2>Learning never stops</h2>
            <p>
              From the bootcamp, I have learned some amazing things including
              some cool technologies, good software practices, love of problem
              solving, clear communication skills, ability to work in an agile
              team and user centered development. <br />
              <br />
              However, the most valuable skill I've developed is learning how to
              learn. This feeds my passion for continuous learning and tech.
            </p>
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

  a {
    text-decoration: none;
    color: inherit;
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
