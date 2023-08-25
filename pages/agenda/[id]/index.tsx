import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useDisclosure,
  useToast,
  Link,
} from "@chakra-ui/react";
import { AxiosError } from "axios";
import { Field, Formik, FormikHelpers } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Event } from "../../../models/event";
import { eventService } from "../../../services/events.service";
import { reserveService } from "../../../services/reserves.service";
import { scaleCloudinaryImageFromUrl } from "../../../utils/functions";

function limitInputToRange(
  event: any,
  setIsLimitedTickets: (value: boolean) => void
) {
  const input = event.target;
  if (!input) return;
  if (input.value.length === 0) return (input.value = "");
  const value = parseInt(input.value, 10);
  const min = parseInt(input.getAttribute("min"), 10);
  const max = parseInt(input.getAttribute("max"), 10);

  if (isNaN(value)) {
    input.value = min;
    setIsLimitedTickets(true);
    setTimeout(() => {
      setIsLimitedTickets(false);
    }, 2000);
  } else if (value < min) {
    input.value = min;
    setIsLimitedTickets(true);
    setTimeout(() => {
      setIsLimitedTickets(false);
    }, 2000);
  } else if (value > max) {
    input.value = max;
    setIsLimitedTickets(true);
    setTimeout(() => {
      setIsLimitedTickets(false);
    }, 2000);
  }
}

