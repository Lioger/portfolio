export const pageAnimation = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.2 } },
  exit: { opacity: 0, y: 100, transition: { duration: 0.5 } },
};

export const textAnimation = {
  hidden: { y: '-100%' },
  show: { y: 0, transition: { type: 'spring', stiffness: 110 } },
};

export const cardAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', bounce: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const menuAnimation = {
  hidden: { opacity: 1, x: '-100%', transition: { type: 'spring', bounce: 0.05, duration: 0.7 } },
  show: { opacity: 1, x: 0, transition: { type: 'spring', bounce: 0.05, duration: 0.7 } },
}
