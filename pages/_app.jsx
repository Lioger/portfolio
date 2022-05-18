import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { Hide } from '../styles/components';
import GlobalStyle from '../styles/GlobalStyle';
import reducers from '../reducers';

export const store = createStore(reducers);

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <SideMenu />
      <AnimatePresence exitBeforeEnter>
        <Hide key={router.asPath}>
          <Component {...pageProps} />
        </Hide>
      </AnimatePresence>
    </Provider>
  );
};

export default MyApp;
