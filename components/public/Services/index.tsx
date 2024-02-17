import { Flex, Stack, Text, Image } from "@chakra-ui/react";
import React from "react";

const Services = () => {
  return (
    <Flex 
      as="section" 
      flexWrap={{base: "wrap-reverse", lg:"wrap-reverse", xl: "nowrap" }} 
      justifyContent="center" 
      gap={{base:"1rem", lg:"4rem"}}
      px={{base: "16px", md:"16px", lg: "80px", /* xl:"240px" */}}
      pt="64px"
      pb={"64px"}
    >
      <Flex  flexDirection="column">
        <Stack spacing={"2rem"} textAlign={{base: "left", xl: "start"}}>
          <Text 
            as="h4" 
            color="#3B424A"
            fontFamily={"DM Serif Display"} 
            fontSize="54px" 
            fontWeight={400} 
            letterSpacing={"2.2px"}
            lineHeight="54px" 
            //px={{base:"16px", md:"16px", lg:"80px"}}
            align={{base:"center", md:"center", lg:"center", xl:"left"}}
          >
            Talleres y espacios de encuentro
          </Text>
          <Text
            as="p"
            color="#3B424A"
            fontSize="24px"
            fontWeight={400}
            letterSpacing={"1.2px"}
            lineHeight="34px"
            mb={{base:"16px", lg:"0px"}}
            //px={{base:"16px", md:"16px", lg:"80px"}}
            alignItems="center"
          >
            Son y serán práctica permanente; el <b>desarrollo de talleres</b> atravesados
            por múltiples disciplinas. Buscamos{" "}
            <b>facilitar procesos creativos</b> nos coloquen como sujetos activos de dicha creación.
            Encontramos que la construcción de <b>espacios para ampliar posibilidades</b> es el lugar hacia donde caminar.
          </Text>
        </Stack>
      </Flex>
      <Flex as="picture" minW={{base:"403px", lg:"fit-content"}} justifyContent="center" /* px={{base:"16px",md:"16px", lg:"80px"}} */ >
        <source
          srcSet="/images/responsive/weSearch1.png"
          media="(max-width: 480px)"
        />
        <Image src="https://dummyimage.com/600x600/242424/808080.png" alt="TBD" w={{base: "403px", md: "370px"}} h={{base: "403px", md: "370px"}} />
      </Flex>
    </Flex>
  );
};

export default Services;