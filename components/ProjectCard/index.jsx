import Image from 'next/image';

import { cardAnimation } from '../../animations/global';
import { ProjectCardStyled, ProjectTitle, ProjectDescription, ProjectCover } from './styles';

const ProjectCard = ({ project }) => (
  <ProjectCardStyled
    href={project.href}
    target="_blank"
    rel="noopener noreferrer"
    variants={cardAnimation}
    whileHover={{ rotateZ: -0.5 }}
  >
    <ProjectTitle>{project.title}</ProjectTitle>
    <ProjectDescription>{project.description}</ProjectDescription>
    <ProjectCover>
      <Image src={project.image} alt={project.title} />
    </ProjectCover>
  </ProjectCardStyled>
);

export default ProjectCard;
