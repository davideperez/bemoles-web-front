import {
    Flex,
    Image,
    Stack,
    Text,
    Button,
    Link
} from "@chakra-ui/react";

export default function Consultorios () {
    return (
        <Flex
            w={"100%"}
            maxW={"1312px"} 
            gap={{ base: "8px", sm: "24px" }} 
            flexWrap={{base:"wrap-reverse", sm:"nowrap"}}
        >
            {/* 2 Imagenes */}
            <Flex
                w={"100%"} 
                gap={{ base: "8px", lg: "24px" }} 
                alignItems={"flex-start"}
                maxH={{ base: "205px", sm: "100%" }}

            >
                <Flex 
                    as="picture"
                    w={{ base: "100%", sm:"100%", xl: "567px" }}
                    alignSelf={"stretch"}
                    maxH={{ base: "205px", sm: "100%" }}
                >
                    <source
                        srcSet="/images/responsive/03_espacios/consultorios-profesionales-1.png"
                        media="(max-width: 480px)"
                    />
                    <Image
                        src="/images/03_espacios/consultorios-profesionales-1.png"
                        alt="Aulas"
                        //w={"100%"}
                        border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                        objectFit={"cover"}
                    />
                </Flex>
                <Flex 
                    as="picture"
                    w={{ base: "100%", lg: "228px" }}
                    alignSelf={"stretch"}
                    display={{base:"flex", sm: "none", xl:"flex"}}
                    maxH={{ base: "205px", sm: "100%" }}
                >
                    <source
                        srcSet="/images/responsive/03_espacios/consultorios-profesionales-2.png"
                        media="(max-width: 480px)"
                    />
                    <Image
                        src="/images/03_espacios/consultorios-profesionales-2.png"
                        alt="Aulas"
                        border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                        objectFit={"cover"}
                    />
                </Flex>
            </Flex>

            {/* Textos y 1 Imagen */}
            <Stack 
                w={"100%"}
                spacing={{ base: "8px", sm: "24px" }}
            >
                {/* Textos */}
                <Stack
                    justifyContent={"flex-end"}
                    spacing="16px"
                    px="10px"
                    maxW="468px"
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
                        Consultorios Profesionales
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
                        Construidos con las comodidades que merecen pacientes y
                        profesionales. Salas de espera, baños para discapacitados,
                        estacionamiento en la puerta, fácil acceso. Cámara Gesell.{" "}
                    </Text>
                    <Flex
                        justify={{base:"start", sm:"start"}}
                    >
                        <Link 
                            href="mailto:info@losbemoles.com.ar"
                        >
                            <Button
                                type="button"
                                aria-label="Consultar"
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

                {/* 1 Imagen */}
                <Flex
                    as="picture"
                    w={{ base: "100%", lg: "468px" }}
                    alignSelf={"stretch"}
                    //h={{ base: "229px", lg: "223px" }}
                >
                    <source
                        srcSet="/images/responsive/03_espacios/consultorios-profesionales-3.png"
                        media="(max-width: 480px)"
                    />
                    <Image
                        src="/images/03_espacios/consultorios-profesionales-3.png"
                        alt="Aulas"
                        objectFit={"cover"}
                        border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                    />
                </Flex>
            </Stack>
        </Flex>
    )
}