import {
    Flex,
    Link,
    Text,
    Image,
    Button,
    ListItem,
    UnorderedList
  } from "@chakra-ui/react";
  import React from "react";

export default function EstudioSeccion02 () {
    return (
      <Flex
        w={"100%"}
        maxW={"1312px"}
        gap={{ base: "24px", lg: "24px" }} 
        flexWrap={{base:"wrap", lg:"nowrap"}}
        justify={"center"}
      >
        {/* Titulo e Items */}
        <Flex
          flexDir={"column"}
          gap={"24px"}
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
              title="Consultar"
              bg="#DDC692"
              color="#3B424A"
              size="lg"
              textTransform="uppercase"
              mt={"24px"}
              mb={"10px"}
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
        </Flex>
        {/* 2 Imagenes */}
        <Flex
          flexDirection={"column"}            
          //maxH={"600px"}
        >
          {/* Imagen 01 */}
          <Flex
            as="picture"
            alignSelf={"stretch"}
            h={"75%"}
          >
             <source
              srcSet="/images/responsive/04_estudio/caracteristicas-1.png"
              //media="(max-width: 480px)"
            />
            <Image
              src="/images/04_estudio/caraccteristicas-1.png"
              alt="Estudio"
              w={"100%"}
              objectFit={"cover"}
              border={{base:"5px solid #FFF", lg:"10px solid #FFF"}}
            />
          </Flex>
          {/* Imagen 02 */}
          <Flex
            as="picture"
            alignSelf={"stretch"}
            h={"25%"}
          >
            <source
              srcSet="/images/responsive/04_estudio/caracteristicas-2.png"
              //media="(max-width: 480px)"
            /> 
            <Image
              src="/images/04_estudio/caracteristicas-2.pngg"
              alt="Estudio"
              w="100%"
              objectFit={"cover"}
              border={{base:"5px solid #FFF", lg:"10px solid #FFF"}}
            />
          </Flex>
        </Flex>
      </Flex>
    )
}