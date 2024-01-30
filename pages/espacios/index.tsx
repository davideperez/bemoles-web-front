import {
  Box,
  Flex,
  Text,
  Link,
  Grid,
  Image,
  Stack,
  Button,
  Heading,
  GridItem,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

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
         
{/*           
          <Flex gap={{ base: "8px", sm: "24px" }} flexWrap={"wrap-reverse"}>
            <Grid
              gap={{ base: "8px", sm: "24px" }}
              templateColumns={{ base: "220px 151px", lg: "432px 325px" }}
              templateRows={{ base: "auto", lg: "378px 332px" }}
            >
              <Flex as="picture">
                <source
                  srcSet="/images/salon-para-eventos-1.png"
                  media="(min-width: 480px)"
                />
                <Image
                  src="/images/salon-para-eventos-1.png"
                  alt="Clases y cursos"
                  w={{ base: "220px", lg: "471px" }}
                  h={{ base: "176px", lg: "378px" }}
                  order={{ base: "2", sm: "1" }}
                />
              </Flex>
              <Flex as="picture">
                <source
                  srcSet="/images/responsive/salon-para-eventos-2.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/salon-para-eventos-2.png"
                  alt="Clases y cursos"
                  w={{ base: "151px", lg: "325px" }}
                  h={{ base: "176px", lg: "378px" }}
                />
              </Flex>
              <Flex as="picture">
                <source
                  srcSet="/images/responsive/salon-para-eventos-3.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/salon-para-eventos-3.png"
                  alt="Clases y cursos"
                  w={{ base: "220px", lg: "471px" }}
                  h={{ base: "155px", lg: "332px" }}
                  order={{ base: "3", sm: "3" }}
                />
              </Flex>

              <Flex as="picture">
                <source
                  srcSet="/images/responsive/salon-para-eventos-4.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/salon-para-eventos-4.png"
                  alt="Clases y cursos"
                  w={{ base: "151px", lg: "325px" }}
                  h={{ base: "155px", lg: "332px" }}
                  order={{ base: "4", sm: "4" }}
                />
              </Flex>
            </Grid>
            <Stack spacing={{ base: "8px", sm: "24px" }}>
              <Stack
                justifyContent={"flex-end"}
                maxW="507px"
                spacing="16px"
                px="10px"
              >
                <Text
                  as="h3"
                  color="#3B424A"
                  fontFamily={"DM Serif Display"}
                  fontSize={{ base: "40px", lg: "70px" }}
                  fontWeight={400}
                  lineHeight={{ base: "42px", lg: "72px" }}
                  letterSpacing={{ base: "0.7px", lg: "0.7px" }}
                  maxW="338px"
                >
                  Salón para Eventos
                </Text>

                <Text
                  as="p"
                  fontSize={{ base: "16px", lg: "16px" }}
                  fontWeight={400}
                  lineHeight={{ base: "24px", lg: "34px" }}
                  letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                  maxW="361px"
                >
                  Confortable salón para la realización de diversas actividades,
                  exposiciones e intervenciones artísticas, presentaciones
                  literarias, seminarios, trabajos en grupo, proyección de Cine
                  y encuentros en general. Montado con sonido profesional,
                  video, iluminación variable, climatización y sanitarios.
                </Text>
              </Stack>
              <Flex as="picture">
                <source
                  srcSet="/images/salon-para-eventos-5.png"
                  media="(min-width: 480px)"
                />
                <Image
                  src="/images/salon-para-eventos-mobile-5.png"
                  alt="Clases y cursos"
                  w={{ base: "379px", lg: "468px" }}
                  h={{ base: "274px", lg: "278px" }}
                />
              </Flex>
            </Stack>
          </Flex>
 */}








          {/* Sum-arte*/}
          <Flex
            gap={{ base: "8px", sm: "24px" }}
            px={{ base: "8px", sm: "16px" }}
            flexDirection={"column"}
            alignItems={"center"}
            w={"82rem"}
          >
            {/* 2 Columnas */}
            <Flex 
              flexWrap={"wrap"}
              flexDirection={{ base: "column", sm: "row" }}
              //gap={{ base: "8px", sm: "24px" }}
            >
              {/* Columna 1 */}
              <Flex 
                flexDirection={"column"}
                gap={{base:"16px", sm:"48px"}}
                flex={"1 0 0"}
              >
                {/* Textos y Boton */}
                <Flex
                  display= "flex"
                  padding= "0px 10px"
                  flexDirection= "column"
                  alignItems= "flex-start"
                  gap= {{base:"16px", sm:"24px"}}
                  alignSelf= "stretch"
                >
                  <Text
                    as="h3"
                    color="#3B424A"
                    fontFamily={"DM Serif Display"}
                    fontSize={{ base: "40px", lg: "70px" }}
                    fontWeight={400}
                    lineHeight={{ base: "42px", lg: "72px" }}
                    letterSpacing={{ base: "0.7px", lg: "0.7px" }}
                    maxW="338px"
                  >
                    Sum-arte
                  </Text>
                  <Text
                    as="p"
                    fontSize={{ base: "16px", lg: "16px" }}
                    fontWeight={400}
                    lineHeight={{ base: "24px", lg: "34px" }}
                    letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                    //overflowX="clip"
                    backgroundColor="rgb(355,355,355, 1)"
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                    alignSelf={"stretch"}
                  >
                    Bienvenidos al <b>Salón de Usos Múltiples</b>, el lugar perfecto para cubrir 
                    las necesidades en cuanto a exposiciones e intervenciones artísticas, presentaciones 
                    literarias, seminarios, reuniones, Proyecciones de cine, eventos musicales, talleres, 
                    charlas y mucho más.
                  </Text>
                  <Link 
                    href="/agenda"
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
                      Ver Agenda
                    </Button>
                  </Link>
                  {/* Imagen 1 */}
                  <Flex 
                    as="picture" 
                    alignSelf= "stretch"
                    //flexShrink={"1"}
                    h={"196px"}
                  >
                    <source
                      srcSet="/images/sum-arte-01-v03.png"
                      //media="(max-width: 480px)"
                    />
                    <Image
                      src="/images/sum-arte-01-v03.png"
                      alt="Clases y cursos"
                      objectFit={"cover"}
                      border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                      w={"100%"}
                    />
                  </Flex>
                </Flex>
              </Flex>
              {/* Columna 2: Imagen 2 */}
              <Flex 
                as="picture"
                flex={"1 0 0"}
                alignSelf={"stretch"}
                display={{base:"none", sm:"flex"}}
              >
                <source
                  srcSet="/images/sum-arte-02-v03.png"
                  //media="(min-width: 480px)"
                />
                <Image
                  src="/images/sum-arte-02-v03.png"
                  alt="Clases y cursos"
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  h={"min"}
                  //w={"100%"}
                />
              </Flex>
            </Flex>




            {/* 3 Filas */}
            <Flex 
              gap={{ base: "8px", sm: "24px" }}
              flexDirection={"column"}
              alignItems={"center"}
              alignSelf={"stretch"}
            >

              {/* Versatil */}
              <Flex
                padding="0px 10px"
                align-items="flex-start"
                gap="24px"
                align-self=" stretch"
                flexDir={{base:"column", sm:"row"}}
              >
                {/* Texto */}
                <Flex 
                  flexDirection={"column"}
                  align-items="flex-start"
                  gap="24px"
                  flex={"1 0 0"}
                  align-self=" stretch"
                >
                  <Flex
                    p="24px"
                    h={{base:"", sm:"81px"}}
                    alignItems={"flex-start"}
                    alignSelf={"stretch"}
                    align={"center"}
                    bg="rgba(121, 163, 66, 0.80)"
                    color="white"
                    fontSize={{ base: "16px", lg: "24px" }}
                    fontWeight={700}
                    letterSpacing={{ base: "3.2px", lg: "4.8px" }}
                    textTransform={"uppercase"}
                    whiteSpace={{ base: "normal", lg: "nowrap" }}
                  >
                    VERSATILIDAD
                  </Flex>
                  <Flex 
                    alignSelf={"stretch"}
                    flex={"1 0 0"}
                  >
                    <Text
                      as="p"
                      fontSize={{ base: "16px", lg: "16px" }}
                      fontWeight={400}
                      lineHeight={{ base: "24px", lg: "34px" }}
                      letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                    >
                      Nuestro espacioso salón, con <b>capacidad para cien 
                      personas</b>, está diseñado para brindar un ambiente 
                      acogedor y funcional, adaptado a una amplia gama 
                      de actividades. Su flexibilidad y distribución abierta 
                      permite ajustarlo a tus necesidades específicas: Desde 
                      reuniones íntimas hasta <b>eventos</b> masivos, sin comprometer
                      la comodidad ni la calidad.
                    </Text>
                  </Flex>
                </Flex>
                {/* Imagen 2 */}
                <Flex 
                  as="picture"
                  w={{base:"100%", sm:"30%"}}
                  //h={"384px"}
                >
                  <source
                    srcSet="/images/sum-arte-03-v03.png"
                    //media="(min-width: 480px)"
                  />
                  <Image
                    src="/images/sum-arte-03-v03.png"
                    alt="Clases y cursos"
                    objectFit={"cover"}
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  />
                </Flex>
              </Flex>

              {/* Sistema de Audio y Video */}
              <Flex
                padding="0px 10px"
                align-items="flex-start"
                gap="24px"
                align-self=" stretch"
              >
                {/* Texto */}
                <Flex 
                  flexDirection={"column"}
                  align-items="flex-start"
                  gap="24px"
                  flex={"1 0 0"}
                  align-self=" stretch"
                  order={"2"}
                >
                  <Flex
                    p="24px"
                    h={"81px"}
                    alignItems={"flex-start"}
                    alignSelf={"stretch"}
                    bg="rgba(27, 58, 102, 0.80)"
                    color="white"
                    fontSize={{ base: "16px", lg: "24px" }}
                    fontWeight={700}
                    letterSpacing={{ base: "3.2px", lg: "4.8px" }}
                    textTransform={"uppercase"}
                    whiteSpace={{ base: "normal", lg: "nowrap" }}
                  >
                    SISTEMA DE AUDIO Y VIDEO
                  </Flex>
                  <Flex 
                    alignSelf={"stretch"}
                    flex={"1 0 0"}
                  >
                    <Text
                      as="p"
                      fontSize={{ base: "16px", lg: "16px" }}
                      fontWeight={400}
                      lineHeight={{ base: "24px", lg: "34px" }}
                      letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                    >
                      Si necesitas proyectar una presentación, mostrar una película o 
                      transmitir contenido multimedia, tenemos un sistema de proyección 
                      y sonido que garantizará una <b>experiencia</b> visual y auditiva excepcional 
                      para todos los asistentes.
                    </Text>
                  </Flex>
                </Flex>
                {/* Imagen 2 */}
                <Flex 
                  as="picture"
                  w={"30%"}
                  //h={"384px"}
                  order={"1"}
                >
                  <source
                    srcSet="/images/sum-arte-04-v03.png"
                    //media="(min-width: 480px)"
                  />
                  <Image
                    src="/images/sum-arte-04-v03.png"
                    alt="Clases y cursos"
                    objectFit={"cover"}
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  />
                </Flex>
              </Flex>
              {/* Servicios Adicionales */}
              <Flex
                padding="0px 10px"
                align-items="flex-start"
                gap="24px"
                align-self=" stretch"
              >
                {/* Texto */}
                <Flex 
                  flexDirection={"column"}
                  align-items="flex-start"
                  gap="24px"
                  flex={"1 0 0"}
                  align-self=" stretch"
                >
                  <Flex
                    p="24px"
                    h={"81px"}
                    alignItems={"flex-start"}
                    alignSelf={"stretch"}
                    bg="rgba(245, 130, 32, 0.80) "
                    color="white"
                    fontSize={{ base: "16px", lg: "24px" }}
                    fontWeight={700}
                    letterSpacing={{ base: "3.2px", lg: "4.8px" }}
                    textTransform={"uppercase"}
                    whiteSpace={{ base: "normal", lg: "nowrap" }}
                  >
                    SERVICIOS ADICIONALES
                  </Flex>
                  <Flex 
                    alignSelf={"stretch"}
                    flex={"1 0 0"}
                  >
                    <Text
                      as="p"
                      fontSize={{ base: "16px", lg: "16px" }}
                      fontWeight={400}
                      lineHeight={{ base: "24px", lg: "34px" }}
                      letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                    >
                      Además, de la asistencia profesional a tu disposición para 
                      brindarte el apoyo necesario en la organización y ejecución 
                      del encuentro. Nuestro salón también cuenta con servicios 
                      adicionales para hacer de tu evento un éxito rotundo. Baños,
                      Climatización e Iluminación.Podemos proporcionar servicio de 
                      <b>Buffet</b> para satisfacer tus necesidades gastronómicas y apoyo 
                      logístico para ayudarte con la organización y coordinación general.
                    </Text>
                  </Flex>
                </Flex>
                {/* Imagen 2 */}
                <Flex 
                  as="picture"
                  w={"30%"}
                  //h={"384px"}
                >
                  <source
                    srcSet="/images/sum-arte-05-v03.png"
                    //media="(min-width: 480px)"
                  />
                  <Image
                    src="/images/sum-arte-05-v03.png"
                    alt="Clases y cursos"
                    objectFit={"cover"}
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  />
                </Flex>
              </Flex>
            </Flex>




            {/* Texto Final*/}
            <Flex>
              <Text

              >

              </Text>
            </Flex>
          </Flex>









          {/* El Quincho*/}
          <Flex 
            gap={{ base: "8px", sm: "24px" }} 
            flexWrap={"wrap"}
          >
            <Stack spacing={{ base: "8px", sm: "24px" }}>
              <Stack justifyContent={"flex-end"} spacing="16px" px="10px">
                <Text
                  as="h3"
                  color="#3B424A"
                  fontFamily={"DM Serif Display"}
                  fontSize={{ base: "40px", lg: "70px" }}
                  fontWeight={400}
                  lineHeight={{ base: "42px", lg: "72px" }}
                  letterSpacing={{ base: "0.7px", lg: "0.7px" }}
                  boxShadow={"0 0 10px 10px rgb(355,355,355,0.65)"}
                  backgroundColor="rgb(355,355,355,0.65)"
                >
                  El Quincho
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: "16px", lg: "16px" }}
                  fontWeight={400}
                  lineHeight={{ base: "24px", lg: "34px" }}
                  letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                  maxW="545px"
                  overflowX="clip"
                >
                  Amplio y luminoso taller para la realización de talleres, con
                  instalaciones gastronómicas para el complemento de
                  actividades. Acceso al parque.{" "}
                </Text>{" "}
                <Link 
                    href="/talleres"
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
                      Ver Talleres
                    </Button>
                  </Link>
              </Stack>
              <Flex 
                as="picture"
                w={{ base: "379px", lg: "576px" }}
                //h={{ base: "173px", lg: "242px" }}  
                alignSelf= "stretch"
              >
                <source
                  srcSet="/images/quincho-1-v02.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/quincho-1-v02.png"
                  alt="Aulas"
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />{" "}
              </Flex>
            </Stack>
            <Flex 
              as="picture"
              alignSelf= "stretch"
              w={{ base: "379px", lg: "712px" }}
              //h={{ base: "244px", lg: "456px" }}
            >
              <source
                srcSet="/images/responsive/quincho-2-v02.png"
                media="(max-width: 480px)"
              />
              <Image
                src="/images/quincho-2-v02.png"
                alt="Aulas"
                objectFit={"cover"}
                border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
              />
            </Flex>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};

export default EspaciosPage;
