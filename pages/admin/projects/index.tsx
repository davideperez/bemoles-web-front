import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Badge,
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
import { Pagination } from "../../../components/admin/Pagination";
import useDebounce from "../../../hooks/useDebounce";
import { ApiBase } from "../../../models/apiBase";
import { Project } from "../../../models/project";
import { projectService } from "../../../services/projects.service";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<ApiBase<Project>>();
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedValue = useDebounce(searchValue, 300);
  const router = useRouter();
  const { page: PageQuery, items } = router.query;
  const [itemsPerPage, setItemsPerPage] = useState<number>(Number(items) || 20);
  const [page, setPage] = useState<number>(Number(PageQuery) || 1);
  const [selectedProject, setSelectedProject] = useState<Project>();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        try {
          const { data: result } = await projectService.getProjects(
            debouncedValue,
            page,
            itemsPerPage
          );
          setProjects(result);
        } catch (error) {
          // console.log(error);
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

  const handleDeleteProject = (event: Project) => {
    onOpen();
    setSelectedProject(event);
  };

  const deleteEvent = async () => {
    try {
      if (!selectedProject) return;
      const eventDeleted = await projectService.deleteProject(
        selectedProject._id
      );
      if (eventDeleted) {
        setProjects((prev) =>
          prev?.values
            ? {
                ...prev,
                values: prev?.values?.filter(
                  (e) => e?._id !== selectedProject._id
                ),
              }
            : prev
        );
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
  };

  useEffect(() => {
    if (router.query.page) setPage(+router.query.page);
    if (router.query.items) setItemsPerPage(+router.query.items);
  }, [router.query]);

  return (
    <Stack spacing={4}>
      <Heading>Proyectos</Heading>
      <Skeleton isLoaded={!!projects?.values}>
        <Flex justifyContent={"space-between"} mb={4} alignItems="center">
          <Stack w="100%">
            <InputGroup w="300px">
              <InputLeftElement pointerEvents="none">
                <MdOutlineSearch color="#9D6E33" size={20} />
              </InputLeftElement>
              <Input
                type="text"
                placeholder={"Buscar proyectos"}
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
            onClick={() => router.push(`/admin/projects/edit/add`)}
            colorScheme={"telegram"}
            bg="#9D6E33"
            lineHeight={0}
            _hover={{ bg: "#9D6E33", opacity: 0.5 }}
            size="md"
            px={5}
          >
            Agregar proyectos
          </Button>
        </Flex>
        <TableContainer bg="white" px={2} borderRadius="md" mb={2}>
          <Table fontSize="15px">
            <Thead h="40px">
              <Tr>
                <Th p={2}>Imágen</Th>
                <Th p={2}>Título</Th>
                <Th p={2}>Categoria</Th>
                <Th p={2} textAlign="center">
                  Acciones
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {projects?.values?.map((project) => (
                <Tr key={project._id}>
                  <Td p={2}>
                    <Image
                      src={project.image || "/images/noavail.jpg"}
                      alt={project.title}
                      w="50px"
                      h="50px"
                      objectFit={"contain"}
                    />
                  </Td>
                  <Td
                    p={2}
                    onClick={() =>
                      router.push(`/admin/projects/${project._id}`)
                    }
                    cursor="pointer"
                    _hover={{
                      opacity: 0.5,
                    }}
                  >
                    {project.title}
                  </Td>
                  <Td p={2} textTransform="capitalize"><Badge colorScheme="purple">{project.category.replaceAll("_", " ").toLowerCase()}</Badge></Td>
                  <Td p={2}>
                    <Flex w="100%" justifyContent={"center"}>
                      <Tooltip label="Ver detalle de proyecto">
                        <Button
                          onClick={() =>
                            router.push(`/admin/projects/${project._id}`)
                          }
                          size="md"
                          bg="transparent"
                          p={0}
                        >
                          <FiExternalLink color="#9D6E33" size={18} />
                        </Button>
                      </Tooltip>
                      <Tooltip label="Eliminar proyecto">
                        <Button
                          size="md"
                          bg="transparent"
                          p={0}
                          onClick={() => handleDeleteProject(project)}
                        >
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
        {Boolean(projects?.count) && (
          <Pagination
            postsPerPage={itemsPerPage}
            totalPosts={projects?.count || 0}
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
              Eliminar proyecto: {selectedProject?.title}
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Esta seguro que desea eliminar este proyecto? No podras revertir
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

export default ProjectsPage;
