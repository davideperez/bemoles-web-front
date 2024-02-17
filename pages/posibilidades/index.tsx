import {
  Flex,
  Hide,
  Grid,
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

const PosibilidadesPage = () => {

  const cursosImagesSizes = {
    w: {
      base: "",//"171px",
      sm: "",//"190px",
      md: "75%",//"171px",
      lg: "",//"304px",
      xl:"380px" // 380px
    },
    h: {
      base: "",//"270px",
      sm: "",//"300px",
      md: "75%",
      lg: "",//"480px",
      xl: "600px" // 600px
    },
  }

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
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Stack
          spacing={{ base: "48px", lg: "100px" }}
          pt={{ lg: "8rem" }}
          backgroundImage={{
            base: "url('/images/clases-y-cursos-bg-mobile.png')",
            lg: "url('/images/posibilidades-bg-xl.png')",
            "2xl": "url('/images/posibilidades-bg.png')",
          }}
          objectFit={"cover"}
          objectPosition="center"
          backgroundPosition={{
            base: "-220px 30px",
            sm: "400px 29px",
            md: "-100px 0px",
            lg: "0px 150px",
          }}
          backgroundRepeat={"no-repeat"}
          alignItems={{base:"flex-start", lg: "center"}}
        >
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Flex
            //gap={{ base: "8px", sm: "24px" }} 
            flexWrap={"wrap"}
            justifyContent={"center"}
            //w={"1332px"}
          >
            {/* ////////////////////////////////////////// MAIN TEXTOS /////////////////////////////////////////////////////// */}
            <Stack
              py="10px"
              px="10px"
            >
              {/* ////////////////////////////////////////// titulo  /////////////////////////////////////////////////////// */}
              <Text
                w={"390px"}
                as="h3"
                color="#3B424A"
                fontFamily={"DM Serif Display"}
                fontSize={{ base: "40px", lg: "70px" }}
                fontWeight={400}
                lineHeight={{ base: "42px", lg: "72px" }}
                letterSpacing={{ base: "0.7px", lg: "0.7px" }}
              >
                Clases y cursos
              </Text>
              {/* ////////////////////////////////////////// items  /////////////////////////////////////////////////////// */}
              <UnorderedList
                px="0.5rem"
                fontSize={{ base: "16px", lg: "16px" }}
                fontWeight={400}
                lineHeight={{ base: "34px", lg: "34px" }}
                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                whiteSpace="nowrap"
              >
                <Flex
                  gap={{ lg: "16px" }}
                  sx={{ "> div > li": { mt: "0px" } }}
                  flexWrap={{ base: "wrap", sm: "nowrap" }}
                >
                  <Stack mx="1rem">
                    <ListItem>Dibujo y Pintura</ListItem>
                    <ListItem>Arte para niños</ListItem>
                    <ListItem>Jardín de Teatro</ListItem>
                    <ListItem>Pintura en Porcelana</ListItem>
                    <ListItem>Escritura Creativa</ListItem>
                    <ListItem>Bordado</ListItem>
                    <ListItem>Tejido</ListItem>
                  </Stack>
                  <Stack mx="1rem">
                    <ListItem>Mosaiquismo</ListItem>
                    <ListItem>Encuadernación</ListItem>
                    <ListItem>Cerámica</ListItem>
                    <ListItem>Folklore</ListItem>
                    <ListItem>Flamenco</ListItem>
                    <ListItem>Danza Contemporánea</ListItem>
                  </Stack>
                </Flex>
              </UnorderedList>{" "}
              {/* ////////////////////////////////////////// textito final  /////////////////////////////////////////////////////// */}
              <Text
                as="p"
                fontSize={{ base: "16px", lg: "16px" }}
                fontWeight={700}
                lineHeight={{ base: "normal", lg: "34px" }}
                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                maxW="590px"
              >
                Encuentros Semanales de 1 a 2 horas.
              </Text>
              {/* ////////////////////////////////////////// boton  /////////////////////////////////////////////////////// */}
              <Link href='/talleres'>
                <Button
                  type="button"
                  bg="#DDC692"
                  color="#3B424A"
                  size="lg"
                  my="1rem"
                  textTransform="uppercase"
                  p="16px"
                  w="fit-content"
                  fontSize={{ base: "14px", lg: "14px" }}
                  fontWeight={700}
                  letterSpacing={{ base: "2.8px", lg: "2.4px" }}
                  borderRadius="4px"
                  _hover={{ bg: "#e9dbb9" }}
                >
                  Ver los Talleres
                </Button>
              </Link>
            </Stack>
            <Flex 
              //as="three-pictures"
              flexWrap={"nowrap"}
              gap={"24px"}
              alignItems={"flex-start"}
            >
              {/* //////////////////////////////////////////Imagen 1 /////////////////////////////////////////////////////// */}
              <Flex 
                as="picture"
                w={{base: "108px", lg: "141px"}}
                //h={{base: "fit-content", lg: "fit-content"}}
                alignSelf={"stretch"}
              >
                <source
                  srcSet="https://dummyimage.com/108x462/242424/808080.png"
                  media="(max-width: 600px)"
                  />
                <Image
                  src="https://dummyimage.com/141x600/242424/808080.png"
                  alt="Clases y cursos"
                  /* w={{ base: cursosImagesSizes.w.base, sm: cursosImagesSizes.w.sm, md: cursosImagesSizes.w.md, lg: cursosImagesSizes.w.lg, xl: cursosImagesSizes.w.xl }}
                  h={{ base: cursosImagesSizes.h.base, sm: cursosImagesSizes.h.sm, md: cursosImagesSizes.h.md, lg: cursosImagesSizes.h.lg, xl: cursosImagesSizes.h.xl }} */
                  objectFit="cover"
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />{" "}
              </Flex>
              {/* //////////////////////////////////////////Imagen 2 /////////////////////////////////////////////////////// */}
              <Flex 
                as="picture"
                w={{base: "240px", lg: "391px"}}
                //h={{base: "fit-content", lg: "fit-content"}}
                alignSelf={"stretch"}
              >
                <source
                  srcSet="https://dummyimage.com/300x462/242424/808080.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="https://dummyimage.com/391x600/242424/808080.png"
                  alt="Clases y cursos"
                  objectFit="cover"
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />{" "}
              </Flex>
              {/* //////////////////////////////////////////Imagen 3 /////////////////////////////////////////////////////// */}
              <Hide below="1700px">
                <Flex 
                  as="picture" 
                  w={{base: "", lg: "292px"}}
                  //h={{base: "", lg: "fit-content"}}
                  alignSelf={"stretch"}
                >
                  <source
                    srcSet="https://dummyimage.com/292x600/242424/808080.png"
                    media="(min-width: 480px)"
                  />
                  <Image
                    src="https://dummyimage.com/292x600/242424/808080.png"
                    alt="Clases y cursos"
                    objectFit="cover"
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  />
                </Flex>
              </Hide>
            </Flex>
          </Flex>
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Flex 
            gap={{ base: "8px", sm: "24px" }} 
            flexWrap={"wrap-reverse"}
            alignItems={"flex-end"}
          >
            <Grid
              gap={{ base: "8px", sm: "24px" }}
              templateColumns={{ base: "1.2fr 0.8fr", lg: "1.2fr 0.8fr" }}
              templateRows={{ base: "1.2fr 0.8fr", lg: "1.2fr 0.8fr" }}
              //grid-auto-rows: max-content
              justifyContent={"center"}
              alignSelf={"stretch"}
              //width={""}
              w={{base: "379px", lg: "auto"}}
              //flexGrow={"1"}
            >
              <Flex 
                as="picture"
                alignSelf={"stretch"}
              >
                <source
                  srcSet="/images/clases-de-musica-1-v02.png"
                  media="(min-width: 480px)"

                />
                <Image
                  src="/images/clases-de-musica-5-v02.png"
                  alt="Clases y cursos"
                  order={{ base: "2", sm: "1" }}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  objectFit={"cover"}
                />
              </Flex>
              <Flex 
                as="picture"
                alignSelf={"stretch"}
                justifySelf={"center"}
              >
                <source
                  srcSet="/images/clases-de-musica-2-v02.png"
                  //media="(max-width: 480px)"
                />
                <Image
                  src="/images/clases-de-musica-2-v02.png"
                  alt="Clases y cursos"
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  order={{ base: "1", sm: "2" }}
                  objectFit={"cover"}
                />{" "}
              </Flex>
              <Flex 
                as="picture"
                alignSelf={"stretch"}
              >
                <source
                  srcSet="/images/responsive/clases-de-musica-3.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/clases-de-musica-3-v02.png"
                  alt="Clases y cursos"
                  order={{ base: "4", sm: "3" }}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  objectFit={"cover"}
                />{" "}
              </Flex>
              <Flex 
                as="picture"
                alignSelf={"stretch"}
                justifySelf={"center"}
              >
                <source
                  srcSet="https://dummyimage.com/325x332/242424/808080.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="https://dummyimage.com/325x332/242424/808080.png"
                  alt="Clases y cursos"
                  order={{ base: "3", sm: "4" }}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  objectFit={"cover"}
                />{" "}
              </Flex>
            </Grid>
            <Stack 
              spacing={{ base: "8px", sm: "24px" }} 
              alignItems={"flex-start"}
            >
              <Stack
                justifyContent={"flex-end"}
                w="507px"
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
                  maxW="388px"
                >
                  Clases de Música
                </Text>
                <UnorderedList
                  px="0.5rem"
                  fontSize={{ base: "16px", lg: "16px" }}
                  fontWeight={400}
                  lineHeight={{ base: "34px", lg: "34px" }}
                  letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                  whiteSpace="nowrap"
                >
                  <Flex
                    gap={{ base: "0px", sm: "16px" }}
                    sx={{ "> div > li": { mt: "0px !important" } }}
                    flexDirection={{ base: "column", sm: "row" }}
                  >
                    <Stack mx="1rem">
                      <ListItem>Canto individual y grupal</ListItem>
                      <ListItem>Coro</ListItem>
                      <ListItem>Ensambles</ListItem>
                      <ListItem>Guitarra</ListItem>
                      <ListItem>Bajo</ListItem>
                      <ListItem>Piano</ListItem>
                      <ListItem>Violín</ListItem>
                    </Stack>
                    <Stack mx="1rem">
                      <ListItem>Flauta</ListItem>
                      <ListItem>Saxo</ListItem>
                      <ListItem>Batería</ListItem>
                      <ListItem>Percusión</ListItem>
                      <ListItem>Charango</ListItem>
                      <ListItem>Iniciación Musical</ListItem>
                    </Stack>
                  </Flex>
                </UnorderedList>{" "}
                <Text
                  as="p"
                  fontSize={{ base: "16px", lg: "16px" }}
                  fontWeight={700}
                  lineHeight={{ base: "normal", lg: "34px" }}
                  letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                  maxW="590px"
                >
                  Encuentros Semanales de 1 a 2 horas.
                </Text>
                    
                <Link href='/talleres'>
                  <Button
                    type="button"
                    bg="#DDC692"
                    color="#3B424A"
                    size="lg"
                    //my="2rem"
                    textTransform="uppercase"
                    p="16px"
                    w="fit-content"
                    fontSize={{ base: "14px", lg: "14px" }}
                    fontWeight={700}
                    letterSpacing={{ base: "2.8px", lg: "2.4px" }}
                    borderRadius="4px"
                    _hover={{ bg: "#e9dbb9" }}
                  >
                    Ver los Talleres
                  </Button>
                </Link>
              </Stack>
              <Flex 
                as="picture"
                w={{ base: "379px", lg: "507px" }}
                alignSelf={"stretch"}
              >
                <source
                  srcSet="/images/clases-de-musica-5.png"
                  media="(min-width: 480px)"
                />
                <Image
                  src="/images/clases-de-musica-1.png"
                  alt="Clases y cursos"
                  objectFit="cover"
                  //objectPosition="0px -50px"
                />
              </Flex>
            </Stack>
          </Flex>
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Flex 
            gap={{ base: "8px", sm: "24px" }} 
            flexWrap={"wrap"}
          >
            <Stack spacing={{ base: "8px", sm: "24px" }}>
              <Stack
                justifyContent={"flex-end"}
                w="596px"
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
                >
                  Cuerpo, Salud y Acompañamiento
                </Text>
                <UnorderedList
                  px="0.5rem"
                  fontSize={{ base: "16px", lg: "16px" }}
                  fontWeight={400}
                  lineHeight={{ base: "34px", lg: "34px" }}
                  letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                  whiteSpace="nowrap"
                >
                  <Flex
                    gap={{ base: "0px", sm: "16px" }}
                    sx={{ "> div > li": { mt: "0px !important" } }}
                    flexDirection={{ base: "column", sm: "row" }}
                  >
                    <Stack mx="1rem">
                      <ListItem>Psicopedagogía</ListItem>
                      <ListItem>Musicoterapia</ListItem>
                      <ListItem>Fonoaudiología</ListItem>
                      <ListItem>Estimulación Temprana</ListItem>
                      <ListItem>Taller Inclusivo</ListItem>
                    </Stack>
                    <Stack mx={{ base: "1rem", sm: "2rem" }}>
                      <ListItem>Apoyo Escolar</ListItem>
                      <ListItem>Yoga</ListItem>
                      <ListItem>Medicina China</ListItem>
                      <ListItem>Masajes</ListItem>
                      <ListItem>Estimulación Musical</ListItem>
                    </Stack>
                  </Flex>
                </UnorderedList>{" "}
                <Link href='/talleres'>
                  <Button
                    type="button"
                    bg="#DDC692"
                    color="#3B424A"
                    size="lg"
                    my="2rem"
                    textTransform="uppercase"
                    p="16px"
                    w="fit-content"
                    fontSize={{ base: "14px", lg: "14px" }}
                    fontWeight={700}
                    letterSpacing={{ base: "2.8px", lg: "2.4px" }}
                    borderRadius="4px"
                    _hover={{ bg: "#e9dbb9" }}
                  >
                    Ver los Talleres
                  </Button>
                </Link>
              </Stack>
              <Flex as="picture">
                <source
                  srcSet="/images/responsive/cuerpo-salud-y-acomp-1.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/cuerpo-salud-y-acomp-1-v02.png"
                  alt="Clases y cursos"
                  w={{ base: "379px", lg: "596px" }}
                  h={{ base: "104px", lg: "164px" }}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />{" "}
              </Flex>
            </Stack>
            <Flex gap={{ base: "8px", lg: "24px" }}>
              <Flex as="picture">
                <source
                  srcSet="/images/responsive/cuerpo-salud-y-acomp-2.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/cuerpo-salud-y-acomp-2-v02.png"
                  alt="Clases y cursos"
                  w={{ base: "239px", lg: "458px" }}
                  h={{ base: "239px", lg: "650px" }}
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />{" "}
              </Flex>
              <Flex as="picture">
                <source
                  srcSet="/images/responsive/cuerpo-salud-y-acomp-3.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/cuerpo-salud-y-acomp-3-v02.png"
                  alt="Clases y cursos"
                  w={{ base: "129px", lg: "150px" }}
                  h={{ base: "239px", lg: "650px" }}
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />{" "}
              </Flex>
            </Flex>
          </Flex>
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Flex
            gap="24px"
            flexWrap={{ base: "wrap-reverse", sm: "wrap-reverse" }}
          >
            <Flex 
              gap={{ base: "8px", sm: "24px" }}
              alignItems={"flex-start"}
            >
              <Flex 
                as="picture"
                w={{ base: "202px", lg: "460px" }}
                alignSelf={"stretch"}
                //h={{ base: "252px", lg: "655px" }}
              >
                <source
                  srcSet="/images/responsive/talleres-intensivos-1.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="https://dummyimage.com/700x700/242424/808080.png"//"/images/talleres-intensivos-1-v02.png"
                  alt="Talleres intensivos"
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />{" "}
              </Flex>
              <Flex 
                as="picture"
                w={{ base: "169px", lg: "326px" }}
                //h={{ base: "252px", lg: "655px" }}
                alignSelf={"stretch"}
              >
                <source
                  srcSet="/images/responsive/talleres-intensivos-2.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="https://dummyimage.com/400x700/242424/808080.png"//"/images/talleres-intensivos-2-v02.png"
                  alt="Talleres intensivos"
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />{" "}
              </Flex>
            </Flex>
            <Stack spacing="24px" maxW="501px">
              <Stack
                justifyContent={"flex-end"}
                w="596px"
                spacing="16px"
                maxW="501px"
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
                  maxW="481px"
                >
                  Talleres Intensivos
                </Text>
                <UnorderedList
                  px="0.5rem"
                  fontSize={{ base: "16px", lg: "16px" }}
                  fontWeight={400}
                  lineHeight={{ base: "34px", lg: "34px" }}
                  letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                  whiteSpace="nowrap"
                >
                  <Flex
                    gap={{ base: "0px", sm: "16px" }}
                    sx={{ "> div > li": { mt: "0px !important" } }}
                  >
                    <Stack mx="1rem">
                      <ListItem>Danzas Folklóricas</ListItem>
                      <ListItem>Bombo Leguero</ListItem>
                      <ListItem>Ritmos y Cuerpo</ListItem>
                      <ListItem>Jams de Arte con modelo vivo</ListItem>
                      <ListItem>Folklore</ListItem>
                      <ListItem>Fotografía</ListItem>
                      <ListItem>Sonido</ListItem>
                      <ListItem>Ritmática</ListItem>
                      <ListItem>Armonización</ListItem>
                      <ListItem>Construcción de Nuevas Masculinidades</ListItem>
                    </Stack>
                  </Flex>
                </UnorderedList>{" "}
                <Text
                  as="p"
                  fontSize={{ base: "16px", lg: "16px" }}
                  fontWeight={700}
                  lineHeight={{ base: "normal", lg: "34px" }}
                  letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                  maxW={{base: "350px", sm: "590px"}}
                >
                  Encuentro puntuales de una o media jornada.
                </Text>
                <Link href='/talleres'>
                  <Button
                    type="button"
                    bg="#DDC692"
                    color="#3B424A"
                    size="lg"
                    my="1rem"
                    textTransform="uppercase"
                    p="16px"
                    w="fit-content"
                    fontSize={{ base: "14px", lg: "14px" }}
                    fontWeight={700}
                    letterSpacing={{ base: "2.8px", lg: "2.4px" }}
                    borderRadius="4px"
                    _hover={{ bg: "#e9dbb9" }}
                  >
                    Ver los Talleres
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Flex>

        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* 01 */}
          <Flex
            gap="24px"
            flexWrap="nowrap"
            alignItems="center"
            >


            {/* a */} 
            <Flex 
              flexDirection="column"
              flex={1}
              alignItems={"center"}
              alignSelf={"stretch"}
            >
              {/* Img 1 */}
              <Flex 
                as="picture"
                flexGrow={1}
              >
                <source
                  srcSet="https://dummyimage.com/300x300/242424/808080.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="https://dummyimage.com/300x300/242424/808080.png"
                  alt="Talleres intensivos"
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />{" "}
              </Flex>
              {/* Img 2 */}
              <Flex 
                as="picture"
                flexGrow={1}
              >
                <source
                  srcSet="https://dummyimage.com/300x300/242424/808080.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="https://dummyimage.com/300x300/242424/808080.png"
                  alt="Talleres intensivos"
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />
              </Flex>
            </Flex>


            {/* b */} 
            <Stack 
              spacing="24px"
              flex={2}
            >
              <Stack
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
                  maxW="481px"
                >
                  Ciclos
                </Text>
                <UnorderedList
                  px="0.5rem"

                  fontSize={{ base: "16px", lg: "16px" }}
                  fontWeight={400}
                  lineHeight={{ base: "34px", lg: "34px" }}
                  letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                  //whiteSpace="nowrap"
                  maxW={"400px"}
                >
                  <Flex
                    gap={{ base: "0px", sm: "16px" }}
                    sx={{ "> div > li": { mt: "0px !important" } }}
                  >
                    <Stack mx="1rem">
                      <ListItem>Encuentros de Folklore</ListItem>
                      <ListItem>Ciclos de Rock</ListItem>
                      <ListItem>Noche de Jazz </ListItem>
                      <ListItem>Cine (dentro del programa para Espacios no Convencionales de INCAA)</ListItem>
                      <ListItem>Circuito Estable de Música en VIVO - INAMU</ListItem>
                      <ListItem>La Peña de los Alumnos</ListItem>
                      <ListItem>Exposición de Artes Plásticas</ListItem>
                    </Stack>
                  </Flex>
                </UnorderedList>{" "}
                <Text
                  as="p"
                  fontSize={{ base: "16px", lg: "16px" }}
                  fontWeight={700}
                  lineHeight={{ base: "normal", lg: "34px" }}
                  letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                  maxW={{base: "350px", sm: "590px"}}
                >
                  Encuentro puntuales de una o media jornada.
                </Text>
                <Link href='/talleres'>
                  <Button
                    type="button"
                    bg="#DDC692"
                    color="#3B424A"
                    size="lg"
                    my="1rem"
                    textTransform="uppercase"
                    p="16px"
                    w="fit-content"
                    fontSize={{ base: "14px", lg: "14px" }}
                    fontWeight={700}
                    letterSpacing={{ base: "2.8px", lg: "2.4px" }}
                    borderRadius="4px"
                    _hover={{ bg: "#e9dbb9" }}
                  >
                    Ver los Talleres
                  </Button>
                </Link>
              </Stack>
            </Stack>


            {/* c */} 
            <Flex 
              as="picture"
              maxW={"550px"}
              alignSelf={"stretch"}
              >
                <source
                  srcSet="https://dummyimage.com/600x600/242424/808080.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="https://dummyimage.com/600x600/242424/808080.png"
                  alt="Talleres intensivos"
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

export default PosibilidadesPage;