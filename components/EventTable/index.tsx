import React, { ChangeEvent, FC } from 'react'
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
import { FiExternalLink, FiTrash2 } from 'react-icons/fi';
import { EventTableProps } from './types';
import { formatDate } from '../../utils/functions';


const EventTable: FC<EventTableProps> = ({events, handleLinkDetailEvent, updateActive, handleDeleteEvent, isWorkshop}) => {
  return (
    <TableContainer bg="white" px={2} borderRadius="md" mb={2}>
    <Table fontSize="15px">
      <Thead h="40px">
        <Tr>
          <Th p={2}>Imágen</Th>
          <Th p={2}>Título</Th>
          <Th p={2}>Fecha</Th>
          <Th p={2}>Cupo maximo</Th>
          <Th p={2}>Precio</Th>
          <Th p={2} textAlign="center">Activo</Th>
          <Th p={2} textAlign="center">
            Acciones
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {events?.values?.map((event) => (
          <Tr key={event._id} opacity={event.active ? "1" : "0.7"} bg={event.active ? "white" : "gray.50"}>
            <Td p={2}>
              <Image
                src={event.image || "/images/noavail.jpg"}
                alt={event.title}
                w="50px"
                h="50px"
                objectFit={"contain"}
              />
            </Td>
            <Td p={2} onClick={() => handleLinkDetailEvent(`/admin/${isWorkshop ? 'workshops': 'events'}/${event._id}`)} cursor="pointer" _hover={{
                      opacity: 0.5,
                    }}>{event.title}</Td>
            <Td p={2}>{formatDate(event.date)}</Td>
            <Td p={2}>{event.maxAttendance}</Td>
            <Td p={2}>{event.price}</Td>
            <Td p={2} textAlign="center"><Switch
                      defaultChecked={event.active}
                      size="sm"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updateActive(event._id as string, e.target.checked)
                      }
                    /></Td>

            <Td p={2}>
              <Flex w="100%" justifyContent={"center"}>
                <Tooltip label={`Ver detalle de ${isWorkshop ? 'taller': 'evento'}`}>
                  <Button
                    onClick={() =>
                        handleLinkDetailEvent(`/admin/${isWorkshop ? 'workshops': 'events'}/${event._id}`)
                    }
                    size="md"
                    bg="transparent"
                    p={0}
                  >
                    <FiExternalLink color="#9D6E33" size={18} />
                  </Button>
                </Tooltip>
                <Tooltip label={`Eliminar ${isWorkshop ? 'taller': 'evento'}`}>
                  <Button size="md" bg="transparent" p={0} onClick={() => handleDeleteEvent(event)}>
                    <FiTrash2 color="red" size={18} />
                  </Button>
                </Tooltip>
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
  )
}

export default EventTable