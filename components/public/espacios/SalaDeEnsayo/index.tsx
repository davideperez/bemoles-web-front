import {
    Flex,
    Text,
    Link,
    Stack,
    Image,
    Button,
} from "@chakra-ui/react";

export default function SalaDeEnsayo () {
    return (
        <Flex
            w={"100%"}
            maxW={"1312px"} 
            gap={{ base: "8px", lg: "24px" }}
            flexWrap={{base:"wrap", sm:"nowrap"}}
            //alignItems={"flex-start"}
        >
            <Flex 
                display={{base:"none", sm:"flex"} }
                as="picture" 
                order={{ base: "1", sm: "1" }}
                w={{ base: "100%", sm: "500px" }}
                alignSelf={"stretch"}
            >
                <source
                    srcSet="/images/responsive/03_espacios/sala-de-ensayo-1.png"
                    media="(max-width: 480px)"
                />
                <Image
                    src="/images/03_espacios/sala-de-ensayo-1.png"
                    alt="Clases y cursos"
                    objectFit={"cover"}
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                    //transform="scaleX(-1)"
                />
            </Flex>

            {/* Texts */}
            <Flex
                py="10px"
                px="10px"
                order={{ base: "1", sm: "2" }}
                maxW="401px"
                flexDir={{base:"column"}}
            >
                <Text
                    as="h3"
                    color="#3B424A"
                    fontFamily={"DM Serif Display"}
                    fontSize={{ base: "40px", lg: "70px" }}
                    fontWeight={400}
                    lineHeight={{ base: "42px", lg: "72px" }}
                    letterSpacing={{ base: "0.7px", lg: "0.7px" }}
                    backgroundColor="rgb(355,355,355, 1)"
                    //border={{base:"2px solid #FFF", sm:"5px solid #FFF"}}
                >
                    Sala de Ensayo
                </Text>
                <Text
                    as="p"
                    fontSize={{ base: "16px", lg: "16px" }}
                    fontWeight={400}
                    lineHeight={{ base: "24px", lg: "34px" }}
                    letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                    overflowX="clip"
                    backgroundColor="rgb(355,355,355, 1)"
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                >
                    Un agradable espacio concebido para la exploración musical,
                    correctamente acustizado y con las condiciones ténicas para que
                    al hacerlo podamos captar todo el potencial y brillo.
                <br/>
                <br/>
                    Ensayos. Grabación Multipista. Estudio dotado con equipos
                    Fender, Laney, Monitores Makie, Consola Allen & Heath,
                    Microfonía Shure, Rode, AudioTechnica, Sennheiser. Producciones Audiovisuales.
                </Text>
                <Link href="/estudio">
                    <Button
                        type="button"
                        bg="#DDC692"
                        color="#3B424A"
                        size="lg"
                        textTransform="uppercase"
                        p="16px"
                        mt={"2rem"}
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
            
            <Flex 
                w={"100%"}
                alignSelf={"stretch"}
                alignItems={"start"}
                order={{ base: "1", sm: "3" }}
            >
                <Flex 
                    as="picture" 
                    w={{ base: "100%", sm: "100%" }}
                    alignSelf={"stretch"}

                >
                    <source
                        srcSet="/images/responsive/03_espacios/sala-de-ensayo-2.png"
                        media="(max-width: 480px)"
                    />
                    <Image
                        src="/images/03_espacios/sala-de-ensayo-2.png"
                        alt="Clases y cursos"
                        w={"100%"}
                        objectFit={"cover"}
                        border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                    />
                </Flex>
                <Flex 
                    as="picture"
                    w={{ base: "100%"}}
                    alignSelf={"stretch"}
                    display={{base:"flex", sm:"none"} }
                >
                    <source
                        srcSet="/images/responsive/03_espacios/sala-de-ensayo-1.png"
                        media="(max-width: 480px)"
                    />
                    <Image
                        src="/images/03_espacios/sala-de-ensayo-1-.png"
                        alt="Clases y cursos"
                        objectFit={"cover"}
                        border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                        transform="scaleX(-1)"
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}