import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { SideMenuContainer } from './styles';
import { menuAnimation } from '../../animations/global';
import { toggleMenu } from '../../actions/sideMenu';

const SideMenu = () => {
  const dispatch = useDispatch();
  const isSideMenuOpened = useSelector((state) => state.isSideMenuOpened);

  return (
    <SideMenuContainer
      className={isSideMenuOpened ? 'opened' : 'closed'}
      variants={menuAnimation}
      animate={isSideMenuOpened ? 'show' : 'hidden'}
      initial="hidden"
    >
      <Link href="/experience">
        <a onClick={() => dispatch(toggleMenu())}>Experience</a>
      </Link>
      <Link href="/projects">
        <a onClick={() => dispatch(toggleMenu())}>Projects</a>
      </Link>
      <Link href="/contact">
        <a onClick={() => dispatch(toggleMenu())}>Contact</a>
      </Link>
    </SideMenuContainer>
  );
};

export default SideMenu;
