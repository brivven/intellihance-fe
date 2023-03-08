import React from 'react'
import {Flex , Box, Text, Button, Image, useColorModeValue } from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link'
import { CustomLeftArrow, CustomRightArrow, responsive } from './CarouselComponents';

function HomeSection3() {


    const faces = [{name:'Jihad Avgusta', job:'Writer', src:'https://res.cloudinary.com/dlbr9wrif/image/upload/v1675577315/face1_qj0fmp.jpg'},
    {name:' Nathalie Jasna', job:'Photographer', src:'https://res.cloudinary.com/dlbr9wrif/image/upload/v1675577399/face2_bazpvq.jpg'},
    {name:'Akhil Ismael', job:'Writer', src:'https://res.cloudinary.com/dlbr9wrif/image/upload/v1675577501/face3_rw9p8j.jpg'},
    {name:'Heino Jae', job:'Artist', src:'https://res.cloudinary.com/dlbr9wrif/image/upload/v1675577704/face4_ho6zyo.jpg'},
    {name:'Nenad Comgal', job:'Traveler', src:'https://res.cloudinary.com/dlbr9wrif/image/upload/v1675886676/face5_swxph6.jpg'},
    {name:'Wilbert Juozas', job:'Business manager', src:'https://res.cloudinary.com/dlbr9wrif/image/upload/v1675577814/face6_pbrwsd.jpg'},
    {name:'Celine Heidi', job:'Health expert', src:'https://res.cloudinary.com/dlbr9wrif/image/upload/v1675577989/face7_spqunt.jpg'},
    ];

  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const color = useColorModeValue('gray.700', 'white');
  const btnBg = useColorModeValue('gray.100', 'rgba(0,0,0,0.3)');
  const blacknwhite = useColorModeValue('gray.800', 'white');

    
  return (

    <Box h='fit-content' bgColor={bgColor} w='100%' py={'100px'} position='relative' >
      
        <Box w='90%' mx='auto' textAlign={'center'} mb={"50px"} >
          <Fade bottom> 
            <Text w='fit-content' mx='auto' fontSize={{base:'18px', sm:'20px', md:'24px' }} fontWeight={600} className='title-underline'
              color={color} 
            >
              The Faces Behind Intellihance
            </Text>
          </Fade>
        </Box>


        <Flex w={{base:"95%", sm:"85%", md:"75%" }} flex='none' mx='auto' justify='center' bgColor={'transparent'} align={'center'} 
          boxSizing='border-box' overflow={'hidden'} position='relative' 
        >
          <Carousel responsive={responsive} containerClass="carousel-container" infinite={true} dotListClass="custom-dot-list-style"
            customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />}
          >

            {faces.map((person , index)=>(
            <Fade key={index} > 
              <Flex key={index} w={{base:"260px", sm:"270px", md:"280px" }} h='245px' mx='auto' bgColor={'transparent'} align={'center'} justify='center' direction={'column'} 
                overflow='hidden' flexShrink={0}  position='relative' transform={'skew(-10deg)'} cursor='pointer' borderRadius='15px'
              >
                <Image src={person.src} h='100%' w='100%' transform={'skew(10deg) scale(1.2)'} />
                <Flex w='100%' h='100%' position={'absolute'} top={0} left={0} bottom={0} right={0} zIndex='10'
                  background='rgba(0, 0, 0, 0.3)' align={'center'} justify='center' direction={'column'} 
                  _hover={{background:'rgba(0, 0, 0, 0.0)', transitionDuration:'0.2s'}}
                >
                  <Text fontWeight={600} fontSize={{base:"14px", sm:"14px", md:"15px" }} position={'relative'} top='60px' letterSpacing={'1px'} 
                    textShadow={'0px 2px 0px rgba(12, 12, 235,0.2)'} transform={'skew(10deg)'} color={'white'} textTransform={'uppercase'}
                  >
                    {person.name}
                  </Text>
                  <Text fontWeight={600} fontSize={{base:"11px", sm:"12px", md:"12px" }} position={'relative'} top='60px' letterSpacing={'1px'}transform={'skew(10deg)'} 
                    textShadow={'0px 2px 0px rgba(12, 12, 235,0.2)'} color='gray.200'
                  >
                    {person.job}
                  </Text>
                </Flex>
              </Flex>
            </Fade>
            ))}

          </Carousel>
        </Flex>


        <Box w='100%' textAlign={'center'} mt='50px' >
          <Fade bottom delay={200} > 
            <Link href='/explore' > 
              <Button bgColor={btnBg} borderRadius='15px'  border='2px solid' borderColor={blacknwhite} fontSize={{base:"11px", sm:"12px", md:"14px" }}
                fontWeight={600} _hover={{bgColor:'#39C7C4', border:'1px solid transparent', color:'black'}} px={"25px"} h='32px' _active={{opacity:'0.5'}} boxShadow='md'
              >
                <Text >Read more from them</Text>
              </Button>
            </Link>
          </Fade>
        </Box>

    </Box>
  )
}

export default HomeSection3