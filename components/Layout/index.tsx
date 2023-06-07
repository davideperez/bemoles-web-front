import { Box, Center, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, {ReactNode} from 'react'
import LeftBar from '../LeftBar'

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <div>
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      {!router.asPath.includes('/login') ? 
      <>
            <LeftBar />
            <Box ml={{ base: 0, md: 56 }} p="4">
          {children}
        </Box>
        </> : <Center minH="100vh">{children}</Center>}
        </Box>
    </div> 
  )
}

export default Layout