import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { 
  ReactNode,
  useEffect, useRef } from "react";

const headerHeight = {
  homePage: "600px",
  homePageResponsive: "302px",
  restPage: "240px",
  restPageResponsive: "152px",
};

const PublicLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const bgRef = useRef<HTMLDivElement>(null);

  const setWidthPage = () => {
    const windowWidth = window.innerWidth;
    const bgHeight =
      router.asPath.length > 1
        ? `${
            windowWidth > 992
              ? headerHeight.restPage
              : headerHeight.restPageResponsive
          }`
        : `${
          windowWidth > 768
            ? headerHeight.homePage
            : headerHeight.homePageResponsive
        }`;
    if (bgRef.current) {
      bgRef.current.style.height = bgHeight;
      bgRef.current.style.background = `url('/images/hero${windowWidth > 768 ? '' : '-mobile'}.png')`;
    }
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
    <Stack spacing="0px" position="relative">
      <Stack ref={bgRef} h="600px" w="100%" bg="url('/images/hero.png')" bgSize="cover" bgRepeat="no-repeat" bgPosition="initial" position="absolute" top="0px" left="0px" zIndex="-1"></Stack>
      <Navbar />
      <>{children}</>
      <Footer />
    </Stack>
    </>
  );
};

export default PublicLayout;