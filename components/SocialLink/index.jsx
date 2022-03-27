import Image from 'next/image';

import { textAnimation } from '../../animations/global';
import { Hide } from '../../styles/components';
import { LinkStyled } from './styles';

const SocialLink = ({ link }) => (
  <Hide>
    <LinkStyled href={link.href} target="_blank" rel="norefer noopener" variants={textAnimation}>
      <Image src={link.icon} alt={link.alt} width="36" height="36" />
      {link.title}
    </LinkStyled>
  </Hide>
);

export default SocialLink;
