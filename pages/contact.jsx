import Head from 'next/head';
import Image from 'next/image';

import SocialLink from '../components/SocialLink';
import { MainContainer, PageTitle, Hide } from './../styles/components';
import { LinksSection, MyPhoto } from './../styles/pages/contact';
import { pageAnimation, textAnimation, cardAnimation } from '../animations/global';

import links from '../utils/links';
import photo from './../public/me.jpg';

const Contact = () => {
  return (
    <>
      <Head>
        <title>CONTACT | NIKITA STEPANOV</title>
      </Head>
      <MainContainer variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <MyPhoto variants={cardAnimation}>
          <Image src={photo} alt="Me" />
        </MyPhoto>
        <Hide>
          <PageTitle variants={textAnimation}>My links</PageTitle>
        </Hide>
        <LinksSection>{links && links.map((link) => <SocialLink key={link.id} link={link} />)}</LinksSection>
      </MainContainer>
    </>
  );
};

export default Contact;
