import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Skeleton,
  Stack,
  Switch,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { eventService } from "../../../../../services/events.service";
import { Event } from "../../../../../models/event";
import Head from "next/head";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { formatUTCToTimezone } from "../../../../../utils/functions";

const EventDetail = () => {
  const [event, setEvent] = useState<Event>();
  const [image, setImage] = useState<File>();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      router.query.id &&
      router.query.id !== "add"
    ) {
      (async () => {
        const { data } = await eventService.getEvent(`${router.query.id}`);
        setEvent(data);
      })();
    }
  }, [router.query.id]);

  const handleSubmit = async (values: Partial<Event>) => {
    try {
      let event;
      const form = new FormData();
      if (image) form.append("image", image);
      for (const value of Object.keys(values)) {
        if (value !== "image" && value !== "date")
          form.append(value, `${values[value as keyof typeof values]}`);
        if (value === "date")
          form.append(
            value,
            `${new Date(values[value as keyof typeof values] as string)}`);
      }
      if (router.query.id !== "add") {
        event = await eventService.updateEvent(`${router.query.id}`, form);
      } else {
        event = await eventService.createEvent(form);
      }
      if (event) {
        toast({
          description: `El evento se ha ${
            router.query.id !== "add" ? "editado" : "creado"
          } exitosamente`,
          status: "success",
        });
        router.push("/admin/events");
      }
    } catch (err) {
      toast({
        description: `Ha ocurrido un error y el evento no se ha podido ${
          router.query.id !== "add" ? "editar" : "crear"
        } exitosamente`,
        status: "error",
      });
    }
  };

  return (
    <>
      <Head>
        <title>
          {!event
            ? "Cargando..."
            : `${
                router.query.id === "add"
                  ? "Crear evento"
                  : `Editar evento: ${event.title}`
              }`}
          | Los Bemoles
        </title>
      </Head>

      <Skeleton isLoaded={!!event || router.query.id === "add"}>
        <Stack spacing={4}>
          <Flex alignItems="center" mb={2}>
            <Icon
              as={AiOutlineArrowLeft}
              mr={6}
              w={5}
              h={5}
              cursor="pointer"
              _hover={{
                opacity: 0.5,
              }}
              onClick={() => router.push(`/admin/events/${event?._id || ""}`)}
            />
            <Heading>
              {router.query.id === "add"
                ? "Crear evento"
                : `Editar evento: ${event?.title}`}
            </Heading>
          </Flex>
          <Stack bg={"white"} p={8} borderRadius="xl">
            <Formik
              initialValues={{
                title: event?.title || "",
                image: event?.image || "",
                date: event?.date
                  ? formatUTCToTimezone(event?.date)
                  : formatUTCToTimezone(new Date()),
                info: event?.info || "",
                price: event?.price || 0,
                active: event?.active || false,
                maxAttendance: event?.maxAttendance || 0,
                paymentLink: event?.paymentLink || "",
                isWorkshop: false,
              }}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit, values, isSubmitting, setFieldValue }) => (
                <form onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    <FormControl>
                      <FormLabel>Titulo</FormLabel>
                      <Field
                        as={Input}
                        type="text"
                        name="title"
                        required
                        w="400px"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Fecha</FormLabel>
                      <Field
                        as={Input}
                        value={values.date}
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        w="400px"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setFieldValue("date",e.target.value);
                        }}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel pb={2}>Imagen (Tamaño máximo 4 mb)</FormLabel>
                      <input
                        type="file"
                        accept="image/*"
                        maxLength={4194304}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          if (e?.target?.files?.[0])
                          {
                            const maxSize = 4 * 1024 * 1024;
                            if (e?.target?.files?.[0].size > maxSize) {
                              toast({
                                title: 'Archivo demasiado grande',
                                description: 'El archivo excede el límite de 4 MB. Por favor, seleccione un archivo más pequeño.',
                                status: 'error',
                                isClosable: true,
                              })
                              e.target.value = '';
                            } else {
                              setImage(e.target.files[0]);
                            }
                          }
                        }}
                      />
                      <Image
                        src={
                          image
                            ? URL.createObjectURL(image)
                            : values?.image || "/images/noavail.jpg"
                        }
                        alt={values.title}
                        boxSize="150px"
                        mt={4}
                        border="1px solid"
                        borderColor="gray.300"
                        borderRadius="xl"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Información del evento</FormLabel>
                      <Field
                        as={Textarea}
                        name="info"
                        required
                        maxW="800px"
                        minH="300px"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Valor de la entrada</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          fontSize="1.2em"
                          children="$" //eslint-disable-line react/no-children-prop
                        />
                        <Field
                          as={Input}
                          name="price"
                          type="number"
                          required
                          w="200px"
                          pl={10}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Cupo máximo</FormLabel>
                      <Field
                        as={Input}
                        name="maxAttendance"
                        type="number"
                        required
                        w="200px"
                        min={0}
                      />
                    </FormControl>

                    {/* <FormControl>
                      <FormLabel>Link de pago</FormLabel>
                      <Field
                        as={Input}
                        name="paymentLink"
                        type="text"
                        w="400px"
                      />
                    </FormControl> */}
                    <FormControl>
                      <FormLabel>Publicado</FormLabel>
                      <Switch
                        defaultChecked={values.active}
                        name="active"
                        size="md"
                        ml={2}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                          setFieldValue("active", event.target.checked)
                        }
                      />
                    </FormControl>
                    <Flex justifyContent={"flex-end"}>
                      <Button
                        type="submit"
                        w="fit-content"
                        ml="auto"
                        mt={4}
                        bg="#9D6E33"
                        color="white"
                        _hover={{
                          opacity: 0.5,
                        }}
                        isLoading={isSubmitting}
                      >
                        Guardar
                      </Button>
                    </Flex>
                  </Stack>
                </form>
              )}
            </Formik>
          </Stack>
        </Stack>
      </Skeleton>
    </>
  );
};

export default EventDetail;
