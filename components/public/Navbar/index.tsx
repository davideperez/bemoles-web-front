import {
  Box,
  Button,
  Flex,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../../admin/Login/Logo";
import NextLink from "next/link";
// import { HiMenuAlt4 } from "react-icons/hi";
import { useRouter } from "next/router";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  return (
    <Flex
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent={{ base: "flex-start", lg: "space-between" }}
      h="56px"
      zIndex={3}
    >
      <Link as={NextLink} _hover={{ opacity: "0.7" }} href="/home">
        <Box p={{ base: "16px", lg: "24px" }}>
          <Logo
            w={{ base: "128px", lg: "186px" }}
            h={{ base: "38px", lg: "56px" }}
          />
        </Box>
      </Link>
      <Flex
        transform={{
          base: isOpen ? "translateY(0%)" : "translateY(-150%)",
          lg: "none",
        }}
        opacity={{ base: isOpen ? 1 : 0.25, lg: 1 }}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "flex-start", lg: "center" }}
        color="white"
        fontWeight="700"
        fontSize={{ base: "14px", lg: "12px", xl: "14px" }}
        letterSpacing="2.8px"
        textTransform="uppercase"
        gap={{ base: "32px", lg: "16px", xl: "32px" }}
        bg={{ base: "#3B424A", lg: "transparent" }}
        w={{ base: "100%", lg: "auto" }}
        p={{ base: "16px", lg: "48px 24px" }}
        minH={{ base: "100vh", lg: "fit-content" }}
        whiteSpace="nowrap"
        zIndex={3}
        transition={{base: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out", lg: "none"}}
      >
        <Link
          as={NextLink}
          href="/posibilidades"
          _hover={{ color: "#DDC692" }}
          color={router.asPath.includes("posibilidades") ? "#DDC692" : "unset"}
        >
          Posibilidades
        </Link>
        <Link
          as={NextLink}
          href="/espacios"
          _hover={{ color: "#DDC692" }}
          color={router.asPath.includes("espacios") ? "#DDC692" : "unset"}
        >
          Espacios
        </Link>
        <Link
          as={NextLink}
          href="/sum-arte"
          _hover={{ color: "#DDC692" }}
          color={router.asPath.includes("sum-arte") ? "#DDC692" : "unset"}
        >
          Sum-arte
        </Link>
        <Link
          as={NextLink}
          href="/estudio"
          _hover={{ color: "#DDC692" }}
          color={router.asPath.includes("estudio") ? "#DDC692" : "unset"}
        >
          Estudio
        </Link>
        <Link
          as={NextLink}
          href="/proyectos"
          _hover={{ color: "#DDC692" }}
          color={router.asPath.includes("proyectos") ? "#DDC692" : "unset"}
        >
          Proyectos
        </Link>
        <Link as={NextLink} href="/talleres" _hover={{ opacity: "0.7" }}>
          <Box
            bg={"#DDC692"}
            color="#3B424A"
            p={{ base: "16px", lg: "12px", xl: "16px" }}
            borderRadius="4px"
          >
            Talleres
          </Box>
        </Link>
        <Link as={NextLink} href="/agenda" _hover={{ opacity: "0.7" }}>
          <Box
            bg={"#DDC692"}
            color="#3B424A"
            p={{ base: "16px", lg: "12px", xl: "16px" }}
            borderRadius="4px"
          >
            Agenda
          </Box>
        </Link>
      </Flex>
      <Button
        display={{ base: "flex", lg: "none" }}
        _hover={{ bg: "transparent" }}
        bg="transparent"
        position="absolute"
        right="16px"
        top="16px"
        onClick={onToggle}
        flexDirection="column"
        justifyContent={"center"}
        gap={!isOpen ? "4px" : "0px"}
      >
        <Box
          h="3px"
          w="24px"
          bg="#DDC692"
          borderRadius={"sm"}
          transform={isOpen ? "rotate(45deg)" : "rotate(0)"}
          transition="transform 0.25s ease-in-out"
          />
        <Box
          h="3px"
          w="24px"
          bg="#DDC692"
          borderRadius={"sm"}
          transform={isOpen ? "rotate(-45deg)" : "rotate(0)"}
          position={isOpen ? "absolute" : "relative"}
          transition="transform 0.25s ease-in-out"

        />
        {/* {isOpen ? (
          <CloseButton color="#DDC692" size="24px" />
        ) : (
          <HiMenuAlt4 color="#DDC692" size="24px" />
        )} */}
      </Button>
    </Flex>
  );
};

export default Navbar;
