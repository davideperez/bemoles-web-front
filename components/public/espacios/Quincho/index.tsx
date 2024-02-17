import {
    Flex,
    Image,
    Stack,
    Text,
    Button,
    Link
} from "@chakra-ui/react";

const Quincho = () => {
    return (
        <Flex 
            gap={{ base: "8px", sm: "24px" }}
            flexWrap={"wrap"}
        >
            <Stack spacing={{ base: "8px", sm: "24px" }}>
                <Stack justifyContent={"flex-end"} spacing="16px" px="10px">
                    <Text
                        as="h3"
                        color="#3B424A"
                        fontFamily={"DM Serif Display"}
                        fontSize={{ base: "40px", lg: "70px" }}
                        fontWeight={400}
                        lineHeight={{ base: "42px", lg: "72px" }}
                        letterSpacing={{ base: "0.7px", lg: "0.7px" }}
                        boxShadow={"0 0 10px 10px rgb(355,355,355,0.65)"}
                        backgroundColor="rgb(355,355,355,0.65)"
                        >
                    El Quincho
                    </Text>
                    <Text
                        as="p"
                        fontSize={{ base: "16px", lg: "16px" }}
                        fontWeight={400}
                        lineHeight={{ base: "24px", lg: "34px" }}
                        letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                        maxW="545px"
                        overflowX="clip"
                    >
                        Amplio y luminoso taller para la realización de talleres, con
                        instalaciones gastronómicas para el complemento de
                        actividades. Acceso al parque.{" "}
                    </Text>{" "}
                    <Link 
                        href="/talleres"
                    >
                        <Button
                            type="button"
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
                        Ver Talleres
                        </Button>
                    </Link>
                </Stack>
                <Flex 
                    as="picture"
                    w={{ base: "379px", lg: "576px" }}
                    //h={{ base: "173px", lg: "242px" }}  
                    alignSelf= "stretch"
                >
                    <source
                    srcSet="/images/quincho-1-v02.png"
                    media="(max-width: 480px)"
                    />
                    <Image
                    src="/images/quincho-1-v02.png"
                    alt="Aulas"
                    objectFit={"cover"}
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                    />{" "}
                </Flex>
            </Stack>
            <Flex 
            as="picture"
            alignSelf= "stretch"
            w={{ base: "379px", lg: "712px" }}
            //h={{ base: "244px", lg: "456px" }}
            >
            <source
                srcSet="/images/responsive/quincho-2-v02.png"
                media="(max-width: 480px)"
            />
            <Image
                src="/images/quincho-2-v02.png"
                alt="Aulas"
                objectFit={"cover"}
                border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
            />
            </Flex>
        </Flex> 
    )
}

export default Quincho;