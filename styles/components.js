import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainContainer = styled(motion.main)`
  min-height: 90vh;
  max-width: 720px;
  margin: 0 auto;
  padding: 1rem 2rem;
`;

export const PageTitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 2.2rem;
`;

export const Hide = styled(motion.div)`
  overflow: hidden;
`;
