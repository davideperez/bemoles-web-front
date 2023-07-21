import { Flex, Img } from "@chakra-ui/react";
import React from "react";

const MainCategories = () => {
  return (
    <Flex
      as="section"
      flexWrap={"wrap"}
      gap={{ base: "16px", sm: "72px" }}
      justifyContent="space-around"
      px={{ base: "16px", lg: "80px" }}
    >
      <Flex
        minW={{ base: "100%", sm: "403px" }}
        minH={{ base: "100%", sm: "403px" }}
        position="relative"
        justifyContent={"center"}
        alignItems="center"
      >
        <Img src="/images/consultorios.png" alt="Consultorios" />
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
          Consultorios
        </Flex>
      </Flex>
      <Flex
        minW={{ base: "100%", sm: "403px" }}
        minH={{ base: "100%", sm: "403px" }}
        position="relative"
        justifyContent={"center"}
        alignItems="center"
      >
        <Img src="/images/musica.png" alt="Musica" />
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
          Música
        </Flex>
      </Flex>
      <Flex
        minW={{ base: "100%", sm: "403px" }}
        minH={{ base: "100%", sm: "403px" }}
        position="relative"
        justifyContent={"center"}
        alignItems="center"
      >
        <Img src="/images/sum-arte.png" alt="Sum-arte" />
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
          Sum-arte
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MainCategories;
