import React from 'react';
import Link from 'next/link';
import { HeaderContainer, Logo, Nav } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>Nikita Stepanov</Logo>
      </Link>
      <Nav>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
