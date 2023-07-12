import {
  Box,
  Button,
  CloseButton,
  Collapse,
  Flex,
  Link,
  ScaleFade,
  Slide,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../../admin/Login/Logo";
import NextLink from "next/link";
import { HiMenuAlt4 } from "react-icons/hi";
import { useRouter } from "next/router";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  return (
    <Flex
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent={{ base: "flex-start", sm: "space-between" }}
      h="56px"
    >
      <Link as={NextLink} _hover={{ opacity: "0.7" }} href="/home">
        <Box p={{ base: "16px", sm: "24px" }}>
          <Logo
            w={{ base: "128px", sm: "186px" }}
            h={{ base: "38px", sm: "56px" }}
          />
        </Box>
      </Link>
      <Flex
        display={{ base: isOpen ? "flex" : "none", sm: "flex" }}
        flexDirection={{ base: "column", sm: "row" }}
        alignItems={{ base: "flex-start", sm: "center" }}
        color="white"
        fontWeight="700"
        fontSize={"14px"}
        letterSpacing="2.8px"
        textTransform="uppercase"
        gap="32px"
        bg={{ base: "#3B424A", sm: "transparent" }}
        w={{ base: "100%", sm: "auto" }}
        p={{ base: "16px", sm: "48px 24px" }}
      >
        <Link as={NextLink} href="/posibilidades" _hover={{ color: "#DDC692" }} color={router.asPath.includes('posibilidades') ? "#DDC692" : "unset"}>
          Posibilidades
        </Link>
        <Link as={NextLink} href="/espacios" _hover={{ color: "#DDC692" }}  color={router.asPath.includes('espacios') ? "#DDC692" : "unset"}>
          Espacios
        </Link>
        <Link as={NextLink} href="/sum-arte" _hover={{ color: "#DDC692" }} color={router.asPath.includes('sum-arte') ? "#DDC692" : "unset"}>
          Sum-arte
        </Link>
        <Link as={NextLink} href="/estudio" _hover={{ color: "#DDC692" }} color={router.asPath.includes('estudio') ? "#DDC692" : "unset"}>
          Estudio
        </Link>
        <Link as={NextLink} href="/proyectos" _hover={{ color: "#DDC692" }} color={router.asPath.includes('proyectos') ? "#DDC692" : "unset"}>
          Proyectos
        </Link>
        <Link as={NextLink} href="/talleres" _hover={{ opacity: "0.7" }}>
          <Box bg={"#DDC692"} color="#3B424A" p="16px" borderRadius="4px">
            Talleres
          </Box>
        </Link>
        <Link as={NextLink} href="/agenda" _hover={{ opacity: "0.7" }}>
          <Box bg={"#DDC692"} color="#3B424A" p="16px" borderRadius="4px">
            Agenda
          </Box>
        </Link>
      </Flex>
      <Button
        display={{ base: "flex", sm: "none" }}
        _hover={{ bg: "transparent" }}
        bg="transparent"
        position="absolute"
        right="16px"
        top="16px"
        onClick={onToggle}
      >
        {isOpen ? (
          <CloseButton color="#DDC692" size="24px" />
        ) : (
          <HiMenuAlt4 color="#DDC692" size="24px" />
        )}
      </Button>
    </Flex>
  );
};

export default Navbar;
