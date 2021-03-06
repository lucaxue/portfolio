import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import GithubIcon from '@public/icons/github.svg';
import TwitterIcon from '@public/icons/twitter.svg';
import LinkedInIcon from '@public/icons/linkedin.svg';
import CodewarsIcon from '@public/icons/codewars.svg';

const SOCIAL = [
  {
    Icon: GithubIcon,
    link: 'https://github.com/lucaxue',
  },
  {
    Icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/luca-xue/',
  },
  {
    Icon: TwitterIcon,
    link: 'https://twitter.com/luca_xue',
  },
  {
    Icon: CodewarsIcon,
    link: 'https://www.codewars.com/users/lucaxue',
  },
];

const Footer: React.FC = () => (
  <FooterWrapper>
    <StyledContainer>
      <Copyright>
        <h2>Luca Xue</h2>

        <span>
          Illustrations from
          {` `}
          <ExternalLink href="https://absurd.design/">
            absurd.design
          </ExternalLink>
        </span>
      </Copyright>
      <SocialIcons>
        {SOCIAL.map(({ Icon, link }) => (
          <ExternalLink key={link} href={link}>
            <Icon />
          </ExternalLink>
        ))}
      </SocialIcons>
    </StyledContainer>
  </FooterWrapper>
);

const SocialIcons = styled.div`
  display: flex;

  svg {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${(props) => props.theme.font.secondary};
  ${(props) => props.theme.font_size.small};
  color: ${(props) => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
    transition: 0.2s;
    &:hover {
      font-weight: 600;
    }
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
