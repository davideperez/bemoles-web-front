import {
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState, useEffect, ChangeEvent } from "react";
import { FiEdit, FiEdit2, FiTrash2 } from "react-icons/fi";
import { MdOutlineSearch } from "react-icons/md";
import { Pagination } from "../../../components/Pagination";
import useDebounce from "../../../hooks/useDebounce";
import { ApiBase } from "../../../models/apiBase";
import { Event } from "../../../models/event";
import { eventService } from "../../../services/events.service";

const EventsPage = () => {
  const [events, setEvents] = useState<ApiBase<Event>>();
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedValue = useDebounce(searchValue, 300);
  const router = useRouter();
  const { page: PageQuery, items } = router.query;
  const [itemsPerPage, setItemsPerPage] = useState<number>(Number(items) || 20);
  const [page, setPage] = useState<number>(Number(PageQuery) || 1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const { data: result } = await eventService.getEvents(
          debouncedValue,
          page,
          itemsPerPage
        );
        setEvents(result);
      })();
    }
  }, [debouncedValue, page, itemsPerPage]);

  const handleChangePage = (pageNumber: number) => {
    setPage(+pageNumber);
  };

  const handleChangePageItems = (e: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+e.target.value);
  };

  useEffect(() => {
    if (router.query.page) setPage(+router.query.page);
    if (router.query.items) setItemsPerPage(+router.query.items);
  }, [router.query]);

  return (
    <Stack spacing={4}>
      <Heading>Eventos</Heading>
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
          <Button
            ml="auto"
            onClick={() => router.push(`/admin/events/add`)}
            colorScheme={"telegram"}
            bg="#9D6E33"
            lineHeight={0}
            _hover={{ bg: "#9D6E33", opacity: 0.5 }}
            size="md"
          >
            Agregar evento
          </Button>
        </Flex>
        <TableContainer bg="white"  px={2} borderRadius="md" mb={2}>
          <Table fontSize="15px">
            <Thead h="40px">
              <Tr>
                <Th p={2}>Título</Th>
                <Th p={2}>Imágen</Th>
                <Th p={2}>Fecha</Th>
                <Th p={2}>Cupo maximo</Th>
                <Th p={2}>Precio</Th>
                <Th p={2} textAlign="center">Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {events?.values?.map((event) => (
                <Tr key={event._id}>
                  <Td p={2}>
                    <Image src={event.flyer} alt={event.title} w="100px" />
                  </Td>
                  <Td p={2}>{event.title}</Td>
                  <Td p={2}>{new Date(event.date).toLocaleString()}</Td>
                  <Td p={2}>{event.maxAttendance}</Td>
                  <Td p={2}>{event.price}</Td>
                  <Td p={2}>
                    <Flex w="100%" justifyContent={"center"}>
                    <Tooltip label="Editar evento">

                    <Button
                      onClick={() => router.push(`/admin/events/${event._id}`)}
                      size="md"
                      bg="transparent"
                      p={0}
                      >
                      <FiEdit color="#9D6E33" size={18}/>
                    </Button>
                        </Tooltip>
                        <Tooltip label="Eliminar evento">
                    <Button
                      size="md"
                      bg="transparent"
                      p={0}
                      >
                      <FiTrash2 color="red" size={18}/>
                    </Button>
                    </Tooltip>
                      </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
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
      </Skeleton>
    </Stack>
  );
};

export default EventsPage;
