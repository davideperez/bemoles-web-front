import {
  Stack,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import ClasesDeMusica from "../../components/public/posibilidades/ClasesDeMusica";
import ClasesYCursos from "../../components/public/posibilidades/ClasesYCursos";
import CuerpoSalud from "../../components/public/posibilidades/CuerpoSalud";
import TalleresIntensivos from "../../components/public/posibilidades/TalleresIntensivos";
import Ciclos from "../../components/public/posibilidades/Ciclos";

const PosibilidadesPage = () => {

  return (
    <>
      <Head>
        <title>Posibilidades | Los Bemoles</title>
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
          Posibilidades
        </Heading>
        <Stack
          spacing={{ base: "48px", lg: "100px" }}
          //pt={{ lg: "8rem" }}
          backgroundImage={{
            base: "url('/images/02_posibilidades/clases-y-cursos-bg-mobile.png')",
            lg: "url('/images/02_posibilidades/posibilidades-bg-xl.png')",
            "2xl": "url('/images/02_posibilidades/posibilidades-bg.png')",
          }}
          objectFit={"cover"}
          objectPosition="center"
          backgroundPosition={{
            base: "-180px 25px",
            sm: "200px 29px",
            md: "400px -150px",
            lg: "-70px 550px",
            xl: "-70px 0px",
            "2xl": "0px 50px",
          }}
          backgroundRepeat={"no-repeat"}
          alignItems={{base:"flex-start", lg: "center"}}
        >
          <ClasesYCursos />
          <ClasesDeMusica />
          <CuerpoSalud />
          <TalleresIntensivos />
          <Ciclos />
        </Stack>
      </Stack>
    </>
  );
};

export default PosibilidadesPage;