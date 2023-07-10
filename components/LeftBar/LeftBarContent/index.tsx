import React, { ReactNode } from "react";
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

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  icon: IconType;
  link: string;
  subOptions?: LinkItemProps[];
}

const LinkItems: Array<LinkItemProps> = [
  // { name: 'Home', icon: FiHome },
  { name: "Eventos", icon: MdCalendarToday, link: "/admin/events" },
  { name: "Talleres", icon: MdOutlinePalette, link: "/admin/workshops" },
  {
    name: "Reservas",
    icon: HiOutlineTicket,
    link: "/admin/reserves",
    subOptions: [
      {
        name: "Eventos",
        icon: HiOutlineTicket,
        link: "/admin/reserves/events",
      },
      {
        name: "Talleres",
        icon: HiOutlineTicket,
        link: "/admin/reserves/workshops",
      },
    ],
  },
  { name: "Proyectos", icon: MdLightbulbOutline, link: "/admin/projects" },
];

const LeftBarContent = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter();

  const logout = () => {
    console.log("logout");
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
        <Stack spacing={0} h="90%">
          {LinkItems.map((link) =>
            !link.subOptions?.length ? (
              <NavItem
                key={link.name}
                icon={link.icon}
                to={link.link}
                isSelected={router.asPath.includes(link.link)}
              >
                {link.name}
              </NavItem>
            ) : (
              <Accordion w="full" allowToggle key={"link" + link.name}>
                <AccordionItem border={0}>
                  <AccordionButton
                    p={0}
                    w="full"
                    justifyContent="space-between"
                    _hover={{bg: "transparent"}}
                  >
                    <NavItem
                      key={link.name}
                      icon={link.icon}
                      isSelected={router.asPath.includes(link.link)}
                    >
                      {link.name}
                    <AccordionIcon ml="auto" />
                    </NavItem>
                  </AccordionButton>
                  <AccordionPanel p={0} pl={5} pr={5}>
                    {link.subOptions?.map((item, index) => (
                      <NavItem
                        key={item.name}
                        icon={item.icon}
                        to={item.link}
                        isSelected={router.asPath.includes(item.link)}
                    >
                      {item.name}
                    </NavItem>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            )
          )}
        </Stack>
        <Button
          colorScheme="orange"
          leftIcon={<FiLogOut />}
          size="sm"
          onClick={logout}
          mt="auto"
        >
          Logout
        </Button>
      </Box>
    </>
  );
};
export default LeftBarContent;
