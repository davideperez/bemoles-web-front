import { Flex, Stack, Text, Image } from "@chakra-ui/react";
import React from "react";

const TalleresYEspacios = () => {
  return (
    <Flex
      maxW={"1312px"}
      as="section" 
      flexWrap={{base: "wrap-reverse", lg:"nowrap", xl: "nowrap" }} 
      justifyContent="center" 
      alignItems={"center"}
      gap={{base:"1rem", lg:"2rem", xl:"4rem"}}
      px={{base: "16px", md:"16px", lg: "80px", /* xl:"240px" */}}
      pt="64px"
      pb={"64px"}
      w={"100%"}
/*       backgroundImage={{
        base: "none",
        lg: "url('/images/01_home/home-bg-01.webp')",
      }}
      overflow={"visible"}
      bgRepeat= "no-repeat"
      bgPos={{
        base:"0px 0px", 
        sm:"0px 0px", 
        md:"0px 0px", 
        lg:"0px 0px", 
        xl:"390px 460px"
      }}
      bgSize={{base:"100%", sm:"100%", md:"100%", lg:"100%", xl:"45%"}}
      //bgSize={{lg: "100%", xl:"42%"}} */
    >
      {/* Texto */}
      <Flex  
        flexDirection="column" 
        w={{base:"100%", lg:"50%"}}
        justify={"start"}
      >
        <Stack 
          spacing={"2rem"} 
          w={"100%"}
        >
          <Text 
            as="h2" 
            color="#3B424A"
            fontFamily={"DM Serif Display"} 
            fontSize="54px" 
            fontWeight={400} 
            letterSpacing={"2.2px"}
            lineHeight="54px" 
            //px={{base:"16px", md:"16px", lg:"80px"}}
            align={{base:"center", md:"center", lg:"center", xl:"left"}}
            backgroundColor="rgb(355,355,355, 1)"
            border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
          >
            Talleres y espacios de encuentro
          </Text>
          <Text
            as="p" 
            fontSize="16px" 
            fontWeight={400} 
            lineHeight="34px" 
            letterSpacing={"0.8px"}
/*             as="p"
            color="#3B424A"
            fontSize="24px"
            fontWeight={400}
            letterSpacing={"1.2px"}
            lineHeight="34px"
            mb={{base:"16px", lg:"0px"}}
            //px={{base:"16px", md:"16px", lg:"80px"}}
            alignItems="center"
            backgroundColor="rgb(355,355,355, 1)"
            border={{base:"5px solid #FFF", sm:"10px solid #FFF"}} */
          >
            Son y serán práctica permanente; el <b>desarrollo de talleres</b> atravesados
            por múltiples disciplinas. Buscamos{" "}
            <b>facilitar procesos creativos</b> nos coloquen como sujetos activos de dicha creación.
            Encontramos que la construcción de <b>espacios para ampliar posibilidades</b> es el lugar hacia donde caminar.
          </Text>
        </Stack>
      </Flex>

      {/* Imagen */}
      <Flex 
        as="picture" 
        minW={{base:"403px", lg:"fit-content"}} 
        justifyContent="center" 
        //px={{base:"16px", lg:"80px"}}
        w={{base:"100%",lg:"50%"}}      
      >
        <source
          srcSet="/images/responsive/01_home/talleres-de-encuentro.webp"
          media="(max-width: 480px)"
        />
        <Image 
          src="/images/01_home/talleres-de-encuentro.webp" 
          alt="Talleres de encuentro" 
          w={{base: "403px", md: "403px"}} 
          h={{base: "403px", md: "403px"}} 
          border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
          objectFit={"cover"}
        />
      </Flex>
    </Flex>
  );
};

export default TalleresYEspacios;