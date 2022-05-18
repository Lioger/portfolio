import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { HeaderContainer, Logo, Nav, BurgerIcon } from './styles';
import { toggleMenu } from '../../actions/sideMenu';

const Header = () => {
  const dispatch = useDispatch();
  const isSideMenuOpened = useSelector((state) => state.isSideMenuOpened);

  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <Logo>Nikita Stepanov</Logo>
        </a>
      </Link>
      <Nav>
        <Link href="/experience">
          <a>Experience</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </Nav>
      <BurgerIcon className={isSideMenuOpened && 'active'} onClick={() => dispatch(toggleMenu())}>
        <div className="rect rect_top" width="100" height="20"></div>
        <div className="rect rect_mid" width="100" height="20"></div>
        <div className="rect rect_low" width="100" height="20"></div>
      </BurgerIcon>
    </HeaderContainer>
  );
};

export default Header;
