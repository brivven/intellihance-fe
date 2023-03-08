import React from 'react'
import {BsStarFill} from 'react-icons/bs'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import {Flex , Box, Text, Tooltip ,Image, Avatar, Icon, useColorModeValue} from '@chakra-ui/react';


function ReviewBox({display, avatar, text, reader, reaction}) {

  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const quote = useColorModeValue('rgba(0,0,0,0.1)', 'rgba(255,255,255,0.1)');


  return (

    <Flex h='fit-content' position='relative' bgColor={bgColor} gap='18px' py='18px' borderRadius='15px' 
      direction='column' align={'center'} justify='center' display={display} transition='height 0.2s ease-out'
      w={{base:"90%", sm:"90%", md:"600px", lg:'700px', xl:'500px', '2xl':'600px' }}
    >

        <Box w='80%' h='fit-content'>                   
            <Icon as={FaQuoteLeft} fontSize={{base:"30px", sm:"40px", md:"50px" }} color={quote} />
        </Box>

        <Flex w='80%' h='fit-content' direction={'row'} gap='10px' className='animate__animated animate__fadeIn'> 
            <Avatar name={reader} src={avatar} background={'linear-gradient(to bottom, #43a3a2, #39C7C4)'} />
            <Flex w='100%' h='fit-content' direction={'column'} gap='2px' justify={'center'}> 
                <Text fontSize={'14px'} fontWeight={700} >{reader}</Text>
                <Box w='100%' h='fit-content' >
                    {[...Array(5)].map((e,i)=>(
                    <Icon key={i} as={BsStarFill} fontSize={{base:"12px", sm:"14px", md:"12px" }} color={'#39C7C4'} mr={"6px"} />
                    ))}
                </Box>
            </Flex>
        </Flex>

        <Text w='80%' fontSize={'14px'} lineHeight='30px' fontWeight={500} className='animate__animated animate__fadeIn'>
            ❝{text}❞
        </Text>

        <Box w='80%' h='fit-content' textAlign={'right'}>                   
            <Icon as={FaQuoteRight} fontSize={{base:"30px", sm:"40px", md:"50px" }} color={quote} />
        </Box>
         
        <Tooltip label='reaction'> 
        <Flex position={'absolute'} right='25px' top='25px' bgColor={useColorModeValue('gray.50', 'gray.700')} borderRadius='50%' h='50px' w='50px'
          boxShadow={useColorModeValue('0 0px 10px 0px rgba(0, 0, 0, 0.1)', '0 0px 10px 0px rgba(0, 0, 0, 0.3)')} 
          align={'center'} justify='center' cursor={'pointer'} className='animate__animated animate__fadeIn'
        >
            {reaction == 'love' ? <Image h='25px' src='https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/love-512x512.png' alt='emoji' /> : null}
            {reaction == 'like' ? <Image h='25px' src='https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/upvote-512x512.png' alt='emoji' /> : null}
            {reaction == 'wow' ? <Image h='25px' src='https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/surprised-512x512.png' alt='emoji' /> : null}
            {reaction == 'laugh' ? <Image h='25px' src='https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/funny-512x512.png' alt='emoji' /> : null}
        </Flex>
        </Tooltip>
        

    </Flex>
  )
}

export default ReviewBox