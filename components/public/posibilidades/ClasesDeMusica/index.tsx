import {
    Flex,
    Grid,
    Text,
    Link,
    Hide,
    Image,
    Stack,
    Button,
    ListItem,
    UnorderedList,
} from "@chakra-ui/react";

const ClasesDeMusica = () => {
    return (
      <Flex 
        as={"section"}
        maxW={"1312px"}
        w={"100%"}
        gap={{ base: "8px", sm: "24px" }}
        
        align={{base: "center", md:"start"}}
        justify={{base: "center", md:"start"}}
        
        alignSelf={{base:"stretch", sm:"center"}}

      >

        {/* 4 Imagenes */}
        <Grid
          gap={{ base: "8px", sm: "24px" }}
          display={{base:"none",sm:"grid"}}
          templateColumns={{ base: "1",xl: "1.2fr 0.8fr" }}
          templateRows={{ base: "1",xl: "1.2fr 0.8fr" }}
          justifyContent={{base:"center"}}
          alignSelf={"stretch"}
          w={"100%"}
        >
            {/* 1 */}
          <Hide below="1280px">
            <Flex 
              as="picture"
              alignSelf={"stretch"}
              w={"100%"}
            >
              <source
                srcSet="/images/responsive/02_posibilidades/clases-de-musica-1.webp"
                media="(min-width: 480px)"
              />
              <Image
                src="/images/02_posibilidades/clases-de-musica-1.webp"
                alt="Clases y cursos"
                order={{ base: "2", sm: "1" }}
                border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                objectFit={"cover"}
                objectPosition={{base:"0px 0px "}}
              />
            </Flex>
          </Hide>

          {/* 2 */}
          <Hide below="1280px">
            <Flex 
              as="picture"
              alignSelf={"stretch"}
              w={"100%"}
            >
              <source
                srcSet="/images/responsive/02_posibilidades/clases-de-musica-2.webp"
                //media="(max-width: 480px)"
              />
              <Image
                src="/images/02_posibilidades/clases-de-musica-2.webp"
                alt="Clases y cursos"
                border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                order={{ base: "1", sm: "2" }}
                objectFit={"cover"}
                
              />{" "}
            </Flex>
          </Hide>
          {/* 3 */}
          <Hide below="480px">
            <Flex 
              as="picture"
              alignSelf={"stretch"}
            >
              <source
                srcSet="/images/responsive/02_posibilidades/clases-de-musica-3.webp"
                media="(max-width: 480px)"
              />
              <Image
                src="/images/02_posibilidades/clases-de-musica-3.webp"
                alt="Clases y cursos"
                order={{ base: "4", sm: "3" }}
                border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                objectFit={"cover"}
              />{" "}
            </Flex>
          </Hide>
          {/* 4 */}
          <Hide below="480px">
            <Flex 
              as="picture"
              alignSelf={"stretch"}
            >
              <source
                srcSet="/images/responsive/02_posibilidades/clases-de-musica-4.webp"
                media="(max-width: 480px)"
              />
              <Image
                src="/images/02_posibilidades/clases-de-musica-4.webp"
                alt="Clases y cursos"
                order={{ base: "3", sm: "4" }}
                border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                objectFit={"cover"}
              />{" "}
            </Flex>
          </Hide>
        </Grid>

        {/* Texto y 1 imagen */}
        <Stack 
            w={"100%"}
            alignSelf="stretch"
            spacing={{ base: "8px", sm: "24px" }}
            //alignSelf={"stretch"}
            //align={{base: "center", md:"start"}}
        >

          {/* Texto */}
          <Stack
            //spacing="24px"
            justify={"start"}
            align={"start"}
            px="10px"
          >
            {/* Titulo */}
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
              Clases <br/> de Música
            </Text>

            {/* Lista */}
            <UnorderedList
              px="0.5rem"
              fontSize={{ base: "16px", lg: "16px" }}
              fontWeight={400}
              lineHeight={{ base: "34px", lg: "34px" }}
              letterSpacing={{ base: "0.8px", lg: "0.8px" }}
              whiteSpace="nowrap"
            >
              <Flex
                //gap={{ base: "0px", sm: "16px" }}
                sx={{ "> div > li": { mt: "0px !important" } }}
                flexDirection={{ base: "column", md: "row" }}
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

            {/* Texto Final */}
            <Flex 
              justify={{base:"center", sm:"start"}}
              alignSelf={"stretch"}
              w={"100%"}
              minW={{base:"", md:"450px"}}            >
              <Text
                as="p"
                fontSize={{ base: "16px", lg: "16px" }}
                fontWeight={700}
                lineHeight={{ base: "normal", lg: "34px" }}
                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
              >
                Encuentros Semanales de 1 a 2 horas.
              </Text>
            </Flex>

            {/* Boton */}
            <Flex 
              alignSelf={{base:"center", sm:"start"}}
            >
              <Link href='/talleres'>
                <Button
                  type="button"
                  bg="#DDC692"
                  color="#3B424A"
                  size="lg"
                  my={{base:"2rem", sm:"0rem"}}
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
            </Flex>
          </Stack>

          {/* 5ta Imagen */}
          <Flex 
            as="picture"
            w={{ base: "100%", lg: "100%" }}
            h={{base: "200px", sm: "100%"}}
            alignSelf={"stretch"}
          >
            <source
              srcSet="/images/responsive/02_posibilidades/clases-de-musica-5.webp"
              media="(min-width: 480px)"
            />
            <Image
              src="/images/02_posibilidades/clases-de-musica-5.webp"
              alt="Clases y cursos"
              objectFit="cover"
              border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
              w={"100%"}
              maxH={"296px"}
            />
          </Flex>

        </Stack>
      </Flex>

    )
}

export default ClasesDeMusica;