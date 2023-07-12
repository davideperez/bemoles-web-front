import React from "react";
import { Flex, Icon, FlexProps } from "@chakra-ui/react";
import NextLink from 'next/link'

import { IconType } from "react-icons";

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
        p="3"
        mx="4"
        my={1}
        borderRadius="2xl"
        role="group"
        cursor="pointer"
        bg={isSelected ? "#9D6E33" : "none"}
        color={isSelected ? "white" : "revert"}
        _hover={{
          bg: !isSelected ? "gray.200" : "#9D6E33",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
          />
        )}
        {children}
      </Flex>
    </NextLink>
  );
};

export default NavItem;
