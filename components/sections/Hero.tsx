import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Hero: React.FC = () => (
  <HeroWrapper id="me">
    <Container>
      <Grid>
        <Art>
          <div>
            <Image
              src="/images/art/lightbulb_man.png"
              height="100%"
              width="100%"
              layout="responsive"
              alt="lightbulb man"
            />
          </div>
        </Art>
        <Text>
          <h1>Hi, I'm Luca.</h1>
          <br />
          <h2>
            I turn ideas <br />
            into solutions.
          </h2>
          <br />
          <p>
            <StyledExternalLink href="https://github.com/lucaxue">
              Say hi! &nbsp;&#x2794;
            </StyledExternalLink>
          </p>
        </Text>
      </Grid>
    </Container>
  </HeroWrapper>
);

const HeroWrapper = styled.header`
  background-color: ${(props) => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 130%;
    margin-bottom: -5%;

    @media (max-width: ${(props) => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 200px;
  margin-left: -50px;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;
    margin-left: 0;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.color.black.regular};
  }
`;

export default Hero;
