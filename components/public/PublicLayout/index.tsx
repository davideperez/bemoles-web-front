import { Stack } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const headerHeight = {
  homePage: "600px",
  homePageResponsive: "302px",
  restPage: "240px",
  restPageResponsive: "152px",
};

const PublicLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const setWidthPage = () => {
    const windowWidth = window.innerWidth;
    const widthForDocument =
      !router.asPath.includes("home")
        ? `${
            windowWidth > 768
              ? headerHeight.restPage
              : headerHeight.restPageResponsive
          }`
        : `${
          windowWidth > 768
            ? headerHeight.homePage
            : headerHeight.homePageResponsive
        }`;
    document.documentElement.style.backgroundSize = `100% ${widthForDocument}`;
  }


  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidthPage();
      window.addEventListener('resize', setWidthPage);

      return () => window.removeEventListener('resize', setWidthPage);
    }
  }, [router]);

  return (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet" />
    </Head>
    <div>
      <Navbar />
      <>{children}</>
      <Footer />
    </div>
    </>
  );
};

export default PublicLayout;
