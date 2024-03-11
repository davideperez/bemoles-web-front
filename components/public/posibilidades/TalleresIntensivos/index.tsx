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

const TalleresIntensivos = () => {
    return (
        <Flex
            w={"100%"}
            maxW={{base:"450px", sm:"1308px",}}
            gap={{ base: "8px", sm: "24px" }}
            flexWrap={{ base: "wrap-reverse", sm: "nowrap" }}
        >

            {/* Imagenes */}
            <Flex 
                gap={{ base: "8px", sm: "24px" }}
                alignItems={"stretch"}
                w={"100%"}
            >
                <Flex 
                    as="picture"
                    alignItems={"stretch"}
                    w={{base: "100%", sm: "auto"}}
                    h={{base: "200px", sm: "auto"}}
                >
                    <source
                        srcSet="/images/responsive/02_posibilidades/talleres-intensivos-1.webp"
                        media="(max-width: 480px)"
                    />
                    <Image
                        src="/images/02_posibilidades/talleres-intensivos-1.webp"
                        alt="Talleres intensivos"
                        objectFit={"cover"}
                        border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                        w={"100%"}
                    />
                </Flex>
                <Flex 
                    as="picture"
                    alignSelf={"stretch"}
                    display={{base:"none", md:"flex"}}
                >
                    <source
                        srcSet="/images/responsive/02_posibilidades/talleres-intensivos-2.webp"
                        media="(max-width: 480px)"
                    />
                    <Image
                        src="/images/02_posibilidades/talleres-intensivos-2.webp"
                        alt="Talleres intensivos"
                        objectFit={"cover"}
                        border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                        w={"100%"}
                    />
                </Flex>
            </Flex>

            {/* Text */}
            <Stack 
                spacing="24px"
                px="10px"
            >

                <Text
                    as="h3"
                    color="#3B424A"
                    fontFamily={"DM Serif Display"}
                    fontSize={{ base: "40px", lg: "70px" }}
                    fontWeight={400}
                    lineHeight={{ base: "42px", lg: "72px" }}
                    letterSpacing={{ base: "0.7px", lg: "0.7px" }}
                    maxW={{base:"200px", lg:"481px"}}
                    backgroundColor="rgb(355,355,355, 1)"
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                >
                    Talleres Intensivos
                </Text>
                <UnorderedList
                    px="0.5rem"
                    fontSize={{ base: "16px", lg: "16px" }}
                    fontWeight={400}
                    lineHeight={{ base: "34px", lg: "34px" }}
                    letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                    //whiteSpace="nowrap"
                    backgroundColor="rgb(355,355,355, 1)"
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                >
                    <Flex
                        gap={{ base: "0px", sm: "16px" }}
                        sx={{ "> div > li": { mt: "0px !important" } }}
                    >
                        <Stack mx="1rem">
                            <ListItem>Danzas Folklóricas</ListItem>
                            <ListItem>Bombo Leguero</ListItem>
                            <ListItem>Ritmos y Cuerpo</ListItem>
                            <ListItem>Jams de Arte con modelo vivo</ListItem>
                            <ListItem>Folklore</ListItem>
                            <ListItem>Fotografía</ListItem>
                            <ListItem>Sonido</ListItem>
                            <ListItem>Ritmática</ListItem>
                            <ListItem>Armonización</ListItem>
                            <ListItem>Construcción de Nuevas Masculinidades</ListItem>
                        </Stack>
                    </Flex>
                </UnorderedList>{" "}
                <Flex
                    alignSelf={"stretch"}
                    w={"100%"}
                    justify={{base:"center", sm:"start"}}
                    minW={{base:"", md:"450px"}}
                >
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
                    alignSelf={{base:"center", sm:"start"}}
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
        </Flex>
    )
}

export default TalleresIntensivos;