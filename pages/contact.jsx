import Head from 'next/head';
import Image from 'next/image';

import SocialLink from '../components/SocialLink';
import { MainContainer, PageTitle, Hide } from './../styles/components';
import { LinksSection, MyPhoto } from './../styles/pages/contact';
import { pageAnimation, textAnimation, cardAnimation } from '../animations/global';

import links from '../utils/links';
import photo from './../public/me.jpg';

export const getStaticProps = async () => {
  return {
    props: {
      socialLinks: links,
    },
  };
};

const Contact = ({ socialLinks }) => {
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
        <LinksSection>
          {socialLinks && socialLinks.map((link) => <SocialLink key={link.id} link={link} />)}
        </LinksSection>
      </MainContainer>
    </>
  );
};

export default Contact;
