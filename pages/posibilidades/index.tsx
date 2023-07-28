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
import Head from "next/head";
import React from "react";

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
          pt={{ lg: "8rem" }}
          backgroundImage={{
            base: "url('/images/clases-y-cursos-bg-mobile.png')",
            lg: "url('/images/posibilidades-bg-xl.png')",
            "2xl": "url('/images/posibilidades-bg.png')",
          }}
          objectFit={"cover"}
          objectPosition="center"
          backgroundPosition={{
            base: "-220px 29px",
            sm: "400px 29px",
            lg: "0px 20px",
          }}
          backgroundRepeat={"no-repeat"}
          alignItems={{base:"flex-start", lg: "center"}}
        >
          <Flex
            alignItems={"flex-end"}
            gap={{ base: "8px", lg: "24px" }}
            flexWrap={"wrap"}
          >
            <Flex as="picture">
              <source
                srcSet="/images/responsive/clases-y-cursos-1.png"
                media="(max-width: 480px)"
              />
              <Image
                src="/images/clases-y-cursos-1.png"
                alt="Clases y cursos"
                w={{ base: "208px", sm: "300px" }}
                h={{ base: "228px", sm: "456px" }}
                order={{ base: "2", sm: "1" }}
              />{" "}
            </Flex>

            <Stack
              w="363px"
              h="100%"
              py="10px"
              px="10px"
              order={{ base: "1", lg: "2" }}
              mr={{ base: "0px", lg: "2rem" }}
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
                Clases y cursos
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
                  </Stack>
                  <Stack mx="1rem">
                    <ListItem>Bordado</ListItem>
                    <ListItem>Tejido</ListItem>
                    <ListItem>Mosaiquismo</ListItem>
                    <ListItem>Encuadernación</ListItem>
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
            </Stack>

            <Flex as="picture">
              <source
                srcSet="/images/responsive/clases-y-cursos-2.png"
                media="(max-width: 480px)"
              />
              <Image
                src="/images/clases-y-cursos-2.png"
                alt="Clases y cursos"
                w={{ base: "161px", sm: "300px" }}
                h={{ base: "228px", sm: "456px" }}
                order={{ base: "3", sm: "3" }}
              />{" "}
            </Flex>
            <Flex as="picture" order={{ base: "4", lg: "4" }}>
              <source
                srcSet="/images/clases-y-cursos-3.png"
                media="(min-width: 480px)"
              />
              <Image
                src="/images/clases-y-cursos-3-mobile.png"
                alt="Clases y cursos"
                w={{ base: "377px", sm: "300px" }}
                h={{ base: "296px", sm: "456px" }}
                objectFit="contain"
              />
            </Flex>
          </Flex>
          <Flex gap={{ base: "8px", sm: "24px" }} flexWrap={"wrap-reverse"}>
            <Grid
              gap={{ base: "8px", sm: "24px" }}
              templateColumns={{ base: "1fr 1fr", lg: "432px 325px" }}
              templateRows={{ base: "auto", lg: "378px 332px" }}
            >
              <Flex as="picture">
                <source
                  srcSet="/images/clases-de-musica-1.png"
                  media="(min-width: 480px)"
                />
                <Image
                  src="/images/clases-de-musica-5.png"
                  alt="Clases y cursos"
                  w={{ base: "189px", lg: "432px" }}
                  h={{ base: "220px", lg: "378px" }}
                  order={{ base: "2", sm: "1" }}
                />
              </Flex>
              <Flex as="picture">
                <source
                  srcSet="/images/responsive/clases-de-musica-2.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/clases-de-musica-2.png"
                  alt="Clases y cursos"
                  w={{ base: "182px", lg: "325px" }}
                  h={{ base: "220px", lg: "378px" }}
                  order={{ base: "1", sm: "2" }}
                />{" "}
              </Flex>
              <Flex as="picture">
                <source
                  srcSet="/images/responsive/clases-de-musica-3.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/clases-de-musica-3.png"
                  alt="Clases y cursos"
                  w={{ base: "181px", lg: "432px" }}
                  h={{ base: "185px", lg: "332px" }}
                  order={{ base: "4", sm: "3" }}
                />{" "}
              </Flex>
              <Flex as="picture">
                <source
                  srcSet="/images/responsive/clases-de-musica-4.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/clases-de-musica-4.png"
                  alt="Clases y cursos"
                  w={{ base: "190px", lg: "325px" }}
                  h={{ base: "185px", lg: "332px" }}
                  order={{ base: "3", sm: "4" }}
                />{" "}
              </Flex>
            </Grid>
            <Stack spacing={{ base: "8px", sm: "24px" }}>
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
                    </Stack>
                    <Stack mx="1rem">
                      <ListItem>Flauta</ListItem>
                      <ListItem>Saxo</ListItem>
                      <ListItem>Batería</ListItem>
                      <ListItem>Percusión</ListItem>
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
              </Stack>
              <Flex as="picture">
                <source
                  srcSet="/images/clases-de-musica-5.png"
                  media="(min-width: 480px)"
                />
                <Image
                  src="/images/clases-de-musica-1.png"
                  alt="Clases y cursos"
                  w={{ base: "379px", lg: "507px" }}
                  h={{ base: "332px", lg: "296px" }}
                />
              </Flex>
            </Stack>
          </Flex>
          <Flex gap={{ base: "8px", sm: "24px" }} flexWrap={"wrap"}>
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
                    </Stack>
                    <Stack mx={{ base: "1rem", sm: "2rem" }}>
                      <ListItem>Apoyo Escolar</ListItem>
                      <ListItem>Yoga</ListItem>
                      <ListItem>Medicina China</ListItem>
                      <ListItem>Masajes</ListItem>
                    </Stack>
                  </Flex>
                </UnorderedList>{" "}
              </Stack>

              <Flex as="picture">
                <source
                  srcSet="/images/responsive/cuerpo-salud-y-acomp-1.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/cuerpo-salud-y-acomp-1.png"
                  alt="Clases y cursos"
                  w={{ base: "379px", lg: "596px" }}
                  h={{ base: "104px", lg: "164px" }}
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
                  src="/images/cuerpo-salud-y-acomp-2.png"
                  alt="Clases y cursos"
                  w={{ base: "239px", lg: "458px" }}
                  h={{ base: "239px", lg: "484px" }}
                />{" "}
              </Flex>

              <Flex as="picture">
                <source
                  srcSet="/images/responsive/cuerpo-salud-y-acomp-3.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/cuerpo-salud-y-acomp-3.png"
                  alt="Clases y cursos"
                  w={{ base: "129px", lg: "210px" }}
                  h={{ base: "239px", lg: "484px" }}
                />{" "}
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="24px"
            flexWrap={{ base: "wrap-reverse", sm: "wrap-reverse" }}
          >
            <Flex gap={{ base: "8px", sm: "24px" }}>
              <Flex as="picture">
                <source
                  srcSet="/images/responsive/talleres-intensivos-1.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/talleres-intensivos-1.png"
                  alt="Talleres intensivos"
                  w={{ base: "202px", lg: "461px" }}
                  h={{ base: "252px", lg: "574px" }}
                />{" "}
              </Flex>
              <Flex as="picture">
                <source
                  srcSet="/images/responsive/talleres-intensivos-2.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/talleres-intensivos-2.png"
                  alt="Talleres intensivos"
                  w={{ base: "169px", lg: "322px" }}
                  h={{ base: "252px", lg: "574px" }}
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
                  Encuentro puntuales de una o media jornada
                </Text>
              </Stack>
              <Flex as="picture">
                <source
                  srcSet="/images/responsive/talleres-intensivos-3.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/talleres-intensivos-3.png"
                  alt="Talleres intensivos"
                  w="480px"
                  h="204px"
                  display={{ base: "none", sm: "flex" }}
                />{" "}
              </Flex>
            </Stack>
          </Flex>

          <Flex as="picture">
            <source
              srcSet="/images/responsive/talleres-intensivos-3.png"
              media="(max-width: 480px)"
            />
            <Image
              src="/images/talleres-intensivos-4.png"
              alt="Talleres intensivos"
              w="379px"
              h="161px"
              display={{ base: "flex", sm: "none" }}
              mt="0px !important"
            />{" "}
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};

export default PosibilidadesPage;
