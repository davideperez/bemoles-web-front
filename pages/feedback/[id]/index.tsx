import {
  Button,
  Center,
  Heading,
  Icon,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { MdOutlineArrowBack, MdOutlineClose } from "react-icons/md";
import { PAYMENT_STATUS } from "../../../models/enums/paymentStatus";
import { reserveService } from "../../../services/reserves.service";

const getTitleAndDescriptionFromPaymentStatus = (status: string) => {
  switch (status) {
    case PAYMENT_STATUS.FAILURE:
      return {
        icon: MdOutlineClose,
        iconColor: "red.500",
        title: "Pago fallido",
        description: "El pago no se ha podido realizar. Vuelve a intentarlo.",
      };
    case PAYMENT_STATUS.PENDING:
      return {
        icon: AiOutlineClockCircle,
        iconColor: "gray.500",
        title: "Pago pendiente de confirmación",
        description: "El pago esta pendiente de confirmacion.",
      };
    case PAYMENT_STATUS.SUCCESS:
      return {
        icon: FiCheck,
        iconColor: "green.500",
        title: "Pago confirmado",
        description: "La compra fue realizada con éxito. ¡Te esperamos!",
      };
    default:
      return {
        icon: MdOutlineClose,
        iconColor: "red.500",
        title: "Pago no encontrado",
        description:
          "El pago no ha sido encontrado.",
      };
  }
};

const FeedbackPage = () => {
  const router = useRouter();
  const [content, setContent] = useState<{
    icon: IconType;
    iconColor: string;
    title: string;
    description: string;
  }>();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      router.query.id &&
      router.query?.payment_id?.length
    ) {
      if (router.query.collection_id) {
        router.replace(`/feedback/${router.query.id}?payment_id=${router.query.payment_id}`)
      } else {
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
    }
  }, [router]);

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
        {content?.title ? (
          <Stack
            pt={{ base: "0px", lg: "2rem" }}
            spacing="16px"
            alignItems="center"
          >
            <Icon
              as={content.icon}
              w="155px"
              h="155px"
              color={content.iconColor}
            />
            <Text
              as="h3"
              textAlign="center"
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
              textAlign="center"
              fontSize={{ base: "16px", lg: "16px" }}
              fontWeight={400}
              lineHeight={{ base: "24px", lg: "34px" }}
              letterSpacing={{ base: "0.8px", lg: "0.8px" }}
              maxW="590px"
            >
              {content.description}
            </Text>
            <Link href={`/agenda/${router.query.id}`}>
              <Button
                type="submit"
                bg="#DDC692"
                color="#3B424A"
                size="lg"
                mt="4rem"
                textTransform="uppercase"
                p="16px"
                w="fit-content"
                fontSize={{ base: "14px", lg: "14px" }}
                fontWeight={700}
                letterSpacing={{ base: "2.8px", lg: "2.4px" }}
                borderRadius="4px"
                _hover={{ opacity: 0.7 }}
                leftIcon={<MdOutlineArrowBack />}
              >
                Volver al evento
              </Button>
            </Link>
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
