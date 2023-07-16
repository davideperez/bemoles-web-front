import { Flex, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const Services = () => {
  return (
    <Flex as="section" flexWrap={"wrap"}>
      <Text
        color="#3B424A"
        fontSize="24px"
        fontWeight={400}
        lineHeight="34px"
        letterSpacing={"1.2px"}
        flex="1.4"
      >
        Serán práctica permanente el <b>desarrollo de talleres</b> atravesados
        por estas múltiples disciplinas. Buscamos{" "}
        <b>facilitar procesos creativos</b> que coloquen a los individuos como
        sujetos activos de dicha creación.
      </Text>
      <Flex flexDirection={"column"} flex="1">
        {" "}
        <Stack pl="8rem" spacing="16px">
        <Text
          as="h3"
          color="#C5A266"
          textShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.10)"}
          fontFamily="DM Serif Display"
          fontSize="70px"
          fontWeight="600"
          lineHeight="72px"
          letterSpacing="0.7px"
        >
          Artística
        </Text>
        <Flex
          flexWrap={"wrap"}
          fontSize="16px"
          lineHeight={"34px"}
          letterSpacing="0.8px"
          w="100%"
        >
          <UnorderedList mr="4rem">
            <ListItem>Música</ListItem>
            <ListItem>Canto</ListItem>
            <ListItem>Instrumentos</ListItem>
            <ListItem>Ensambles</ListItem>
            <ListItem>Literatura</ListItem>
            <ListItem>Dibujo</ListItem>
          </UnorderedList>
          <UnorderedList>
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
    </Flex>
  );
};

export default Services;
