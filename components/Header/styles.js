import styled from 'styled-components';

export const HeaderContainer = styled.header`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 0 5%;
`;

export const Logo = styled.div`
  font-family: 'Hurricane', cursive;
  font-size: 2.4rem;
  cursor: pointer;

  @media screen and (max-width: 420px) {
    font-size: 1.8rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;

  @media screen and (max-width: 568px) {
    display: none;
  }
`;

export const BurgerIcon = styled.div`
  display: none;
  grid-gap: 6px;
  cursor: pointer;
  z-index: 101;

  .rect {
    width: 32px;
    height: 3px;
    background-color: white;
    border-radius: 8px;
    transition: all 0.75s;
  }

  &.active {
    .rect_top {
      transform: rotate(45deg) translateY(13px);
    }
    .rect_mid {
      width: 0;
      opacity: 0;
    }
    .rect_low {
      transform: rotate(-45deg) translateY(-13px);
    }
  }

  @media screen and (max-width: 568px) {
    display: grid;
  }
`;
