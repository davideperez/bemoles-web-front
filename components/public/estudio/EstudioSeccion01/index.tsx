import {
    Flex,
    Link,
    Text,
    Image,
    Button,
  } from "@chakra-ui/react";
  import React from "react";

export default function EstudioSeccion01 () {
    return (
    <Flex
        w={"100%"}
        maxW={"1312px"}
        gap={{ base: "24px"}} 
        flexWrap={{base:"wrap", xl:"nowrap"}}
        justify={"center"}
        align={"center"}
      >

        <Flex 
            maxW={"100%"}
            h={"100%"}
        >
          <Flex
            w={"100%"}
            h={"100%"}
            flexDir={"column"}
            justify={"center"}
            //bg={"gray"}
          >
            {/* fila superior */}
            <Flex
              w={"100%"}
              h={"100%"}
              justify={"center"}

            >
              {/* 1 */}
              <Flex 
                as="picture"
                w={"50%"}
                h={"50%"}
                alignSelf={"start"}
                zIndex={"2"}
              //bg={"green"}
              >
                <source
                  srcSet="/images/responsive/sala1.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src={"/images/sala1.png"}
                  alt={"Sum-arte"}
                  objectFit={"cover"}
                />
              </Flex>
              {/* 2 */}
              <Flex 
                as="picture"
                w={{base:"50%", lg:"50%", xl:"50%"}}
                h={{base:"50%", lg:"50%", xl:"50%"}}
                alignSelf={"end"}
                //bg={"yellow"}
                mt={{base:"18%", lg:"18%", xl:"18%"}}
                ml={{base:"-15%", lg:"-15%", xl:"-15%"}}
                display={{base:"flex", lg:"flex", xl:"flex"}}
                
              >
                <source
                  srcSet="/images/responsive/sala2.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src={"/images/sala2.png"}
                  alt={"Sum-arte"}
                  objectFit={"cover"}
                />
              </Flex>
            </Flex>

            {/* fila inferior */}
            <Flex
              w={"100%"}
              h={"100%"}
              mt={"-10%"}
              zIndex={1}
              justify={"center"}
            >
              {/* 3 */}
              <Flex 
                as="picture"
                w={"50%"}
                h={"50%"}
                //bg={"yellow"}
                alignSelf={"start"}
              >
                <source
                  srcSet="/images/responsive/sala3.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src={"/images/sala3.png"}
                  alt={"Sum-arte"}
                  objectFit={"cover"}
                />
              </Flex>
              {/* 4 */}
              <Flex 
                as="picture"
                w={{base:"50%", lg:"50%", xl:"50%"}}
                h={{base:"50%", lg:"50%", xl:"50%"}}
                //bg={"yellow"}
                mt={{base:"18%", lg:"18%", xl:"18%"}}
                ml={{base:"-15%", lg:"-15%", xl:"-15%"}}
                display={{base:"flex", lg:"flex", xl:"flex"}}
              >
                <source
                  srcSet="/images/responsive/sala4.png"
                  media="(max-width: 480px)"
                />
                <Image
                  src={"/images/sala4.png"}
                  alt={"Sum-arte"}
                  objectFit={"cover"}
                />
              </Flex>
            </Flex>
           
          </Flex>
        </Flex>

        <Flex 
          maxW={{base: "100%", md:"70%", lg:"100%", xl:"40%"}}
          px={{base:"0rem", sm:"2rem", xl:"0rem"}}
          //minW={{base:"60%", sm:"50%",xl:"auto"}}

          //maxW="403px"
        >
          <Flex
            gap="16px"
            flexDir={"column"}
            //w={"70%"}
          >
            <Text
              as="h3"
              color="#3B424A"
              fontFamily={"DM Serif Display"}
              fontSize={{ base: "40px", md: "54px" }}
              fontWeight={400}
              lineHeight={{ base: "42px", md: "54px" }}
              letterSpacing={{ base: "0.4px", md: "2.7px" }}
            >
              Calidad, Confort y Diseño
            </Text>
            <Text
              as="p"
              fontSize={{ base: "16px", md: "16px" }}
              fontWeight={400}
              lineHeight={{ base: "24px", md: "34px" }}
              letterSpacing={{ base: "0.8px", md: "0.8px" }}
              //maxW="590px"
            >
              En nuestro <b>Estudio</b> combinamos el acceso a las herramientas, la pericia
              tecnológica; con un entorno técnica y <b>estéticamente diseñado</b> para concluir 
              en un espacio que invite a la creación.
            </Text>
            <Text
              as="p"
              fontSize={{ base: "16px", md: "16px" }}
              fontWeight={400}
              lineHeight={{ base: "24px", md: "34px" }}
              letterSpacing={{ base: "0.8px", md: "0.8px" }}
            >
              Buscamos ofrecerte una experiencia de grabación y ensayo inigualable. 
              Ya seas un músico <b>solista</b>, una <b>banda</b> o un <b>grupo vocal</b>; deseamos llevar tus 
              proyectos musicales al siguiente nivel.
            </Text>
            <Text
              as="p"
              fontSize={{ base: "16px", md: "16px" }}
              fontWeight={400}
              lineHeight={{ base: "24px", md: "34px" }}
              letterSpacing={{ base: "0.8px", md: "0.8px" }}
            >
              Equipado para garantizar una calidad de sonido excepcional en cada grabación. 
              Desde <b>micrófonos de alta gama</b> hasta la <b>consola de mezcla digital de primera
              línea</b>, nos aseguramos que tus grabaciones sean nítidas, profesionales y 
              reflejen tu visión artística.   
            </Text>
            <Text
              as="p"
              fontSize={{ base: "16px", md: "16px" }}
              fontWeight={400}
              lineHeight={{ base: "24px", md: "34px" }}
              letterSpacing={{ base: "0.8px", md: "0.8px" }}
            >
              Un espacio versátil y <b>amplio</b> (640x340), diseñado pensando en el <b>confort</b>
              y la <b>calidad acústica</b>, que también es muchas veces elegido para la 
              realización de atractivos audiovisuales.
            </Text>
            
            <Link href="mailto:info@losbemoles.com.ar">
              <Button
                type="button"
                bg="#DDC692"
                color="#3B424A"
                size="lg"
                textTransform="uppercase"
                p="16px"
                w="fit-content"
                mb={"16px"}
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
        </Flex>
      </Flex>
    )
}