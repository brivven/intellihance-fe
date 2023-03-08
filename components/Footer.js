import React , { useRef, useState } from 'react'
import {Flex , Stack , InputGroup, Text, useToast, InputRightElement ,FormControl, Input, Image, Button, Icon} from '@chakra-ui/react';
import Link from 'next/link'
import { FaInstagram, FaTwitter, FaFacebook , FaLinkedinIn } from 'react-icons/fa';
import {BsTelephoneFill, BsEnvelopeFill} from 'react-icons/bs'
import {AiTwotoneMail} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import validator from 'validator';


function Footer() {

  const social_media = [ FaTwitter, FaLinkedinIn, FaFacebook, FaInstagram];
  const toast = useToast()
  const toastIdRef = useRef()
  const [email, setemail] = useState('')
  const [falseEmail, setfalseEmail] = useState(false)

  const Subscribe = () =>{
    if(validator.isEmail(email)) { 
      setfalseEmail(false)
      setemail("")
      toastIdRef.current = toast({ description: 'Congrats, You are now subscribed', status:'success', duration: 6000, isClosable: true, })
    }
    else{
      setfalseEmail(true)
    }
  }
  

  return (

    <Flex bgColor={'gray.900'} bottom={0} h='fit-content' position={"relative"} align="center" justify={'center'} w={'100%'}
      wrap='wrap' zIndex='100' pt={{base:"140px", sm:"120px", md:"120px" }}
    >
      

      <Flex h={{base:"160px", sm:"120px", md:"120px" }} bgColor={'gray.900'} w={{base:'95%',md:'85%',lg:'900px' }} 
        borderRadius={'80px'} boxSizing='border-box' position='absolute' 
        top='-60px' zIndex={10} align='center' justify={{base:"space-evenly", sm:"space-evenly", md:"space-evenly", lg:'space-between' }} wrap={'wrap'} 
        direction={{base:"column", sm:"column", md:"column", lg:'row' }} gap='0' 
        px={{base:"15px", sm:"35px", md:"50px" }}
      >

        <Text fontSize={{base:"14px", sm:"16px", md:"18px" }} fontWeight={600} color='white' w='fit-content' 
        > 
          Subscribe to our <span style={{color:'#39C7C4'}}>NewsLetter</span>
        </Text>

        <Flex maxW={{base:"100%", sm:"100%", md:"100%", lg:'65%' }} w={{base:"100%", sm:"100%", md:"80%", lg:'55%' }}
          align={'center'} justify='center' gap='15px' direction={{base:"column", sm:"row", md:"row", lg:'row' }}
        > 

          <FormControl isInvalid={falseEmail} position='relative' w='85%' borderRadius='15px'  > 
          <InputGroup border={'transparent'} w='100%' >
            <InputRightElement pointerEvents='none' color='white' fontSize={{base:"12px", sm:"14px", md:"16px" }} children={<BsEnvelopeFill />} borderRadius='15px'  />
            <Input 
              type='text' 
              value={email}
              borderRadius='15px' 
              placeholder='Enter your email'
              name='email'
              color='white'
              fontSize={{base:"12px", sm:"14px", md:"14px" }} pl='10px'
              bgColor={'gray.700'} 
              onChange={(ev) => {setemail(ev.target.value)}}
            />
          </InputGroup>
          </FormControl>

          <Button bgColor={'white '} borderRadius='15px' fontSize={{base:"11px", sm:"12px", md:"14px" }} 
            fontWeight={600} _hover={{opacity:'0.75'}} px={"18px"} h='34px' color={'gray.900'}  
            _active={{opacity:'0.5'}} boxShadow='md' onClick={Subscribe}
          >
            <Text >Subscribe</Text>
          </Button>

        </Flex>

      </Flex>





      <Stack w='90%' bgColor={'gray.900'} direction={{base:'column',md:'column',lg:'row',xl:'row'}} wrap={'wrap'} align='center' justify={'space-evenly'} spacing={8} pb={5} >

        <Flex width="fit-content" align="flex-start" justify={'center'} pb={5} >
          <Flex bgColor="transparent" align="center" justify={'center'} flexDirection='row' h='fit-content' >
            <Image src="/intellihance.png" alt="Vercel Logo" h='28px' />
          </Flex>
          <Text fontFamily='Chewy' letterSpacing={'1px'} px={1} bgColor="transparent" color='#39C7C4'
            fontSize={{base:"18px", sm:"20px", md:"22px" }} fontWeight={500} 
          > 
            Intellihance 
          </Text>
        </Flex>
        
        <Stack w='fit-content' direction='column' pb={5} align='center' >
          <Text fontSize={{base:"13px", sm:"14px", md:"16px" }}  w='fit-content' mb={2} fontWeight={600} color='white' className='title-underline'>Contact us</Text>
          <Flex fontSize={{base:"13px", sm:"14px", md:"16px" }}  direction='row' align={'center'} >
            <BsTelephoneFill color='#39C7C4' />
            <Text fontSize={{base:"11px", sm:"12px", md:"14px" }}  marginLeft={1.5} color='gray.300'> +212-456-7890 </Text>
          </Flex>
          <Flex fontSize={{base:"13px", sm:"14px", md:"16px" }}  direction='row' align={'center'} >
            <AiTwotoneMail color='#39C7C4' /> 
            <Text fontSize={{base:"11px", sm:"12px", md:"14px" }}  marginLeft={1.5} color='gray.300'>Intellihance_co@gmail.com</Text>
          </Flex>
          <Flex fontSize={{base:"13px", sm:"14px", md:"16px" }}  direction='row' align={'center'} > 
            <MdLocationOn color='#39C7C4' /> 
            <Text fontSize={{base:"11px", sm:"12px", md:"14px" }}  marginLeft={1.5} color='gray.300'>8162 Thorne Rd. Grove City, OH 43123</Text>
          </Flex>
        </Stack>

        <Stack w='fit-content' direction='column' pb={5} align='center'  >
          <Text fontSize={{base:"13px", sm:"14px", md:"16px" }} w='fit-content' mb={2} fontWeight={600} color='white' className='title-underline'>About us</Text>
          <Text fontSize={{base:"11px", sm:"12px", md:"14px" }} color='gray.300' maxWidth={{base:'280px', sm:'300px', md:'350px'}} textAlign='center' lineHeight='23px' >
            Established in 2020,
            We strive to keep our blog informative and interesting, so check back often for the latest news and insights! 
          </Text>
        </Stack>

        <Stack w='fit-content' direction='column' pb={5} align='center' >
          <Text fontSize={{base:"13px", sm:"14px", md:"16px" }}  w='fit-content' mb={2} fontWeight={600} color='white' className='title-underline'>Discover</Text>
          <Link href='explore' ><Text fontSize={{base:"11px", sm:"12px", md:"14px" }}  _hover={{textDecoration:'underline'}} color='gray.300'>Latest articles</Text></Link>
          <Link href='about-us' ><Text fontSize={{base:"11px", sm:"12px", md:"14px" }}  _hover={{textDecoration:'underline'}} color='gray.300'>Privacy policy</Text></Link>
          <Link href='about-us' ><Text fontSize={{base:"11px", sm:"12px", md:"14px" }}  _hover={{textDecoration:'underline'}} color='gray.300'>Terms of service</Text></Link>
          <Link href='about-us' ><Text fontSize={{base:"11px", sm:"12px", md:"14px" }}  _hover={{textDecoration:'underline'}} color='gray.300'>Corporate culture</Text></Link>
        </Stack>

      </Stack>



      <Stack direction={'row'} w='100%' spacing={7} color='white' align="center" justify={'center'} py={3} >
        {social_media.map((icon , index) => (
          <Button _hover={{opacity:0.8}} key={index} transitionDuration='0.2s' bgColor={'gray.700'} p={0} h='32px' >
            <Icon as={icon} fontSize={{base:"13px", sm:"14px", md:"16px" }}  cursor='pointer' style={{animationDelay: index * 150+'ms' }} className='animate__animated animate__fadeIn' />
          </Button>    
        ))}
      </Stack>

      <Text w='90%' textAlign={'center'} fontSize='12px' color='gray.300' py={3} mx='auto' className="animate__animated animate__fadeIn"> 
          Designed and Developed by <span style={{color:'#39C7C4'}}>Abdou-Salhi</span>, All rights reserved © 2023.
      </Text>


    </Flex>
  )
}

export default Footer