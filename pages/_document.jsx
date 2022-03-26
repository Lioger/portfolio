import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <meta name="title" content="Nikita Stepanov" />
        <meta name="description" content="Portfolio of React frontend developer" />
        <meta property="og:title" content="Nikita Stepanov" />
        <meta property="og:type" content="page" />
        <meta property="og:description" content="Portfolio of React frontend developer" />
        <meta property="og:image" content="/me.jpg" />
        <meta property="og:url" content="http://nikitastepanov.vercel.app/" />
        <meta name="twitter:title" content="Nikita Stepanov" />
        <meta name="twitter:description" content="Portfolio of React frontend developer" />
        <meta name="twitter:image" content="/me.jpg" />

        <link rel="canonical" href="http://nikitastepanov.vercel.app/" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hurricane&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
