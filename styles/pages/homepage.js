import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled(motion.section)`
  font-size: 1.1rem;
  line-height: 2rem;
  letter-spacing: 0.5px;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  padding-bottom: 3rem;
`;

export const Greetings = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 2.2rem;
`;

export const Keyword = styled.span`
  padding: 4px 8px;

  &.education {
    background-color: #2fa4ff;
  }
  &.stack {
    background-color: #219f94;
  }
  &.soft {
    background-color: #c65d7b;
  }
  &.extra {
    background-color: #d49b54;
  }
`;

export const Link = styled.a`
  color: #9ae6ff;
  padding: 1px;
  border-bottom: 1px solid #9ae6ff;

  &.bold {
    border-width: 2px;
  }
`;
