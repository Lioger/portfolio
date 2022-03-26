import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import Header from '../components/Header';
import { Hide } from '../styles/components';
import GlobalStyle from '../styles/GlobalStyle';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Hide key={router.asPath}>
          <Component {...pageProps} />
        </Hide>
      </AnimatePresence>
    </>
  );
};

export default MyApp;
