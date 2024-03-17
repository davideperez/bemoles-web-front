import {
  Stack,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import EstudioSeccion01 from "../../components/public/estudio/EstudioSeccion01";
import EstudioSeccion02 from "../../components/public/estudio/EstudioSeccion02";
import EstudioSeccion03 from "../../components/public/estudio/EstudioSeccion03";
import EstudioSeccion04 from "../../components/public/estudio/EstudioSeccion04";


const EstudioPage = () => {
  return (
    <>
      <Head>
        <title>Estudio | Los Bemoles</title>
      </Head>
      <Stack
        as="main"
        padding={{ base: "44px 16px 20px 16px", lg: "96px 100px 120px 100px" }}
        overflow="hidden"
        spacing={{ base: "2rem", lg: "4rem" }}
        backgroundImage={{
          base: "url('/images/proyectos-bg-mobile.png')",
          lg: "url('/images/sum-arte-bg.png')",
        }}
        objectFit={"cover"}
        objectPosition="center"
        backgroundPosition={{ base: "0px 96px", lg: "30px 184px" }}
        backgroundRepeat={"no-repeat"}
        pb={{ base: "10rem", lg: "16rem" }}
        minH="100vh"
        alignItems={"center"}
      >
        <Heading
          as="h1"
          color="white"
          fontFamily={"DM Serif Display"}
          fontSize={{ base: "30px", lg: "70px" }}
          fontWeight={400}
          lineHeight={{ base: "50px", lg: "72px" }}
          letterSpacing={{ base: "0.3px", lg: "0.7px" }}
          textAlign="start"
          w="100%"
        >
          Estudio - Sala de Ensayo
        </Heading>

        <Stack
          spacing={{ base: "64px", lg: "100px" }}
          alignItems={{base:"flex-start", lg: "center"}}
        >
          <EstudioSeccion01 />
          <EstudioSeccion02 />
          <EstudioSeccion03 />
          <EstudioSeccion04 />
          
        </Stack>
      </Stack>
    </>
  );
};

export default EstudioPage;