import { Flex, Image, Stack, Text, Button, Link } from '@chakra-ui/react'
import React from 'react'

const Buscamos = () => {
  return (
    <Flex 
      as="section" 
      maxW={"1536px"}
      px={{base: "16px", lg: "80px"}} 
      color="#3B424A" 
      alignItems={"center"} 
      justify={"center"}
      flexWrap={{base:"wrap", lg:"nowrap"}}
      gap={{base:"1rem", md:"4rem", lg:"4rem", xl:"8rem"}}
    >
      {/* 2 Imagenes */}
      <Flex  
        justifyContent={"center"} 
        minW="625px"
      >
        <Stack 
          position="relative" 
          //w="fit-content"
        >
          <Flex as="picture">
            <source
              srcSet="/images/responsive/01_home/8-buscamos-jugar-2.webp"
              media="(max-width: 480px)"
            />
            <Image 
              src="/images/01_home/8-buscamos-jugar-2.webp" 
              alt="Buscamos" 
              w={{base: "215px", md: "370px"}} 
              h={{base: "215px", md: "370px"}} 
              mt={{base: "88px", md:"152px"}} 
              ml={{base: "147px", md:"254px"}} 
              objectFit={"cover"}
              transform="scaleX(-1)"
            />
          </Flex>
          <Flex as="picture">
            <source
              srcSet="/images/responsive/01_home/7-buscamos-jugar-1.webp"
              media="(max-width: 480px)"
            />
            <Image 
              src="/images/01_home/7-buscamos-jugar-1.webp" 
              alt="Buscamos" 
              w={{base: "215px", md: "370px"}} 
              h={{base: "215px", md: "370px"}} 
              position="absolute" 
              objectFit={"cover"}
              top={0} 
              left={0} 
            />
          </Flex>
        </Stack>
      </Flex>

      {/* Textos */}
      <Flex 
        maxW="403px"
      >
        <Stack 
          spacing="2rem" 
          textAlign={{base: "center", lg: "start"}} 
          alignItems={{base: "center", lg: "start"}}
          p={8}
          //justify={"space-around"}
        >
          <Text 
            as="h2" 
            fontFamily={"DM Serif Display"} 
            px="2" 
            fontSize="54px" 
            fontWeight={400} 
            lineHeight="54px" 
            letterSpacing={"2.2px"}
          >
            Buscamos jugar más y hacerlo juntos
          </Text>
          <Text as="p" fontSize="16px" fontWeight={400} lineHeight="34px" letterSpacing={"0.8px"}>Queremos encontrarnos en lo que somos, pero fundamentalmente en lo que hacemos. Nos encontraremos en lo que ofrecemos y en lo que requerimos de otros, dispuestos a jugar el mismo juego.</Text>
          <Link href='/talleres'>
            <Button
              type="button"
              title="Ver Talleres"
              bg="#DDC692"
              color="#3B424A"
              size="lg"
              mt={{base:"0rem", md:"2rem"}}
              textTransform="uppercase"
              p="16px"
              w="fit-content"
              fontSize={{ base: "14px", lg: "14px" }}
              fontWeight={700}
              letterSpacing={{ base: "2.8px", lg: "2.4px" }}
              borderRadius="4px"
              _hover={{ opacity: 0.7 }}
            >
              Ver Talleres
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default Buscamos;