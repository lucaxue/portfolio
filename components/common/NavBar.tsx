import React, { useState } from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

import { Container } from '@components/global';
import MenuIcon from '@public/icons/menu.svg';

const NAV_ITEMS = ['About', 'Skills', 'Projects'];

const NavBar: React.FC = ({ ...props }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const getNavAnchorLink = (item: string) => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={closeMobileMenu}>
      {item}
    </AnchorLink>
  );

  const getNavList = (mobile: boolean = false) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map((item) => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map((navItem) => (
          <NavItem key={navItem}>{getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  return (
    <Nav {...props}>
      <StyledContainer>
        <Brand>
          <AnchorLink href="#me">Luca Xue</AnchorLink>
        </Brand>
        <Mobile>
          <button onClick={toggleMobileMenu} style={{ color: 'black' }}>
            <MenuIcon />
          </button>
        </Mobile>

        <Mobile hide>{getNavList()}</Mobile>
      </StyledContainer>
      <Mobile>
        {mobileMenuOpen && (
          <MobileMenu>
            <Container>{getNavList(true)}</Container>
          </MobileMenu>
        )}
      </Mobile>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 16px 0;
  background-color: ${(props) => props.theme.color.primary};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavListWrapper = styled.div<{ mobile: boolean }>`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`;

const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${(props) => props.theme.font.secondary};
  ${(props) => props.theme.font_size.small};

  a {
    text-decoration: none;
    opacity: 0.7;
    color: ${(props) => props.theme.color.black.regular};
  }

  &.active {
    a {
      opacity: 1;
      font-weight: 500;
    }
  }
`;

const MobileMenu = styled.div`
  width: 100%;
  background: ${(props) => props.theme.color.primary};
`;

const Brand = styled.div`
  font-family: ${(props) => props.theme.font.primary};
  ${(props) => props.theme.font_size.large};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Mobile = styled.div<{ hide?: boolean }>`
  display: none;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    display: block;
  }

  ${(props) =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.md}) {
      display: none;
    }
  `}
`;

export default NavBar;
