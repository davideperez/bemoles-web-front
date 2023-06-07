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
import { useRouter } from 'next/router';

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
    { name: 'Eventos', icon: MdCalendarToday, link: '/admin/events'},
    { name: 'Talleres', icon: MdOutlinePalette, link: '/admin/workshops' },
    { name: 'Reservas', icon: HiOutlineTicket, link: '/admin/reserves' },
    { name: 'Proyectos', icon: MdLightbulbOutline, link: '/admin/proyects' },
  ];

const LeftBarContent = ({ onClose, ...rest }: SidebarProps) => {
    const router = useRouter();
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
            <NavItem key={link.name} icon={link.icon} to={link.link} isSelected={router.asPath.includes(link.link)}>
              {link.name}
            </NavItem>
          ))}
        </Box>
      );
    };
export default LeftBarContent