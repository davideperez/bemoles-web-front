import { Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../admin/Login/Logo'
import FooterLogo from './FooterLogo'

const Footer = () => {
  return (
    <Flex as="footer" p={{base: "40px 16px", xl:"40px 100px"}} gap="2rem" justifyContent={"space-between"} alignItems="center" bg="#3B424A" flexDirection={{base:"column", lg: "row"}}>
      <FooterLogo color="white" w="186px" h="56px" />
      <Stack color="white" opacity="0.5" textAlign={{base: "center", lg: "right"}} fontSize="16px" fontWeight={400} lineHeight="34px" letterSpacing={"0.8px"}>
        <Text>(54-11) 4238.4973</Text>
        <Text>info@losbemoles.com.ar</Text>
        <Text>Copyright 2023 | Los Bemoles | www.losbemoles.com.ar</Text>
      </Stack>
    </Flex>
  )
}

export default Footer