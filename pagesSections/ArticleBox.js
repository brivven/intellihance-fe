import React from 'react'
import {Flex , Icon , Image, Box ,Divider ,Center, Text} from '@chakra-ui/react';
import {BsEmojiSunglassesFill, BsClockFill, BsStarFill} from 'react-icons/bs'
import {ImSpinner9} from 'react-icons/im'
import { useState } from 'react';



function ArticleBox({size, image,title, category, delay, rating, reactions, date}) {

  const [ImgLoaded, setImgLoaded] = useState(false);
  const showImg = ()=>{
    setTimeout(() => {
      setImgLoaded(true)
    }, (delay*1000)+1000);
  }
    

  return (
  
    <Box w='100%' h='100%' position={'relative'} className='article-box animate__animated animate__fadeIn' style={{animationDelay: delay+'s' }} overflow='hidden'  
    >

        <Image src={image} w='100%' h='100%' animation='1.5s slide-reveal forwards' alt='art-img' onLoad={showImg} 
          style={ImgLoaded ?  { display: 'block' } : {display: 'none'} } 
        /> 
        {!ImgLoaded ?
        <Flex w='100%' h='100%' position={'absolute'} top={0} left={0} bottom={0} right={0} zIndex='15' align={'center'} justify='center'>
          <Icon as={ImSpinner9} animation='1s spin linear infinite' color='#39C7C4' fontSize={{base:"20px", sm:"24px", md:"26px" }}  />
        </Flex>
        : null }


        <Box w='100%' h='100%' position={'absolute'} top={0} left={0} bottom={0} right={0} zIndex='10'
          background='linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) )'  
        >

          <Flex w='100%' align={'center'} direction='column' position='absolute' bottom='7%' className='article-box-data' >

            <Box w='90%' >
              <Text fontSize={{base:'10px', sm:'11px', md:'13px'}} px='7px' py='1px'  fontWeight={600} borderRadius='15px' color='white' w='fit-content'
                border='1px solid white' bgColor={'rgba(0,0,0,0.85)'} boxShadow='xl' className='animate__animated animate__fadeInUp' 
                style={{animationDelay: (delay+1.8)+'s' }}
              >
                {category}
              </Text>
            </Box>

            <Text w='90%' color='white' textAlign={'left'} fontWeight={600} my='10px'
              fontSize={size == 'lg' ? {base:'14px', sm:'16px', md:'18px', lg:'20px', xl:'22px'} 
                      : size == 'md' ? {base:'12px', sm:'14px', md:'16px', lg:'18px', xl:'20px'}  
                      : {base:'11px', sm:'12px', md:'12px', lg:'14px', xl:'18px'} } 
              className='animate__animated animate__fadeInUp' style={{animationDelay: (delay+2)+'s' }}
            >
              {title}
            </Text>

            <Flex w='90%' align='center' gap={{base:'5px', sm:'5px', md:'10px'}} wrap='wrap'
              className='animate__animated animate__fadeInUp' style={{animationDelay: (delay+2.2)+'s' }} 
            >

              <Flex  align={'center'} justify='center' fontWeight={600}>
                <Icon as={BsClockFill} fontSize={{base:"12px", sm:"14px", md:"16px" }} color='#39C7C4' mr={"6px"} />
                <Text fontSize={{base:'10px', sm:'11px', md:'14px'}} color='gray.300' >{date}</Text>            
              </Flex> 

              <Center height='10px' mx='5px'>
                <Divider orientation='vertical' borderColor='gray.300' transform={'skew(-20deg)'} />
              </Center>

              <Flex align={'center'} justify='center' fontWeight={600}>
                <Icon as={BsStarFill} fontSize={{base:"12px", sm:"14px", md:"16px" }} color={'#39C7C4'} mr={"6px"} />
                <Text fontSize={{base:'10px', sm:'11px', md:'14px'}} color='gray.300' >{rating}</Text>
              </Flex>

              <Center height='10px' mx='5px'>
                <Divider orientation='vertical' borderColor='gray.300' transform={'skew(-20deg)'} />
              </Center>

              <Flex align={'center'} justify='center' fontWeight={600}>
                <Icon as={BsEmojiSunglassesFill} fontSize={{base:"12px", sm:"14px", md:"16px" }} color='#39C7C4' mr={"6px"} />
                <Text fontSize={{base:'10px', sm:'11px', md:'14px'}} color='gray.300' >{reactions}</Text>
              </Flex>

            </Flex>
            

          </Flex>

        </Box>


    </Box>
  )
}

export default ArticleBox