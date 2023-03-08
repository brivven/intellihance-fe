import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import 'animate.css';
import Router  from 'next/router'
import nProgress from 'nprogress';
import { Poppins } from '@next/font/google'


// use poppins google font globally
const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
})

/*if (typeof window !== "undefined") {
  localStorage.setItem('chakra-ui-color-mode', 'dark')
}*/

nProgress.configure({ showSpinner: false });
  Router.events.on('routeChangeStart', () => {
    nProgress.start();
  });
  Router.events.on('routeChangeComplete', () => {
    nProgress.done();
    nProgress.remove();
  });



function MyApp({ Component, pageProps }) {

  return (
    <main className={poppins.className}> 
      <ChakraProvider>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ChakraProvider>
    </main>
  )
}

export default MyApp
