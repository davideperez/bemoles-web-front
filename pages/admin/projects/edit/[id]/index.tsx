import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Image,
  Input,
  Select,
  Skeleton,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { projectService } from "../../../../../services/projects.service";
import { ProjectCategory } from "../../../../../models/project";
import Head from "next/head";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Project } from "../../../../../models/project";

const formatDate = (date: any) => {
  const newDate = new Date(date);
  return newDate.toISOString().substring(0, 16);
};

const ProjectDetail = () => {
  const [project, setProject] = useState<Project>();
  const [image, setImage] = useState<File>();
  const [pdf, setPdf] = useState<File>();
  const router = useRouter();
  const toast = useToast();

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

  const handleSubmit = async (values: Partial<Project>) => {
    try {
      let project;
      const form = new FormData();
      if (image) form.append("image", image);
      if (pdf) form.append("pdf", pdf);
      for (const value of Object.keys(values)) {
        if (value !== "image" && value !== "pdf")
          form.append(value, `${values[value as keyof typeof values]}`);
      }
      if (router.query.id !== "add") {
        project = await projectService.updateProject(`${router.query.id}`, form);
      } else {
        project = await projectService.createProject(form);
      }
      if (project) {
        toast({
          description: `El proyecto se ha ${
            router.query.id !== "add" ? "editado" : "creado"
          } exitosamente`,
          status: "success",
        });
        router.push("/admin/projects");
      }
    } catch (err) {
      toast({
        description: `Ha ocurrido un error y el proyecto no se ha podido ${
          router.query.id !== "add" ? "editar" : "crear"
        } exitosamente`,
        status: "error",
      });
    }
  };

  return (
    <>
      <Head>
        <title>
          {!project
            ? "Cargando..."
            : `${
                router.query.id === "add"
                  ? "Crear proyecto"
                  : `Editar proyecto: ${project.title}`
              }`}
          | Los Bemoles
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
              onClick={() => router.push(`/admin/projects/${project?._id || ''}`)}
            />
            <Heading>
              {router.query.id === "add"
                ? "Crear proyecto"
                : `Editar proyecto: ${project?.title}`}
            </Heading>
          </Flex>
          <Stack bg={"white"} p={8} borderRadius="xl">
            <Formik
              initialValues={{
                title: project?.title || "",
                image: project?.image || "",
                pdf: project?.pdf || "",
                info: project?.info || "",
                category: project?.category || ProjectCategory.ANUALES,
              }}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit, values, isSubmitting, setFieldValue }) => (
                <form onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    <FormControl>
                      <FormLabel>Titulo</FormLabel>
                      <Field
                        as={Input}
                        type="text"
                        name="title"
                        required
                        w="400px"
                      />
                    </FormControl>
                    
                    <FormControl>
                      <FormLabel pb={2}>Imagen (Tamaño máximo 4 mb)</FormLabel>
                      <input
                        type="file"
                        accept="image/*"
                        maxLength={4194304}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          if (e?.target?.files?.[0])
                          {
                            const maxSize = 4 * 1024 * 1024;
                            if (e?.target?.files?.[0].size > maxSize) {
                              toast({
                                title: 'Archivo demasiado grande',
                                description: 'El archivo excede el límite de 4 MB. Por favor, seleccione un archivo más pequeño.',
                                status: 'error',
                                isClosable: true
                              })
                              e.target.value = '';
                            } else {
                              setImage(e.target.files[0]);
                            }
                          }
                        }}
                      />
                      <Image
                        src={
                          image
                            ? URL.createObjectURL(image)
                            : values?.image || ""
                        }
                        alt={values.title}
                        boxSize="150px"
                        mt={4}
                        border="1px solid"
                        borderColor="gray.300"
                        borderRadius="xl"
                        objectFit={"contain"}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel pb={2}>Pdf (Tamaño máximo 10 mb)</FormLabel>
                      <input
                        type="file"
                        accept="application/pdf"
                        maxLength={10485760}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          if (e?.target?.files?.[0])
                          {
                            const maxSize = 10 * 1024 * 1024;
                            if (e?.target?.files?.[0].size > maxSize) {
                              toast({
                                title: 'Archivo demasiado grande',
                                description: 'El archivo excede el límite de 10 MB. Por favor, seleccione un archivo más pequeño.',
                                status: 'error',
                                isClosable: true
                              })
                              e.target.value = '';
                            } else {
                              setPdf(e.target.files[0]);
                            }
                          }
                        }}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Información del Projecto</FormLabel>
                      <Field
                        as={Textarea}
                        name="info"
                        required
                        maxW="800px"
                        minH="300px"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Categoria</FormLabel>
                      <Field
                        as={Select}
                        name="category"
                        type="number"
                        required
                        w="fit-content"
                      >
                        <option value={ProjectCategory.ANUALES}>Anuales</option>
                        <option value={ProjectCategory.SOLICITANDO_APOYOS}>Solicitando apoyos</option>
                        <option value={ProjectCategory.NUESTROS_PROYECTOS}>Nuestros proyectos</option>
                        <option value={ProjectCategory.INFORMES}>Informes</option>

                      </Field>
                    </FormControl>
                    <Flex justifyContent={"flex-end"}>
                      <Button
                        type="submit"
                        w="fit-content"
                        ml="auto"
                        mt={4}
                        bg="#9D6E33"
                        color="white"
                        _hover={{
                          opacity: 0.5,
                        }}
                        isLoading={isSubmitting}
                      >
                        Guardar
                      </Button>
                    </Flex>
                  </Stack>
                </form>
              )}
            </Formik>
          </Stack>
        </Stack>
      </Skeleton>
    </>
  );
};

export default ProjectDetail;