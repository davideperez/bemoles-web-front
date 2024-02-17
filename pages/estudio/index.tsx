import {
  Flex,
  Link,
  Text,
  Image,
  Stack,
  Button,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
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
          spacing={{ base: "48px", lg: "100px" }}
          //pt={{ lg: "8rem" }}
          alignItems={{base:"flex-start", lg: "center"}}
        >
          {/* 01  */}
          <Flex
            pt={{ base: "1rem", lg: "5rem" }}
            alignItems={"flex-start"}
            gap={{ base: "0px", sm: "40px", lg: "90px" }}
            flexWrap={"wrap"}
            justify={"center"}
          >
            <Stack position="relative" h={{ base: "580px", lg: "1100px" }}>
              <Flex as="picture">
                <source
                  srcSet="/images/responsive/sala1.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src={"/images/sala1.png"}
                  mt={{ base: "81", lg: "152px" }}
                  ml={{ base: "175px", lg: "330px" }}
                  alt={"Sum-arte"}
                  w={{ base: "196px", lg: "370px" }}
                  h={{ base: "196px", lg: "370px" }}
                  objectFit={"contain"}
                />
              </Flex>

              <Flex as="picture">
                <source
                  srcSet="/images/responsive/sala2.png"
                  media="(max-width: 480px)"
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
              </Flex>

              <Flex as="picture">
                <source
                  srcSet="/images/responsive/sala3.png"
                  media="(max-width: 480px)"
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
              </Flex>

              <Flex as="picture">
                <source
                  srcSet="/images/responsive/sala4.png"
                  media="(max-width: 480px)"
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
              </Flex>
            </Stack>
            <Stack spacing="40px" flex={1} maxW="403px"/*  pt="3rem" */>
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
                  Calidad, Confort y Diseño
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: "16px", lg: "16px" }}
                  fontWeight={400}
                  lineHeight={{ base: "24px", lg: "34px" }}
                  letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                  //maxW="590px"
                >
                  En nuestro <b>Estudio</b> combinamos el acceso a las herramientas, la pericia
                  tecnológica; con un entorno técnica y <b>estéticamente diseñado</b> para concluir 
                  en un espacio que invite a la creación.
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: "16px", lg: "16px" }}
                  fontWeight={400}
                  lineHeight={{ base: "24px", lg: "34px" }}
                  letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                >
                  Buscamos ofrecerte una experiencia de grabación y ensayo inigualable. 
                  Ya seas un músico <b>solista</b>, una <b>banda</b> o un <b>grupo vocal</b>; deseamos llevar tus 
                  proyectos musicales al siguiente nivel.
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: "16px", lg: "16px" }}
                  fontWeight={400}
                  lineHeight={{ base: "24px", lg: "34px" }}
                  letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                >
                  Equipado para garantizar una calidad de sonido excepcional en cada grabación. 
                  Desde <b>micrófonos de alta gama</b> hasta la <b>consola de mezcla digital de primera
                  línea</b>, nos aseguramos que tus grabaciones sean nítidas, profesionales y 
                  reflejen tu visión artística.   
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: "16px", lg: "16px" }}
                  fontWeight={400}
                  lineHeight={{ base: "24px", lg: "34px" }}
                  letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                >
                  Un espacio versátil y <b>amplio</b> (640x340), diseñado pensando en el <b>confort</b>
                  y la <b>calidad acústica</b>, que también es muchas veces elegido para la 
                  realización de atractivos audiovisuales.
                </Text>
                <Link href="mailto:info@losbemoles.com.ar">
                  <Button
                    type="button"
                    bg="#DDC692"
                    color="#3B424A"
                    size="lg"
                    textTransform="uppercase"
                    p="16px"
                    w="fit-content"
                    mb={"16px"}
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
            </Stack>
          </Flex>

          {/* 02 Características del Estudio */}
          <Flex
            //maxH={"500px"}
            gap={"24px"}
          >
            {/* Titulo e Items */}
            <Flex
              flexDir={"column"}
              flex={"1"}
              gap={"16px"}
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
                Características<br/>
                del Estudio
              </Text>
              <UnorderedList
                px="0.5rem"
                as="p"
                fontSize={{ base: "16px", lg: "16px" }}
                fontWeight={400}
                lineHeight={{ base: "24px", lg: "34px" }}
                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                maxW="590px"
              >
                <ListItem>Aire acondicionado.</ListItem>
                <ListItem>Adecuada absorción y difusión sonora.</ListItem>
                <ListItem>Cajas de monitoreo y monitoreo In-Ear.</ListItem>
                <ListItem>Equipo para Bajo Fender.</ListItem>
                <ListItem>Equipos para Bajo y Guitarra Fender y Laney.</ListItem>
                <ListItem>Batería Tama Silverstar.</ListItem>
                <ListItem>Monitores Makie para Estudio.</ListItem>
                <ListItem>Consola Digital Allen & Heath + Logic Pro.</ListItem>
                <ListItem>Micrófonos Rode, Shure, Audio Technica, Sennheiser.</ListItem>
                <ListItem>Puestas a tierra, jabalinas independientes, interruptores térmicos y disyuntores.</ListItem>
                <ListItem>Matafuegos y área médica protegida.</ListItem>
              </UnorderedList>
              <Link href="mailto:info@losbemoles.com.ar">
                <Button
                  type="button"
                  bg="#DDC692"
                  color="#3B424A"
                  size="lg"
                  textTransform="uppercase"
                  p="16px"
                  w="fit-content"
                  //mb={"16px"}
                  fontSize={{ base: "14px", lg: "14px" }}
                  fontWeight={900}
                  letterSpacing={{ base: "2.8px", lg: "2.4px" }}
                  borderRadius="4px"
                  _hover={{ bg: "#e9dbb9" }}
                >
                  Consultar
                </Button>
              </Link>
            </Flex>
            {/* 2 Imagenes */}
            <Flex
              flexDirection={"column"}            
              flex={"1"}
              maxH={"600px"}
            >
              {/* Imagen 01 */}
              <Flex
                as="picture"
                alignSelf={"stretch"}
                h={"75%"}

              >
                 <source
                  srcSet="https://dummyimage.com/600x600/242424/808080.png"
                  //media="(max-width: 480px)"
                />
                <Image
                  src="https://dummyimage.com/600x600/242424/808080.png"
                  alt="Estudio"
                  w={"100%"}
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />
              </Flex>
              {/* Imagen 02 */}
              <Flex
                as="picture"
                alignSelf={"stretch"}
                h={"25%"}
              >
                <source
                  srcSet="https://dummyimage.com/600x600/242424/808080.png"
                  //media="(max-width: 480px)"
                /> 
                <Image
                  src="https://dummyimage.com/600x600/242424/808080.png"
                  alt="Estudio"
                  w="100%"
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />
              </Flex>
            </Flex>
          </Flex>
          
          {/* 03 Asesoramiento Profesional */}
          <Flex
            //maxH={"500px"}
            gap={"24px"}
          >
            {/* 2 Imagenes */}
            <Flex
              flex={"1"}
              maxW={"600px"}
            >
              {/* Imagen 01 */}
              <Flex
                as="picture"
                alignSelf={"stretch"}
                w={"75%"}
              >
                 <source
                  srcSet="https://dummyimage.com/600x600/242424/808080.png"
                  //media="(max-width: 480px)"
                />
                <Image
                  src="https://dummyimage.com/600x600/242424/808080.png"
                  alt="Estudio"
                  h={"100%"}
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />
              </Flex>
              {/* Imagen 02 */}
              <Flex
                as="picture"
                alignSelf={"stretch"}
                w={"25%"}
              >
                <source
                  srcSet="https://dummyimage.com/600x600/242424/808080.png"
                  //media="(max-width: 480px)"
                /> 
                <Image
                  src="https://dummyimage.com/600x600/242424/808080.png"
                  alt="Estudio"
                  h="100%"
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />
              </Flex>
            </Flex>
            {/* Titulo e Items */}
            <Flex
              flexDir={"column"}
              flex={"1"}
              gap={"16px"}
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
                Asesoramiento <br/>
                Profesional
              </Text>
              <Text
                as="p"
                fontSize={{ base: "16px", lg: "16px" }}
                fontWeight={400}
                lineHeight={{ base: "24px", lg: "34px" }}
                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                maxW="590px"
              >
                Entendiendo que la labor debe realizarse en forma colaborativa, estamos listos 
                para trabajar contigo y ayudarte a materializar tu visión musical. Ya sea que
                necesites <b>asesoramiento </b> en la producción, la mezcla, la masterización o la
                simple grabación de un ensayo.
              </Text>
              <Text
                as="p"
                fontSize={{ base: "16px", lg: "16px" }}
                fontWeight={400}
                lineHeight={{ base: "24px", lg: "34px" }}
                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                maxW="590px"
              >
                Ya seas un <b>artista emergente</b> buscando hacer tu primera grabación o un <b>músico
                experimentado</b> en busca de un espacio profesional, nuestro estudio de 
                grabación y sala de ensayo es el lugar perfecto para hacer realidad tus 
                proyectos musicales.
              </Text>
              <Text
                as="p"
                fontSize={{ base: "16px", lg: "16px" }}
                fontWeight={400}
                lineHeight={{ base: "24px", lg: "34px" }}
                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                maxW="590px"
              >
                Contacta con nosotros hoy mismo para <b>reservar tu sesión</b> o para obtener más 
                información.
              </Text>
              <Link href="mailto:info@losbemoles.com.ar">
                <Button
                  type="button"
                  bg="#DDC692"
                  color="#3B424A"
                  size="lg"
                  textTransform="uppercase"
                  p="16px"
                  mb={"42px"}
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
            </Flex>

          </Flex>

          {/* 04 Servicios */}
          <Flex
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
            <Flex ml={{ base: "0px", lg: "520px" }} align="center">
              <Image
                mt={{ base: "0px", lg: "5rem", "2xl": "0px" }}
                w={{ base: "359px", lg: "559px", "2xl": "759px" }}
                h={{ base: "359px", lg: "559px", "2xl": "759px" }}
                src="/images/estudio-de-grabacion.png"
                alt="Estudio de grabación"
                objectFit={"contain"}
                objectPosition="left"
              />
            </Flex>
          </Flex>
          
        </Stack>
      </Stack>
    </>
  );
};

export default EstudioPage;