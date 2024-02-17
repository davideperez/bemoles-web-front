import { Flex, Image, Text, Button, Link } from "@chakra-ui/react";

const SumArte = () => {
    return (
        <Flex
            gap={{ base: "8px", sm: "24px" }}
            px={{ base: "8px", sm: "16px" }}
            flexDirection={"column"}
            alignItems={"center"}
            w={"82rem"}
        >

            {/* 01- 2 Columnas */}
            <Flex 
                flexWrap={"wrap"}
                flexDirection={{ base: "column", sm: "row" }}
                alignItems={"flex-start"}
                //gap={{ base: "8px", sm: "24px" }}
            >
                {/*01-01- Columna 1 */}
                <Flex 
                    as="picture"
                    alignSelf={"stretch"}
                    flex={"1"}
                    maxH={"450px"}
                    /* alignSelf={"stretch"}
                    display={{base:"none", sm:"flex"}} */
                >
                    <source
                        srcSet="/images/sum-arte-02-v03.png"
                        //media="(min-width: 480px)"
                    />
                    <Image
                        src="/images/sum-arte-02-v03.png"
                        alt="Clases y cursos"
                        objectFit={"cover"}
                        border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                    />
                </Flex>
                {/* 01-02- Columna 2 */}
                <Flex
                    flexDirection={"column"}
                    gap={{base:"16px", sm:"48px"}}
                    flex={"1"}
                    alignSelf={"stretch"}
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
                gap={{ base: "8px", sm: "24px" }}
                flexDirection={"column"}
                alignItems={"center"}
                alignSelf={"stretch"}
            >

                {/* 02-01- Versatilidad */}
                <Flex
                    flexDir={{base:"column", sm:"row"}}
                    gap="24px"
                    padding="0px 10px"
                    alignItems={"flex-start"}
                >

                    {/* 02-01-01  */}
                    <Flex 
                        flexDirection={"column"}
                        gap="16px"
                        flex={"1"}
                    >
                        <Flex
                            p="14px"
                            h={{base:"", sm:"81px"}}
                            alignItems={"flex-start"}
                            alignSelf={"stretch"}
                            align={"center"}
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
                        <Flex>
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
                        //flex={"1"}
                        //w={{base:"100%", sm:"30%"}}
                        //h={"384px"}
                    >
                        <source
                            srcSet="https://dummyimage.com/600x600/242424/808080.png"//"/images/sum-arte-03-v03.png"
                            //media="(min-width: 480px)"
                        />
                        <Image
                            src="https://dummyimage.com/600x600/242424/808080.png"//"/images/sum-arte-03-v03.png"
                            alt="Clases y cursos"
                            objectFit={"cover"}
                            //w={"100%"}
                            //h={"30%"}
                            border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                        />
                    </Flex>
                </Flex>


                {/* Sistema de Audio y Video */}
                <Flex
                    padding="0px 10px"
                    alignItems="flex-start"
                    gap="16px"
                    alignSelf=" stretch"
                >
                    {/* Texto */}
                    <Flex 
                        align-self=" stretch"
                        flex={"1"}

                        flexDirection={"column"}
                        alignItems="flex-start"
                        gap="24px"
                        order={"2"}
                    >
                        <Flex
                        p="14px"
                        h={"81px"}
                        alignItems={"flex-start"}
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
                        order={"1"}
                        alignSelf={"stretch"}
                        flex={"1"}
                        maxH={"300px"}
                        //w={"30%"}
                        //h={"384px"}
                    >
                        <source
                        srcSet="https://dummyimage.com/600x600/242424/808080.png"//"/images/sum-arte-04-v03.png"
                        //media="(min-width: 480px)"
                        />
                        <Image
                        src="https://dummyimage.com/600x600/242424/808080.png"//"/images/sum-arte-04-v03.png"
                        alt="Clases y cursos"
                        objectFit={"cover"}
                        border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                        />
                    </Flex>
                </Flex>


                {/* Servicios Adicionales */}
                <Flex
                    alignSelf=" stretch"

                    padding="0px 10px"
                    alignItems="flex-start"
                    gap="16px"
                >
                    {/* Texto */}
                    <Flex 
                        align-self=" stretch"

                        flexDirection={"column"}
                        align-items="flex-start"
                        gap="24px"
                        flex={"1"}
                    >
                        <Flex
                            p="14px"
                            h={"81px"}
                            alignItems={"flex-start"}
                            alignSelf={"stretch"}
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
                        flex={"1"}
                        maxH={"300px"}
                        //h={"384px"}
                    >
                        <source
                            srcSet="https://dummyimage.com/600x600/242424/808080.png"//"/images/sum-arte-05-v03.png"
                            //media="(min-width: 480px)"
                        />
                        <Image
                            src="https://dummyimage.com/600x600/242424/808080.png"//"/images/sum-arte-05-v03.png"
                            alt="Clases y cursos"
                            objectFit={"cover"}
                            border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
                        />
                    </Flex>
                </Flex>
            </Flex>

            {/* 03- Texto Final*/}
            <Flex
                as={"div"}
                w={"1332px"}
                justify={"center"}
            >
                <Text
                    as={"p"}
                    color= "3B424A"
                    //fontFamily= "Manrope"
                    fontSize= "24px"
                    fontStyle= "normal"
                    fontWeight= "700"
                    lineHeight= "34px" /* 141.667% */
                    letterSpacing= "1.2px"
                >
                    Nuestro SUM-ARTE es un espacio ideal en un entorno perfecto para que tus eventos sean placenteros.
                </Text>
            </Flex>
        </Flex>
    )
}

export default SumArte;