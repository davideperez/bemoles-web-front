import React, { ReactNode } from 'react';
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
} from '@chakra-ui/react';
import {
  FiCompass,
  FiStar,
  FiSettings,
} from 'react-icons/fi';

import {
    MdCalendarToday,
    MdLightbulbOutline,
    MdOutlinePalette,
  } from 'react-icons/md';

import { IconType } from 'react-icons';
import NavItem from '../NavItem';
import { HiOutlineTicket } from 'react-icons/hi';
import Logo from '../../Login/Logo';

interface SidebarProps extends BoxProps {
    onClose: () => void;
  }

interface LinkItemProps {
    name: string;
    icon: IconType;
  }

const LinkItems: Array<LinkItemProps> = [
    // { name: 'Home', icon: FiHome },
    { name: 'Eventos', icon: MdCalendarToday },
    { name: 'Talleres', icon: MdOutlinePalette },
    { name: 'Reservas', icon: HiOutlineTicket },
    { name: 'Proyectos', icon: MdLightbulbOutline },
  ];

const LeftBarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
          bg={useColorModeValue('white', 'gray.900')}
          borderRight="1px"
          borderRightColor={useColorModeValue('gray.200', 'gray.700')}
          w={{ base: 'full', md: 56 }}
          pos="fixed"
          h="full"
          {...rest}>
          <Flex h="20" alignItems="center" mx="8" justifyContent="space-between" mt="0.5rem">
            <Logo />
            <CloseButton display={{ base:'flex', md: 'none' }} onClick={onClose} />
          </Flex>
          {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon}>
              {link.name}
            </NavItem>
          ))}
        </Box>
      );
    };
export default LeftBarContent