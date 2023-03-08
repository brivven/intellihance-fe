import React from 'react'
import {Flex , Box, Text, Image ,useColorModeValue} from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';



function HomeSection6() {

  const bgColor = useColorModeValue('gray.200', 'gray.800');
  const logos = ['https://res.cloudinary.com/dlbr9wrif/image/upload/v1677452157/tt_mspswi.png',
    'https://res.cloudinary.com/dlbr9wrif/image/upload/v1677452157/wf_o3aapt.png',
    'https://res.cloudinary.com/dlbr9wrif/image/upload/v1677452153/gb_rtpewv.png',
    'https://res.cloudinary.com/dlbr9wrif/image/upload/v1677452156/sm_tbt6xa.webp',
    'https://res.cloudinary.com/dlbr9wrif/image/upload/v1677452157/cs_a36als.png',
    'https://res.cloudinary.com/dlbr9wrif/image/upload/v1677452154/hp_fub179.png',
    'https://res.cloudinary.com/dlbr9wrif/image/upload/v1677452153/hm_jmlftd.png',
  ]

  return (

    <Flex h='fit-content' align={'center'} justify='center' bgColor={bgColor} w='100%' pt={'60px'} pb='130px' position='relative' direction={'column'} >

        <Box w='90%' mx='auto' textAlign={'center'} mb={"50px"} >
          <Fade bottom> 
            <Text w='fit-content' mx='auto' fontSize={{base:'18px', sm:'20px', md:'24px' }} fontWeight={600} className='title-underline' 
            >
              Our Partners
            </Text>
          </Fade>
        </Box>

        <Flex bgColor={bgColor} w='90%' h='fit-content' direction={'row'} align={'center'} justify='center' gap={{base:'25px', sm:'40px', md:'50px'}} wrap='wrap' >
          {logos.map((logo,i)=>(
            <Fade delay={i*100} key={i}> 
              <Image src={logo} alt='logo' h={{base:'30px', sm:'35px', md:'40px' }} style={{aspectRatio:'3/1' }} 
                objectFit='contain' 
              />
            </Fade>
          ))}
        </Flex>
    </Flex>
  )
}

export default HomeSection6