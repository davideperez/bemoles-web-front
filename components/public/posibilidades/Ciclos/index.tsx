import {
    Flex,
    Link,
    Text,
    Image,
    Stack,
    Button,
    ListItem,
    UnorderedList,
  } from "@chakra-ui/react";

const Ciclos = () => {

    return (
        <Flex
            w={"100%"}
            maxW={"1308px"}
            gap={{ base: "8px", sm: "24px" }} 
            flexWrap={{base:"wrap", sm:"nowrap"}}
            
            align={{base: "center", md:"start"}}
            justify={{base: "center", md:"start"}}
            
            alignSelf={{base:"stretch", sm:"center"}}

        >

            {/*01 2 Imagenes */} 
            <Flex 
                w={"30%"}
                flexDirection="column"
                gap={"16px"}
                alignItems={"start"}
                alignSelf={"stretch"}
                display={{base: "none", xl:"flex"}}
            >
                {/* Img 1 */}
                <Flex 
                    as="picture"
                    alignSelf={"stretch"}
                    display={{base: "none", sm:"flex"}}
                    w={"100%"}
                    h={"100%"}

                    >
                    <source
                        srcSet="/images/responsive/02_posibilidades/ciclos-1.webp"
                        media="(max-width: 480px)"
                    />
                    <Image
                        src="/images/02_posibilidades/ciclos-1.webp"
                        w={"100%"}
                        maxH={"265px"}
                        alt="Talleres intensivos"
                        objectFit={"cover"}
                        border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                    />
                </Flex>

                {/* Img 2 */}
                <Flex 
                    as="picture"
                    alignSelf={"stretch"}
                    display={{base: "none", sm:"flex"}}
                    w={"100%"}
                    h={"100%"}

                >
                    <source
                        srcSet="/images/responsive/02_posibilidades/ciclos-2.webp"
                        media="(max-width: 480px)"
                    />
                    <Image
                        src="/images/02_posibilidades/ciclos-2.webp"
                        alt="Talleres intensivos"
                        objectFit={"cover"}
                        maxH={"265px"}
                        w={"100%"}
                        border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                    />
                </Flex>
            </Flex>

            <Flex
                justify={"center"}
                w={"100%"}
                flexDir={{base:"column", lg:"row"}}
            >
                {/* 02 Texto */} 
                <Stack 
                    spacing="24px"
                    px="10px"
                    maxH={{base:"auto", lg:"550px"}}
                    minW={{base:"", sm:"460px", md:"460px", lg:"460px", xl:"550px"}}
                >
                <Text
                    as="h3"
                    color="#3B424A"
                    fontFamily={"DM Serif Display"}
                    fontSize={{ base: "40px", lg: "70px" }}
                    fontWeight={400}
                    lineHeight={{ base: "42px", lg: "72px" }}
                    letterSpacing={{ base: "0.7px", lg: "0.7px" }}
                    maxW="481px"
                >
                    Ciclos
                </Text>
                <UnorderedList
                    px="0.5rem"

                    fontSize={{ base: "16px", lg: "16px" }}
                    fontWeight={400}
                    lineHeight={{ base: "34px", lg: "34px" }}
                    letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                    maxW={"400px"}
                >
                    <Flex
                        gap={{ base: "0px", sm: "16px" }}
                        sx={{ "> div > li": { mt: "0px !important" } }}
                    >
                    <Stack mx="1rem">
                        <ListItem>Encuentros de Folklore</ListItem>
                        <ListItem>Ciclos de Rock</ListItem>
                        <ListItem>Noche de Jazz </ListItem>
                        <ListItem>Cine (dentro del programa para Espacios no Convencionales de INCAA)</ListItem>
                        <ListItem>Circuito Estable de Música en VIVO - INAMU</ListItem>
                        <ListItem>La Peña de los Alumnos</ListItem>
                        <ListItem>Exposición de Artes Plásticas</ListItem>
                    </Stack>
                    </Flex>
                </UnorderedList>{" "}
                <Flex
                    alignSelf={"stretch"}
                    w={"100%"}
                    justify={{base:"center", sm:"start"}}
                    minW={{base:"", md:"450px"}}            >
                    <Text
                        as="p"
                        fontSize={{ base: "16px", lg: "16px" }}
                        fontWeight={700}
                        lineHeight={{ base: "normal", lg: "34px" }}
                        letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                    >
                        Encuentro puntuales de una o media jornada.
                    </Text>
                </Flex>
                <Flex
                    alignSelf={{base: "center", sm: "start"}}
                >
                    <Link href='/talleres'>
                        <Button
                            type="button"
                            bg="#DDC692"
                            color="#3B424A"
                            size="lg"
                            my="1rem"
                            textTransform="uppercase"
                            p="16px"
                            w="fit-content"
                            fontSize={{ base: "14px", lg: "14px" }}
                            fontWeight={700}
                            letterSpacing={{ base: "2.8px", lg: "2.4px" }}
                            borderRadius="4px"
                            _hover={{ bg: "#e9dbb9" }}
                        >
                            Ver los Talleres
                        </Button>
                    </Link>
                </Flex>
                </Stack>

                {/*03 1 imagen */} 
                <Flex 
                    as="picture"
                    alignSelf={{base:"stretch"}}
                    display={{base:"flex", xl:"flex"}}
                    w={"100%"}
                    maxH={{base:"200px", lg:"540px"}}
                >
                    <source
                        srcSet="/images/responsive/02_posibilidades/ciclos-3.webp"
                        media="(max-width: 480px)"
                    />
                    <Image
                        src="/images/02_posibilidades/ciclos-3.webp"
                        alt="Talleres intensivos"
                        objectFit={"cover"}
                        objectPosition={{base: "0px -60px", sm: "0px -100px", md: "0px -210px", lg: "0px 0px"}}
                        border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                    />
                </Flex>
            </Flex>


        </Flex>
    )
}

export default Ciclos;