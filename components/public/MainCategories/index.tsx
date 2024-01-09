import { Flex, Img } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { scaleCloudinaryImageFromUrl } from "../../../utils/functions";

const MainCategories = () => {
  return (
    <Flex
      as="section"
      flexWrap={"wrap"}
      gap={{ base: "16px", sm: "72px" }}
      justifyContent="space-around"
      px={{ base: "16px", lg: "80px" }}
      //alignContent={"stretch"}
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
              srcSet="/images/responsive/consultorios.png"
              media="(max-width: 480px)"
            />
            <Img src="/images/consultorios.png" alt="Consultorios" />
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
                    srcSet="/images/responsive/sum-arte.png"
                    media="(max-width: 480px)"
                  />
                  <Img src="/images/sum-arte.png" alt="Consultorios" />
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
                    srcSet="/images/responsive/musica.png"
                    media="(max-width: 480px)"
                  />
                  <Img src="/images/musica.png" alt="Consultorios" />
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
                    srcSet="/images/responsive/proyectos-home-button-01.png"
                    media="(max-width: 480px)"
                  />
                  <Img src="/images/proyectos-home-button-01.png" alt="Consultorios" />
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
                    srcSet="/images/responsive/talleres-home.png"
                    media="(max-width: 480px)"
                  />
                  <Img src="/images/talleres-home.png" alt="Consultorios" />
                </Flex>
          <Flex
            position="absolute"
            textTransform={"uppercase"}
            zIndex="1"
            color="white"
            p="24px"
            bg="rgba(221, 198, 146, 0.80);"
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
                    srcSet="/images/responsive/agenda-home.png"
                    media="(max-width: 480px)"
                  />
                  <Img src="/images/agenda-home.png" alt="Consultorios" />
                </Flex>
          <Flex
            position="absolute"
            textTransform={"uppercase"}
            zIndex="1"
            color="white"
            p="24px"
            bg="rgba(221, 198, 146, 0.80);"
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

export default MainCategories;
