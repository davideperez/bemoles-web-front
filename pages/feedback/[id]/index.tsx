import { Center, Flex, Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { PAYMENT_STATUS } from "../../../models/enums/paymentStatus";
import { reserveService } from "../../../services/reserves.service";

const getTitleAndDescriptionFromPaymentStatus = (status: string) => {
  switch (status) {
    case PAYMENT_STATUS.FAILURE:
      return {
        title: "Pago fallido",
        description: "El pago no se ha podido realizar. Vuelve a intentarlo.",
      };
    case PAYMENT_STATUS.PENDING:
      return {
        title: "Pago pendiente de confirmación",
        description: "“El pago esta pendiente de confirmacion.",
      };
    case PAYMENT_STATUS.SUCCESS:
      return {
        title: "Pago confirmado",
        description: "La compra fue realizada con éxito.  ¡Te esperamos!",
      };
    default:
      return {
        title: "Pago no encontrado",
        description:
          "El pago no ha sido encontrado. Redirigiendo a la página de inicio...",
      };
  }
};

const FeedbackPage = () => {
  const router = useRouter();
  const [content, setContent] = useState({ title: "", description: "" });

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      router.query.id &&
      router.query?.payment_id?.length
    ) {
      (async () => {
        try {
          const { data } = await reserveService.getFeedbackReserve(
            `${router.query.payment_id}`
          );
          setContent(getTitleAndDescriptionFromPaymentStatus(data.status));
        } catch (error) {
          console.log(error);
          setContent(getTitleAndDescriptionFromPaymentStatus("NOT_FOUND"));
        }
      })();
    }
  }, [router.query]);

  return (
    <>
      <Head>
        <title>Estado del pago | Los Bemoles</title>
      </Head>
      <Stack
        as="main"
        padding={{ base: "44px 16px 20px 16px", lg: "96px 100px 120px 100px" }}
        overflow="hidden"
        spacing={{ base: "2rem", lg: "4rem" }}
        pb={{ base: "18rem", lg: "16rem" }}
        minH="80vh"
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
          Agenda
        </Heading>
        {content.title ? (
          <Stack pt={{ base: "0px", lg: "2rem" }} spacing="16px">
            <Text
              as="h3"
              color="#3B424A"
              fontFamily={"DM Serif Display"}
              fontSize={{ base: "40px", lg: "54px" }}
              fontWeight={400}
              lineHeight={{ base: "42px", lg: "54px" }}
              letterSpacing={{ base: "0.4px", lg: "2.7px" }}
            >
              {content.title}
            </Text>
            <Text
              as="p"
              fontSize={{ base: "16px", lg: "16px" }}
              fontWeight={400}
              lineHeight={{ base: "24px", lg: "34px" }}
              letterSpacing={{ base: "0.8px", lg: "0.8px" }}
              maxW="590px"
            >
              {content.description}
            </Text>
          </Stack>
        ) : (
          <Center h="80vh">
            <Spinner color="#DDC692" size="xl" thickness="4px" />
          </Center>
        )}
      </Stack>
    </>
  );
};

export default FeedbackPage;
