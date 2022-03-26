import React from 'react';
import Link from 'next/link';
import { HeaderContainer, Logo, Nav } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <Logo>Nikita Stepanov</Logo>
        </a>
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
