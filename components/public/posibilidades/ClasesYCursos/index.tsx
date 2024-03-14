
import {
    Flex,
    Hide,
    Link,
    Text,
    Image,
    Stack,
    Button,
    ListItem,
    UnorderedList,
  } from "@chakra-ui/react";

const ClasesYCursos = () => {
    return (
        <Flex
            w={"100%"}
            maxW={"1308px"}
            gap={{ base: "8px", sm: "24px" }}

            flexWrap={{base:"wrap", sm:"nowrap"}}
            justify={{base: "center", md:"start"}}
        >

            {/* Imagen 01 */}
            <Flex 
                as="picture"
                w={{base: "100%", lg: "100%"}}
                h={{base: "200px", sm: "auto"}}
                order={{base: "2", xl:"0"}}
                display={{base:"flex", sm:"flex", md:"flex", lg:"none", xl:"flex"}}
            >
                <source
                    srcSet="/images/responsive/02_posibilidades/clases-y-cursos-1.png"
                    media="(max-width: 600px)"
                />
                <Image
                    src="/images/02_posibilidades/clases-y-cursos-1.png"
                    alt="Clases y cursos"
                    objectFit="cover"
                    //objectPosition={{base: "0 -200px", sm:"auto"}}
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                    w={"100%"}
                />{" "}
            </Flex>

            {/* Texto */}
            <Stack
                spacing="24px"
                py="10px"
                px="10px"
            >
                {/* Titulo */}
                <Flex 
                    justify={{base:"start", sm:"start"}} 
                >
                    <Text
                        maxW={{base:"250px", md:"363px"}}
                        as="h3"
                        color="#3B424A"
                        fontFamily={"DM Serif Display"}
                        fontSize={{ base: "40px", lg: "70px" }}
                        fontWeight={400}
                        lineHeight={{ base: "42px", lg: "72px" }}
                        letterSpacing={{ base: "0.7px", lg: "0.7px" }}
                        backgroundColor="rgb(355,355,355, 1)"
                        border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                    >
                    Clases {<br/>}y cursos
                    </Text>
                </Flex>

                {/* Lista */}
                <UnorderedList
                    px="0.5rem"
                    fontSize={{ base: "16px", lg: "16px" }}
                    fontWeight={400}
                    lineHeight={{ base: "34px", lg: "34px" }}
                    letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                    whiteSpace="nowrap"
                >
                    <Flex
                    gap={{ lg: "16px" }}
                    sx={{ "> div > li": { mt: "0px" } }}
                    flexWrap={{ base: "wrap", lg: "nowrap" }}
                    >
                    <Stack mx="1rem">
                        <ListItem>Dibujo y Pintura</ListItem>
                        <ListItem>Arte para niños</ListItem>
                        <ListItem>Jardín de Teatro</ListItem>
                        <ListItem>Pintura en Porcelana</ListItem>
                        <ListItem>Escritura Creativa</ListItem>
                        <ListItem>Bordado</ListItem>
                        <ListItem>Tejido</ListItem>
                    </Stack>
                    <Stack mx="1rem">
                        <ListItem>Mosaiquismo</ListItem>
                        <ListItem>Encuadernación</ListItem>
                        <ListItem>Cerámica</ListItem>
                        <ListItem>Folklore</ListItem>
                        <ListItem>Flamenco</ListItem>
                        <ListItem>Danza Contemporánea</ListItem>
                    </Stack>
                    </Flex>
                </UnorderedList>{" "}

                {/* Texto Final */}
                <Flex 
                    justify={{base:"center", sm:"start"}}
                    alignSelf={"stretch"}
                    w={"100%"}
                    minW={{base:"", md:"450px"}}  
                >
                    <Text
                        as="p"
                        fontSize={{ base: "16px", lg: "16px" }}
                        fontWeight={700}
                        lineHeight={{ base: "normal", lg: "34px" }}
                        letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                    >
                        Encuentros Semanales de 1 a 2 horas.
                    </Text>
                </Flex>
                
                {/* Boton */}
                <Flex justify={{base:"center", sm:"start"}}>
                    <Link 
                        href='/talleres'    
                    >
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

            {/* 2 Imagenes */}
{/*             <Flex 
                flexWrap={{base:"wrap", sm:"nowrap"}}
                alignItems={"stretch"}
                w={"100%"}
            > */}

            {/* Imagen 02 */}
            <Flex 
                as="picture"
                w={{base: "25%", md: "100%"}}
                order={{base: "1", lg:"2"}}
                display={{base:"none", md:"none",lg:"flex"}}
            >
                <source
                    srcSet="/images/responsive/02_posibilidades/clases-y-cursos-3.png"
                    media="(max-width: 480px)"
                />
                <Image
                    src="/images/02_posibilidades/clases-y-cursos-3.png"
                    alt="Clases y cursos"
                    objectFit="cover"
                    border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                    w={"100%"}
                />
            </Flex>
                {/* Imagen 03 */}
            <Flex 
                as="picture" 
                w={{base: "100%", xl: "40%"}}
                order={"3 sm:3"}
                display={{base:"none", md:"none", lg:"flex"}}
            >
            <source
                srcSet="/images/responsive/02_posibilidades/clases-y-cursos-2.png"
                media="(min-width: 480px)"
            />
            <Image
                src="/images/02_posibilidades/clases-y-cursos-2.png"
                alt="Clases y cursos"
                objectFit="cover"
                border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
            />
            </Flex>
{/*             </Flex>
 */}    </Flex>

    )
}

export default ClasesYCursos;