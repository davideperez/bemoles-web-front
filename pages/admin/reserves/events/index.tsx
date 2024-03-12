import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Skeleton,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FiExternalLink, FiTrash2 } from "react-icons/fi";
import { MdOutlineSearch } from "react-icons/md";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Pagination } from "../../../../components/admin/Pagination";
import PaymentDetailModal from "../../../../components/admin/reserves/paymentDetailModal";
//import ManualPaymentModal from "../../../../components/admin/reserves/manualPaymentModal";
import useDebounce from "../../../../hooks/useDebounce";
import { ApiBase } from "../../../../models/apiBase";
import { PAYMENT_STATUS } from "../../../../models/enums/paymentStatus";
import { Event, Reserve } from "../../../../models/event";
import { eventService } from "../../../../services/events.service";
import { reserveService } from "../../../../services/reserves.service";
import { formatDate, getPaymentStatusText, getReserveQuantity, isExpiratedReserve } from "../../../../utils/functions";

const EventReservesPage = () => {

  const [events, setEvents] = useState<ApiBase<Event>>();
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedValue = useDebounce(searchValue, 300);
  const router = useRouter();
  const { page: PageQuery, items } = router.query;
  const [itemsPerPage, setItemsPerPage] = useState<number>(Number(items) || 10);
  const [page, setPage] = useState<number>(Number(PageQuery) || 1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedReserve, setSelectedReserve] = useState<Reserve>();
  const cancelRef = React.useRef(null);
  const toast = useToast();

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const { data: result } = await eventService.getEvents(
          false,
          debouncedValue,
          page,
          itemsPerPage
        );
        setEvents(result);
      })();
    }
  }, [debouncedValue, page, itemsPerPage]);

  const handleTitleLinkClick = (enventId: string, e: React.MouseEvent<HTMLAnchorElement>, ) => {
    e.stopPropagation();
    router.push(`/admin/events/${enventId}`);
  }

  const handleChangePage = (pageNumber: number) => {
    setPage(+pageNumber);
  };

  const handleChangePageItems = (e: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+e.target.value);
  };

  const handleManualPayment = (reserve: string) => {

  }

  const deleteReserveFromEvents = (reserveId: string, events: ApiBase<Event>) => {
    const updatedEvents = [...events.values]

    updatedEvents.forEach( event => {
      event.reserves = event.reserves.filter( reserve => reserveId !== reserve._id)
    })

    return updatedEvents;
  }

 const handleDeleteReserve = (reserve: Reserve) => {
    //Abre el modal
    onOpen();
    //Pone una reserva en la variable de estado "SelectedReserve"
    setSelectedReserve(reserve);
    console.log("------------------->>>>>>  1- handleDeleteREserve: este selectedREserve: ", selectedReserve)
  };
   
  const deleteReserve = async () => {
    console.log("------------------->>>>>> 1- Se ingreso al deleteReserve.")
    console.log("------------------->>>>>> 1- Y este es el selectedReserve._id: ", selectedReserve?._id)
    console.log("------------------->>>>>> 1- Y este es el estado events: ", events)

    try {
      console.log("------------------->>>>>> 2- Se ingreso al try-catch de deleteReserve.")

      //Chequea si hay alguna reserva seleccionado (en la variable de estado "SelectedReserve")
      //Si no hay reserva devuelve undefined.
      if (!selectedReserve) return;
      //Si hay reserva ejecuta el servicio de eliminar reservas
      const reserveDeleted = await reserveService.deleteReserve(selectedReserve._id);
      console.log("------------------->>>>>> 3- Se elimino la reserva")
      
      if (reserveDeleted) {
        console.log("------------------------------>>>>>> 4- Esto es el estado de Events al presionar ELIMINAR: ",events)      
        setEvents((prev) =>
          prev?.values 
            ?
            {...prev, values: deleteReserveFromEvents(selectedReserve._id, prev)}
            : prev
        )
        console.log("------------------------------>>>>>> 5- Esto es el estado de Events post setEvents(): ",events)
      }
      toast({
        description: "La reserva fue eliminada con éxito. 🗑️",
        status: "success",
      })
    } catch (err) {
      toast({
        description: "Error al eliminar la reserva. ",
        status: "error",
      });
    }

    onClose();
  };
 
  useEffect(() => {
    if (router.query.page) setPage(+router.query.page);
    if (router.query.items) setItemsPerPage(+router.query.items);
  }, [router.query]);

  return (
    <Stack spacing={4}>
      <Heading>Reservas de eventos</Heading>

      <Skeleton isLoaded={!!events?.values}>

        <Flex justifyContent={"space-between"} mb={4} alignItems="center">
          <Stack w="100%">
            <InputGroup w="300px">
              <InputLeftElement pointerEvents="none">
                <MdOutlineSearch color="#9D6E33" size={20} />
              </InputLeftElement>
              <Input
                type="text"
                placeholder={"Buscar eventos"}
                bg="white"
                focusBorderColor="#9D6E33"
                lineHeight={0}
                borderRadius="lg"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchValue(e.target.value)
                }
              />
            </InputGroup>
          </Stack>
        </Flex>

        <Accordion allowToggle>
          {events?.values?.map((event) => (
            <AccordionItem
              key={event._id}
              bg="white"
              borderRadius={"lg"}
              my={2}
              _expanded={{ bg: "gray.500" }}
            >
              <h2>
                <AccordionButton>
                  <Flex 
                    flex="1" 
                    textAlign="left" 
                    py={2} 
                    alignItems="center"
                    justify={"space-between"}
                  >
                    {/* Titulo */}
                    <Flex
                      alignItems="center"

                    >
                      <Box
                        border="2px solid"
                        borderColor="gray.300"
                        borderRadius={"lg"}
                        mr="4"
                      >
                        <Image
                          src={event.image || "/images/noavail.jpg"}
                          alt={event.title}
                          w="60px"
                          h="50px"
                          objectFit={"cover"}
                          borderRadius={"md"}
                        />
                      </Box>
                      <Link onClick={(e) => handleTitleLinkClick(event._id, e)} >
                        <Text
                          as={"b"}
                          fontSize="lg"
                          mr={8}
                          minW="400px"
                          textAlign={"start"}
                        >
                          {event?.title}
                        </Text>
                      </Link>
                    </Flex>
                    {/* Datos Reserva */}
                    <Flex
                      //alignItems="center"
                    >
                      <Text as="span" fontSize="md" mr={20}>
                        <b>Cupo máximo: </b>
                        {event?.maxAttendance}
                      </Text>
                      <Text as="span" fontSize="md" mr={20}>
                        <b>Reservadas: </b>
                        {getReserveQuantity(event?.reserves || [])}
                      </Text>
                      <Text as="span" fontSize="md" mr={20}>
                        <b>Restantes: </b>
                        {event?.maxAttendance - getReserveQuantity(event?.reserves || [])}
                      </Text>
                      <Text as="span" fontSize="md" mr={4}>
                        <b>Fecha: </b>
                        <i>{event?.date ? formatDate(event?.date) : ""}</i>
                      </Text>
                    </Flex>
                    {/*<Flex ml="auto" mr="4">
                       <Tooltip label="Ver detalle de evento">
                        <Button
                          onClick={() =>
                            router.push(`/admin/events/${event._id}`)
                          }
                          size="md"
                          bg="transparent"
                          p={0}
                        >
                          <FiExternalLink color="#9D6E33" size={20} />
                        </Button>
                      </Tooltip> 
                    </Flex>*/}
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Table fontSize="15px">
                  <Thead h="40px">
                    <Tr>
                      <Th p={2}>Nombre y apellido</Th>
                      <Th p={2}>Dni</Th>
                      <Th p={2}>Email</Th>
                      <Th p={2}>Cantidad de entradas</Th>
                      <Th p={2}>Estado del pago</Th>
                      <Th p={2}>Fecha</Th>
                      <Th p={2} textAlign="center">
                        Acciones
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {event?.reserves
                      ?.filter(
                        (reserve) =>
                          !isExpiratedReserve(reserve.createdAt) ||
                          [
                            PAYMENT_STATUS.PENDING as string,
                            PAYMENT_STATUS.SUCCESS as string,
                          ].includes(reserve.paymentStatus)
                      )
                      .map((reserve) => (
                        <Tr key={event._id}>
                          <Td p={2}>
                            {`${reserve.firstName} ${reserve.lastName}`}
                          </Td>
                          <Td p={2}>{reserve.dni}</Td>
                          <Td p={2}>{reserve.email}</Td>
                          <Td p={2}>{`${reserve.ticketQuantity}`}</Td>
                          <Td p={2}>
                            <Badge
                              colorScheme={
                                getPaymentStatusText(reserve.paymentStatus)
                                  .color
                              }
                            >
                              {getPaymentStatusText(reserve.paymentStatus).text}
                            </Badge>
                          </Td>
                          <Td p={2}>
                            {event?.date ? formatDate(reserve.createdAt) : ""}
                          </Td>
                          <Td p={2}>
                            <Flex w="100%" justifyContent={"center"}>
                              <PaymentDetailModal reserveId={reserve._id} isDisabled={!reserve?.payments?.some(p => p.paymentId)}/>
  {/*                             <Tooltip
                               label={"Realizar Pago Manual"}
                              >
                                <Button
                                  size="md"
                                  bg="transparent"
                                  p={0}
                                  onClick={() => handleManualPayment(reserve._id)}
                                >
                                  <RiMoneyDollarBoxLine color="#9D6E33" size={18} />
                                </Button>
                              </Tooltip> */}
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
      {/*                          <Tooltip label="Eliminar reserva">
                                <Button size="md" bg="transparent" p={0} onClick={() => handleDeleteReserve(reserve)}>
                                  <FiTrash2 color="red" size={18} />
                                </Button>
                              </Tooltip> */}
                            </Flex>
                          </Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        {Boolean(events?.count) && (
          <Pagination
            postsPerPage={itemsPerPage}
            totalPosts={events?.count || 0}
            currentPage={page}
            pageNeighbours={3}
            changePage={handleChangePage}
            changePageItems={handleChangePageItems}
            itemsPerPage={itemsPerPage}
            justify="center"
            align="flex-end"
            showPageItem
          />
        )}
      </Skeleton>
      
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar Reserva de: {`${selectedReserve?.firstName} ${selectedReserve?.lastName}`}
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Esta seguro que desea eliminar esta reserva? No podras revertir
              este cambio luego.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={deleteReserve} ml={3}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Stack>
  );
};

export default EventReservesPage;
