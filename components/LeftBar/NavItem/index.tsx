import React, { ReactElement } from "react";
import { Flex, Icon, Link, FlexProps } from "@chakra-ui/react";
import NextLink from 'next/link'

import { IconType } from "react-icons";
import { toASCII } from "punycode";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  to: string;
  isSelected: boolean;
}

const NavItem = ({ icon, to, isSelected, children, ...rest }: NavItemProps) => {
  return (
    <NextLink href={to}>

      <Flex
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
        align="center"
        p="4"
        mx="4"
        borderRadius="2xl"
        role="group"
        cursor="pointer"
        bg={isSelected ? "#9D6E33" : "none"}
        color={isSelected ? "white" : "revert"}
        _hover={{
          // bg: "gray.200",
          color: "",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </NextLink>
  );
};

export default NavItem;
