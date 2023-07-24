import { Flex, Grid, GridItem, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const Services = () => {
  return (
    <Flex as="section" px={{base: "16px", lg: "80px"}} justifyContent="center">
    <Grid maxW="1700px" templateColumns={{base: "auto", xl:"1.2fr 0.8fr"}} templateRows={{base: "auto", xl: "0.5fr 1fr 1fr"}} gap="2rem" pt={{base: "0px", lg: "7rem"}}>
      <GridItem>
      <Text
        color="#3B424A"
        fontSize="24px"
        fontWeight={400}
        lineHeight="34px"
        letterSpacing={"1.2px"}
      >
        Serán práctica permanente el <b>desarrollo de talleres</b> atravesados
        por estas múltiples disciplinas. Buscamos{" "}
        <b>facilitar procesos creativos</b> que coloquen a los individuos como
        sujetos activos de dicha creación.
      </Text>
      </GridItem>
      <GridItem rowSpan={{base: 1, xl: 2}} bg={{base: "url('/images/artisticaMobile.png')", xl: "url('/images/artistica.png')"}}  backgroundRepeat={{base:"no-repeat", xl: "no-repeat"}}>
      <Flex flexDirection={"column"} py="2rem">
        {" "}
        <Stack pl={{base: "1rem",xl:"8rem"}} spacing="16px">
        <Text
          as="h3"
          color="#C5A266"
          textShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.10)"}
          fontFamily="DM Serif Display"
          fontSize={{base: "36px", sm:"50px", lg:"70px"}}
          fontWeight="400"
          lineHeight="72px"
          letterSpacing="0.7px"
        >
          Artística
        </Text>
        <Flex
          fontSize="16px"
          lineHeight={"34px"}
          letterSpacing="0.8px"
          // w="100%"
          sx={{'@media screen and (max-width: 415px)': { flexDirection: "column"}}}
        >
          <UnorderedList mr={{base: "1rem", sm:"4rem"}} my="0px" p="0px">
            <ListItem>Música</ListItem>
            <ListItem>Canto</ListItem>
            <ListItem>Instrumentos</ListItem>
            <ListItem>Ensambles</ListItem>
            <ListItem>Literatura</ListItem>
            <ListItem>Dibujo</ListItem>
          </UnorderedList>
          <UnorderedList my="0px" p="0px">
            <ListItem>Pintura</ListItem>
            <ListItem>Arte</ListItem>
            <ListItem>Teatro</ListItem>
            <ListItem>Expresión corporal</ListItem>
            <ListItem>Fotografía</ListItem>
            <ListItem>Encuentros Musicales</ListItem>
          </UnorderedList>
        </Flex>
        </Stack>
      </Flex>
      </GridItem>
      <GridItem rowSpan={{base: 1, xl: 3}} bg={{base: "url('/images/terapeuticaMobile.png')", xl: "url('/images/terapeutica.png')"}} backgroundRepeat={{base:"no-repeat", xl: "no-repeat"}}>
      <Flex flexDirection={"column"} alignItems={{base: "flex-start", xl:"center"}} paddingRight="4rem">
        {" "}
        <Stack pl={{base: "1rem",xl:"16rem"}}  spacing="16px">
        <Text
          as="h3"
          color="#C5A266"
          textShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.10)"}
          fontFamily="DM Serif Display"
          fontSize={{base: "36px", sm:"50px", lg:"70px"}}
          fontWeight="400"
          lineHeight="72px"
          letterSpacing="0.7px"
        >
          Terapéutica
        </Text>
        <Flex
          fontSize="16px"
          lineHeight={"34px"}
          letterSpacing="0.8px"
          // w="100%"
          sx={{'@media screen and (max-width: 415px)': { flexDirection: "column"}}}
        >
          <UnorderedList  mr={{base: "1rem", sm:"4rem"}} my="0px" p="0px">
            <ListItem>Psicología</ListItem>
            <ListItem>Psiquiatría</ListItem>
            <ListItem>Musicoterapia</ListItem>
            <ListItem>Terapia ocupacional</ListItem>
            <ListItem>Psicomotricidad</ListItem>
            <ListItem>Psicopedagogía</ListItem>
          </UnorderedList>
          <UnorderedList my="0px" p="0px">
            <ListItem>Nutrición</ListItem>
            <ListItem>Neurología</ListItem>
            <ListItem>Kinesiología</ListItem>
            <ListItem>Fonoaudología</ListItem>
            <ListItem>Neurolinguistica</ListItem>
            <ListItem>Acompañantes</ListItem>
          </UnorderedList>
        </Flex>
        </Stack>
      </Flex>
      </GridItem>
      <GridItem  rowSpan={{base: 1, xl: 1}} mt="2rem" bg={{base: "url('/images/educativaMobile.png')", xl: "none"}}  backgroundRepeat={{base:"no-repeat", xl: "no-repeat"}} h="310px">
      <Flex flexDirection={"column"} >
        {" "}
        <Stack pl={{base: "1rem",xl:"8rem"}}  spacing="16px">
        <Text
          as="h3"
          color="#C5A266"
          textShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.10)"}
          fontFamily="DM Serif Display"
          fontSize={{base: "36px", sm:"50px", lg:"70px"}}
          fontWeight="400"
          lineHeight="72px"
          letterSpacing="0.7px"
        >
          Educativa
        </Text>
        <Flex
          fontSize="16px"
          lineHeight={"34px"}
          letterSpacing="0.8px"
          // w="100%"
          sx={{'@media screen and (max-width: 415px)': { flexDirection: "column"}}}
        >
          <UnorderedList  mr={{base: "1rem", sm:"4rem"}} my="0px" p="0px">
            <ListItem>Talleres</ListItem>
            <ListItem>Clases</ListItem>
            <ListItem> Apoyo escolar</ListItem>
          </UnorderedList>
          <UnorderedList my="0px" p="0px">
            <ListItem>Orientación a padres</ListItem>
            <ListItem>Orientación a docentes</ListItem>
            <ListItem>Orientación a alumnos</ListItem>
          </UnorderedList>
        </Flex>
        </Stack>
      </Flex>
      </GridItem>
    </Grid>
    </Flex>
  );
};

export default Services;
