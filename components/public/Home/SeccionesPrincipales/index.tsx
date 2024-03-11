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
      <Link href="/posibilidades">
        <Flex
          minW={{ base: "100%", sm: "403px" }}
          minH={{ base: "100%", sm: "403px" }}
          position="relative"
          justifyContent={"center"}
          alignItems="center"
          _hover={{opacity: 0.7}}
        >
          <Flex as="picture">
            <source
              srcSet="/images/responsive/01_home/consultorios.png"
              media="(max-width: 480px)"
            />
            <Img src="/images/01_home/consultorios.png" alt="Posibilidades" />
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
      <Link href="/espacios">
        <Flex
          minW={{ base: "100%", sm: "403px" }}
          minH={{ base: "100%", sm: "403px" }}
          position="relative"
          justifyContent={"center"}
          alignItems="center"
          _hover={{opacity: 0.7}}
        >
          <Flex as="picture">
                  <source
                    srcSet="/images/responsive/01_home/espacios.png"
                    media="(max-width: 480px)"
                  />
                  <Img src="/images/01_home/espacios.png" alt="Espacios" />
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
      <Link href="/estudio">
        <Flex
          minW={{ base: "100%", sm: "403px" }}
          minH={{ base: "100%", sm: "403px" }}
          position="relative"
          justifyContent={"center"}
          alignItems="center"
          _hover={{opacity: 0.7}}
        >
          <Flex as="picture">
            <source
              srcSet="/images/responsive/01_home/estudio.png"
              media="(max-width: 480px)"
            />
            <Img src="/images/01_home/estudio.png" alt="Estudio" />
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
      <Link href="/proyectos">
        <Flex
          minW={{ base: "100%", sm: "403px" }}
          minH={{ base: "100%", sm: "403px" }}
          position="relative"
          justifyContent={"center"}
          alignItems="center"
          _hover={{opacity: 0.7}}
        >
          <Flex as="picture">
                  <source
                    srcSet="/images/responsive/01_home/proyectos-home-button-01.png"
                    media="(max-width: 480px)"
                  />
                  <Img src="/images/01_home/proyectos-home-button-01.png" alt="Proyectos" />
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
          minW={{ base: "100%", sm: "403px" }}
          minH={{ base: "100%", sm: "403px" }}
          position="relative"
          justifyContent={"center"}
          alignItems="center"
          _hover={{opacity: 0.7}}
        >
          <Flex as="picture">
                  <source
                    srcSet="/images/responsive/01_home/talleres-home.png"
                    media="(max-width: 480px)"
                  />
                  <Img src="/images/01_home/talleres-home.png" alt="Talleres" />
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
          minW={{ base: "100%", sm: "403px" }}
          minH={{ base: "100%", sm: "403px" }}
          position="relative"
          justifyContent={"center"}
          alignItems="center"
          _hover={{opacity: 0.7}}
        >
          <Flex as="picture">
                  <source
                    srcSet="/images/responsive/01_home/agenda-home.png"
                    media="(max-width: 480px)"
                  />
                  <Img src="/images/01_home/agenda-home.png" alt="Agenda" />
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
