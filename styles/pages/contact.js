import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LinksSection = styled(motion.section)`
  margin: 0 auto;
  max-width: 460px;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const MyPhoto = styled(motion.div)`
  margin: 0 auto;
  max-width: 220px;
  max-height: 220px;
  margin-bottom: 1.5rem;

  img {
    border-radius: 50%;
  }
`;
