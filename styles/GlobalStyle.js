import { createGlobalStyle } from 'styled-components';

export const MainBackground = 'linear-gradient(90deg, rgba(0, 2, 25, 1) 0%, rgba(0, 48, 87, 1) 100%)';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
    @media screen and (max-width: 421px) {
      font-size: 14px;
    }
  }
  body {
    background: ${MainBackground};
    min-height: 100vh;
    color: white;
    font-family: 'Montserrat', sans-serif;
  }
  a {
    font-family: inherit;
    font-style: inherit;
    color: inherit;
    text-decoration: inherit;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export default GlobalStyle;
