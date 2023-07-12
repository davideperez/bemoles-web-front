import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React, {ReactNode} from 'react'
import LeftBarContent from './LeftBarContent';
import MobileNav from './MobileNav';

const LeftBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <LeftBarContent
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <LeftBarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      </>  
     )
}

export default LeftBar






