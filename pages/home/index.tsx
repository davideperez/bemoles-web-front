import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import BemolesHeroLogo from "../../components/public/BemolesHeroLogo";
import Hero from "../../components/public/Hero";
import MainCategories from "../../components/public/MainCategories";
import Services from "../../components/public/Services";

const HomePage = () => {
  return (
    <Stack as="main" padding={{base: "60px 16px", lg:"340px 80px"}} overflow="hidden" spacing="4rem">
      <Hero />
      <MainCategories />
      <Services />
    </Stack>
  );
};

export default HomePage;
