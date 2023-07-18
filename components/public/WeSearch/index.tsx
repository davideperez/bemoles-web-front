import { Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const WeSearch = () => {
  return (
    <Flex as="section" px={{base: "16px", lg: "80px"}} color="#3B424A" mt="0 !important" alignItems={"center"} justifyContent="center" flexWrap={"wrap"} gap="4rem">
        <Flex flex="1.3" justifyContent={"center"} minW="625px">
        <Stack position="relative" w="fit-content">
            <Image src="/images/weSearch2.png" alt="Buscamos" w="370px" h="370px" mt="152px" ml="254px"/>
            <Image src="/images/weSearch1.png" alt="Buscamos" w="370px" h="370px" position="absolute" top={0} left={0} />
        </Stack>
        </Flex>
        <Flex flex="0.7" minW="403px">
        <Stack spacing="2rem" textAlign={{base: "center", xl: "start"}}>
            <Text as="h4" fontFamily={"DM Serif Display"} fontSize="54px" fontWeight={600} lineHeight="54px" letterSpacing={"2.2px"}>Buscamos jugar más y hacerlo juntos</Text>
            <Text as="p" fontSize="16px" fontWeight={400} lineHeight="34px" letterSpacing={"0.8px"}>Queremos encontrarnos en lo que somos, pero fundamentalmente en lo que hacemos. Nos encontraremos en lo que ofrecemos y en lo que requerimos de otros, dispuestos a jugar el mismo juego.</Text>
        </Stack>
        </Flex>
    </Flex>
  )
}

export default WeSearch