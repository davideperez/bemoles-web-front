import { Flex, Grid, GridItem, Icon, Link, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";

const FollowUS = () => {
    const [isLgOrBigger, setIsLgOrBigger] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsLgOrBigger(window.innerWidth > 992);
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <Stack as="section" px={{base: "16px", lg: "80px"}} alignItems={"center"} spacing="2rem" py="4rem" bg={{base: "url('/images/followUsMobile.png')", lg: "url('/images/followUs.png')"}} objectFit={"cover"} objectPosition="center" backgroundPosition={{base:'center', 'lg':"center"}} backgroundRepeat={"no-repeat"}>
      <Flex flexDirection={{base: "column", lg: "row"}} gap="2rem" justifyContent={{base: "center",'lg':"space-between"}} alignItems={"center"} w="948px">
        <Text
          color="#3B424A"
          as="h4"
          fontFamily={"DM Serif Display"}
          fontSize="54px"
          fontWeight={400}
          lineHeight="54px"
          letterSpacing={"2.2px"}
        >
          ¡Seguinos!
        </Text>
        <Flex gap="16px" alignItems={"center"}>
        <Link
                href="https://www.instagram.com/losbemoles/"
                isExternal
                bg="white"
                borderRadius={"50%"}
                color="black"
                border="2px solid #fff"
                display="flex"
                alignItems={"center"}
                justifyContent="center"
                _hover={{ color: "black", bg: "none", transform: "scale(1.2)", "-webkit-transform":  "scale(1.2)"}}
              >
          <Icon as={AiOutlineInstagram} w="32px" h="32px" />
          </Link>
          <Link
                href="https://www.facebook.com/losbemoles"
                isExternal
                bg="white"
                borderRadius={"50%"}
                color="black"
                border="2px solid #fff"
                display="flex"
                alignItems={"center"}
                justifyContent="center"
                _hover={{ color: "black", bg: "none", transform: "scale(1.2)", "-webkit-transform":  "scale(1.2)"}}
              >
          <Icon as={BsFacebook} w="32px" h="32px" />
          </Link>
          <Link
                href="https://www.instagram.com/losbemoles/"
                isExternal
                bg="white"
                borderRadius={"50%"}
                color="black"
                border="2px solid #fff"
                display="flex"
                alignItems={"center"}
                justifyContent="center"
                _hover={{ color: "black", bg: "none", transform: "scale(1.2)", "-webkit-transform":  "scale(1.2)"}}
              >
          <Icon as={BsYoutube} w="32px" h="32px" />
          </Link>
        </Flex>
      </Flex>
      <Grid
        templateColumns={{base: "300px", lg: "repeat(3, 300px)"}}
        templateRows="repeat(3, 300px)"
        gap="24px"
      >
        <GridItem bg="#D9D9D9"></GridItem>
        <GridItem bg="#D9D9D9"></GridItem>
        <GridItem bg="#D9D9D9"></GridItem>
        {isLgOrBigger && <><GridItem bg="#D9D9D9"></GridItem>
        <GridItem bg="#D9D9D9"></GridItem>
        <GridItem bg="#D9D9D9"></GridItem>
        <GridItem bg="#D9D9D9"></GridItem>
        <GridItem bg="#D9D9D9"></GridItem>
        <GridItem bg="#D9D9D9"></GridItem></>}
      </Grid>
    </Stack>
  );
};

export default FollowUS;
