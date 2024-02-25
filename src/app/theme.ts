import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: 'Consolas, serif',
    heading: 'Consolas, serif',
  },
  colors: {
    black: '#000',
  },
  styles: {
    global: {
      '.appStyle': {
        backgroundColor: '#688a7c',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        color: 'black',
      },
    },
  },
})
