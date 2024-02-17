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
          pt={{ lg: "8rem" }}
          alignItems="center"
          backgroundImage={{
            base: "url('/images/espacios-mobile-bg.png')",
            lg: "url('/images/posibilidades-bg-xl.png')",
            "2xl": "url('/images/espacios-bg.png')",
          }}
          objectFit={"cover"}
          objectPosition="center"
          backgroundPosition={{
            base: "-75px 148px",
            sm: "400px 27px",
            lg: "0px 0px",
          }}
          backgroundRepeat={"no-repeat"}
        >

          {/* Aulas */}
          <Flex gap={{ base: "8px", sm: "24px" }} flexWrap={"wrap"}>
            <Stack spacing={{ base: "8px", sm: "24px" }}>
              {/* //////////// Texto //////////////// */}
              <Stack justifyContent={"flex-end"} spacing="16px" px="10px">
                <Text
                  as="h3"
                  color="#3B424A"
                  fontFamily={"DM Serif Display"}
                  fontSize={{ base: "40px", lg: "70px" }}
                  fontWeight={400}
                  lineHeight={{ base: "42px", lg: "72px" }}
                  letterSpacing={{ base: "0.7px", lg: "0.7px" }}
                >
                  Aulas
                </Text>
                <Text
                    as="span"
                    fontSize={{ base: "16px", lg: "16px" }}
                    fontWeight={400}
                    lineHeight={{ base: "24px", lg: "34px" }}
                    letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                    maxW="545px"
                    overflowX="clip"
                    //boxShadow={"0 0 10px 10px rgb(355,355,355,1)"}
                    backgroundColor="rgb(355,355,355, 1)"
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  >
                    Confortables aulas para el dictado de clases individuales y/o
                    grupales, debidamente equipadas, climatizadas, con las
                    condiciones y herramientas que atienden a un desarrollo en
                    excelencia.
                </Text>
                <Link
                  href="mailto:info@losbemoles.com.ar"
                  
                >
                  <Button
                    type="button"
                    bg="#DDC692"
                    color="#3B424A"
                    size="lg"
                    textTransform="uppercase"
                    p="16px"
                    w="fit-content"
                    fontSize={{ base: "14px", lg: "14px" }}
                    fontWeight={900}
                    letterSpacing={{ base: "2.8px", lg: "2.4px" }}
                    borderRadius="4px"
                    _hover={{ bg: "#e9dbb9" }}

                  >
                    Consultar
                  </Button>
                </Link>
              </Stack>
              {/* //////////// Imagen 1 //////////////// */}
              <Flex as="picture">
                <source
                  srcSet="/images/responsive/aulas.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/aulas-v02.png"
                  alt="Aulas"
                  w={{ base: "379px", lg: "576px" }}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  h={{ base: "157px", lg: "208px" }}
                />{" "}
              </Flex>
            </Stack>
              {/* //////////// Imagen 2 y 3 //////////////// */}
            <Flex 
              gap={{ base: "8px", lg: "24px" }}
              alignItems={"flex-start"}
            >
              <Flex
                as="picture" 
                alignSelf={"stretch"} 
                w={{ base: "258px", lg: "512px" }}
                //h={{ base: "217px", lg: "456px" }}
              >
                <source
                  srcSet="/images/responsive/aulas-2.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/aulas-2-v02.png"
                  alt="Aulas"
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />{" "}
              </Flex>
              <Flex 
                as="picture"
                alignSelf={"stretch"}
                w={{ base: "113px", lg: "176px" }}
                //h={{ base: "217px", lg: "456px" }}
              >
                <source
                  srcSet="https://dummyimage.com/113x217/242424/808080.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="https://dummyimage.com/176x456/242424/808080.png"
                  alt="Aulas"
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />
              </Flex>
            </Flex>
          </Flex>

          {/* Consultorios Profesionales */}
          <Flex gap={{ base: "8px", sm: "24px" }} flexWrap={"wrap-reverse"}>
            <Flex gap={{ base: "8px", lg: "24px" }} alignItems={"flex-start"}>
              <Flex 
                as="picture"
                w={{ base: "214px", lg: "567px" }}
                alignSelf={"stretch"}
                //h={{ base: "205px", lg: "543px" }}
              >
                <source
                  srcSet="/images/responsive/consultorios-profesionales-1.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/consultorios-profesionales-1-v02.png"
                  alt="Aulas"
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  objectFit={"cover"}
                />
              </Flex>
              <Flex 
                as="picture"
                alignSelf={"stretch"}
                w={{ base: "157px", lg: "228px" }}
                //h={{ base: "205px", lg: "543px" }}
              >
                <source
                  srcSet="/images/responsive/consultorios-profesionales-2.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/consultorios-profesionales-2-v02.png"
                  alt="Aulas"
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  objectFit={"cover"}
                />
              </Flex>
            </Flex>
            <Stack spacing={{ base: "8px", sm: "24px" }}  >
              <Stack
                justifyContent={"flex-end"}
                spacing="16px"
                px="10px"
                maxW="468px"
              >
                <Text
                  as="h3"
                  color="#3B424A"
                  fontFamily={"DM Serif Display"}
                  fontSize={{ base: "40px", lg: "70px" }}
                  fontWeight={400}
                  lineHeight={{ base: "42px", lg: "72px" }}
                  letterSpacing={{ base: "0.7px", lg: "0.7px" }}
                >
                  Consultorios Profesionales
                </Text>
                <Text
                    as="p"
                    fontSize={{ base: "16px", lg: "16px" }}
                    fontWeight={400}
                    lineHeight={{ base: "24px", lg: "34px" }}
                    letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                    overflowX="clip"
                    backgroundColor="rgb(355,355,355, 1)"
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  >
                    Construidos con las comodidades que merecen pacientes y
                    profesionales. Salas de espera, baños para discapacitados,
                    estacionamiento en la puerta, fácil acceso. Cámara Gesell.{" "}
                </Text>{" "}  
                <Link href="mailto:info@losbemoles.com.ar">
                  <Button
                    type="button"
                    bg="#DDC692"
                    color="#3B424A"
                    size="lg"
                    textTransform="uppercase"
                    p="16px"
                    w="fit-content"
                    fontSize={{ base: "14px", lg: "14px" }}
                    fontWeight={900}
                    letterSpacing={{ base: "2.8px", lg: "2.4px" }}
                    borderRadius="4px"
                    _hover={{ bg: "#e9dbb9" }}
                  >
                    Consultar
                  </Button>
                </Link>
              </Stack>
              <Flex 
                as="picture"
                w={{ base: "379px", lg: "468px" }}
                alignSelf={"stretch"}
                //h={{ base: "229px", lg: "223px" }}
              >
                <source
                  srcSet="/images/responsive/consultorios-profesionales-3.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/consultorios-profesionales-3-v02.png"
                  alt="Aulas"
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />{" "}
              </Flex>
            </Stack>
          </Flex>

          {/* Sala de Ensayo */}
          <Flex
            alignItems={"flex-start"}
            gap={{ base: "8px", lg: "24px" }}
            flexWrap={"wrap"}
          >
            <Flex 
              as="picture" 
              order={{ base: "3", sm: "3" }}
              w={{ base: "100px", sm: "300px" }}
              alignSelf={"stretch"}
              //h={{ base: "202px", sm: "466px" }}
            >
              <source
                srcSet="/images/responsive/sala-de-ensayo-1.png"
                media="(max-width: 480px)"
              />
              <Image
                src="/images/sala-de-ensayo-1-v02.png"
                alt="Clases y cursos"
                objectFit={"cover"}
                border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                transform="scaleX(-1)"
              />
            </Flex>
            <Stack
              //h="100%"
              py="10px"
              px="10px"
              order={{ base: "1", xs: "2", lg: "2" }}
              maxW="401px"
            >
              <Text
                as="h3"
                color="#3B424A"
                fontFamily={"DM Serif Display"}
                fontSize={{ base: "40px", lg: "70px" }}
                fontWeight={400}
                lineHeight={{ base: "42px", lg: "72px" }}
                letterSpacing={{ base: "0.7px", lg: "0.7px" }}
                backgroundColor="rgb(355,355,355, 1)"
                //border={{base:"2px solid #FFF", sm:"5px solid #FFF"}}
              >
                Sala de Ensayo
              </Text>
              <Text
                as="p"
                fontSize={{ base: "16px", lg: "16px" }}
                fontWeight={400}
                lineHeight={{ base: "24px", lg: "34px" }}
                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                overflowX="clip"
                backgroundColor="rgb(355,355,355, 1)"
                border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
              >
                Un agradable espacio concebido para la exploración musical,
                correctamente acustizado y con las condiciones ténicas para que
                al hacerlo podamos captar todo el potencial y brillo.
                <br /> 
                Ensayos. Grabación Multipista. Estudio dotado con equipos
                Fender, Laney, Monitores Makie, Consola Allen & Heath,
                Microfonía Shure, Rode, AudioTechnica, Sennheiser. Producciones Audiovisuales.
              </Text>
              <Link href="/estudio">
                  <Button
                    type="button"
                    bg="#DDC692"
                    color="#3B424A"
                    size="lg"
                    textTransform="uppercase"
                    p="16px"
                    w="fit-content"
                    fontSize={{ base: "14px", lg: "14px" }}
                    fontWeight={900}
                    letterSpacing={{ base: "2.8px", lg: "2.4px" }}
                    borderRadius="4px"
                    _hover={{ bg: "#e9dbb9" }}
                  >
                    Consultar
                  </Button>
                </Link>
            </Stack>
            <Flex 
              as="picture" 
              order={{ base: "2", xs: "1", lg: "1" }}
              w={{ base: "221px", sm: "563px" }}
              alignSelf={"stretch"}
              //h={{ base: "202px", sm: "466px" }}
            >
              <source
                srcSet="/images/responsive/sala-de-ensayo-2.png"
                media="(max-width: 480px)"
              />
              <Image
                src="/images/sala-de-ensayo-2-v02.png"
                alt="Clases y cursos"
                objectFit={"cover"}
                border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
              />
            </Flex>
          </Flex>
          <SumArte />
          <Quincho />
        </Stack>
      </Stack>
    </>
  );
};

export default EspaciosPage;