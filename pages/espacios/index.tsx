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

  const EspaciosPage = () => {
    return (
      <Stack
      as="main"
      padding={{ base: "44px 6px 20px 6px", lg: "96px 100px 120px 100px" }}
      overflow="hidden"
      spacing={{ base: "2rem", lg: "4rem" }}
      backgroundImage={{
        base: "url('/images/espacios-mobile-bg.png')",
        lg: "url('/images/posibilidades-bg-xl.png')",
        "2xl": "url('/images/espacios-bg.png')",
      }}
      objectFit={"cover"}
      objectPosition="center"
      backgroundPosition={{ base: "-75px 289px", sm: "400px 130px", lg: "-17px 250px" }}
      backgroundRepeat={"no-repeat"}
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
      <Stack spacing={{ base: "48px", lg: "100px" }} pt={{ lg: "8rem" }}>
      <Flex gap={{ base: "8px", sm: "24px" }} flexWrap={"wrap"}>
          <Stack spacing={{ base: "8px", sm: "24px" }}>
            <Stack
              justifyContent={"flex-end"}
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
                Aulas
              </Text>
              <Text as="p"
                fontSize={{ base: "16px", lg: "16px" }}
                fontWeight={400}
                lineHeight={{ base: "24px", lg: "34px" }}
                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                maxW="545px"
                overflowX="clip"
              >
              Confortables aulas para el dictado de clases individuales y/o grupales, debidamente equipadas, climatizadas, con las condiciones y herramientas que atienden a un desarrollo en excelencia.
              </Text>{" "}
            </Stack>
            <Image
              src="/images/aulas.png"
              alt="Aulas"
              w={{ base: "379px", lg: "576px" }}
              h={{ base: "157px", lg: "208px" }}
            />
          </Stack>
          <Flex gap={{ base: "8px", lg: "24px" }}>
            <Image
              src="/images/aulas-2.png"
              alt="Aulas"
              w={{ base: "258px", lg: "512px" }}
              h={{ base: "217px", lg: "456px" }}
            />
            <Image
              src="/images/aulas-3.png"
              alt="Aulas"
              w={{ base: "113px", lg: "176px" }}
              h={{ base: "217px", lg: "456px" }}
            />
          </Flex>
        </Flex>
        <Flex gap={{ base: "8px", sm: "24px" }} flexWrap={"wrap-reverse"}>
        <Flex gap={{ base: "8px", lg: "24px" }}>
            <Image
              src="/images/consultorios-profesionales-1.png"
              alt="Aulas"
              w={{ base: "214px", lg: "567px" }}
              h={{ base: "205px", lg: "543px" }}
            />
            <Image
              src="/images/consultorios-profesionales-2.png"
              alt="Aulas"
              w={{ base: "157px", lg: "228px" }}
              h={{ base: "205px", lg: "543px" }}
            />
          </Flex>
          <Stack spacing={{ base: "8px", sm: "24px" }}>
         
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
              <Text as="p"
                fontSize={{ base: "16px", lg: "16px" }}
                fontWeight={400}
                lineHeight={{ base: "24px", lg: "34px" }}
                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                overflowX="clip"
              >
Construidos con las comodidades que perecen pacientes y profesionales. Salas de espera, baños para discapacitados, estacionamiento en la puerta, fácil acceso. Cámara Gesell.              </Text>{" "}
            </Stack>
            <Image
              src="/images/consultorios-profesionales-3.png"
              alt="Aulas"
              w={{ base: "379px", lg: "468px" }}
              h={{ base: "229px", lg: "223px" }}
            />
          </Stack>
          
        </Flex>
        <Flex
          alignItems={"flex-end"}
          gap={{ base: "8px", lg: "24px" }}
          flexWrap={"wrap"}
        >
          <Image
            src="/images/sala-de-ensayo-1.png"
            alt="Clases y cursos"
            w={{ base: "150px", sm: "300px" }}
            h={{ base: "202px", sm: "466px" }}
            order={{ base: "2", sm: "1" }}
          />
          <Stack
            h="100%"
            py="10px"
            px="10px"
            order={{ base: "1", lg: "2" }}
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
            >
              Sala de Ensayo
            </Text>
            <Text as="p"
                fontSize={{ base: "16px", lg: "16px" }}
                fontWeight={400}
                lineHeight={{ base: "24px", lg: "34px" }}
                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                overflowX="clip"
              >
Un agradable espacio concebido para la exploración musical, correctamente acustizado y con las condiciones ténicas para que al hacerlo podamo captar todo el potencial y brillo.<br  />
Ensayos, Grabación Multipista, Estudio.<br  />
Dotado con equipos Fender, Laney,  monitores Makie, Consola Allen&Hesth, microfonía Shure, Rode, AudioTechnica, Sennheiser.<br  />
Producciones Audiovisuales.</Text>
            
          </Stack>
          <Image
            src="/images/sala-de-ensayo-2.png"
            alt="Clases y cursos"
            w={{ base: "221px", sm: "563px" }}
            h={{ base: "202px", sm: "466px" }}
            order={{ base: "3", sm: "3" }}
          />
        </Flex>
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
            <Image
              src="/images/salon-para-eventos-2.png"
              alt="Clases y cursos"
              w={{ base: "151px", lg: "325px" }}
              h={{ base: "176px", lg: "378px" }}
              order={{ base: "1", sm: "2" }}
            />

            <Image
              src="/images/salon-para-eventos-3.png"
              alt="Clases y cursos"
              w={{ base: "220px", lg: "471px" }}
              h={{ base: "155px", lg: "332px" }}
              order={{ base: "3", sm: "3" }}
            />
            <Image
              src="/images/salon-para-eventos-4.png"
              alt="Clases y cursos"
              w={{ base: "151px", lg: "325px" }}
              h={{ base: "155px", lg: "332px" }}
              order={{ base: "4", sm: "4" }}
            />
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
              
              <Text as="p"
                fontSize={{ base: "16px", lg: "16px" }}
                fontWeight={400}
                lineHeight={{ base: "24px", lg: "34px" }}
                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                maxW="361px"
              >
Confortable salón para la realización de diversas actividades, exposiciones e intervenciones artísticas, presentaciones literarias, seminarios, trabajos en grupo, proyección de Cine y encuentros en general.
Montado con sonido profesional, video, iluminación variable, climatización y sanitarios.</Text>
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
        <Flex gap={{ base: "8px", sm: "24px" }} flexWrap={"wrap"}>
          <Stack spacing={{ base: "8px", sm: "24px" }}>
            <Stack
              justifyContent={"flex-end"}
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
                Quincho
              </Text>
              <Text as="p"
                fontSize={{ base: "16px", lg: "16px" }}
                fontWeight={400}
                lineHeight={{ base: "24px", lg: "34px" }}
                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                maxW="545px"
                overflowX="clip"
              >
Amplio y luminoso taller para la realización de talleres, con instalaciones gastronómicas para el complemento de actividades. Acceso al parque.              </Text>{" "}
            </Stack>
            <Image
              src="/images/quincho-1.png"
              alt="Aulas"
              w={{ base: "379px", lg: "576px" }}
              h={{ base: "173px", lg: "242px" }}
            />
          </Stack>
            <Image
              src="/images/quincho-2.png"
              alt="Aulas"
              w={{ base: "379px", lg: "712px" }}
              h={{ base: "244px", lg: "456px" }}
            />
        </Flex>
      </Stack>
          
      </Stack>
    );
  };
  
  export default EspaciosPage;
  