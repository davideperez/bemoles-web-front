import {
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import React from "react";

  const PosibilidadesPage = () => {
    return (
      <Stack
        as="main"
        padding={{ base: "44px 16px 20px 16px", lg: "96px 100px 120px 100px" }}
        overflow="hidden"
        spacing={{ base: "2rem", lg: "4rem" }}
        backgroundImage={{
          base: "url('/images/proyectos-bg-mobile.png')",
          lg: "url('/images/proyectos-bg.png')",
        }}
        objectFit={"cover"}
        objectPosition="center"
        backgroundPosition={{ base: "-20px 96px", lg: "-151px 184px" }}
        backgroundRepeat={"no-repeat"}
        pb={{ base: "16rem", lg: "16rem" }}
        minH="100vh"
      >
        <Heading
          as="h1"
          color="white"
          fontFamily={"DM Serif Display"}
          fontSize={{ base: "30px", lg: "70px" }}
          fontWeight={400}
          lineHeight={{ base: "50px", lg: "72px" }}
          letterSpacing={{ base: "0.3px", lg: "0.7px" }}
        >
          Posibilidades
        </Heading>
        <Flex
          pt={{ base: "0px", lg: "2rem" }}
          alignItems={"flex-start"}
          gap="24px"
          flexWrap={"wrap"}
        >
          
        </Flex>
      </Stack>
    );
  };
  
  export default PosibilidadesPage;
  