import Head from "next/head";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const HeadLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#c5a266" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="losbemoles.com.ar" />
        <title>Los bemoles</title>
      </Head>
      {children}
    </>
  );
};

export default HeadLayout;