import Head from "next/head";
import { useEffect } from "react";

import { axeAccessibilityReporter } from "../utils/axeAccessibilityReporter";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    axeAccessibilityReporter();
  });

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
