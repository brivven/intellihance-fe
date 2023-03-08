import React from 'react'
import {Flex , Text, Box, Image, useColorModeValue } from '@chakra-ui/react';
import anime from 'animejs'
import { useEffect, useState } from 'react';


function SplashScreen({finishedLoading, showWebsite}) {

  const animate = () =>{

    const loader = anime.timeline({
      loop: false,
      complete: () => handleClose() ,
    });
    loader.add({
      targets: '.intellihance-logo',
      rotate: ['-80deg', '0deg'],
      translateX: ['-100%', '0'],
      scale: {
        value: [0.7, 1],
        duration: 800,
        easing: 'cubicBezier(0.25, 0.1, 0.25, 1.0)',
        elasticity: 400,
      },
      easing: 'easeOutExpo',
      duration: 800,
    }).add({
      targets: '.intellihance span',
      scale: [3,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 500,
      delay: (el, i) => 70*i
    }).add({
      targets: '.logo-container',
      opacity: 0,
      easing: "easeOutExpo",
      duration: 250,
    })

  }

  const [Rise, setRise] = useState(false)
  const [Slide, setSlide] = useState(false)
  const handleClose = ()=>{
    setRise(true);
    setTimeout(() => {
      setRise(false);
      showWebsite();
      setSlide(true);
    }, 1000);
    setTimeout(() => {
      finishedLoading()
      setSlide(false);
    }, 2000);
  }

  useEffect(() => {
    animate();
  }, []);

  const intellihanceText = 'Intellihance'

  return (

    <Flex position={'fixed'} top='0' left='0' right={'0'} bottom='0' w='100%' h='100%' className='splash-screen' align='center' justify={'center'} zIndex={100000000} 
      background={!Slide ? useColorModeValue('linear-gradient( to bottom, #CBD5E0, #E2E8F0)', 'linear-gradient( to top, #1A202C, #1A202C)') : 'transparent'} 
    >

      {[...Array(6)].map((e,i)=>(
        <Box key={i} className={Rise ? 'loader_tile rise' : Slide ? 'loader_tile slide' : 'loader_tile'}
        /> 
      ))}

      <Flex width="fit-content" align="center" justify={'center'} pb={5} className='logo-container' >

        <Flex bgColor="transparent" align="center" justify={'center'} flexDirection='row' h='fit-content'>
          <Image src="/intellihance.png" alt="intellihance Logo" h={{base:"35px", sm:"45px", md:"50px" }} className='intellihance-logo'  />
        </Flex>

        <Text letterSpacing={'1px'} px={1} bgColor="transparent" className='intellihance' 
          fontSize={{base:"25px", sm:"35px", md:"45px" }} color='#39C7C4' fontWeight={500} userSelect='none'
        >  
          {intellihanceText.split("").map(function(char, index){
            return <span style={{display:'inline-block', fontFamily:'Chewy'}} key={index}>{char}</span>;
          })}
        </Text>

      </Flex>


    </Flex>
  )
}

export default SplashScreen