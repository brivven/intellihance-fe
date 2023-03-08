import Navbar from './Navbar'
import Footer from './Footer'
import SplashScreen from './SplashScreen';
import {useRouter} from "next/router";
import { useState , useEffect} from 'react';

import {Icon, Flex} from '@chakra-ui/react';
import {TiArrowSortedUp } from 'react-icons/ti'  


function Layout ({children}){
  
  const router = useRouter();
  const [GoBackTop, setGoBackTop] = useState(false)
  const [isLoading, setisLoading] = useState(true);
  const [ShowWebsite, setShowWebsite] = useState(false)

  useEffect(() => {
    if(isLoading) return
  }, [isLoading]);

  useEffect(() => {
    if(typeof window !== "undefined"){
      window.addEventListener('scroll', ()=>{
        if(window.pageYOffset > 0){
          setGoBackTop(true)
        }
        else{
          setGoBackTop(false)
        }
      });
    }
  }, []);
  

  return(
    <> 
    
      {
      isLoading ? 
      <SplashScreen finishedLoading={ () => setisLoading(false) } showWebsite={ () => setShowWebsite(true) } /> 
      : null }

      {ShowWebsite ? 
      <>
        <Navbar />
        <main> {children} </main>

        {GoBackTop ? 
        <Flex position='fixed' zIndex={10000} right='30px' bottom='30px' cursor='pointer' py='3px' px='5px' color='gray.700'
          transitionDuration='0.2s' _hover={{bgColor:'gray.600', color:'white'}} bgColor='#0eede8' boxShadow={'xl'}
          className='animate__animated animate__fadeInUp' onClick={()=> window.scrollTo(0,0)} borderRadius='5px'
        >
          <Icon as={TiArrowSortedUp} fontSize={'22px'} />
        </Flex>
        : null }

        <Footer />
      </>
      : null }

    </>
    )
}

export default Layout
