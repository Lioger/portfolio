import Head from 'next/head';

import ProjectCard from './../components/ProjectCard';
import { MainContainer } from './../styles/components';
import { ProjectsSection } from './../styles/pages/projects';
import { pageAnimation } from '../animations/global';

import projects from '../utils/projects';

const Works = () => {
  return (
    <>
      <Head>
        <title>PROJECTS | NIKITA STEPANOV</title>
      </Head>
      <MainContainer>
        <ProjectsSection variants={pageAnimation} initial="hidden" animate="show" exit="exit">
          {projects?.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </ProjectsSection>
      </MainContainer>
    </>
  );
};

export default Works;
