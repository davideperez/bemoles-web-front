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
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { useRouter } from "next/router";
import { lineBreaksToBrs, brsToLineBreaks } from "../../../../../utils/functions";
import React, { ChangeEvent, useEffect, useState } from "react";
import { eventService } from "../../../../../services/events.service";
import { Event } from "../../../../../models/event";
import Head from "next/head";
import { AiOutlineArrowLeft } from "react-icons/ai";

const formatDate = (date: any) => {
  const newDate = new Date(date);
  return newDate.toISOString().substring(0, 16);
};

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
      //Permite que el texto ingresado con parrafos, sea respetado mas tarde al 
      //ser mostrado.
      const infoWithLineBreaks = lineBreaksToBrs(values.info)
      values.info = infoWithLineBreaks;
      //
      if (image) form.append("image", image);
      for (const value of Object.keys(values)) {
        if (value !== "image")
          form.append(value, `${values[value as keyof typeof values]}`);
      }
      if (router.query.id !== "add") {
        event = await eventService.updateEvent(`${router.query.id}`, form);
      } else {
        event = await eventService.createEvent(form);
      }
      if (event) {
        toast({
          description: `El taller se ha ${
            router.query.id !== "add" ? "editado" : "creado"
          } exitosamente`,
          status: "success",
        });
        router.push("/admin/workshops");
      }
    } catch (err) {
      toast({
        description: `Ha ocurrido un error y el taller no se ha podido ${
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
                  ? "Crear taller"
                  : `Editar taller: ${event.title}`
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
              onClick={() => router.push(`/admin/workshops/${event?._id || ''}`)}
            />
            <Heading>
              {router.query.id === "add"
                ? "Crear taller"
                : `Editar taller: ${event?.title}`}
            </Heading>
          </Flex>
          <Stack bg={"white"} p={8} borderRadius="xl">
            <Formik
              initialValues={{
                title: event?.title || "",
                image: event?.image || "",
                date: event?.date
                  ? formatDate(event?.date)
                  : formatDate(new Date()),
                info: brsToLineBreaks(event?.info) || "",
                price: event?.price || 0,
                maxAttendance: event?.maxAttendance || 0,
                paymentLink: event?.paymentLink || "",
                isWorkshop: true,
                active: event?.active || false,
                published: event?.published || false,
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
                    {/* <FormControl>
                      <FormLabel>Fecha</FormLabel>
                      <Field
                        as={Input}
                        value={values.date}
                        name="date"
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        w="400px"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setFieldValue("date", formatDate(e.target.value));
                        }}
                      />
                    </FormControl> */}
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
                                isClosable: true
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
                            : values?.image || ""
                        }
                        alt={values.title}
                        boxSize="150px"
                        mt={4}
                        border="1px solid"
                        borderColor="gray.300"
                        borderRadius="xl"
                        objectFit={"contain"}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Información del taller</FormLabel>
                      <Field
                        as={Textarea}
                        name="info"
                        required
                        maxW="800px"
                        minH="300px"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>
                        Activo
                      </FormLabel>
                      <Switch
                        defaultChecked={values.active}
                        name="active"
                        size="md"
                        ml={2}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setFieldValue('active', event.target.checked)}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>
                        Publicado
                      </FormLabel>
                      <Switch
                        defaultChecked={values.published}
                        name="published"
                        size="md"
                        ml={2}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setFieldValue('published', event.target.checked)}
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
