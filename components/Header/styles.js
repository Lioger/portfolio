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
  gap: 2rem;
`;
