import Head from 'next/head';
import { motion } from 'framer-motion';
import { Hide, MainContainer, PageTitle } from './../styles/components';
import { AboutSection, Keyword, Link } from './../styles/pages/homepage';
import { pageAnimation, textAnimation } from '../animations/global';

const Home = () => {
  return (
    <>
      <Head>
        <title>NIKITA STEPANOV</title>
      </Head>
      <MainContainer>
        <AboutSection variants={pageAnimation} initial="hidden" animate="show" exit="exit">
          <Hide>
            <PageTitle variants={textAnimation}>Hello the visitor of my portfolio page!</PageTitle>
          </Hide>
          <Hide>
            <motion.p variants={textAnimation}>
              I am very to see you here. If you want to know more about me, then stay on this page and get ready to read
              a lot of information, or you can go to another page that interests you.
            </motion.p>
          </Hide>
          <Hide>
            <motion.p variants={textAnimation}>You&apos;re still there? Then let&apos;s get started.</motion.p>
          </Hide>
          <Hide>
            <motion.p variants={textAnimation}>
              So, my name is Nikita Stepanov and I&apos;m a 23 y.o.{' '}
              <Keyword className="extra">frontend-developer</Keyword> and{' '}
              <Keyword className="extra">crypto believer</Keyword> from Taganrog, Russia.
            </motion.p>
          </Hide>
          <Hide>
            <motion.p variants={textAnimation}>
              I&apos;m crazy about the Web Dev. Started learning basics of HTML, when I was in high school. Then
              graduated from University with a{' '}
              <Keyword className="education">bachelor&apos;s degree in Business Informatics</Keyword>. After that I
              realized that it wasn&apos;t enough for me and decided to get also a{' '}
              <Keyword className="education">master&apos;s degree in UX/UI design</Keyword>.
            </motion.p>
          </Hide>
          <Hide>
            <motion.p variants={textAnimation}>
              So what we&apos;ve got now. I position myself as a <Keyword className="stack">React</Keyword> developer.
              As a state manager mostly using <Keyword className="stack">Redux</Keyword>, but in small projects prefer
              handling state with <Keyword className="stack">React Hooks</Keyword>. I love to make my pages animated and
              for this I use <Keyword className="stack">Framer-Motion</Keyword> and{' '}
              <Keyword className="stack">GSAP</Keyword> libraries. For styling usuallu use{' '}
              <Keyword className="stack">styled-components</Keyword>, but also know{' '}
              <Keyword className="stack">Sass</Keyword> and <Keyword className="stack">CSS Modules</Keyword>. Know
              basics of <Keyword className="stack">TypeScript</Keyword> and sometimes use it in my projects. Also have
              experience of using <Keyword className="stack">Node.js + Express</Keyword> and{' '}
              <Keyword className="stack">PHP</Keyword> as a data source API. As for DB I prefer{' '}
              <Keyword className="stack">PostgreSQL</Keyword> using TypeORM or Sequelize or{' '}
              <Keyword className="stack">Mongo DB</Keyword>. Now I&apos;m more and more immersed in the study of{' '}
              <Keyword className="stack">Next.js</Keyword> and love to create some cool projects like current website.
            </motion.p>
          </Hide>
          <Hide>
            <motion.p variants={textAnimation}>
              Also know lots about <Keyword className="education">SEO</Keyword> and some ways to improve it (thats why
              I&apos;ve decided to learn Next.js). I don&apos;t stand still, in my free time I aspire to learn smth new
              or strenghten existing knowledge. I have a great desire to develop both my{' '}
              <Keyword className="education">hard and soft skills</Keyword> and especially in a good team on cool
              projects.
            </motion.p>
          </Hide>
          <Hide>
            <motion.p variants={textAnimation}>
              I&apos;m a teamplayer, know the <Keyword className="soft">Scrum</Keyword> and{' '}
              <Keyword className="soft">Kanban</Keyword> methodology and how to handle tasks using{' '}
              <Keyword className="soft">Trello</Keyword> and <Keyword className="soft">Jira</Keyword>. Also have nice
              knowledge of <Keyword className="stack">Git</Keyword>, can build the app using{' '}
              <Keyword className="stack">Webpack</Keyword> and wrap it in <Keyword className="stack">Docker</Keyword>.
              Experience with <Keyword className="soft">Adobe XD</Keyword> and <Keyword className="soft">Figma</Keyword>
              .
            </motion.p>
          </Hide>
          <Hide>
            <motion.p variants={textAnimation}>
              Speak <Keyword className="extra">English</Keyword> fluently. Don&apos;t get stuck, when talking to
              foreigner. Here&apos;s my{' '}
              <Link href="https://www.efset.org/cert/coYfg4" target="_blank" rel="noopener noreferrer">
                EF SET certificate
              </Link>
              . As a rest I prefer reading some literature with a cup of herbal tea sitting on a balcony. Also a big fan
              of everything related to <Keyword className="extra">samurai and viking culture</Keyword>.
            </motion.p>
          </Hide>
          <Hide>
            <PageTitle variants={textAnimation}>
              <Link href="mailto:nickstepanovdev@gmail.com" className="bold">
                Email me
              </Link>{' '}
              if you have any offers. I&apos;ll do my best to bring your ideas to life. Or text me just for fun, always
              glad to meet new people!
            </PageTitle>
          </Hide>
        </AboutSection>
      </MainContainer>
    </>
  );
};

export default Home;
