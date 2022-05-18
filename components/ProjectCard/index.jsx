import Image from 'next/image';

import { cardAnimation } from '../../animations/global';
import { CardStyled, CardTitle } from '../../styles/components';
import { ProjectDescription, ProjectCover } from './styles';

const ProjectCard = ({ project }) => (
  <CardStyled
    href={project.href}
    target="_blank"
    rel="noopener noreferrer"
    variants={cardAnimation}
    whileHover={{ rotateZ: -0.5 }}
  >
    <CardTitle>{project.title}</CardTitle>
    <ProjectDescription>{project.description}</ProjectDescription>
    <ProjectCover>
      <Image src={project.image} alt={project.title} />
    </ProjectCover>
  </CardStyled>
);

export default ProjectCard;
