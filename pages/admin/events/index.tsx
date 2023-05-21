import { Heading, Image, Skeleton, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { ApiBase } from '../../../models/apiBase';
import { Event } from '../../../models/event';
import { eventService } from '../../../services/events.service';

const EventsPage = () => {
  const [events, setEvents] = useState<ApiBase<Event>>();

  useEffect(() => {
    if (typeof window !== 'undefined') {

        (async () => {
            const { data: result } = await eventService.getEvents();
            setEvents(result);
        })()
    }
  }, [])

  return (
    <Stack spacing={4}>
   <Heading>Eventos</Heading>
   <Skeleton isLoaded={!!events?.values} >
   <TableContainer bg="white" pt={2} px={2} borderRadius="md">
   <Table >
    <Thead>
        <Tr>
            <Th>Título</Th>
            <Th>Imágen</Th>
            <Th>Fecha</Th>
            <Th>Cupo maximo</Th>
            <Th>Precio</Th>
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
        </Tr>))} 
        
    </Tbody>
   </Table>
   </TableContainer>
   </Skeleton>
    </Stack>
  )
}

export default EventsPage