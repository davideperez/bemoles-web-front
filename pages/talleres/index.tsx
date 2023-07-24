import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { ApiBase } from "../../models/apiBase";
import { Event } from "../../models/event";
import { eventService } from "../../services/events.service";

const TalleresPage = () => {
  const [activeEvents, setActiveEvents] = useState<Event[]>();
  const [inactiveEvents, setInactiveEvents] = useState<Event[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState<number>(1);
  const [inactivePage, setInactivePage] = useState<number>(1);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        setIsLoading(true);
        const { data: result } = await eventService.getEvents(
          true,
          undefined,
          activePage,
          8,
          "true",
          undefined,
          "true"
        );
        if (result) {
          setActiveEvents([...(activeEvents || []), ...result.values]);
        }
        setIsLoading(false);
      })();
    }
  }, [activePage]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        setIsLoading(true);
        const { data: result } = await eventService.getEvents(
          true,
          undefined,
          inactivePage,
          10,
          "false",
          undefined,
          "true"
        );
        if (result) {
          setInactiveEvents([...(inactiveEvents || []), ...result.values]);
        }
        setIsLoading(false);
      })();
    }
  }, [inactivePage]);

  return (
    <>
      <Head>
        <title>
          Talleres | Los Bemoles
        </title>
      </Head>

      <Stack
        as="main"
        padding={{ base: "44px 16px 20px 16px", lg: "96px 100px 120px 100px" }}
        overflow="hidden"
        spacing={{ base: "2rem", lg: "4rem" }}
        backgroundImage={{ base: "none", lg: "url('/images/talleres.png')" }}
        objectFit={"cover"}
        objectPosition="center"
        backgroundPosition={{ base: "top", lg: "-40px 130px" }}
        backgroundRepeat={"no-repeat"}
      >
        <Heading
          as="h1"
          color="white"
          fontFamily={"DM Serif Display"}
          fontSize={{ base: "30px", lg: "70px" }}
          fontWeight={400}
          lineHeight={{ base: "50px", lg: "72px" }}
          letterSpacing={{ base: "0.3px", lg: "0.7px" }}
        >
          Talleres
        </Heading>
        {activeEvents && inactiveEvents ? (
          <>
            <Stack pt={{ lg: "2rem" }} spacing="1.5rem">
              <Heading
                as="h3"
                color="#C5A266"
                fontFamily={"DM Serif Display"}
                fontSize={{ base: "40px", lg: "54px" }}
                fontWeight={{ base: 400, lg: 500 }}
                lineHeight={{ base: "42px", lg: "54px" }}
                letterSpacing={{ base: "0.4px", lg: "0.54px" }}
              >
                Activos
              </Heading>
              <Grid
                templateColumns={{
                  base: "1fr 1fr",
                  lg: "repeat(auto-fill, minmax(295px, 1fr))",
                }}
                gap={{ base: "16px", lg: "44px" }}
              >
                {activeEvents?.map((e) => (
                  <GridItem key={e._id}>
                    <Flex
                      h="100%"
                      flexDirection="column"
                      justifyContent={"space-between"}
                    >
                      <Flex alignItems={"center"} h="100%">
                        <Image
                          src={e.image}
                          alt={e.title}
                          w="100%"
                          objectFit={"contain"}
                        />
                      </Flex>
                      <Box
                        textTransform={"uppercase"}
                        bg="#3B424A"
                        color="white"
                        p="12px 16px"
                        fontSize={{ base: "12px", lg: "16px" }}
                        fontWeight={700}
                        lineHeight="normal"
                        letterSpacing={{ base: "2.4px", lg: "3.2px" }}
                        textAlign="center"
                        cursor="pointer"
                        _hover={{ opacity: 0.7 }}
                        onClick={() => router.push(`/talleres/${e._id}`)}
                      >
                        Ver detalles
                      </Box>
                    </Flex>
                  </GridItem>
                ))}
              </Grid>
              <Flex justifyContent={"center"}>
                <Button
                  bg="#DDC692"
                  color="#3B424A"
                  size="lg"
                  my="2rem"
                  onClick={() => setActivePage(activePage + 1)}
                  isLoading={isLoading}
                >
                  Ver mas
                </Button>
              </Flex>
            </Stack>
            <Stack pt="2rem" spacing="1.5rem">
              <Heading
                as="h3"
                color="#C5A266"
                fontFamily={"DM Serif Display"}
                fontSize={{ base: "40px", lg: "54px" }}
                fontWeight={{ base: 400, lg: 500 }}
                lineHeight={{ base: "42px", lg: "54px" }}
                letterSpacing={{ base: "0.4px", lg: "0.54px" }}
              >
                Latentes
              </Heading>
              <Grid
                templateColumns={{
                  base: "1fr 1fr",
                  lg: "repeat(auto-fill, minmax(227px, 1fr))",
                }}
                gap={{ base: "16px", lg: "44px" }}
              >
                {inactiveEvents?.map((e) => (
                  <GridItem key={e._id}>
                    <Flex
                      h="100%"
                      flexDirection="column"
                      justifyContent={"space-between"}
                    >
                      <Flex
                        alignItems={"center"}
                        h="100%"
                        filter="grayscale(100%)"
                      >
                        <Image
                          src={e.image}
                          alt={e.title}
                          w="100%"
                          objectFit={"contain"}
                        />
                      </Flex>
                    </Flex>
                  </GridItem>
                ))}
              </Grid>
              <Flex justifyContent={"center"}>
                <Button
                  bg="#DDC692"
                  color="#3B424A"
                  size="lg"
                  my="2rem"
                  onClick={() => setInactivePage(inactivePage + 1)}
                  isLoading={isLoading}
                >
                  Ver mas
                </Button>
              </Flex>
            </Stack>
          </>
        ) : (
          <Center h="80vh">
            <Spinner color="#DDC692" size="xl" thickness="4px" />
          </Center>
        )}
      </Stack>
    </>
  );
};

export default TalleresPage;
