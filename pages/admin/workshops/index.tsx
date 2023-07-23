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
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  Stack,
  Switch,
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
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState, useEffect, ChangeEvent } from "react";
import { FiExternalLink, FiTrash2 } from "react-icons/fi";
import { MdOutlineSearch } from "react-icons/md";
import EventTable from "../../../components/admin/EventTable";
import { Pagination } from "../../../components/admin/Pagination";
import useDebounce from "../../../hooks/useDebounce";
import { ApiBase } from "../../../models/apiBase";
import { Event } from "../../../models/event";
import { eventService } from "../../../services/events.service";
import { formatDate } from "../../../utils/functions";

const WorkshopsPage = () => {
  const [activeEvents, setActiveEvents] = useState<ApiBase<Event>>();
  const [inactiveEvents, setInactiveEvents] = useState<ApiBase<Event>>();
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedValue = useDebounce(searchValue, 300);
  const router = useRouter();
  const [activeEventsPerPage, setActiveEventsPerPage] = useState<number>(10);
  const [inactiveEventsPerPage, setInactiveEventsPerPage] = useState<number>(10);
  const [activeEventspage, setActiveEventspage] = useState<number>(1);
  const [inactiveEventspage, setInactiveEventspage] = useState<number>(1);
  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const { data: result } = await eventService.getEvents(
          true,
          debouncedValue,
          activeEventspage,
          activeEventsPerPage,
          "true"
        );
        if (result) {
          setActiveEvents(result);
        }
      })();
    }
  }, [debouncedValue, activeEventspage, activeEventsPerPage]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const { data: result } = await eventService.getEvents(
          true,
          debouncedValue,
          inactiveEventspage,
          inactiveEventsPerPage,
          "false"
        );
        if (result) {
          setInactiveEvents(result);
        }
      })();
    }
  }, [debouncedValue, inactiveEventspage, inactiveEventsPerPage]);

  const handleDeleteEvent = (event: Event) => {
    onOpen();
    setSelectedEvent(event);
  };

  const updateActive = async (
    eventId: string,
    type: string,
    value: boolean,
  ) => {
    try {
      if (!(inactiveEvents || activeEvents) || !eventId) return;
      const eventUpdated = await eventService.updateEventStatus(eventId, type);
      if (eventUpdated && activeEvents && inactiveEvents) {
        const isActiveEvent = activeEvents.values.some((e) => e._id === eventId);
        (isActiveEvent ? setActiveEvents : setInactiveEvents)({
          ...(isActiveEvent ? activeEvents : inactiveEvents),
          values: (isActiveEvent ? activeEvents : inactiveEvents).values.filter(
            (value: Event) => value._id !== eventId
          ),
        });
        const eventsWithEventToUpdate = {
          ...(!isActiveEvent ? activeEvents : inactiveEvents),
          values: [...(!isActiveEvent ? activeEvents : inactiveEvents).values, {...(isActiveEvent ? activeEvents : inactiveEvents).values.find(e => e._id === eventId) as Event, active: !isActiveEvent}]
        };
        eventsWithEventToUpdate.values.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        (!isActiveEvent ? setActiveEvents : setInactiveEvents)(eventsWithEventToUpdate);
        toast({
          description: `¡El evento se ha editado exitosamente!`,
          status: "success",
        });
      }
    } catch (err) {console.log(err)
      toast({
        description: `Ha ocurrido un error y el evento no se ha podido editar.`,
        status: "error",
      });
    }
  };

  const deleteEvent = async () => {
    try {
      if (!selectedEvent) return;
      const eventDeleted = await eventService.deleteEvent(selectedEvent._id);
      if (eventDeleted && activeEvents && inactiveEvents) {
        const isActiveEvent = activeEvents.values.some((e) => e._id === selectedEvent._id);
        (isActiveEvent ? setActiveEvents : setInactiveEvents)({
          ...(isActiveEvent ? activeEvents : inactiveEvents),
          values: (isActiveEvent ? activeEvents : inactiveEvents).values.filter(
            (value: Event) => value.active
          ),
        });
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

  return (
    <Stack spacing={4}>
      <Heading>Talleres</Heading>
      <Skeleton isLoaded={!!(activeEvents || inactiveEvents)?.values}>
        <Flex justifyContent={"space-between"} mb={4} alignItems="center">
          <Stack w="100%">
            <InputGroup w="300px">
              <InputLeftElement pointerEvents="none">
                <MdOutlineSearch color="#9D6E33" size={20} />
              </InputLeftElement>
              <Input
                type="text"
                placeholder={"Buscar talleres"}
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
            onClick={() => router.push(`/admin/workshops/edit/add`)}
            colorScheme={"telegram"}
            bg="#9D6E33"
            lineHeight={0}
            _hover={{ bg: "#9D6E33", opacity: 0.5 }}
            size="md"
          >
            Agregar taller
          </Button>
        </Flex>
        <Stack spacing={5} mb={4}>
          {Boolean(activeEvents?.values?.length) && (
            <Stack spacing={3}>
              <Heading as="h2" fontSize="lg">
                Talleres activos
              </Heading>
              <EventTable
                events={activeEvents}
                handleLinkDetailEvent={(eventId: string) =>
                  router.push(eventId)
                }
                updateActive={(eventId: string, type: string, value: boolean) =>
                  updateActive(eventId, type, value)
                }
                handleDeleteEvent={handleDeleteEvent}
                isWorkshop
              />
              {Boolean(activeEvents?.count) && (
          <Pagination
            postsPerPage={activeEventsPerPage}
            totalPosts={activeEvents?.count || 0}
            currentPage={activeEventspage}
            pageNeighbours={3}
            changePage={(page: number) => setActiveEventspage(+page)}
            changePageItems={(e: ChangeEvent<HTMLSelectElement>) => setActiveEventsPerPage(+e.target.value)}
            itemsPerPage={activeEventsPerPage}
            justify="center"
            align="flex-end"
            showPageItem
            urlSyncronized= {false}
          />
        )}
            </Stack>
          )}
          <Stack spacing={3}>
            <Heading as="h2" fontSize="lg">
              Talleres latentes
            </Heading>
            <EventTable
              events={inactiveEvents}
              handleLinkDetailEvent={(eventId: string) => router.push(eventId)}
              updateActive={(eventId: string, type: string, value: boolean) =>
                updateActive(eventId, type, value)
              }
              handleDeleteEvent={handleDeleteEvent}
              isWorkshop
            />
              {Boolean(inactiveEvents?.count) && (
          <Pagination
            postsPerPage={inactiveEventsPerPage}
            totalPosts={inactiveEvents?.count || 0}
            currentPage={inactiveEventspage}
            pageNeighbours={3}
            changePage={(page: number) => setInactiveEventspage(+page)}
            changePageItems={(e: ChangeEvent<HTMLSelectElement>) => setInactiveEventsPerPage(+e.target.value)}
            itemsPerPage={inactiveEventsPerPage}
            justify="center"
            align="flex-end"
            showPageItem
            urlSyncronized= {false}
          />
        )}
          </Stack>
        </Stack>
      </Skeleton>
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
    </Stack>
  );
};

export default WorkshopsPage;
