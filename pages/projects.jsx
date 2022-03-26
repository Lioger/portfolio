import Head from 'next/head';
import Image from 'next/image';
import { MainContainer } from './../styles/components';
import {
  ProjectsSection,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  ProjectCover,
} from './../styles/pages/projects';
import { pageAnimation, cardAnimation } from '../animations/global';

import waves1 from './../public/screenshots/waves1.jpg';
import capture1 from './../public/screenshots/capture1.jpg';
import ignite1 from './../public/screenshots/ignite1.jpg';

const Works = () => {
  return (
    <>
      <Head>
        <title>PROJECTS | NIKITA STEPANOV</title>
      </Head>
      <MainContainer>
        <ProjectsSection variants={pageAnimation} initial="hidden" animate="show" exit="exit">
          <ProjectCard
            href="https://lioger.github.io/waves"
            target="_blank"
            rel="noopener noreferrer"
            variants={cardAnimation}
          >
            <ProjectTitle>Waves 🌊</ProjectTitle>
            <ProjectDescription>
              React based music player. Simple but that's the beauty of it. Smooth animation, aesthetic design and
              relaxing music. Just breathe and relax.
            </ProjectDescription>
            <ProjectCover>
              <Image src={waves1} />
            </ProjectCover>
          </ProjectCard>
          <ProjectCard
            href="https://lioger.github.io/ignite"
            target="_blank"
            rel="noopener noreferrer"
            variants={cardAnimation}
          >
            <ProjectTitle>Ignite 🔥</ProjectTitle>
            <ProjectDescription>
              React based game library. Smooth animations, API usage and lots of info about games. Search for the one
              you want to know more about.
            </ProjectDescription>
            <ProjectCover>
              <Image src={ignite1} />
            </ProjectCover>
          </ProjectCard>
          <ProjectCard
            href="https://lioger.github.io/capture"
            target="_blank"
            rel="noopener noreferrer"
            variants={cardAnimation}
          >
            <ProjectTitle>Capture 🎬</ProjectTitle>
            <ProjectDescription>
              React based portfolio for the videographer team. Animations and various design techniques. Just beauty.
            </ProjectDescription>
            <ProjectCover>
              <Image src={capture1} />
            </ProjectCover>
          </ProjectCard>
        </ProjectsSection>
      </MainContainer>
    </>
  );
};

export default Works;
