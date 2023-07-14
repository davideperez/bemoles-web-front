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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Skeleton,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Toast,
  Tooltip,
  Tr,
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
import { FiExternalLink } from "react-icons/fi";
import { formatDate, formatDateTime } from "../../../../utils/functions";

const EventDetail = () => {
  const [event, setEvent] = useState<Event>();
  const router = useRouter();
  const toast = useToast();
  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: modalIsOpen, onOpen: modalOnOpen, onClose: modalOnClose } = useDisclosure()
  const cancelRef = React.useRef(null)

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
  }

  const deleteEvent = async () => {
    try {
      if(!selectedEvent) return;
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
    router.replace('/admin/events')
  };

  return (
    <>
      <Head>
        <title>
          {!event
            ? "Cargando... "
            : `${event.title} `
              }
          | Los bemoles
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
              onClick={() => router.push("/admin/events")}
            />
            <Heading>
              Evento: {`${event?.title}`}
            </Heading>
          </Flex>
          <Stack bg={"white"} p={8} borderRadius="xl" spacing={6}>
            <Flex>
            <Image src={event?.image} alt={event?.title} w={500} h={300} objectFit="contain" objectPosition={"top"} mr={8} />
            <Stack spacing={4}>
              <Stack>
              <Heading as="h2" fontSize="3xl">{event?.title}</Heading>
              <Text as="span" mt="0px !important" fontSize="15px" fontStyle={"italic"}>Creado el {formatDate(event?.date)}</Text>
              </Stack>
              <Text as="pre" fontFamily="unset" fontSize="md"  minH="100px">{event?.info}</Text>
              <Divider />
              <Stack spacing={0}>
              <Text as="span"><b>Fecha:</b> {formatDateTime(event?.date)}</Text>
              <Text as="span"><b>Cupo:</b> {event?.maxAttendance}</Text>
              <Text as="span"><b>Precio:</b> ${event?.price}</Text>
              <Text as="span"><b>Link de pago:</b> {event?.paymentLink}</Text>
              </Stack>
            </Stack>
            
            </Flex>
            <Flex justifyContent={"center"} gap={4}>
              <Link href={`/admin/events/edit/${event?._id}`}>
              <Button bg="#9D6E33" color="white" _hover={{opacity: 0.5}}>Editar evento</Button>
              </Link>
              <Button bg="#9D6E33" color="white" _hover={{opacity: 0.5}} onClick={modalOnOpen}>Ver reservas</Button>
              <Button colorScheme="red" onClick={() => handleDeleteEvent(event)}>Eliminar evento</Button>
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
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Eliminar evento: {selectedEvent?.title}
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Esta seguro que desea eliminar este evento? No podras revertir este cambio luego.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme='red' onClick={deleteEvent} ml={3}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      </Skeleton>
      <Modal isOpen={modalIsOpen} onClose={modalOnClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reservas de evento: {event?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={8}>
         <Table fontSize="15px">
                  <Thead h="40px">
                    <Tr>
                      <Th p={2}>Nombre y apellido</Th>
                      <Th p={2}>Dni</Th>
                      <Th p={2}>Email</Th>
                      <Th p={2}>Cantidad de entradas</Th>
                      <Th p={2}>Fecha</Th>
                      <Th p={2} textAlign="center">
                        Acciones
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {event?.reserves?.length ? event?.reserves?.map((reserve) => (
                      <Tr key={event._id}>
                        <Td p={2}>
                          {`${reserve.firstName} ${reserve.lastName}`}
                        </Td>
                        <Td p={2}>{reserve.dni}</Td>
                        <Td p={2}>{reserve.email}</Td>
                        <Td p={2}>{`${reserve.ticketQuantity}`}</Td>
                        <Td p={2}>
                          {event?.date ? formatDate(reserve.createdAt) : ""}
                        </Td>
                        <Td p={2}>
                          <Flex w="100%" justifyContent={"center"}>
                            <Tooltip label="Ver detalle de evento">
                              <Button
                                onClick={() =>
                                  router.push(`/admin/events/${event._id}`)
                                }
                                size="md"
                                bg="transparent"
                                p={0}
                              >
                                <FiExternalLink color="#9D6E33" size={18} />
                              </Button>
                            </Tooltip>
                            {/* <Tooltip label="Eliminar evento">
                        <Button size="md" bg="transparent" p={0} onClick={() => handleDeleteEvent(event)}>
                          <FiTrash2 color="red" size={18} />
                        </Button>
                      </Tooltip> */}
                          </Flex>
                        </Td>
                      </Tr>
                    )) : <Tr><Td colSpan={10} textAlign="center">No hay reservas en el evento.</Td></Tr>}
                  </Tbody>
                </Table>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EventDetail;
