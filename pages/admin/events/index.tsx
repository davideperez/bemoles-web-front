import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState, useEffect, ChangeEvent } from "react";
import { MdOutlineSearch } from "react-icons/md";
import EventTable from "../../../components/admin/EventTable";
import { Pagination } from "../../../components/admin/Pagination";
import useDebounce from "../../../hooks/useDebounce";
import { ApiBase } from "../../../models/apiBase";
import { Event } from "../../../models/event";
import { eventService } from "../../../services/events.service";

const EventsPage = () => {

  const [oldEvents, setOldEvents] = useState<ApiBase<Event>>();
  const [nextEvents, setNextEvents] = useState<ApiBase<Event>>();
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedValue = useDebounce(searchValue, 300);
  const router = useRouter();
  const { page: PageQuery, items } = router.query;
  const [itemsPerPage, setItemsPerPage] = useState<number>(Number(items) || 20);
  const [page, setPage] = useState<number>(Number(PageQuery) || 1);
  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

  useEffect(() => {
    //Para asegurarnos que el codigo se ejecuta en el entorno del navegador/cliente, (objeto window)
    if (typeof window !== "undefined") {
      (async () => {
        const { data: result } = await eventService.getEvents(
          false,
          debouncedValue,
          page,
          itemsPerPage
        );
        if (result) {
          const today = new Date();
          setOldEvents({
            ...result,
            values: result.values.filter(
              (value: Event) => new Date(value.date) < today
            ),
          });
          setNextEvents({
            ...result,
            values: result.values.filter(
              (value: Event) => new Date(value.date) >= today
            ),
          });
        }
      })();
    }
  }, [debouncedValue, page, itemsPerPage]);

  const handleChangePage = (pageNumber: number) => {
    setPage(+pageNumber);
  };

  const handleChangePageItems = (e: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+e.target.value);
  };

  const updateActive = async (eventId: string, type: string, active: boolean) => {
    try {
      if (!(nextEvents || oldEvents) || !eventId) return;
      const eventUpdated = await eventService.updateEventStatus(eventId, 'active');
      if (eventUpdated) {
        if (nextEvents?.values?.some((v) => v._id === eventId)) {
          if (nextEvents)
            setNextEvents({
              ...nextEvents,
              values: nextEvents?.values.map((e) =>
                e._id === eventId ? { ...e, active } : e
              ),
            });
        } else {
          if (oldEvents)
            setOldEvents({
              ...oldEvents,
              values: oldEvents?.values.map((e) =>
                e._id === eventId ? { ...e, active } : e
              ),
            });
        }
        toast({
          description: `¡El evento se ha editado exitosamente!`,
          status: "success",
        });
      }
    } catch (err) {
      toast({
        description: `Ha ocurrido un error y el evento no se ha podido editar.`,
        status: "error",
      });
    }
  };

  const handleDeleteEvent = (event: Event) => {
    //Abre el modal
    onOpen();
    //Pone un evento en la variable de estado "SelectedEvent"
    setSelectedEvent(event);
  };

  const deleteEvent = async () => {
    try {
      //Chequea si hay algun evento seleccionado (en la variable de estado "SelectedEvent")
      //Si no hay evento devuelve undefined.
      if (!selectedEvent) return;

      //Si hay evento ejecuta el servicio de eliminar eventos
      const eventDeleted = await eventService.deleteEvent(selectedEvent._id);
      
      //Si hay evento ...
      if (eventDeleted) {
        //???
        if (nextEvents?.values?.some((v) => v._id === selectedEvent._id)) {
          //???
          setNextEvents((prev) =>
            prev?.values ?
              /* Si hay eventos, Despliega las propiedades objeto-estado prev, y cambia su values property 
              por un array de eventos que no incluye el evento recientemente borrado.  */
              { ...prev, values: prev?.values?.filter((e) => e?._id !== selectedEvent._id), } 
              //Si no hay eventos, devuelve la lista anterior. 
              : prev
          );
        } else {
          //???
          setOldEvents((prev) =>
            prev?.values
              ? {
                  ...prev,
                  values: prev?.values?.filter(
                    (e) => e?._id !== selectedEvent._id
                  ),
                }
              : prev
          );
        }
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
    onClose();
  };

  useEffect(() => {
    if (router.query.page) setPage(+router.query.page);
    if (router.query.items) setItemsPerPage(+router.query.items);
  }, [router.query]);

  return (
    <Stack spacing={4}>
      <Heading>Eventos</Heading>
      <Skeleton isLoaded={!!(oldEvents || nextEvents)?.values} px={2}>
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
          <Button
            ml="auto"
            onClick={() => router.push(`/admin/events/edit/add`)}
            colorScheme={"telegram"}
            bg="#9D6E33"
            lineHeight={0}
            _hover={{ bg: "#9D6E33", opacity: 0.5 }}
            size="md"
          >
            Agregar evento
          </Button>
        </Flex>
        <Stack spacing={5} mb={4}>
          {Boolean(nextEvents?.values?.length) && (
            <Stack spacing={3}>
              <Heading as="h2" fontSize="lg">
                Proximos eventos
              </Heading>
              <EventTable
                events={nextEvents}
                handleLinkDetailEvent={(eventId: string) =>
                  router.push(eventId)
                }
                updateActive={updateActive}
                handleDeleteEvent={handleDeleteEvent}
              />
            </Stack>
          )}
          <Stack spacing={3}>
            <Heading as="h2" fontSize="lg">
              Eventos anteriores
            </Heading>
            <EventTable
              events={oldEvents}
              handleLinkDetailEvent={(eventId: string) => router.push(eventId)}
              updateActive={updateActive}
              handleDeleteEvent={handleDeleteEvent}
            />
          </Stack>
        </Stack>
        {Boolean(oldEvents?.count) && (
          <Pagination
            postsPerPage={itemsPerPage}
            totalPosts={oldEvents?.count || 0}
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
              Eliminar evento: {selectedEvent?.title}
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Esta seguro que desea eliminar este evento? No podras revertir
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
    </Stack>
  );
};

export default EventsPage;