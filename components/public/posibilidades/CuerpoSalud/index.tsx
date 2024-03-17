
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

const CuerpoSalud = () => {
    return (
        
    <Flex 
        as={"section"}
        w={"100%"}
        maxW={"1308px"}
        gap={{ base: "8px", sm: "24px" }} 
        flexWrap={"nowrap"}

        align={{base: "center", md:"start"}}
        justify={{base: "center", md:"start"}}
        
        alignSelf={{base:"stretch", sm:"center"}}
    >
        {/* Texto e imagen */}
        <Stack 
            spacing={{ base: "8px", sm: "24px" }}
            align={{base: "center", md:"start"}}
            justify={{base: "center", md:"start"}}
            //mx={"16px"}
        >
            {/* Textos */}
            <Stack
                spacing="24px"
                px="10px"
                justify={"center"}
                maxW={"580px"}
            >
                <Text
                    as="h3"
                    color="#3B424A"
                    fontFamily={"DM Serif Display"}
                    fontSize={{ base: "40px", lg: "70px" }}
                    fontWeight={400}
                    lineHeight={{ base: "42px", lg: "72px" }}
                    letterSpacing={{ base: "0.7px", lg: "0.7px" }}
                >
                    Cuerpo, Salud y Acompañamiento
                </Text>
                <UnorderedList
                    px="0.5rem"
                    fontSize={{ base: "16px", lg: "16px" }}
                    fontWeight={400}
                    lineHeight={{ base: "34px", lg: "34px" }}
                    letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                    whiteSpace="nowrap"
                >
                    <Flex
                        gap={{ base: "0px", sm: "16px" }}
                        sx={{ "> div > li": { mt: "0px !important" } }}
                        flexDirection={{ base: "column", sm: "row" }}
                    >
                        <Stack mx="1rem">
                            <ListItem>Psicopedagogía</ListItem>
                            <ListItem>Musicoterapia</ListItem>
                            <ListItem>Fonoaudiología</ListItem>
                            <ListItem>Estimulación Temprana</ListItem>
                            <ListItem>Taller Inclusivo</ListItem>
                        </Stack>
                        <Stack mx={{ base: "1rem", sm: "2rem" }}>
                            <ListItem>Apoyo Escolar</ListItem>
                            <ListItem>Yoga</ListItem>
                            <ListItem>Medicina China</ListItem>
                            <ListItem>Masajes</ListItem>
                            <ListItem>Estimulación Musical</ListItem>
                        </Stack>
                    </Flex>
                </UnorderedList>{" "}
                <Flex 
                    alignSelf={{base: "center", sm:"start"}}
                >
                    <Link href='/talleres'>
                        <Button
                            type="button"
                            bg="#DDC692"
                            color="#3B424A"
                            size="lg"
                            my="2rem"
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

            {/* Imagen */}
            <Flex 
                as="picture"
                w={"100%"}
                justify={{base: "center", sm:"start"}}
            >
                <source
                srcSet="/images/responsive/02_posibilidades/cuerpo-salud-1.webp"
                media="(max-width: 480px)"
                />
                <Image
                    src="/images/02_posibilidades/cuerpo-salud-1.webp"
                    alt="Clases y cursos"
                    w={"100%"}
                    h={{ base: "104px", lg: "164px" }}
                    objectFit={"cover"}
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />{" "}
            </Flex>
        </Stack>


        {/* 2 imagenes */}
        <Flex 
            gap={{ base: "8px", lg: "24px" }}
            alignItems={"start"}
            alignSelf={"stretch"}

        >
            <Flex 
                as="picture"
                w={{base: "100%", xl: "70%"}}
                display={{base:"none", md:"flex"}}
                alignSelf={"stretch"}
            >
                <source
                    srcSet="/images/responsive/02_posibilidades/cuerpo-salud-2.webp"
                    //media="(max-width: 480px)"
                />
                <Image
                    src="/images/02_posibilidades/cuerpo-salud-2.webp"
                    alt="Clases y cursos"
                    w={"100%"}
                    objectFit={"cover"}
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />{" "}
            </Flex>
            
            <Flex 
                as="picture"
                w={{base: "30%", xl: "30%"}}
                alignSelf={"stretch"}
                display={{base:"none", xl:"flex"}}
            >
                <source
                    srcSet="/images/responsive/02_posibilidades/cuerpo-salud-3.webp"
                    media="(max-width: 480px)"
                />
                <Image
                    src="/images/02_posibilidades/cuerpo-salud-3.webp"
                    alt="Clases y cursos"
                    objectFit={"cover"}
                    w={"100%"}
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                />{" "}
            </Flex>
        </Flex>
    </Flex>
    )
}

export default CuerpoSalud;