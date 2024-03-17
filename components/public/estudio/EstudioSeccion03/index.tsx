import {
    Flex,
    Link,
    Text,
    Image,
    Button,
} from "@chakra-ui/react";
import React from "react";

export default function EstudioSeccion03 () {
    return (
    <Flex
      as={"section"}
      w={"100%"}
      maxW={"1312px"}
      gap={{ base: "24px", lg: "24px" }} 
      flexWrap={{base:"wrap-reverse", lg:"nowrap"}}
      justify={"center"}
      px={{base:"0px", sm:"0px", md:"0px"}}
      //maxH={"700px"}
    > 
      {/* 2 Imagenes */}
      <Flex
        order={{base:"2", lg:"1"}}
        
        //maxW={"600px"}
        w={{base:"100%", sm:"100%", md:"60%"}}
      >
        {/* Imagen 01 */}
        <Flex
          as="picture"
          alignSelf={"stretch"}
          w={"75%"}
        >
            <source
            srcSet="/images/responsive/04_estudio/asesoramiento-1.webp"
            //media="(max-width: 480px)"
          />
          <Image
            src="/images/04_estudio/asesoramiento-1.webp"
            alt="Estudio"
            h={"100%"}
            objectFit={"cover"}
            border={{base:"5px solid #FFF", lg:"10px solid #FFF"}}
          />
        </Flex>
        {/* Imagen 02 */}
        <Flex
          as="picture"
          alignSelf={"stretch"}
          w={"25%"}
        >
          <source
            srcSet="/images/responsive/04_estudio/asesoramiento-2.webp"
            //media="(max-width: 480px)"
          /> 
          <Image
            src="/images/04_estudio/asesoramiento-2.webp"
            alt="Estudio"
            h="100%"
            objectFit={"cover"}
            border={{base:"5px solid #FFF", lg:"10px solid #FFF"}}
          />
        </Flex>
      </Flex>
      {/* Titulo e Items */}
      <Flex
        flexDir={"column"}
        gap={"24px"}
        order={{base:"1", lg:"2"}}
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
            mt={"24px"}
            mb={"10px"}
            type="button"
            title="Consultar"
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
      </Flex>
    </Flex>
    )
}