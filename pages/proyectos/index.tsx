import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ApiBase } from "../../models/apiBase";
import { Project, ProjectCategory } from "../../models/project";
import { projectService } from "../../services/projects.service";

const projectCategories = [
  {
    name: "Planificaciones anuales",
    type: ProjectCategory.ANUALES,
    bg: "#79A342",
  },
  {
    name: "Solicitando apoyos",
    type: ProjectCategory.SOLICITANDO_APOYOS,
    bg: "#1B3A66",
  },
  {
    name: "Nuestros proyectos",
    type: ProjectCategory.NUESTROS_PROYECTOS,
    bg: "#F58220",
  },
  {
    name: "Informes",
    type: ProjectCategory.INFORMES,
    bg: "#3B424A",
  },
];

const ProyectosPage = () => {
  const [projects, setProjects] = useState<ApiBase<Project>>();
  const router = useRouter();
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        try {
          const { data: result } = await projectService.getProjects(
            undefined,
            page,
            itemsPerPage
          );
          setProjects(result);
          console.log(result.values)
        } catch (error) {
          // console.log(error);
        }
      })();
    }
  }, [page, itemsPerPage]);
  return (
    <>
      <Head>
        <title>Proyectos | Los Bemoles</title>
      </Head>
      <Stack
        as="main"
        padding={{ base: "44px 16px 20px 16px", lg: "96px 100px 120px 100px" }}
        overflow="hidden"
        spacing={{ base: "2rem", lg: "4rem" }}
        backgroundImage={{
          base: "url('/images/05_proyectos/proyectos-bg-mobile.png')",
          lg: "url('/images/05_proyectos/proyectos-bg.png')",
        }}
        objectFit={"cover"}
        objectPosition="center"
        backgroundPosition={{ base: "-20px 96px", lg: "-151px 184px" }}
        backgroundRepeat={"no-repeat"}
        pb={{ base: "18rem", lg: "16rem" }}
      >
        <Heading
          as="h1"
          color="white"
          fontFamily={"DM Serif Display"}
          fontSize={{ base: "30px", lg: "70px" }}
          fontWeight={400}
          lineHeight={{ base: "50px", lg: "72px" }}
          letterSpacing={{ base: "0.3px", lg: "0.7px" }}
        >
          Proyectos
        </Heading>
        <Flex
          as={"main"}
          pt={{ base: "0px", lg: "2rem" }}
          gap="24px"
          justify={{base:"center", xl:"flex-start"}}
          flexWrap={{base:"wrap", xl:"nowrap"}}
        >
          <Flex 
            as="picture"
            mx={{ base: "auto", lg: "0px" }}
            h={{base:310, sm:310, xl:810}}
            w={{base:"auto", sm:"100%", xl:"auto" }}
            maxW={{base:540, sm:"100%", xl:540 }}
            >
            <source
              srcSet="/images/responsive/05_proyectos/proyectos.webp"
              media="(max-width: 480px)"
            />
            <Image
              src="/images/05_proyectos/proyectos.webp"
              alt="Los Bemoles"
              w={{base:"auto", sm:"100%", xl:"auto" }}
              objectFit={"cover"}
              border={{base:"5px solid #FFF", sm:"10px solid #FFF"}}
            />{" "}
          </Flex>
          <Stack 
            spacing="16px" 
            pt={{ base: "1rem", lg: "0px" }}
            flex={1} 
          >
            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap={{ base: "40px", lg: "40px" }}
              pt={{base:"0rem",sm:"2rem"}}
            >
              {projectCategories.map((category) => (
                <GridItem key={category.name}>
                  {/* Titulo de la Categoria */}
                  <Flex
                    p="16px"
                    w="100%"
                    bg={category.bg}
                    color="white"
                    fontSize="16px"
                    fontWeight={700}
                    letterSpacing="3.6px"
                    textTransform={"uppercase"}
                    whiteSpace="nowrap"
                    marginBottom="8px"
                    justify={{base:"center", sm:"start"}}
                  >
                    {category.name}
                  </Flex>
                  
                  <Flex 
                    gap="10px"
                    flexWrap={"wrap"}
                    justify={{base:"center", sm:"start"}}

                  >
                    {projects?.values
                      .filter((p) => p.category === category.type)
                      .slice(0, 10)
                      .map((project) => (
                        <Link
                          isExternal
                          onClick={() => router.push(`/proyectos/${project._id}`)}
                          key={project._id}
                          _hover={{ opacity: 0.7 }}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            w="138px"
                            h="178"
                            objectFit={"cover"}
                            objectPosition="top"
                          />
                        </Link>
                    ))}
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
};

export default ProyectosPage;
