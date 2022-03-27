import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectCardStyled = styled(motion.a)`
  width: 100%;
  padding: 1.5rem 1rem;
  color: #333333;
  border-radius: 1rem;
  background: linear-gradient(180deg, rgb(255, 255, 255), rgb(230, 230, 230));
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProjectTitle = styled(motion.h3)`
  text-align: center;
`;

export const ProjectDescription = styled(motion.p)``;

export const ProjectCover = styled(motion.div)`
  img {
    border-radius: 1rem;
  }
`;
