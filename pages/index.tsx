import { Stack } from "@chakra-ui/react";
import type { NextPage } from "next";

import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import FollowUS from "../components/public/FollowUs";
import Hero from "../components/public/Hero";
import MainCategories from "../components/public/MainCategories";
import Services from "../components/public/Services";
import VisitUs from "../components/public/VisitUs";
import WeSearch from "../components/public/WeSearch";
import instagramApi from "../services/instagram.service";

interface IgPost {
  id: string;
  media_type: string;
  media_url: string;
  caption: string;
}

interface Props {
  igPosts: IgPost[];
}

const HomePage: NextPage<Props> = ({ igPosts }) => {
  return (
    <>
      <Head>
        <title>Inicio | Los Bemoles</title>
      </Head>
      <Stack
        as="main"
        padding={{ base: "60px 0px 20px 0px", lg: "340px 0px 120px 0px" }}
        overflow="hidden"
        spacing="4rem"
        backgroundImage={{
          base: "none",
          lg: "url('/images/home-bg-01.png')",
        }}
        bgRepeat= "no-repeat"
        bgPos={{lg:"50px 3950px", xl:"420px 2130px"}}
        bgSize={{lg: "100%", xl: "55%"}}
        //ref={bgRef} 
        //bgSize="cover" 
        //bgPosition="initial" 
        //position="absolute" 
      >
        <Hero />
        <MainCategories />
        <Services />
        <WeSearch />
        {/* <FollowUS igPosts={igPosts} /> */}
        <VisitUs />
      </Stack>
    </>
  );
};
/* 
export const getStaticProps: GetStaticProps = async () => {
  const res = await instagramApi.getPostsFetch(
    process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN as string,
    9
  );
  const igPosts = await res.json();
  return { props: { igPosts: igPosts.media.data }, revalidate: 3600 };
}; */

export default HomePage;