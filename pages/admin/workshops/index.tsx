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
import { Pagination } from "../../../components/Pagination";
import useDebounce from "../../../hooks/useDebounce";
import { ApiBase } from "../../../models/apiBase";
import { Event } from "../../../models/event";
import { eventService } from "../../../services/events.service";
import { formatDate } from "../../../utils/functions";

const WorkshopsPage = () => {
  const [allEvents, setAllEvents] = useState<ApiBase<Event>>();
  const [activeEvents, setActiveEvents] = useState<ApiBase<Event>>();
  const [inactiveEvents, setInactiveEvents] = useState<ApiBase<Event>>();
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedValue = useDebounce(searchValue, 300);
  const router = useRouter();
  const { page: PageQuery, items } = router.query;
  const [itemsPerPage, setItemsPerPage] = useState<number>(Number(items) || 20);
  const [page, setPage] = useState<number>(Number(PageQuery) || 1);
  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const { data: result } = await eventService.getEvents(
          true,
          debouncedValue,
          page,
          itemsPerPage
        );
        if (result) {
          setAllEvents(result)
          setActiveEvents({
            ...result,
            values: result.values.filter(
              (value: Event) => value.active
            ),
          });
          setInactiveEvents({
            ...result,
            values: result.values.filter(
              (value: Event) => !value.active
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

  const handleDeleteEvent = (event: Event) => {
    onOpen();
    setSelectedEvent(event);
  }

  const updateActive = async (eventId: string, type: string, value: boolean) => {
    try {
      if (!(inactiveEvents || activeEvents) || !eventId) return;
      const eventUpdated = await eventService.updateEventStatus(eventId, type);
      if (eventUpdated && allEvents) {
        const allEventsToUpdate = {
          ...allEvents,
          values: allEvents?.values.map((e) =>
            e._id === eventId ? { ...e, [type]: value } : e
          ),
        };
        setAllEvents(allEventsToUpdate);
        setActiveEvents({
          ...allEventsToUpdate,
          values: allEventsToUpdate.values.filter(
            (value: Event) => value.active
          ),
        });
        setInactiveEvents({
          ...allEventsToUpdate,
          values: allEventsToUpdate.values.filter(
            (value: Event) => !value.active
          ),
        });
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

  const deleteEvent = async () => {
    try {
      if(!selectedEvent) return;
      const eventDeleted = await eventService.deleteEvent(selectedEvent._id);
      if (eventDeleted && allEvents) {
        setAllEvents({...allEvents, values: allEvents.values.filter(e => e._id !== selectedEvent._id )})
        if (inactiveEvents?.values?.some((v) => v._id === selectedEvent._id)) {
          setInactiveEvents((prev) =>
            prev?.values
              ? {
                  ...prev,
                  values: prev?.values?.filter(
                    (e) => e?._id !== selectedEvent._id
                  ),
                }
              : prev
          );
        } else {
          setActiveEvents((prev) =>
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
                updateActive={(eventId: string, type: string, value: boolean) => updateActive(eventId, type, value)}
                handleDeleteEvent={handleDeleteEvent}
                isWorkshop
              />
            </Stack>
          )}
          <Stack spacing={3}>
            <Heading as="h2" fontSize="lg">
              Talleres latentes
            </Heading>
            <EventTable
              events={inactiveEvents}
              handleLinkDetailEvent={(eventId: string) => router.push(eventId)}
              updateActive={(eventId: string, type: string, value: boolean) => updateActive(eventId, type, value)}
              handleDeleteEvent={handleDeleteEvent}
              isWorkshop
            />
          </Stack>
        </Stack>
        {Boolean(allEvents?.count) && <Pagination
          postsPerPage={itemsPerPage}
          totalPosts={allEvents?.count || 0}
          currentPage={page}
          pageNeighbours={3}
          changePage={handleChangePage}
          changePageItems={handleChangePageItems}
          itemsPerPage={itemsPerPage}
          justify="center"
          align="flex-end"
          showPageItem
        />}
      </Skeleton>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Eliminar taller: {selectedEvent?.title}
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Esta seguro que desea eliminar este taller? No podras revertir este cambio luego.
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
    </Stack>
  );
};

export default WorkshopsPage;
