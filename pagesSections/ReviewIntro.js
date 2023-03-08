import React from 'react'
import {Flex , Text, Image , Icon, useColorModeValue} from '@chakra-ui/react';
import {FcPaid, FcOnlineSupport, FcIdea} from 'react-icons/fc'
import Fade from 'react-reveal/Fade';


function ReviewIntro() {

    const bgColor = useColorModeValue('gray.50', 'gray.700');


  return (

    <Flex w='fit-content' position='relative' align={'center'} justify='center' >
            
        <Flex w='100%' h='100%' position='relative' align={'center'} justify='center'>

            <Image src={'https://res.cloudinary.com/dlbr9wrif/image/upload/v1677452050/review_xzzwca.jpg'} borderRadius={'15px'} 
              w={{base:"90%", sm:"90%", md:"90%", lg:'100%', xl:'450px', '2xl':'600px' }} transition='0.2s'
              h={{base:"350px", sm:"350px", md:"400px", lg:'450px', xl:'600px', '2xl':'600px' }} 
            />

            <Flex w={{base:"140px", sm:"150px", md:"160px"}} h='fit-content' borderRadius={'15px'} bgColor={bgColor} position='absolute' zIndex={'10'} 
                bottom={{base:"10px", sm:"10px", md:"60px"}}
                right={{base:"30px", sm:"40px", md:"-60px"}}
                boxShadow={useColorModeValue('0 0px 10px 0px rgba(0, 0, 0, 0.1)', '0 0px 10px 0px rgba(0, 0, 0, 0.3)')} 
                align='center' justify={'space-evenly'} p='10px' gap='10px'
            >
                <Icon as={FcPaid} fontSize={{base:"28px", sm:"32px", md:"34px" }} color={'rgba(255,255,255,0.1)'} /> 
                <Text fontSize={{base:"11px", sm:"12px", md:"14px" }} fontWeight={600}>Trusted by over 5,000 readers worldwide</Text>
            </Flex>
            

            <Flex w={{base:"130px", sm:"150px", md:"160px"}} h='fit-content' borderRadius={'15px'} bgColor={bgColor} position='absolute' zIndex={'10'} 
                top={{base:"10px", sm:"10px", md:"60px"}}
                left={{base:"30px", sm:"40px", md:"-60px"}}
                boxShadow={useColorModeValue('0 0px 10px 0px rgba(0, 0, 0, 0.1)', '0 0px 10px 0px rgba(0, 0, 0, 0.3)')} 
                align='center' justify={'space-evenly'} p='10px' gap='10px'
            >
                <Icon as={FcIdea} fontSize={{base:"28px", sm:"32px", md:"34px" }} color={'rgba(255,255,255,0.1)'} /> 
                <Text fontSize={{base:"11px", sm:"12px", md:"14px" }} fontWeight={600} >92% of readers found our blogs useful </Text>
            </Flex>


            <Flex w={{base:"130px", sm:"150px", md:"160px"}} h='fit-content' borderRadius={'15px'} bgColor={bgColor} position='absolute' zIndex={'10'} 
                top={{base:"110px", sm:"120px", md:"180px"}}
                left={{base:"30px", sm:"40px", md:"-60px"}}
                boxShadow={useColorModeValue('0 0px 10px 0px rgba(0, 0, 0, 0.1)', '0 0px 10px 0px rgba(0, 0, 0, 0.3)')} 
                align='center' justify={'space-evenly'} p='10px' gap='10px'
            >
                <Icon as={FcOnlineSupport} fontSize={{base:"28px", sm:"32px", md:"34px" }} color={'rgba(255,255,255,0.1)'} /> 
                <Text fontSize={{base:"11px", sm:"12px", md:"14px" }} fontWeight={600} >24/7 Support</Text>
            </Flex>


        </Flex>
          
    </Flex>
  )
}

export default ReviewIntro