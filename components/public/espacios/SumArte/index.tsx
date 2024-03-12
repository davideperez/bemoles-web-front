import { 
    Flex, 
    Image, 
    Text, 
    Button, 
    Link 
} from "@chakra-ui/react";

const SumArte = () => {
    return (
        <Flex
            w={"100%"}
            maxW={"1312px"}
            minW={{base:"0px", lg:"1060px", xl:"0px"} }
            gap={{ base: "24px", sm: "24px" }}
            flexDirection={"column"}
            alignItems={"center"}
            //px={{ base: "8px", sm: "16px" }}
        >

            {/* 01- 2 Columnas */}
            <Flex 
                flexWrap={"wrap"}
                flexDirection={{ base: "column", lg: "row" }}
                alignItems={"flex-start"}
                //gap={{ base: "8px", sm: "24px" }}
            >
                {/*01-01- Columna 1 */}
                <Flex 
                    as="picture"
                    w={{ base: "100%", lg: "50%" }}
                    alignSelf={"stretch"}
                    maxH={"450px"}
                    order={{base:"2", lg:"1"}}
                    mt={{ base: "1rem", lg: "0rem" }}
                    /* alignSelf={"stretch"}
                    display={{base:"none", sm:"flex"}} */
                >
                    <source
                        srcSet="/images/responsive/03_espacios/sum-arte-01.png"
                        //media="(min-width: 480px)"
                    />
                    <Image
                        src="/images/03_espacios/sum-arte-01.png"
                        w={{ base: "100%", lg: "100%" }}
                        alt="Clases y cursos"
                        objectFit={"cover"}
                        border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                    />
                </Flex>

                {/* 01-02- Columna 2 */}
                <Flex
                    w={{ base: "100%", lg: "50%" }}
                    flexDirection={"column"}
                    gap={{base:"16px", sm:"48px"}}
                    flex={"1"}
                    alignSelf={"stretch"}
                    order={{base:"1", lg:"2"}}
                    //justify={"normal"}
                >
                    {/* 01-02-01 Textos y Boton */}
                    <Flex
                        padding= "0px 10px"
                        flexDirection= "column"
                        alignItems= "flex-start"
                        gap= {{base:"16px", sm:"24px"}}
                        //alignSelf= "stretch"
                    >
                        <Text
                            as="h3"
                            color="#3B424A" 
                            fontFamily={"DM Serif Display"}
                            fontSize={{ base: "40px", lg: "70px" }}
                            fontWeight={400}
                            lineHeight={{ base: "42px", lg: "72px" }}
                            letterSpacing={{ base: "0.7px", lg: "0.7px" }}
                            maxW="338px"
                        >
                            Sum-arte
                        </Text>
                        <Text
                            as="p"
                            fontSize={{ base: "16px", lg: "16px" }}
                            fontWeight={400}
                            lineHeight={{ base: "24px", lg: "34px" }}
                            letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                            //overflowX="clip"
                            backgroundColor="rgb(355,355,355, 1)"
                            border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                            alignSelf={"stretch"}
                        >
                            Bienvenidos al <b>Salón de Usos Múltiples</b>, el lugar perfecto para cubrir 
                            las necesidades en cuanto a exposiciones e intervenciones artísticas, presentaciones 
                            literarias, seminarios, reuniones, Proyecciones de cine, eventos musicales, talleres, 
                            charlas y mucho más.
                        </Text>
                        <Link 
                           href="/agenda"  
                        >
                            <Button
                                type="button"
                                aria-label="Ver Agenda"
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
                                Ver Agenda
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>

            {/* 02- Filas */}
            <Flex 
                gap={{ base: "24px", sm: "24px" }}
                flexDirection={{base:"column", lg:"column"}}
                alignItems={"center"}
                alignSelf={"stretch"}
            >
                {/* 02-01- Versatilidad */}
                <Flex
                    w={"100%"}
                    flexDir={{base:"column", lg:"row"}}
                    gap={{base:"16px", lg:"24px"}}
                    padding="0px 10px"
                    alignItems={"flex-start"}
                >
                    {/* 02-01-01  */}
                    <Flex 
                        flexDirection={"column"}
                        w={{ base: "100%", lg: "50%" }}
                        gap="8px"
                    >
                        <Flex
                            p="14px"
                            h={{base:"", sm:"81px"}}
                            align={"center"}
                            alignSelf={"stretch"}

                            bg="rgba(121, 163, 66, 0.80)"
                            color="white"
                            fontSize={{ base: "16px", lg: "24px" }}
                            fontWeight={700}
                            letterSpacing={{ base: "3.2px", lg: "4.8px" }}
                            textTransform={"uppercase"}
                            whiteSpace={{ base: "normal", lg: "nowrap" }}
                            borderTop={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                            borderRight={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                            borderBottom={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                            borderLeft={"0"}
                        >
                            VERSATILIDAD
                        </Flex>
                        <Flex
                            px={"8px"}
                        >
                            <Text
                                as="p"
                                fontSize={{ base: "16px", lg: "16px" }}
                                fontWeight={400}
                                lineHeight={{ base: "24px", lg: "34px" }}
                                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                            >
                                Nuestro espacioso salón, con <b>capacidad para cien 
                                personas</b>, está diseñado para brindar un ambiente 
                                acogedor y funcional, adaptado a una amplia gama 
                                de actividades. Su flexibilidad y distribución abierta 
                                permite ajustarlo a tus necesidades específicas: Desde 
                                reuniones íntimas hasta <b>eventos</b> masivos, sin comprometer
                                la comodidad ni la calidad.
                            </Text>
                        </Flex>
                    </Flex>

                    {/* 02-01-02 */}
                    <Flex 
                        as="picture"
                        alignSelf={"stretch"}
                        maxH={"300px"}
                        w={{ base: "100%", lg: "50%" }}

                    >
                        <source
                            srcSet="/images/responsive/03_espacios/sum-arte-02.png"
                            //media="(min-width: 480px)"
                        />
                        <Image
                            src="/images/03_espacios/sum-arte-02.png"
                            alt="Clases y cursos"
                            objectFit={"cover"}
                            w={"100%"}
                            border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                        />
                    </Flex>
                </Flex>


                {/* Sistema de Audio y Video */}
                <Flex
                    w={"100%"}
                    padding="0px 10px"
                    alignItems="flex-start"
                    flexDir={{base:"column", lg:"row"}}
                    gap="8px"
                    alignSelf=" stretch"
                    mt={{base:"8px", lg:""}}
                >
                    {/* Texto */}
                    <Flex
                        w={{ base: "100%", lg: "50%" }}
                        flexDirection={"column"}
                        gap="8px"
                        order={{base:"1", lg:"2"}}
                    >
                        <Flex
                            p="14px"
                            textAlign={"center"}
                            alignSelf={"stretch"}

                            bg="rgba(245, 130, 32, 0.80) "
                            color="white"
                            fontSize={{ base: "16px", lg: "24px" }}
                            fontWeight={700}
                            letterSpacing={{ base: "3.2px", lg: "4.8px" }}
                            textTransform={"uppercase"}
                            whiteSpace={{ base: "normal", lg: "nowrap" }}
                            borderTop={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                            borderRight={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                            borderBottom={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                            borderLeft={"0"}
                        >
                            SISTEMA DE AUDIO Y VIDEO
                        </Flex>
                        <Flex 
                            alignSelf={"stretch"}
                            flex={"1 0 0"}
                            px={"8px"}
                        >
                            <Text
                                as="p"
                                fontSize={{ base: "16px", lg: "16px" }}
                                fontWeight={400}
                                lineHeight={{ base: "24px", lg: "34px" }}
                                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                            >
                                Si necesitas proyectar una presentación, mostrar una película o 
                                transmitir contenido multimedia, tenemos un sistema de proyección 
                                y sonido que garantizará una <b>experiencia</b> visual y auditiva excepcional 
                                para todos los asistentes.
                            </Text>
                        </Flex>
                    </Flex>
                    {/* Imagen 2 */}
                    <Flex 
                        as="picture"
                        alignSelf={"stretch"}
                        w={{ base: "100%", lg: "50%" }}
                        maxH={"300px"}
                        order={{base:"2", lg:"1"}}
                    >
                        <source
                        srcSet="/images/responsive/03_espacios/sum-arte-03.png"
                        //media="(min-width: 480px)"
                        />
                        <Image
                            src="/images/03_espacios/sum-arte-03.png"
                            alt="Clases y cursos"
                            w={"100%"}
                            objectFit={"cover"}
                            border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                        />
                    </Flex>
                </Flex>


                {/* Servicios Adicionales */}
                <Flex
                    alignSelf=" stretch"
                    padding="0px 10px"
                    flexDir={{base:"column", lg:"row"}}
                    alignItems="flex-start"
                    gap="16px"
                    mt={{base:"8px", lg:""}}
                >
                    {/* Texto */}
                    <Flex 
                        align-self=" stretch"
                        flexDirection={"column"}
                        align-items="flex-start"
                        w={{ base: "100%", lg: "50%" }}
                        gap="8px"
                        flex={"1"}
                    >
                        <Flex
                            p="14px"
                            alignItems={"center"}
                            
                            alignSelf={"stretch"}
                            textAlign={{base:"center"}}

                            bg="rgba(27, 58, 102, 0.80)"
                            color="white"
                            fontSize={{ base: "16px", lg: "24px" }}
                            fontWeight={700}
                            letterSpacing={{ base: "3.2px", lg: "4.8px" }}
                            textTransform={"uppercase"}
                            whiteSpace={{ base: "normal", lg: "nowrap" }}
                            borderTop={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                            borderRight={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                            borderBottom={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                            borderLeft={"0"}
                        >
                            SERVICIOS ADICIONALES
                        </Flex>
                        <Flex 
                            alignSelf={"stretch"}
                            flex={"1 0 0"}
                            px={"8px"}
                        >
                            <Text
                                as="p"
                                fontSize={{ base: "16px", lg: "16px" }}
                                fontWeight={400}
                                lineHeight={{ base: "24px", lg: "34px" }}
                                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
                            >
                                Además, de la asistencia profesional a tu disposición para 
                                brindarte el apoyo necesario en la organización y ejecución 
                                del encuentro. Nuestro salón también cuenta con servicios 
                                adicionales para hacer de tu evento un éxito rotundo. Baños,
                                Climatización e Iluminación.Podemos proporcionar servicio 
                                de <b>Buffet</b> para satisfacer tus necesidades gastronómicas y apoyo 
                                logístico para ayudarte con la organización y coordinación general.
                            </Text>
                        </Flex>
                    </Flex>
                    {/* Imagen 2 */}
                    <Flex 
                        as="picture"
                        align-items="flex-start"
                        w={{ base: "100%", lg: "50%" }}
                        maxH={"300px"}
                    >
                        <source
                            srcSet="/images/responsive/03_espacios/sum-arte-04.png"//"/images/sum-arte-05-v03.png"
                            //media="(min-width: 480px)"
                        />
                        <Image
                            src="/images/03_espacios/sum-arte-04.png"//"/images/sum-arte-05-v03.png"
                            alt="Clases y cursos"
                            w={"100%"}
                            objectFit={"cover"}
                            border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                        />
                    </Flex>
                </Flex>
            </Flex>

            {/* 03- Texto Final*/}
            <Flex
                as={"div"}
                justify={"center"}
                px={"18px"}
            >
                <Text
                    as={"p"}
                    color= "3B424A"
                    fontSize= "24px"
                    fontStyle= "normal"
                    fontWeight= "700"
                    lineHeight= "34px"
                    letterSpacing= "1.2px"
                >
                    Nuestro SUM-ARTE es un espacio ideal en un entorno perfecto para que tus eventos sean placenteros.
                </Text>
            </Flex>
        </Flex>
    )
}

export default SumArte;