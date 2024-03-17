import {
  AspectRatio,
  Box,
  Flex,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const VisitUs = () => {
  return (
    <Flex
      as="section"
      px={{base: "16px", lg: "80px"}}
      gap="2rem"
      justifyContent={"center"}
      pt="2rem"
      flexWrap={{ base: "wrap", xl: "nowrap" }}
    >
      <Flex 
        flex="1.2" 
        justifyContent={{ base: "center", xl: "flex-end" }} 
        sx={
          {'> div > iframe': 
            { w: { base: "250px", sm: "450px", md: "740px" }, 
              h:{base: "265px", md: "410px"
            }}
          }}
      >
        <Box w={{ base: "250px", sm: "450px", md: "740px" }} h={{base: "265px", md: "410px"}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13098.885961075137!2d-58.3820744!3d-34.8380944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd4c86e03d307%3A0xec9c4bac14136be8!2sLos%20Bemoles!5e0!3m2!1ses-419!2sar!4v1689654829328!5m2!1ses-419!2sar"
            width="600"
            height="410"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Flex>
      <Flex flex="0.8">
        <Stack
          spacing="1rem"
          maxW="480px"
          fontSize={"16px"}
          fontWeight="400"
          lineHeight="34px"
          letterSpacing="0.8px"
        >
          {" "}
          <Text
            color="#3B424A"
            as="h2"
            fontFamily={"DM Serif Display"}
            fontSize="54px"
            fontWeight={400}
            lineHeight="54px"
            letterSpacing={"2.2px"}
          >
            Visitanos
          </Text>
          <Stack spacing="1rem">
            <Text as="p">
              <b>Av. Tomás Espora 4417</b>, a 3 cuadras de Rotonda el Vapor
            </Text>
            <Text as="p">
              <b>Cómo llegar:</b>
            </Text>
            <UnorderedList pl="1.25rem">
              <ListItem>
                <b>Por la puerta:</b> líneas 79, 74, 506, 266 R4.
              </ListItem>
              <ListItem>
                <b>Por la Rotonda El Vapor:</b> líneas 79, 74, 506, 266 R4, 338,
                318 Verde, 263, 510 R2, 177.
              </ListItem>
            </UnorderedList>
            <Text as="p">
              A escasos metros de Remiserías y lugares gastronómicos. Frente al
              gran parque de la Quinta Roca, futura Universidad de Alte. Brown.
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default VisitUs;
