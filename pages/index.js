import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import {Box } from '@chakra-ui/react';
import HomeSection1 from '../pagesSections/HomeSection1';
import HomeSection2 from '../pagesSections/HomeSection2';
import HomeSection3 from '../pagesSections/HomeSection3';
import HomeSection4 from '../pagesSections/HomeSection4';
import HomeSection5 from '../pagesSections/HomeSection5';
import HomeSection6 from '../pagesSections/HomeSection6';


export default function Home() {
  

  const [waitAsec, setwaitAsec] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setwaitAsec(true)
    }, 1500);
  }, [])
  

  
  return (
    <>
      <Head>
        <title>Welcome | Intellihance </title>
      </Head>

      <Box h='fit-content' w='100%' bgColor='transparent' position={'relative'} >
        <HomeSection1 />
        <HomeSection2 />
        {waitAsec ? <HomeSection4 /> : null }
        {waitAsec ? <HomeSection5 /> : null }
        {waitAsec ? <HomeSection3 /> : null }
        {waitAsec ? <HomeSection6 /> : null }
      </Box>
      
    </>
  )
}
