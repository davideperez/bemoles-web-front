import React, { ReactNode, useContext } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
  Button,
  Stack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FiCompass, FiStar, FiSettings, FiLogOut } from "react-icons/fi";

import {
  MdCalendarToday,
  MdLightbulbOutline,
  MdOutlinePalette,
} from "react-icons/md";

import { IconType } from "react-icons";
import NavItem from "../NavItem";
import { HiOutlineTicket } from "react-icons/hi";
import Logo from "../../Login/Logo";
import { useRouter } from "next/router";
import Link from "next/link";
import { UserContext } from "../../../../context/userContext";
import { authService } from "../../../../services/auth.service";
import { removeToken } from "../../../../config/localStorage";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  icon: IconType;
  link: string;
}

const LinkItems: Array<LinkItemProps> = [
  // { name: 'Home', icon: FiHome },
  { name: "Eventos", icon: MdCalendarToday, link: "/admin/events" },
  { name: "Talleres", icon: MdOutlinePalette, link: "/admin/workshops" },
  {
    name: "Reservas",
    icon: HiOutlineTicket,
    link: "/admin/reserves/events",
  },
  { name: "Proyectos", icon: MdLightbulbOutline, link: "/admin/projects" },
];

const LeftBarContent = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const logout = async () => {
    try {
      await authService.logout();
      setUser((oldValues: any) => {
        return { ...oldValues, details: undefined, token: null }
      })
      window.localStorage.setItem("logout", `${Date.now()}`)
      removeToken();
      router.replace('/admin/login');
    } catch (e) {
      // console.log(e);
    }
  };

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 56 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex
          h="20"
          alignItems="center"
          mx="8"
          justifyContent="space-between"
          my="0.5rem"
        >
          <Logo />
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        <Stack spacing={0} flexGrow={1}>
          {LinkItems.map((link) => (
            <NavItem
              key={link.name}
              icon={link.icon}
              to={link.link}
              isSelected={router.asPath.includes(link.link)}
            >
              {link.name}
            </NavItem>
          ))}
        </Stack>
        <Flex
          w="100%"
          bottom="10px"
          left="0px"
          position="absolute"
          justifyContent={"center"}
        >
          <Button
            colorScheme="orange"
            leftIcon={<FiLogOut />}
            size="md"
            onClick={logout}
            mt="auto"
            bg="#9D6E33"
            _hover={{
              bg:"#9D6E33",
              opacity: 0.5,
            }}
          >
            Cerrar sesión
          </Button>
        </Flex>
      </Box>
    </>
  );
};
export default LeftBarContent;