const AgendaDetail = () => {
  const [event, setEvent] = useState<Event>();
  const router = useRouter();
  const toast = useToast();
  const [isLimitedTickets, setIsLimitedTickets] = useState(false);
  const [paymentLink, setPaymentLink] = useState("");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const cancelRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && router.query.id) {
      (async () => {
        const { data } = await eventService.getEvent(`${router.query.id}`);
        setEvent(data);
      })();
    }
  }, [router.query.id]);

  const handleSubmit = async (reserve: any, actions: FormikHelpers<any>) => {
    try {
      const { data: reserveCreated } = await reserveService.createReserve({
        ...reserve,
      });
      if (reserveCreated) {
        // toast({
        //   title: "Reserva realizada",
        //   description: `La reserva se ha realizado exitosamente. En los próximos minutos recibirá un email con el link de un cupon de pago para efectivizar su reserva.`,
        //   status: "success",
        //   duration: 9000,
        //   isClosable: true,
        // });
        setPaymentLink(reserveCreated.paymentLink);
        onOpen();
      }
    } catch (err) {
      if ((err as AxiosError)?.response?.status === 409)
        return toast({
          title: "Cupo completo",
          description: `Lo sentimos, el evento no cuenta con disponibilidad para la cantidad de entradas solicitadas. ${
            reserve.ticketQuantity > 1
              ? `Si lo desea, puede intententarlo nuevamente con un número menor de entradas.`
              : ""
          }`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      toast({
        title: "Reserva no realizada",
        description: `Ha ocurrido un error y la reserva no se ha podido realizar. Por favor vuelva a intentarlo en unos minutos.`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    actions.resetForm();
  };

  return (
    <>
      <Head>
        <title>
          {event ? `Agenda: ${event?.title}` : "Cargando..."} | Los Bemoles
        </title>
      </Head>
      <Stack
        as="main"
        padding={{ base: "44px 16px 20px 16px", lg: "96px 100px 120px 100px" }}
        overflow="hidden"
        spacing={{ base: "2rem", lg: "4rem" }}
        backgroundImage={{
          base: "none",
          lg: "url('/images/agenda-detail.png')",
        }}
        objectFit={"cover"}
        objectPosition="center"
        backgroundPosition={{ base: "top", lg: "-40px 250px" }}
        backgroundRepeat={"no-repeat"}
        mb={{ base: "16rem", lg: "16rem" }}
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
        {event && (
          <Flex pt={{ base: "0px", lg: "2rem" }} gap="24px" flexWrap={"wrap"}>
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
            <Stack
              w="470px"
              spacing="16px"
              justifyContent={"flex-start"}
              mt="auto"
            >
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
                color="#3B424A"
                fontSize={{ base: "20px", lg: "24px" }}
                fontWeight={400}
                lineHeight={{ base: "34px", lg: "34px" }}
                letterSpacing={{ base: "1px", lg: "1.2px" }}
              >
                Entrada:
                <Text as="span" fontWeight={700} ml="2px">
                {Boolean(event?.price) ? `$${event?.price}` : ' Gratis'}
                </Text>
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
            </Stack>
            <Flex mt="auto">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  dni: "",
                  ticketQuantity: "",
                  event: router.query.id as string,
                }}
                onSubmit={handleSubmit}
              >
                {({ handleSubmit, errors, isSubmitting }) => (
                  <form onSubmit={handleSubmit} autoComplete="off">
                    <Stack spacing="16px" p="16px" w="370px" bg="#3B424A">
                      <Text
                        as="h4"
                        color="white"
                        fontFamily={"DM Serif Display"}
                        fontSize={{ base: "32px", lg: "32px" }}
                        fontWeight={400}
                        lineHeight={{ base: "44px", lg: "44px" }}
                        letterSpacing={{ base: "0.32px", lg: "0.32px" }}
                      >
                        Reservar Entrada
                      </Text>
                      <Field
                        as={Input}
                        required
                        type="text"
                        p="8px 16px"
                        name="firstName"
                        placeholder="Nombre"
                        h="50px"
                        color="white"
                        minLength="2"
                        maxLength="60"
                        border="1px solid rgba(255, 255, 255, 0.40)"
                        borderRadius="4px"
                        focusBorderColor="white"
                        _placeholder={{
                          color: "white",
                          fontSize: { base: "16px", lg: "16px" },
                          fontWeight: 400,
                          lineHeight: { base: "34px", lg: "34px" },
                          letterSpacing: { base: "0.8px", lg: "0.8px" },
                          opacity: 0.5,
                        }}
                      ></Field>
                      <Field
                        as={Input}
                        type="text"
                        required
                        p="8px 16px"
                        name="lastName"
                        placeholder="Apellido"
                        h="50px"
                        color="white"
                        minLength="2"
                        maxLength="60"
                        border="1px solid rgba(255, 255, 255, 0.40)"
                        borderRadius="4px"
                        focusBorderColor="white"
                        _placeholder={{
                          color: "white",
                          fontSize: { base: "16px", lg: "16px" },
                          fontWeight: 400,
                          lineHeight: { base: "34px", lg: "34px" },
                          letterSpacing: { base: "0.8px", lg: "0.8px" },
                          opacity: 0.5,
                        }}
                      ></Field>
                      <Field
                        as={Input}
                        type="email"
                        required
                        p=" 8px 16px"
                        name="email"
                        placeholder="Email"
                        h="50px"
                        color="white"
                        maxLength="60"
                        border="1px solid rgba(255, 255, 255, 0.40)"
                        borderRadius="4px"
                        focusBorderColor="white"
                        _placeholder={{
                          color: "white",
                          fontSize: { base: "16px", lg: "16px" },
                          fontWeight: 400,
                          lineHeight: { base: "34px", lg: "34px" },
                          letterSpacing: { base: "0.8px", lg: "0.8px" },
                          opacity: 0.5,
                        }}
                      ></Field>
                      <Flex w="100%" gap="16px">
                        <Field
                          as={Input}
                          flex="1"
                          type="text"
                          required
                          p="8px 16px"
                          name="dni"
                          minLength="2"
                          maxLength="15"
                          placeholder="DNI"
                          h="50px"
                          color="white"
                          border="1px solid rgba(255, 255, 255, 0.40)"
                          borderRadius="4px"
                          focusBorderColor="white"
                          _placeholder={{
                            color: "white",
                            fontSize: { base: "16px", lg: "16px" },
                            fontWeight: 400,
                            lineHeight: { base: "34px", lg: "34px" },
                            letterSpacing: { base: "0.8px", lg: "0.8px" },
                            opacity: 0.5,
                          }}
                        ></Field>
                        <Flex position="relative" flex="1">
                          <Field
                            as={Input}
                            type="number"
                            required
                            p=" 8px 16px"
                            name="ticketQuantity"
                            min="1"
                            max="7"
                            placeholder="Entradas"
                            h="50px"
                            color="white"
                            border="1px solid rgba(255, 255, 255, 0.40)"
                            borderRadius="4px"
                            focusBorderColor="white"
                            onInput={(e: any) =>
                              limitInputToRange(e, (value: boolean) =>
                                setIsLimitedTickets(value)
                              )
                            }
                            _placeholder={{
                              color: "white",
                              fontSize: { base: "16px", lg: "16px" },
                              fontWeight: 400,
                              lineHeight: { base: "34px", lg: "34px" },
                              letterSpacing: { base: "0.8px", lg: "0.8px" },
                              opacity: 0.5,
                            }}
                            position="relative"
                          ></Field>
                          {isLimitedTickets && (
                            <Text
                              as="span"
                              position="absolute"
                              top="55px"
                              left="5px"
                              color="white"
                              fontSize="14px"
                            >
                              El limite de entradas por reserva es de 7.
                            </Text>
                          )}
                        </Flex>
                      </Flex>
                      <Button
                        type="submit"
                        bg="#DDC692"
                        color="#3B424A"
                        size="lg"
                        my="2rem"
                        textTransform="uppercase"
                        p="16px"
                        w="fit-content"
                        fontSize={{ base: "14px", lg: "14px" }}
                        fontWeight={700}
                        letterSpacing={{ base: "2.8px", lg: "2.4px" }}
                        borderRadius="4px"
                        _hover={{ opacity: 0.7 }}
                        isLoading={isSubmitting}
                      >
                        Reservar
                      </Button>
                    </Stack>
                  </form>
                )}
              </Formik>
            </Flex>
          </Flex>
        )}
      </Stack>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size="xl"
      >
        <AlertDialogOverlay>
          <AlertDialogContent pb="2rem">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Reserva realizada
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              {event?.price
                ? "Presioná en “Pagar Ahora”, o podés hacerlo mas tarde mediante el link que llegó a tu correo. Recordá que la reserva expira en 48 horas"
                : "Tu reserva fue realizada con éxito. ¡Te esperamos!"}
            </AlertDialogBody>

            {Boolean(event?.price) && (
              <AlertDialogFooter pb="0px !important">
                <Link href={paymentLink}>
                  <Button
                    type="submit"
                    bg="#DDC692"
                    color="#3B424A"
                    size="lg"
                    mt="2rem"
                    textTransform="uppercase"
                    p="16px"
                    w="fit-content"
                    fontSize={{ base: "14px", lg: "14px" }}
                    fontWeight={700}
                    letterSpacing={{ base: "2.8px", lg: "2.4px" }}
                    borderRadius="4px"
                    _hover={{ opacity: 0.7 }}
                    onClick={onClose}
                  >
                    Pagar Ahora
                  </Button>
                </Link>
              </AlertDialogFooter>
            )}
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default AgendaDetail;
