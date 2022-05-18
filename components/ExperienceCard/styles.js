import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Role = styled(motion.p)`
  text-align: center;
`;

export const Period = styled(motion.p)`
  text-align: center;
`;

export const Achievements = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
`;

export const Achievent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    white-space: nowrap;
  }
`;
