import React  from 'react'
import {Flex , Box, Text, Button, Image ,useColorModeValue} from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';
import Link from 'next/link'


function HomeSection4() {

  const bg = useColorModeValue('white', 'gray.800');

  return (

    <Box h='fit-content' bgColor={bg} w='100%' position='relative'
    >

      <Fade >
        <Image w='100%' h='650px' src='https://res.cloudinary.com/dlbr9wrif/image/upload/v1676101720/team_usavxl.jpg' />
      </Fade>

      <Box w='100%' h='100%' position={'absolute'} top={0} left={0} bottom={0} right={0} zIndex='10'
        background='rgba(3, 10, 30,0.8)' align={'center'} justify='center' direction={'column'} gap='20px'
      />

      <Flex w={{base:"90%", sm:"85%", md:"50%" }}  h='fit-content' position={'absolute'} top={'50%'} left='50%' transitionDuration={'0.2s'} 
        background='transparent' align={'center'} justify='center' direction={'column'} gap='5px' transform='translate(-50%,-50%)' zIndex='12'
      >
        <Fade top delay={0}>
          <Text fontSize={{base:'16px', sm:'20px', md:'24px'}} fontWeight={600} color='white' textAlign={'center'} w='fit-content' mx='auto'  >
            We welcome inquiries from individuals and organizations seeking <span style={{color:'#39C7C4'}}>employment</span> opportunities, 
            <span style={{color:'#39C7C4'}}> sponsorships</span>, or other forms of <span style={{color:'#39C7C4'}}>collaboration</span>. <br/>
            Please don't hesitate to <span style={{color:'#39C7C4'}}>contact us</span>
          </Text>
        </Fade>

        <Fade top delay={200}>
          <Link href='contact-us'> 
            <Button bgColor={'white'} borderRadius='15px' fontSize={{base:"12px", sm:"14px", md:"16px" }}
              fontWeight={600} _hover={{bgColor:'#39C7C4', color:'black'}} px={"25px"} h='32px' color='gray.800'
              _active={{opacity:'0.5'}} boxShadow='md' mt='15px'
            >
              <Text>Contact us Now</Text>
            </Button>
          </Link>
        </Fade>

      </Flex>

    </Box>
  )
}

export default HomeSection4