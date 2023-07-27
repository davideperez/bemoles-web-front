import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const SumArtePage = () => {
  return (
    <>
    <Head>
      <title>Sum-arte | Los Bemoles</title>
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
      backgroundPosition={{ base: "-38px 96px", lg: "30px 184px" }}
      backgroundRepeat={"no-repeat"}
      pb={{ base: "10rem", lg: "16rem" }}
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
        Sum-arte
      </Heading>
      <Flex
        pt={{ base: "1rem", lg: "5rem" }}
        alignItems={"flex-start"}
        gap={{ base: "0px", sm: "40px", lg: "90px" }}
        flexWrap={"wrap"}
        justifyContent={{base: "center", lg: "center"}}
      >
        <Stack position="relative" h={{base: "580px", lg:"1100px"}}>
          <Image
            src={"/images/sum-arte-2.png"}
            mt={{base: "81", lg:"152px"}}
            ml={{base: "175px", lg:"330px"}}
            alt={"Sum-arte"}
            w={{ base:"196px", lg: "370px" }}
            h={{ base:"196px", lg: "370px" }}
            objectFit={"contain"}
          />
          <Image
            src={"/images/sum-arte-3.png"}
            position="absolute"
            top={{base: "242px", lg:"454px"}}
            left="0px"
            alt={"Sum-arte"}
            w={{ base:"196px", lg: "370px" }}
            h={{ base:"196px", lg: "370px" }}
            objectFit={"contain"}
          />
          <Image
            src={"/images/sum-arte-1.png"}
            position="absolute"
            top={{base: "0px" , lg:"0px"}}
            left={{base: "41px",lg:"76px"}}
            alt={"Sum-arte"}
            w={{ base:"196px", lg: "370px" }}
            h={{ base:"196px", lg: "370px" }}
            objectFit={"contain"}
          />
          <Image
            src={"/images/sum-arte-4.png"}
            position="absolute"
            top={{base: "335px", lg:"630px"}}
            left={{base: "183px", lg:"345px"}}
            alt={"Sum-arte"}
            w={{ base:"196px", lg: "370px" }}
            h={{ base:"196px", lg: "370px" }}
            objectFit={"contain"}
          />
        </Stack>
        <Stack spacing="40px" flex={1} maxW="403px" pt="3rem">
        <Stack spacing="16px" flex={1}>
          <Text
            as="h3"
            color="#3B424A"
            fontFamily={"DM Serif Display"}
            fontSize={{ base: "40px", lg: "54px" }}
            fontWeight={400}
            lineHeight={{ base: "42px", lg: "54px" }}
            letterSpacing={{ base: "0.4px", lg: "2.7px" }}
          >
            SUM-ARTE
          </Text>
          <Text
            as="p"
            fontSize={{ base: "16px", lg: "16px" }}
            fontWeight={400}
            lineHeight={{ base: "24px", lg: "34px" }}
            letterSpacing={{ base: "0.8px", lg: "0.8px" }}
            maxW="590px"
          >
            Confortable salón para la realización de diversas actividades,
            exposiciones e intervenciones artísticas, presentaciones literarias,
            seminarios, trabajos en grupo, proyección de Cine y encuentros en
            general. <br /> <br /> Montado con sonido profesional, video,
            iluminación variable, climatización y sanitarios.{" "}
            <b>Capacidad para 100 personas</b>, baños para discapacitados.
          </Text>
          </Stack>
          <Stack spacing="16px" flex={1}>

          <Text
            as="h3"
            color="#3B424A"
            fontFamily={"DM Serif Display"}
            fontSize={{ base: "40px", lg: "54px" }}
            fontWeight={400}
            lineHeight={{ base: "42px", lg: "54px" }}
            letterSpacing={{ base: "0.4px", lg: "2.7px" }}
          >
            Buffet
          </Text>
          <Text
            as="p"
            fontSize={{ base: "16px", lg: "16px" }}
            fontWeight={400}
            lineHeight={{ base: "24px", lg: "34px" }}
            letterSpacing={{ base: "0.8px", lg: "0.8px" }}
            maxW="590px"
          >
            Los Bemoles cuenta con las instalaciones necesarias para prestar el
            servicio de despacho de comidas sencillas (pizzas, empanadas, etc) y
            de bebidas, estando inscripto en el registro correspondiente REBA.
          </Text>
        </Stack>
        </Stack>
      </Flex>
    </Stack>
    </>
  );
};

export default SumArtePage;
