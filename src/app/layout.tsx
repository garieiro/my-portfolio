'use client'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './globals.css'
import Header from '../components/Header'

interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="appStyle">
        <ChakraProvider>
          <Header />
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
