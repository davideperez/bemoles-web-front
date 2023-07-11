import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Divider,
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
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { eventService } from "../../../../services/events.service";
import { Event } from "../../../../models/event";
import Head from "next/head";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

const formatDate = (date: any) => {
  if (!date) return "";
  const newDate = new Date(date);
  return newDate?.toISOString().substring(0, 16);
};

const EventDetail = () => {
  const [event, setEvent] = useState<Event>();
  const router = useRouter();
  const toast = useToast();
  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

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

  const handleDeleteEvent = (event?: Event) => {
    if (!event) return;
    onOpen();
    setSelectedEvent(event);
  };

  const deleteEvent = async () => {
    try {
      if (!selectedEvent) return;
      const eventDeleted = await eventService.deleteEvent(selectedEvent._id);
      if (eventDeleted) {
        toast({
          description: "Event deleted successfully",
          status: "success",
        });
      }
    } catch (err) {
      toast({
        description: "Error deleting event",
        status: "error",
      });
    }
    router.replace("/admin/workshops");
  };

  return (
    <>
      <Head>
        <title>
          {!event ? "Cargando... " : `${event.title} `}| Los bemoles
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
              onClick={() => router.push("/admin/workshops")}
            />
            <Heading>Event: {`${event?.title}`}</Heading>
          </Flex>
          <Stack bg={"white"} p={8} borderRadius="xl" spacing={6}>
            <Flex>
              <Image
                src={event?.image}
                alt={event?.title}
                w={500}
                h={300}
                objectFit="contain"
                objectPosition={"top"}
                mr={8}
              />
              <Stack spacing={4}>
                <Stack>
                  <Heading as="h2" fontSize="3xl">
                    {event?.title}
                  </Heading>
                  <Text
                    as="span"
                    mt="0px !important"
                    fontSize="15px"
                    fontStyle="italic"
                  >
                    Creado el {formatDate(event?.date)}
                  </Text>
                </Stack>
                <Text as="pre" fontFamily="unset" fontSize="md" minH="100px">
                  {event?.info}
                </Text>
                <Divider />
                <Stack spacing={0}>
                  <Text as="span">
                    <b>Cupo:</b> {event?.maxAttendance}
                  </Text>
                  <Text as="span">
                    <b>Precio:</b> ${event?.price}
                  </Text>
                  <Text as="span">
                    <b>Link de pago:</b> {event?.paymentLink}
                  </Text>
                </Stack>
              </Stack>
            </Flex>
            <Flex justifyContent={"center"} gap={4}>
              <Link href={`/admin/workshops/edit/${event?._id}`}>
                <Button bg="#9D6E33" color="white" _hover={{ opacity: 0.5 }}>
                  Editar taller
                </Button>
              </Link>
              <Button
                colorScheme="red"
                onClick={() => handleDeleteEvent(event)}
              >
                Eliminar taller
              </Button>
            </Flex>
          </Stack>
        </Stack>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Eliminar taller: {selectedEvent?.title}
              </AlertDialogHeader>

              <AlertDialogBody>
                ¿Esta seguro que desea eliminar este taller? No podras revertir
                este cambio luego.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme="red" onClick={deleteEvent} ml={3}>
                  Eliminar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Skeleton>
    </>
  );
};

export default EventDetail;
