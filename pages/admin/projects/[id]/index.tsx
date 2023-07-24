import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Badge,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Link as ChakraLink,
  Skeleton,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { projectService } from "../../../../services/projects.service";
import { Project } from "../../../../models/project";
import Head from "next/head";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { formatDate } from "../../../../utils/functions";

const ProjectDetail = () => {
  const [project, setProject] = useState<Project>();
  const router = useRouter();
  const toast = useToast();
  const [selectedProject, setSelectedProject] = useState<Project>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      router.query.id &&
      router.query.id !== "add"
    ) {
      (async () => {
        const { data } = await projectService.getProject(`${router.query.id}`);
        setProject(data);
      })();
    }
  }, [router.query.id]);

  const handleDeleteproject = (project?: Project) => {
    if (!project) return;
    onOpen();
    setSelectedProject(project);
  };

  const deleteproject = async () => {
    try {
      if (!selectedProject) return;
      const projectDeleted = await projectService.deleteProject(
        selectedProject._id
      );
      if (projectDeleted) {
        toast({
          description: "project deleted successfully",
          status: "success",
        });
      }
    } catch (err) {
      toast({
        description: "Error deleting project",
        status: "error",
      });
    }
    router.replace("/admin/projects");
  };

  return (
    <>
      <Head>
        <title>
          {!project ? "Cargando... " : `${project.title} `}| Los Bemoles
        </title>
      </Head>

      <Skeleton isLoaded={!!project || router.query.id === "add"}>
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
              onClick={() => router.push("/admin/projects")}
            />
            <Heading>Proyecto: {`${project?.title}`}</Heading>
          </Flex>
          <Stack bg={"white"} p={8} borderRadius="xl" spacing={6}>
            <Flex>
              <Image
                src={project?.image}
                alt={project?.title}
                w={500}
                h={300}
                objectFit="contain"
                objectPosition={"top"}
                mr={8}
              />
              <Stack spacing={4}>
                <Stack>
                  <Heading as="h2" fontSize="3xl">
                    {project?.title}
                  </Heading>
                  <Text
                    as="span"
                    mt="0px !important"
                    fontSize="15px"
                    fontStyle={"italic"}
                  >
                    Creado el {formatDate(project?.createdAt)}
                  </Text>
                </Stack>
                <Stack spacing={6}>
                  
                  <Flex alignItems={"center"}>
                    <Text as="span" mr="2" textAlign={"center"}>
                      <b>Category:</b>
                    </Text>
                    <Badge colorScheme={"purple"}>{project?.category}</Badge>
                  </Flex>
                  <ChakraLink href={project?.pdf || ""} isExternal>
                    Abrir pdf <Icon as={FiExternalLink} mx="2px" />
                  </ChakraLink>
                </Stack>
              </Stack>
            </Flex>
            <Flex justifyContent={"center"} gap={4}>
              <Link href={`/admin/projects/edit/${project?._id}`}>
                <Button bg="#9D6E33" color="white" _hover={{ opacity: 0.5 }}>
                  Editar proyecto
                </Button>
              </Link>
              <Button
                colorScheme="red"
                onClick={() => handleDeleteproject(project)}
              >
                Eliminar proyecto
              </Button>
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
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Eliminar proyecto: {selectedProject?.title}
              </AlertDialogHeader>

              <AlertDialogBody>
                ¿Esta seguro que desea eliminar este proyecto? No podras
                revertir este cambio luego.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme="red" onClick={deleteproject} ml={3}>
                  Eliminar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Skeleton>
    </>
  );
};

export default ProjectDetail;
