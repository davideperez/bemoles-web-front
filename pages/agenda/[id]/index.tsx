import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Event, Reserve } from "../../../models/event";
import { eventService } from "../../../services/events.service";
import { reserveService } from "../../../services/reserves.service";

const AgendaDetail = () => {
  const [event, setEvent] = useState<Event>();
  const router = useRouter();
  const toast = useToast();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && router.query.id) {
      (async () => {
        const { data } = await eventService.getEvent(`${router.query.id}`);
        setEvent(data);
      })();
    }
  }, [router.query.id]);

  const handleSubmit = async (reserve: any) => {
    try {
      const reserveCreated = await reserveService.createReserve({...reserve});
      if (reserveCreated) {
        toast({
          title: "Reserva exitosa",
          description: `La reserva se ha realizado exitosamente. En los próximos minutos recibirá un email con el link de un cupon de pago para efectivizar su reserva.`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: "Reserva no realizada",
        description: `Ha ocurrido un error y la reserva no se ha podido realizar. Por favor vuelva a intentarlo en unos minutos.`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    setIsFormSubmitted(true);
  };

  const initialValues={
    firstName: "",
    lastName: "",
    email: "",
    dni: "",
    ticketQuantity: "",
    event: router.query.id as string,
  }

  useEffect(() => {
    if (isFormSubmitted) {
      initialValues.firstName = "";
      initialValues.lastName = "";
      initialValues.email = "";
      initialValues.dni = "";
      initialValues.ticketQuantity = "";

      setIsFormSubmitted(false)
    }
  }, [isFormSubmitted])

  return (
    <Stack
      as="main"
      padding={{ base: "44px 16px 20px 16px", lg: "96px 100px 120px 100px" }}
      overflow="hidden"
      spacing={{ base: "2rem", lg: "4rem" }}
      backgroundImage={{ base: "none", lg: "url('/images/agenda-detail.png')" }}
      objectFit={"cover"}
      objectPosition="center"
      backgroundPosition={{ base: "top", lg: "-40px 250px" }}
      backgroundRepeat={"no-repeat"}
      mb={{base: "16rem", lg: "16rem"}}
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
        <Flex pt={{base: "0px", lg:"2rem"}} alignItems={"flex-end"} gap="24px" flexWrap={"wrap"}>
          <Image
            src={event.image}
            alt={event.title}
            maxW={{ base: 350, sm: 400 }}
          />
          <Stack maxW="470px" spacing="16px">
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
                ${event.price}
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
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, errors, isSubmitting }) => (
              <form onSubmit={handleSubmit} >
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
                      p=" 8px 16px"
                      name="dni"
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
                    <Field
                      as={Input}
                      flex="1"
                      type="number"
                      required
                      p=" 8px 16px"
                      name="ticketQuantity"
                      placeholder="Entradas"
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
      )}
    </Stack>
  );
};

export default AgendaDetail;
