import {
    Flex,
    Text,
    Image,
    Stack,
} from "@chakra-ui/react";
import React from "react";

const servicios = [
    {
      name: "Práctica con instrumentos",
      bg: "rgba(121, 163, 66, 0.80)",
    },
    {
      name: "Ensayos",
      bg: "rgba(27, 58, 102, 0.80)",
    },
    {
      name: "Grabación de ensayos (ambiente)",
      bg: "rgba(245, 130, 32, 0.80)",
    },
    {
      name: "Grabación de instrumentos y voces",
      bg: "rgba(121, 163, 66, 0.80)",
    },
    {
      name: "Grabación y mezcla para redes y plataformas comerciales",
      bg: "rgba(27, 58, 102, 0.80)",
    },
    {
      name: "GRABACIÓN Y MEZCLA PARA DISCOS/EPS",
      bg: "rgba(245, 130, 32, 0.80)",
    },
    {
      name: "LOCACION PARA VIDEOPRODUCCIONES",
      bg: "rgba(121, 163, 66, 0.80)",
    },
  ];


export default function EstudioSeccion04 () {
    return (
    <Flex
      as={"section"}
      maxW={"1312px"}
      w={"100%"}
      flexWrap={{ base: "wrap", lg: "nowrap" }}
      position="relative"
      justifyContent={{ base: "center", lg: "space-around" }}
      gap={{ base: "17px", lg: "0px" }}
    >
      <Stack
        spacing={{ base: "17px", lg: "16px" }}
        position={{ base: "relative", lg: "absolute" }}
        top="0"
        left="0"
      >
        <Text
          as="h3"
          color="#3B424A"
          fontFamily={"DM Serif Display"}
          fontSize={{ base: "40px", lg: "54px" }}
          fontWeight={400}
          lineHeight={{ base: "42px", lg: "54px" }}
          letterSpacing={{ base: "0.4px", lg: "2.7px" }}
        >
          Servicios
        </Text>
        {servicios.map((servicio) => (
          <Flex
            key={servicio.name}
            p="16px"
            w={{ base: "100%", lg: "fit-content" }}
            bg={servicio.bg}
            color="white"
            fontSize={{ base: "16px", lg: "24px" }}
            fontWeight={700}
            letterSpacing={{ base: "3.2px", lg: "4.8px" }}
            textTransform={"uppercase"}
            whiteSpace={{ base: "normal", lg: "nowrap" }}
            marginBottom="8px"
          >
            {servicio.name}
          </Flex>
        ))}
      </Stack>


      <Flex 
        w={{base:"100%"}}
        justify={{base:"center", lg:"end"}}
      >
        <Image
          src="/images/04_estudio/servicios-1.png"
          alt="Estudio de grabación"
          objectFit={"cover"}
        />
      </Flex>
    </Flex>
  )
}