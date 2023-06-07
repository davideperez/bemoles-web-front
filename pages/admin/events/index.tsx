import { Button, Flex, Heading, Image, Input, InputGroup, InputLeftElement, Skeleton, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState, useEffect, ChangeEvent } from 'react'
import { MdOutlineSearch } from 'react-icons/md';
import useDebounce from '../../../hooks/useDebounce';
import { ApiBase } from '../../../models/apiBase';
import { Event } from '../../../models/event';
import { eventService } from '../../../services/events.service';

const EventsPage = () => {
  const [events, setEvents] = useState<ApiBase<Event>>();
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedValue = useDebounce(searchValue, 300);

  useEffect(() => {
    if (typeof window !== 'undefined') {

        (async () => {
            const { data: result } = await eventService.getEvents(debouncedValue);
            setEvents(result);
        })()
    }
  }, [debouncedValue])

  return (
    <Stack spacing={4}>
   <Heading>Eventos</Heading>
   <Skeleton isLoaded={!!events?.values}>
    <Flex justifyContent={"space-between"} mb={4} alignItems="center">
    <Stack w="100%">
            <InputGroup w="300px">
              <InputLeftElement pointerEvents="none">
                <MdOutlineSearch color="gray.300" size={20} />
              </InputLeftElement>
              <Input
                type="text"
                placeholder={'Buscar eventos'}
                bg="white"
                lineHeight={0}
                borderRadius="lg"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
              />
            </InputGroup>
          </Stack>
    <Button ml="auto" colorScheme={"telegram"} bg="#9D6E33" lineHeight={0} _hover={{bg:"#9D6E33", opacity: 0.5}} size="md">Agregar evento</Button>
    </Flex>
   <TableContainer bg="white" pt={2} px={2} borderRadius="md">
   <Table>
    <Thead>
        <Tr>
            <Th>Título</Th>
            <Th>Imágen</Th>
            <Th>Fecha</Th>
            <Th>Cupo maximo</Th>
            <Th>Precio</Th>
            <Th>Acciones</Th>
        </Tr>
    </Thead>
    <Tbody>
        {events?.values?.map(event => (
            <Tr key={event._id}>
            <Td><Image src={event.flyer} alt={event.title} w="100px" /></Td>
            <Td>{event.title}</Td>
            <Td>{new Date(event.date).toLocaleString()}</Td>
            <Td>{event.maxAttendance}</Td>
            <Td>{event.price}</Td>
            <Td><Button>Editar</Button></Td>
        </Tr>))} 
        
    </Tbody>
   </Table>
   </TableContainer>
   </Skeleton>
    </Stack>
  )
}

export default EventsPage