import { Stack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <>
      {children}
      </>
    </div>
  )
}

export default PublicLayout