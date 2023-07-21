import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const servicios = [{
    name: "Práctica con instrumentos",
    bg: "rgba(121, 163, 66, 0.80)"
},
{
    name: "Ensayos para bandas",
    bg: "rgba(27, 58, 102, 0.80)"
},
{
    name: "Grabación de ensayos (ambiente)",
    bg: "rgba(245, 130, 32, 0.80)"
},
{
    name: "Grabación de instrumentos y voces",
    bg: "rgba(121, 163, 66, 0.80)"
},
{
    name: "Grabación y mezcla para redes y plataformas comerciales",
    bg: "rgba(27, 58, 102, 0.80)"
},
{
    name: "grabación y mezcla para discos",
    bg: "rgba(245, 130, 32, 0.80)"
},
{
    name: "Práctica con instrumentos",
    bg: "rgba(121, 163, 66, 0.80)"
},
]

const EstudioPage = () => {
  return (
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
      <Flex
        pt={{ base: "1rem", lg: "5rem" }}
        alignItems={"flex-start"}
        gap={{ base: "0px", sm: "40px", lg: "90px" }}
        flexWrap={"wrap"}
      >
        <Stack position="relative" h={{ base: "580px", lg: "1100px" }}>
          <Image
            src={"/images/sala1.png"}
            mt={{ base: "81", lg: "152px" }}
            ml={{ base: "175px", lg: "330px" }}
            alt={"Sum-arte"}
            w={{ base: "196px", lg: "370px" }}
            h={{ base: "196px", lg: "370px" }}
            objectFit={"contain"}
          />
          <Image
            src={"/images/sala2.png"}
            position="absolute"
            top={{ base: "242px", lg: "454px" }}
            left="0px"
            alt={"Sum-arte"}
            w={{ base: "196px", lg: "370px" }}
            h={{ base: "196px", lg: "370px" }}
            objectFit={"contain"}
          />
          <Image
            src={"/images/sala3.png"}
            position="absolute"
            top={{ base: "0px", lg: "0px" }}
            left={{ base: "41px", lg: "76px" }}
            alt={"Sum-arte"}
            w={{ base: "196px", lg: "370px" }}
            h={{ base: "196px", lg: "370px" }}
            objectFit={"contain"}
          />
          <Image
            src={"/images/sala4.png"}
            position="absolute"
            top={{ base: "335px", lg: "630px" }}
            left={{ base: "183px", lg: "345px" }}
            alt={"Sum-arte"}
            w={{ base: "196px", lg: "370px" }}
            h={{ base: "196px", lg: "370px" }}
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
              Título marketinero
            </Text>
            <Text
              as="p"
              fontSize={{ base: "16px", lg: "16px" }}
              fontWeight={400}
              lineHeight={{ base: "24px", lg: "34px" }}
              letterSpacing={{ base: "0.8px", lg: "0.8px" }}
              maxW="590px"
            >
              Amplia sala con estrictas características constructivas de acuerdo
              a lo indicado para el fin específico: <b>Estudio de Grabación.</b>
              <UnorderedList px="0.5rem">
                <ListItem>
                  Aire acondicionado, absorción y difusión sonora adecuadas.
                </ListItem>
                <ListItem>
                  Una particular estética que da lugar a la producción de
                  atractivos audiovisuales.
                </ListItem>
                <ListItem>Espacios para el encuentro.</ListItem>
                <ListItem>Cajas de monitoreo y monitoreo In-Ear.</ListItem>
                <ListItem>
                  Equipos para Bajo y Guitarra Fender y Laney.
                </ListItem>
                <ListItem>Batería Tama Silverstar.</ListItem>
                <ListItem>Monitores Makie para Estudio.</ListItem>
                <ListItem>Consola Digital Allen & Heath +
              Logic Pro.</ListItem>
                <ListItem>Micrófonos Rode, Shure, Audio Technica, Sennheiser,
              AKG.</ListItem>
              </UnorderedList>{" "}
                
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
              Seguridad
            </Text>
            <Text
              as="p"
              fontSize={{ base: "16px", lg: "16px" }}
              fontWeight={400}
              lineHeight={{ base: "24px", lg: "34px" }}
              letterSpacing={{ base: "0.8px", lg: "0.8px" }}
              maxW="590px"
            >
              Para la tranquilidad de nuestros músicos cumplimos con todas las
              <b>normas de seguridad</b> y la <b>infraestructura</b>{" "}
              correspondiente. Puestas a tierra, jabalinas independientes,
              interruptores térmicos y disyuntores, matafuegos y área protegida
              (médica).
            </Text>
          </Stack>
        </Stack>
      </Flex>
      <Flex flexWrap={{base: "wrap", lg: "nowrap"}} position="relative" justifyContent={{base: "center", lg: "flex-start"}} gap={{base: "17px", lg: "0px"}}>
      <Stack spacing={{base: "17px", lg: "16px"}} position={{base:"relative", lg: "absolute"}} top="0" left="0" >
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
            {servicios.map(servicio => (
                <Flex
                key={servicio.name}
                  p="16px"
                  w={{base:"100%", lg:"fit-content"}}
                  bg={servicio.bg}
                  color="white"
                  fontSize={{base: "16px",lg: "24px"}}
                  fontWeight={700}
                  letterSpacing={{base:"3.2px", lg:"4.8px"}}
                  textTransform={"uppercase"}
                  whiteSpace={{base:"normal", lg:"nowrap"}}
                  marginBottom="8px"
                >
                  {servicio.name}
                </Flex>
            ))}
            
            </Stack>
            <Flex ml={{base: "0px", lg:"520px"}} align="center">
            <Image mt={{base:"0px", lg: "5rem", "2xl": "0px"}} w={{base:"359px", lg:"559px", "2xl":"759px"}} h={{base:"359px", lg:"559px", "2xl":"759px"}} src="/images/estudio-de-grabacion.png" alt="Estudio de grabación" objectFit={"contain"} objectPosition="left"/>
            </Flex>
        </Flex>
    </Stack>
  );
};

export default EstudioPage;
