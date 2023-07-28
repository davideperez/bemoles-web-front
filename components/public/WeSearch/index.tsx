import { Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const WeSearch = () => {
  return (
    <Flex as="section" px={{base: "16px", lg: "80px"}} color="#3B424A" alignItems={"center"} justifyContent="center" flexWrap={"wrap"} gap="8rem">
        <Flex  justifyContent={"center"} minW="625px">
        <Stack position="relative" w="fit-content">
        <Flex as="picture">
                <source
                  srcSet="/images/responsive/weSearch2.png"
                  media="(max-width: 480px)"
                />
            <Image src="/images/weSearch2.png" alt="Buscamos" w={{base: "215px", md: "370px"}} h={{base: "215px", md: "370px"}} mt={{base: "88px", md:"152px"}} ml={{base: "147px", md:"254px"}} />
              </Flex>
              <Flex as="picture">
                <source
                  srcSet="/images/responsive/weSearch1.png"
                  media="(max-width: 480px)"
                />
            <Image src="/images/weSearch1.png" alt="Buscamos" w={{base: "215px", md: "370px"}} h={{base: "215px", md: "370px"}} position="absolute" top={0} left={0} />
              </Flex>
        </Stack>
        </Flex>
        <Flex maxW="403px">
        <Stack spacing="2rem" textAlign={{base: "center", xl: "start"}}>
            <Text as="h4" fontFamily={"DM Serif Display"} px="2" fontSize="54px" fontWeight={400} lineHeight="54px" letterSpacing={"2.2px"}>Buscamos jugar más y hacerlo juntos</Text>
            <Text as="p" fontSize="16px" fontWeight={400} lineHeight="34px" letterSpacing={"0.8px"}>Queremos encontrarnos en lo que somos, pero fundamentalmente en lo que hacemos. Nos encontraremos en lo que ofrecemos y en lo que requerimos de otros, dispuestos a jugar el mismo juego.</Text>
        </Stack>
        </Flex>
    </Flex>
  )
}

export default WeSearch