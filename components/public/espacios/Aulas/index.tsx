import {
    Flex,
    Image,
    Stack,
    Text,
    Button,
    Link
} from "@chakra-ui/react";

export default function Aulas () {
    return (
          <Flex 
            w={"100%"}
            maxW={"1312px"}
            gap={{ base: "8px", sm: "24px" }} 
            flexWrap={{base:"wrap", sm:"nowrap"}}
          >
            <Stack 
              spacing={{ base: "8px", sm: "24px" }}
            >
              {/* //////////// Texto //////////////// */}
              <Stack justifyContent={"flex-end"} spacing="16px" px="10px">
                <Text
                  as="h3"
                  color="#3B424A"
                  fontFamily={"DM Serif Display"}
                  fontSize={{ base: "40px", lg: "70px" }}
                  fontWeight={400}
                  lineHeight={{ base: "42px", lg: "72px" }}
                  letterSpacing={{ base: "0.7px", lg: "0.7px" }}
                >
                  Aulas
                </Text>
                <Text
                    as="span"
                    fontSize={{ base: "16px", lg: "16px" }}
                    fontWeight={400}
                    lineHeight={{ base: "24px", lg: "34px" }}
                    letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                    //maxW="545px"
                    overflowX="clip"
                    //boxShadow={"0 0 10px 10px rgb(355,355,355,1)"}
                    backgroundColor="rgb(355,355,355, 1)"
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  >
                    Confortables aulas para el dictado de clases individuales y/o
                    grupales, debidamente equipadas, climatizadas, con las
                    condiciones y herramientas que atienden a un desarrollo en
                    excelencia.
                </Text>
                <Flex
                  justify={{base:"start", sm:"start"}}
                >
                  <Link
                    href="mailto:info@losbemoles.com.ar"
                  >
                    <Button
                      type="button"
                      aria-label="Consultar enviando un mail a info@losbemoles.com.ar"
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
              </Stack>
              {/* //////////// Imagen 1 //////////////// */}
              <Flex as="picture">
                <source
                  srcSet="/images/responsive/03_espacios/aulas-1.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/03_espacios/aulas-1.png"
                  alt="Aulas"
                  w={{ base: "100%", lg: "576px" }}
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                  h={{ base: "157px", lg: "208px" }}
                />{" "}
              </Flex>
            </Stack>
            
            {/* //////////// Imagen 2 y 3 //////////////// */}
            <Flex 
              w={"100%"}
              gap={{ base: "8px", lg: "24px" }}
              alignItems={"flex-start"}
            >
              <Flex
                as="picture" 
                alignSelf={"stretch"}
                w={{ base: "100%", sm:"100%", xl: "512px" }}
                //h={{ base: "217px", lg: "456px" }}
              >
                <source
                  srcSet="/images/responsive/03_espacios/aulas-2.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/03_espacios/aulas-2.png"
                  alt="Aulas"
                  objectFit={"cover"}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />{" "}
              </Flex>

              <Flex 
                as="picture"
                alignSelf={"stretch"}
                w={{ base: "100%", lg: "176px" }}
                maxH={{ base: "227px", lg: "100%" }}
                display={{base:"flex", sm:"none", xl:"flex"}}
                //h={{ base: "217px", lg: "456px" }}
              >
                <source
                  srcSet="/images/responsive/03_espacios/aulas-3.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src="/images/03_espacios/aulas-3.png"
                  alt="Aulas"
                  objectFit={"cover"}
                  w={{ base: "100%", lg: "100%" }}
                  border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />
              </Flex>
            </Flex>
          </Flex>
    )
}