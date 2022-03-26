import Head from 'next/head';
import Image from 'next/image';
import github from './../public/icons/github.svg';
import mail from './../public/icons/mail.svg';
import whats from './../public/icons/whatsapp.svg';
import photo from './../public/me.jpg';
import { MainContainer, PageTitle, Hide } from './../styles/components';
import { LinksSection, LinkStyled, MyPhoto } from './../styles/pages/contact';
import { pageAnimation, textAnimation, cardAnimation } from '../animations/global';

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
          <Hide>
            <LinkStyled
              href="https://wa.me/+79964165496"
              target="_blank"
              rel="norefer noopener"
              variants={textAnimation}
            >
              <Image src={whats} alt="WhatsApp" width="36" height="36" />
              Nikita Stepanov
            </LinkStyled>
          </Hide>
        </LinksSection>
      </MainContainer>
    </>
  );
};

export default Contact;
