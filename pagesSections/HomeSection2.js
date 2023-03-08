import React from 'react'
import {Flex , Box, Text, Button, Icon, Image, useColorModeValue } from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';
import Link from 'next/link'


function HomeSection2() {

  const categories = [{name:'Guides', src:'category1.png', href: '/explore?category=Guides'}, 
    {name:'Health', src:'category2.png', href: '/explore?category=Health'},
    {name:'Tech', src:'category3.png', href: '/explore?category=Tech'},
    {name:'Travel', src:'category4.png', href: '/explore?category=Travel'},
    {name:'WildLife', src:'category5.png', href: '/explore?category=WildLife'},
    {name:'Lifestyle', src:'category6.png', href: '/explore?category=Lifestyle'},
  ];

  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const color = useColorModeValue('gray.700', 'white');
  const boxBg = useColorModeValue('gray.200', 'gray.800');
  const btnBg = useColorModeValue('gray.50', 'rgba(0,0,0,0.3)');
  const blacknwhite = useColorModeValue('gray.700', 'white')

  

  return (
    
    <Box h='fit-content' bgColor={bgColor} w='100%' py={'100px'} position='relative' overflow={'hidden'}
    >   

        <Box w='90%' mx='auto' textAlign={'center'} mb={"50px"} >
          <Fade bottom  > 
            <Text w='fit-content' mx='auto' fontSize={{base:'18px', sm:'20px', md:'24px' }} fontWeight={700} className='title-underline'
              color={color} 
            >
              Read Our Articles By Category
            </Text>
          </Fade>
        </Box>
        

        <Flex w='90%' mx='auto' justify='center' align={'center'} boxSizing='border-box' wrap='wrap' gap='15px'  >

          {categories.map((category, index)=>(
            <Fade delay={index*150} key={index} > 
              <Link href={category.href}> 
                <Flex key={index} w={{base:"130px", sm:"155px", md:"170px" }} h={{base:"110px", sm:"120px", md:"130px" }} bgColor={boxBg} 
                  align={'center'} boxShadow={useColorModeValue('0 0px 10px 0px rgba(0, 0, 0, 0.1)', '0 0px 10px 0px rgba(0, 0, 0, 0.3)')}
                  justify='center' direction={'column'}  cursor={'pointer'} _hover={{opacity: 0.75, transitionDuration:'0.2s'}}  borderRadius='15px' 
                >
                  <Image src={category.src} h={{base:"30px", sm:"35px", md:"45px" }} />
                  <Text color={color} mt='10px' fontSize={{base:"12px", sm:"14px", md:"16px" }} >{category.name}</Text>
                </Flex>
              </Link>
            </Fade>
          ))}

        </Flex>

        <Box w='100%' textAlign={'center'} mt='50px' >
          <Fade bottom delay={200} > 
            <Link href='/explore' > 
              <Button bgColor={btnBg} borderRadius='15px'  border='2px solid' borderColor={blacknwhite} fontSize={{base:"11px", sm:"12px", md:"14px" }}  
                fontWeight={600} _hover={{bgColor:'#39C7C4', border:'1px solid transparent', color:'black'}} px={"25px"} h='32px' _active={{opacity:'0.5'}} boxShadow='md'
              >
                <Text >Explore now</Text>
              </Button>
            </Link>
          </Fade>
        </Box>

    </Box>
  )
}

export default HomeSection2