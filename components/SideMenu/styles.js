import { motion } from 'framer-motion';
import styled from 'styled-components';
import { MainBackground } from '../../styles/GlobalStyle';

export const SideMenuContainer = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 3rem;
  background: ${MainBackground};
  z-index: 100;

  @media screen and (max-width: 568px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    font-size: 1.4rem;

    &.closed {
      transform: translateX(100%);
    }
  }
`;
