import Head from 'next/head';
import ExperienceCard from '../components/ExperienceCard';
import experience from '../utils/experience';
import { MainContainer } from './../styles/components';
import { ProjectsSection } from './../styles/pages/projects';
import { pageAnimation } from '../animations/global';

const Experience = () => {
  return (
    <>
      <Head>
        <title>EXPERIENCE | NIKITA STEPANOV</title>
      </Head>
      <MainContainer>
        <ProjectsSection variants={pageAnimation} initial="hidden" animate="show" exit="exit">
          {experience?.map((place) => (
            <ExperienceCard place={place} key={place.name} />
          ))}
        </ProjectsSection>
      </MainContainer>
    </>
  );
};

export default Experience;
