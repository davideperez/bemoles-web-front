import {
  Flex,
  Text,
  Link,
  Image,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import SumArte from "../../components/public/espacios/SumArte/index";
import Quincho from "../../components/public/espacios/Quincho";
import Aulas from "../../components/public/espacios/Aulas";
import Consultorios from "../../components/public/espacios/Consultorios";
import SalaDeEnsayo from "../../components/public/espacios/SalaDeEnsayo";

const EspaciosPage = () => {
  return (
    <>
      <Head>
        <title>Espacios | Los Bemoles</title>
      </Head>
      <Stack
        as="main"
        padding={{ base: "44px 6px 20px 6px", lg: "96px 100px 120px 100px" }}
        overflow="hidden"
        spacing={{ base: "2rem", lg: "4rem" }}
        pb={{ base: "8rem", lg: "8rem" }}
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
          pl="10px"
        >
          Espacios
        </Heading>

        <Stack
          spacing={{ base: "48px", lg: "100px" }}
          pt={{ lg: "4rem" }}
          alignItems="center"
          backgroundImage={{
            base: "url('/images/03_espacios/espacios-mobile-bg.png')",
            lg: "url('/images/03_espacios/definir-bg-xl.png')",
            "2xl": "url('/images/03_espacios//espacios-bg.png')",
          }}
          objectFit={"cover"}
          objectPosition="center"
          backgroundPosition={{
            base: "-75px 148px",
            sm: "400px 27px",
            lg: "150px 0px",
          }}
          backgroundRepeat={"no-repeat"}
        >
          
          <Aulas />
          <Consultorios />
          <SalaDeEnsayo />
          <SumArte />
          <Quincho />

        </Stack>
      </Stack>
    </>
  );
};

export default EspaciosPage;