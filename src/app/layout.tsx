'use client'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/Header'
import { theme } from '@/app/theme'
import { SpeedInsights } from '@vercel/speed-insights/next'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="appStyle">
        <ChakraProvider theme={theme}>
          <Header />
          {children}
          <SpeedInsights />
        </ChakraProvider>
      </body>
    </html>
  )
}
