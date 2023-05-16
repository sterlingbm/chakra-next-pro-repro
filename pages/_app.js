import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@chakra-ui/pro-theme';
import '@fontsource/inter/variable.css';


export default function App({ Component, pageProps }) {
  return (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
