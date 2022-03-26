import Head from 'next/head';
import Image from 'next/image';
import github from './../public/github.svg';
import mail from './../public/mail.svg';
import { MainContainer, PageTitle, Hide } from './../styles/components';
import { LinksSection, LinkStyled } from './../styles/pages/contact';
import { pageAnimation, textAnimation } from '../animations/global';

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
        <LinksSection>
          <Hide>
            <LinkStyled
              href="https://github.com/Lioger"
              target="_blank"
              rel="norefer noopener"
              variants={textAnimation}
            >
              <Image src={github} alt="GitHub" width="36" height="36" />
              Lioger
            </LinkStyled>
          </Hide>
          <Hide>
            <LinkStyled href="mailto:nickstepanovdev@gmail.com" variants={textAnimation}>
              <Image src={mail} alt="Email" width="36" height="36" />
              nickstepanovdev@gmail.com
            </LinkStyled>
          </Hide>
        </LinksSection>
      </MainContainer>
    </>
  );
};

export default Contact;
