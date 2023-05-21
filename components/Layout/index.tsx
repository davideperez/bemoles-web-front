import { Box, useColorModeValue } from '@chakra-ui/react'
import React, {ReactNode} from 'react'
import LeftBar from '../LeftBar'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <LeftBar />
            <Box ml={{ base: 0, md: 56 }} p="4">
          {children}
        </Box>
        </Box>
    </div>
  )
}

export default Layout