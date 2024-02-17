import {
  Box,
  Flex,
  Text,
  Link,
  Image,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Event } from "../../../models/event";
import { eventService } from "../../../services/events.service";
import { scaleCloudinaryImageFromUrl } from "../../../utils/functions";

const ReservaDetail = () => {
  const [event, setEvent] = useState<Event>();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && router.query.id) {
      (async () => {
        const { data } = await eventService.getEvent(`${router.query.id}`);
        setEvent(data);
      })();
    }
  }, [router.query.id]);

  return (
    <>
      <Head>
        <title>
          {event ? `Taller: ${event?.title}` : "Cargando..."} | Los Bemoles
        </title>
      </Head>
      <Stack
        as="main"
        padding={{ base: "44px 16px 20px 16px", lg: "96px 100px 120px 100px" }}
        overflow="hidden"
        spacing={{ base: "2rem", lg: "4rem" }}
/*         backgroundImage={{
          base: "none",
          lg: "url('/images/agenda-detail.png')",
        }} */
        objectFit={"cover"}
        objectPosition="center"
        backgroundPosition={{ base: "top", lg: "-40px 250px" }}
        backgroundRepeat={"no-repeat"}
        pb={{ base: "8rem", lg: "16rem" }}
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
          Taller
        </Heading>
        <Box
          backgroundImage={{
            base: "none",
            lg: "url('/images/agenda-detail.png')",
          }}
          backgroundSize="auto"
          backgroundPosition={{ base: "top", lg: "-400px 400px" }}
          backgroundRepeat={"no-repeat"}
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex="-1" // Ensure background stays behind content
          transform={{ base: "none", lg: "scaleY(-1)" }} // Flip vertically
        ></Box>
        {event && (
          <Flex
            pt={{ base: "0px", lg: "2rem" }}
            gap="24px"
            flexWrap={"wrap"}
          >
            <Flex as="picture">
              <source
                srcSet={scaleCloudinaryImageFromUrl(event.image, 400)}
                media="(max-width: 480px)"
              />
              <Image
                src={event.image}
                alt={event.title}
                maxW={{ base: 350, sm: 400 }}
                objectFit="contain"
                objectPosition="top"
              />
            </Flex>

            <Stack spacing="16px" maxW="470px" justifyContent={"flex-start"} mt="auto">
              <Text
                as="h3"
                color="#3B424A"
                fontFamily={"DM Serif Display"}
                fontSize={{ base: "40px", lg: "54px" }}
                fontWeight={400}
                lineHeight={{ base: "42px", lg: "54px" }}
                letterSpacing={{ base: "0.4px", lg: "2.7px" }}
              >
                {event.title}
              </Text>
              <Text
                as="p"
                fontSize={{ base: "16px", lg: "16px" }}
                fontWeight={400}
                lineHeight={{ base: "24px", lg: "34px" }}
                letterSpacing={{ base: "0.8px", lg: "0.8px" }}
              >
                {event.info}
              </Text>
              <Link
                href="mailto:info@losbemoles.com.ar"
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
                  Consultar
                </Button>
              </Link>
            </Stack>
          </Flex>
        )}
      </Stack>
    </>
  );
};

export default ReservaDetail;
