import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ignite a11y course</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
