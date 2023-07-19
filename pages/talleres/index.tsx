import { Flex, Heading, Stack } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import { ApiBase } from '../../models/apiBase';
import { eventService } from '../../services/events.service';

const TalleresPage = () => {

  return (
    <Stack as="main" padding={{base: "60px 0px 20px 0px", lg:"96px 0px 120px 100px"}} overflow="hidden" spacing="4rem">
        <Heading as="h1" color="white" fontFamily={"DM Serif Display"} fontSize="70px" fontWeight={400} lineHeight="72px" letterSpacing={"0.7px"}>Talleres</Heading>
        <Stack pt="2rem">
            <Heading as="h3" color="#C5A266" fontFamily={"DM Serif Display"} fontSize="54px" fontWeight={500} lineHeight="54px" letterSpacing={"0.54px"}>Activos</Heading>
            <Flex>

            </Flex>
        </Stack>
    </Stack>
  )
}

export default TalleresPage;