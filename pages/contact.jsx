import Head from 'next/head';

import SocialLink from '../components/SocialLink';
import { MainContainer, PageTitle, Hide } from './../styles/components';
import { LinksSection } from './../styles/pages/contact';
import { pageAnimation, textAnimation } from '../animations/global';

import links from '../utils/links';

const Contact = () => {
  return (
    <>
      <Head>
        <title>CONTACT | NIKITA STEPANOV</title>
      </Head>
      <MainContainer variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <Hide>
          <PageTitle variants={textAnimation}>My links</PageTitle>
        </Hide>
        <LinksSection>{links && links.map((link) => <SocialLink key={link.id} link={link} />)}</LinksSection>
      </MainContainer>
    </>
  );
};

export default Contact;
