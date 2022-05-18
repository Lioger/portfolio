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

export const CardStyled = styled(motion.a)`
  width: 100%;
  padding: 1.5rem 1rem;
  color: #333333;
  border-radius: 1rem;
  background: linear-gradient(180deg, rgb(255, 255, 255), rgb(230, 230, 230));
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardTitle = styled(motion.h3)`
  text-align: center;
`;
