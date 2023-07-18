import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import BemolesHeroLogo from "../../components/public/BemolesHeroLogo";
import FollowUS from "../../components/public/FollowUs";
import Hero from "../../components/public/Hero";
import MainCategories from "../../components/public/MainCategories";
import Services from "../../components/public/Services";
import VisitUs from "../../components/public/VisitUs";
import WeSearch from "../../components/public/WeSearch";

const HomePage = () => {
  return (
    <Stack as="main" padding={{base: "60px 0px 20px 0px", lg:"340px 0px 120px 0px"}} overflow="hidden" spacing="4rem">
      <Hero />
      <MainCategories />
      <Services />
      <WeSearch />
      <FollowUS />
      <VisitUs />
    </Stack>
  );
};

export default HomePage;
