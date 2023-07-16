import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import BemolesHeroLogo from "../BemolesHeroLogo";

const Hero = () => {
  return (
    <Stack w="100%" color="white" position="relative" pt={{base: "80px", lg:"45px"}} pr={{base:"auto", lg:"14rem"}} mb={{lg: "6rem"}}>
    <Heading
      as="h1"
      position="absolute"
      top={0}
      left="24px"
      zIndex="1"
      fontFamily="DM Serif Display"
      fontWeight={600}
      fontSize={{ base: "50px", lg: "70px" }}
      lineHeight={{base: "50px", lg:"72px"}}
      letterSpacing="0.7px"
      whiteSpace={{base: "unset", md: "nowrap"}}
    >
      {" "}
      Cultura y Encuentro
    </Heading>
    <Box bg="#3B424A" p="32px 24px 24px 24px" w="100%" position="relative">
      <Text
        as="p"
        fontSize="16px"
        fontWeight={400}
        lineHeight="24px"
        letterSpacing="0.8px"
        maxW={{base: "790px"}}
      >
        Somos un espacio donde la Cultura y el Encuentro tienen lugar.
        <br />
        <b>
          Actividades artísticas, culturales, recreativas y terapéuticas
        </b>{" "}
        nos reúnen.
        <br />
        <br /> Ponemos a disposición para tales fines nuestras Aulas,
        Consultorios, un hermoso Salón, la Sala de música, el Estudio de
        Grabación, nuestro Zaguán, el Living, el Quincho/Taller y otros
        espacios para el desarrollo de diversas propuestas.
        <br /> <br /> Buscamos fomentar la multiplicación de experiencias
        que apunten al abordaje integral de la salud, usando como
        herramientas todas las disciplinas de las que nos podamos servir,
        con el fin de potenciar la exploración y la expresión como
        comportamientos creadores y saludables.
      </Text>
      <BemolesHeroLogo
        position="absolute"
        right={0}
        top={0}
        width={{base: "198px", xl:"690px" ,"2xl":"938px"}}
        height={{base: "259px", xl:"744px", "2xl":"744px"}}
        transform={{base:"translate(30%, -74%)", "xl":"translate(44%, -44%)"}}
      />
      </Box>
  </Stack>
  )
}

export default Hero