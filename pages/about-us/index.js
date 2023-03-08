import React from 'react'
import Head from 'next/head'
import {Flex , Text, useColorModeValue} from '@chakra-ui/react';
import { useState } from 'react'; 
import Termsofservice from '../../pagesSections/Termsofservice'
import Introduction from '../../pagesSections/Introduction';
import Privacypolicy from '../../pagesSections/Privacypolicy';
import Corporateculture from '../../pagesSections/Corporateculture';


function AboutUs() {

    const bgColor = useColorModeValue('gray.100', 'linear-gradient( to top, #1A202C, #2D3748)');
    const bgColor2 = useColorModeValue('gray.200', 'gray.700');
    const textColor = useColorModeValue('gray.700', 'white');

    
    const titles = ['1. Introduction','2. Privacy policy','3. Terms of service','4. Corporate culture and hiring team' ]
    const [activeTitle, setactiveTitle] = useState('1. Introduction')

  return (

    <>
      <Head>
        <title>About us | Intellihance </title>
      </Head>

      <Flex h='fit-content' bgColor={'transparent'} w='100%' boxSizing='border-box' direction={{base:"column", sm:"column", md:"row" }}
      >

        <Flex w={{base:"100%", sm:"100%", md:"280px" }} h={{base:"fit-content", sm:"fit-content", md:"100vh" }} align={{base:"flex-start", sm:"flex-start", md:"center" }}
          background={bgColor} justify={{base:"flex-start", sm:"flex-start", md:"center" }}
          direction={{base:"row", sm:"row", md:"column" }} gap={{base:"10px", sm:"20px", md:"40px" }} 
          py={{base:"30px", sm:"40px", md:"50px" }} wrap='wrap' px={{base:"20px", sm:"20px", md:"none" }}
        >
          {titles.map((navItem , index) => (
            <Text key={index} fontSize={'14px'} w={{base:"fit-content", sm:"fit-content", md:"65%" }} fontWeight={700} cursor='pointer' _hover={{color:'#39C7C4'}} 
              transitionDuration='0.2s' mx='auto' 
              className="animate__animated animate__fadeInUp"  style={{animationDelay: index * 100+'ms' }} textAlign='left' 
              color={activeTitle == navItem ? '#39C7C4' : textColor} onClick={()=> setactiveTitle(navItem)}
            >
              {navItem}
            </Text>
          ))}

        </Flex>


        <Flex flex='1 0 0' h='100vh' pt='50px' justify='center' background={bgColor2} >
            {activeTitle == '1. Introduction' ? <Introduction /> : null }
            {activeTitle == '2. Privacy policy' ? <Privacypolicy /> : null }
            {activeTitle == '3. Terms of service' ? <Termsofservice /> : null }
            {activeTitle == '4. Corporate culture and hiring team' ? <Corporateculture /> : null }
        </Flex>



      </Flex>
    </>
  )
}

export default AboutUs