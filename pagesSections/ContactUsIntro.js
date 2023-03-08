import React from 'react'
import {Flex, useColorMode,Image, Text, useColorModeValue} from '@chakra-ui/react'
import {FcCustomerSupport, FcCalendar, FcFlashOn} from 'react-icons/fc'
import { useState } from 'react';


function ContactUsIntro() {

  const { colorMode } = useColorMode();
  const [ImgLoaded, setImgLoaded] = useState(false);
  const showImg = ()=>{
    setImgLoaded(true)
  }

  return (

    <Flex w='100%' h={{base:"600px", sm:"650px", md:"700px" }} background={useColorModeValue('gray.200', 'gray.700')} position='relative' direction={'row'} overflow='hidden' >

        <Flex w='100%' h='100%' position={'absolute'} top={0} left={0} bottom={0} right={0} zIndex='14'
            background='rgba(3, 10, 30,0.8)' direction={'column'} align='center' 
        >

            <Flex w='100%' h='fit-content' direction={'column'} align='center' justify={'center'} position='relative' top={{base:"20%", sm:"23%", md:"20%" }} > 

                <Text w={{base:'90%', sm:'90%', md:'50%' }} mx='auto' color={'white'}  textAlign={'center'} fontSize={{base:"18px", sm:"20px", md:"24px" }} 
                  mb={"15px"} fontWeight={600} className='animate__animated animate__fadeInUp' style={{animationDelay: '250ms' }}
                >
                    <span style={{color:'#39C7C4'}}>Instant</span> Help Anytime: Connect with Our Support Team Now. <br/>
                      With an average response time of <span style={{color:'#39C7C4'}}>10 minutes</span> or <span style={{color:'#39C7C4'}}>less.</span> 
                </Text>

                <Text w={{base:'90%', sm:'90%', md:'50%' }} mx='auto' color='white' textAlign={'center'} fontSize={{base:'13px', sm:'13px', md:'14px'}} 
                  mb={"25px"} className='animate__animated animate__fadeInUp' style={{animationDelay: '500ms' }}
                >
                  We're excited to have you here and hope that you find the information and resources you need.<br/>
                  Whether you're a prospective employee interested in joining our team, or a partner seeking collaboration, we're here to help.
                </Text>

                <Flex w='90%' wrap='wrap' direction={'row'} gap='10px' mb='25px' className='animate__animated animate__fadeInUp' 
                  style={{animationDelay: '750ms' }} align='center' justify={'center'}
                >
                    <Flex fontSize={'16px'} direction='row' align={'center'} >
                        <FcCustomerSupport fontSize={'22px'} />
                        <Text fontSize={{base:'12px', sm:'12px', md:'14px'}} marginLeft={'2px'} color='white'>24/7 Customer Support </Text>
                    </Flex> 
                    <Flex fontSize={'16px'} direction='row' align={'center'} >
                        <FcCalendar fontSize={'22px'} />
                        <Text fontSize={{base:'12px', sm:'12px', md:'14px'}} marginLeft={'2px'} color='white'>Weekly report</Text>
                    </Flex>
                    <Flex fontSize={'16px'} direction='row' align={'center'} >
                        <FcFlashOn fontSize={'22px'} />
                        <Text fontSize={{base:'12px', sm:'12px', md:'14px'}} marginLeft={'2px'} color='white'>Fast response</Text>
                    </Flex>
                </Flex>

            </Flex>

        </Flex>


        <Flex w='100%' h='100%' align={'center'} justify='center' overflow={'hidden'} bgColor={'transparent'} >
            <Image src='https://res.cloudinary.com/dlbr9wrif/image/upload/v1676663770/contact-us_cbakcz.jpg' alt='contact us' w='100%' h='100%' 
              animation='1.5s slide-reveal forwards' onLoad={showImg}  style={ImgLoaded ?  { display: 'block' } : {display: 'none'} } 
            />
        </Flex>


        <svg viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" style={{ position:'absolute', bottom:'0%', zIndex:'16'}}>
            <path d="M 0,400 C 0,400 0,200 0,200 C 137.86666666666667,229.2 275.73333333333335,258.4 434,272 C 592.2666666666667,285.6 770.9333333333334,283.6 942,269 C 1113.0666666666666,254.4 1276.5333333333333,227.2 1440,200 C 1440,200 1440,400 1440,400 Z" 
              stroke="none" strokeWidth="0" fill={colorMode == 'light' ? '#E2E8F0' : "#2d3748" } fillOpacity="1" 
            ></path> 
        </svg>


    </Flex>
  )
}

export default ContactUsIntro