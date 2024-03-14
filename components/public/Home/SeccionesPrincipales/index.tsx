import React from "react";
import Link from "next/link";
import { Flex, Img } from "@chakra-ui/react";
import { scaleCloudinaryImageFromUrl } from "../../../../utils/functions";

const SeccionesPrincipales = () => {
  return (
    <Flex
      as="section" 
      maxW={"1536px"}
      px={{ base: "16px", lg: "80px" }}
      flexWrap={"wrap"}
      justify={"center"}
      gap={{ base: "16px", sm: "72px" }}
      //justifyContent="center"
    >
      <Link href="/posibilidades" aria-label="Conocer las Posibilidades">
        <Flex
          w={{ base: "100%", sm: "403px" }}
          h={{ base: "100%", sm: "403px" }}
          position="relative"
          justifyContent={"center"}
          alignItems="center"
          _hover={{opacity: 0.7}}
          //maxW={"403px"}
        >
          <Flex as="picture" w={"100%"} h={"100%"} >
            <source
              srcSet="/images/responsive/01_home/2-posibilidades.webp"
              media="(max-width: 480px)"
            />
            <Img 
              src="/images/01_home/2-posibilidades.webp" 
              alt="Sillas y la mesa de un aula"
              objectFit={"cover"}
            />
          </Flex>
          <Flex
            position="absolute"
            textTransform={"uppercase"}
            zIndex="1"
            color="white"
            p="24px"
            bg="rgba(121, 163, 66, 0.80)"
            letterSpacing={"4.8px"}
            fontWeight={700}
            fontSize="24px"
          >
            Posibilidades
          </Flex>
        </Flex>
      </Link>
      <Link href="/espacios" aria-label="Link a los Espacios.">
        <Flex
          maxW={{ base: "100%px", sm: "403px" }}
          maxH={{ base: "100%", sm: "403px" }}
          position="relative"
          justifyContent={"center"}
          alignItems="center"
          _hover={{opacity: 0.7}}
          //maxW={"403px"}
        >
          <Flex 
            as="picture" 
            w={"100%"} 
            h={"100%"}
          >
                  <source
                    srcSet="/images/responsive/01_home/3-espacios.webp"
                    media="(max-width: 480px)"
                  />
                  <Img 
                    src="/images/01_home/3-espacios.webp" 
                    alt="Un salon teatro para eventos con instrumentos y mesas"
                    objectFit={"cover"}
                    w={"100%"}
                  />
                </Flex>
          <Flex
            position="absolute"
            textTransform={"uppercase"}
            zIndex="1"
            color="white"
            p="24px"
            bg="rgba(245, 130, 32, 0.80)"
            letterSpacing={"4.8px"}
            fontWeight={700}
            fontSize="24px"
          >
            Espacios
          </Flex>
        </Flex>
      </Link>
      <Link href="/estudio" aria-label="Conocer la seccion estudio.">
        <Flex
          w={{ base: "100%", sm: "403px" }}
          h={{ base: "100%", sm: "403px" }}
          maxW={"403px"}
          position="relative"
          justifyContent={"center"}
          alignItems="center"
          _hover={{opacity: 0.7}}
        >
          <Flex 
            as="picture" 
            w={"100%"}
            h={"100%"}
          >
            <source
              srcSet="/images/responsive/01_home/4-estudio.webp"
              media="(max-width: 480px)"
            />
            <Img 
              src="/images/01_home/4-estudio.webp" 
              alt="Un estudio de grabación" 
              objectFit={"cover"}
            />
          </Flex>
          <Flex
            position="absolute"
            textTransform={"uppercase"}
            zIndex="1"
            color="white"
            p="24px"
            bg="rgba(59, 66, 74, 0.8)"
            letterSpacing={"4.8px"}
            fontWeight={700}
            fontSize="24px"
          >
            Estudio
          </Flex>
        </Flex>
      </Link>
      <Link href="/proyectos" aria-label="">
        <Flex
          w={{ base: "100%", sm: "403px" }}
          h={{ base: "100%", sm: "403px" }}
          position="relative"
          justifyContent={"center"}
          alignItems="center"
          _hover={{opacity: 0.7}}
          maxW={"403px"}
        >
          <Flex as="picture" w={"100%"} h={"100%"}>
            <source
              srcSet="/images/responsive/01_home/1-proyectos.webp"
              media="(max-width: 480px)"
            />
            <Img 
              src="/images/01_home/1-proyectos.webp" 
              alt="La puerta de entrada del centro cultural"
              objectFit={"cover"}
            />
          </Flex>
          <Flex
            position="absolute"
            textTransform={"uppercase"}
            zIndex="1"
            color="white"
            p="24px"
            bg="rgba(27, 58, 102, 0.80)"
            letterSpacing={"4.8px"}
            fontWeight={700}
            fontSize="24px"
          >
            Proyectos
          </Flex>
        </Flex>
      </Link>
      <Link href="/talleres">
        <Flex
          w={{ base: "100%", sm: "403px" }}
          h={{ base: "100%", sm: "403px" }}
          position="relative"
          justifyContent={"center"}
          alignItems="center"
          _hover={{opacity: 0.7}}
          maxW={"403px"}
        >
          <Flex as="picture" w={"100%"} h={"100%"}>
            <source
              srcSet="/images/responsive/01_home/5-talleres.webp"
              media="(max-width: 480px)"
            />
            <Img 
              src="/images/01_home/5-talleres.webp" 
              alt="Un collage de fotos de actividades de taller" 
              objectFit={"cover"}
              //w={"100%"}
            />
          </Flex>
          <Flex
            position="absolute"
            textTransform={"uppercase"}
            zIndex="1"
            color="white"
            p="24px"
            bg="rgba(208, 178, 108, 0.9);"
            letterSpacing={"4.8px"}
            fontWeight={700}
            fontSize="24px"
          >
            Talleres
          </Flex>
        </Flex>
      </Link>
      <Link href="/agenda">
        <Flex
          w={{ base: "100%", sm: "403px" }}
          h={{ base: "100%", sm: "403px" }}
          position="relative"
          justifyContent={"center"}
          alignItems="center"
          _hover={{opacity: 0.7}}
          //maxW={"403px"}
        >
          <Flex 
            as="picture" 
            w={"100%"} 
            h={"100%"}
          >
            <source
              srcSet="/images/responsive/01_home/6-agenda.webp"
              media="(max-width: 480px)"
            />
            <Img 
              src="/images/01_home/6-agenda.webp" 
              alt="Luces reflectoras de un teatro" 
              objectFit={"cover"}
            />
          </Flex>
          <Flex
            position="absolute"
            textTransform={"uppercase"}
            zIndex="1"
            color="white"
            p="24px"
            bg="rgba(208, 178, 108, 0.9);"
            letterSpacing={"4.8px"}
            fontWeight={700}
            fontSize="24px"
          >
            Agenda
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
};

export default SeccionesPrincipales;
