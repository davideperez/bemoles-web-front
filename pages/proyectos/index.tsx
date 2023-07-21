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
        } catch (error) {
          // console.log(error);
        }
      })();
    }
  }, [page, itemsPerPage]);

  return (
    <Stack
      as="main"
      padding={{ base: "44px 16px 20px 16px", lg: "96px 100px 120px 100px" }}
      overflow="hidden"
      spacing={{ base: "2rem", lg: "4rem" }}
      backgroundImage={{
        base: "url('/images/proyectos-bg-mobile.png')",
        lg: "url('/images/proyectos-bg.png')",
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
        pt={{ base: "0px", lg: "2rem" }}
        alignItems={"flex-start"}
        gap="24px"
        flexWrap={"wrap"}
      >
        <Image
          src="/images/proyectos.png"
          alt="Los bemoles"
          maxW={{ base: 317, sm: 540 }}
          mx={{ base: "auto", lg: "0px" }}
        />
        <Stack spacing="16px" flex={1} pt={{base: '7rem', lg: '0px'}}>
          <Text
            as="h3"
            color="#3B424A"
            fontFamily={"DM Serif Display"}
            fontSize={{ base: "40px", lg: "54px" }}
            fontWeight={400}
            lineHeight={{ base: "42px", lg: "54px" }}
            letterSpacing={{ base: "0.4px", lg: "2.7px" }}
          >
            Titulo
          </Text>
          <Text
            as="p"
            fontSize={{ base: "16px", lg: "16px" }}
            fontWeight={400}
            lineHeight={{ base: "24px", lg: "34px" }}
            letterSpacing={{ base: "0.8px", lg: "0.8px" }}
            maxW="590px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
            sodales id, porttitor vitae est. Donec laoreet rutrum libero sed
            pharetra.
          </Text>
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: "40px", lg: "40px" }}
            pt="2rem"
          >
            {projectCategories.map((category) => (
              <GridItem key={category.name}>
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
                >
                  {category.name}
                </Flex>
                <Flex gap="10px">
                  {projects?.values
                    .filter((p) => p.category === category.type)
                    .slice(0, 2)
                    .map((project) => (
                      <Link
                        isExternal
                        href={project.pdf}
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
  );
};

export default ProyectosPage;
