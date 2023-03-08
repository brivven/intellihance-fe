import { Html, Head, Main, NextScript } from 'next/document'
import theme from "../theme/theme"
import { ColorModeScript } from "@chakra-ui/react"


export default function Document() {
  return (
    <Html>

      <Head>
        <link rel="icon" href="/intellihance.png" /> 
        {/* add font here for pagesections that are outside /pages folder */}
        <link href="https://fonts.googleapis.com/css?family=Chewy" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
        {/* FOR GOOGLE PICTURES IMAGE 403 ERROR */}
        <meta name="referrer" content="no-referrer" />
      </Head>
      
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}