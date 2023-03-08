import React from 'react'
import {Flex , Icon , Text, Avatar, useColorModeValue} from '@chakra-ui/react';
import {RiTimerLine} from 'react-icons/ri'
import {FiClock} from 'react-icons/fi'
import {BiCategory} from 'react-icons/bi'



function ArticleDetailsInfo({articleData}) {

    const color = useColorModeValue('gray.700', 'white');
    const DateOptions = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };


  return (
    
    <Flex w={{base:"90%", sm:"85%", md:"700px" ,lg:'900px',xl:'1200px'}} h='fit-content' align="center" 
      justify={{base:"flex-start", sm:"flex-start", md:"center"}} wrap="wrap" 
      columnGap={{base:"15px", sm:"20px", md:"40px"}} rowGap={{base:"5px", sm:"10px", md:"30px"}}
    >

      <Flex align="center" justify={"center"} gap='6px' style={{animationDelay: '100ms' }} className="animate__animated animate__fadeInDown">
          <Avatar src='https://res.cloudinary.com/dlbr9wrif/image/upload/v1675577989/face7_spqunt.jpg' name='Celine Heidi' size='sm' />
          <Text color={color} fontSize={{base:"11px", sm:"13px", md:"14px" }}> By <span style={{color:'#39C7C4'}}>Celine Heidi</span>  </Text>
      </Flex>

      <Flex align="center" justify={"center"} gap='3px' style={{animationDelay: '200ms' }} className="animate__animated animate__fadeInDown">
        <Icon as={FiClock} fontSize={{base:"14px", sm:"14px", md:"16px" }} />
        <Text color={color} fontSize={{base:"11px", sm:"13px", md:"14px" }}>{(new Date(articleData[0]?.createdAt)).toLocaleDateString("en-US", DateOptions)}</Text>
      </Flex>

      <Flex align="center" justify={"center"} gap='3px' style={{animationDelay: '300ms' }} className="animate__animated animate__fadeInDown">
        <Icon as={RiTimerLine} fontSize={{base:"14px", sm:"14px", md:"16px" }} />
        <Text color={color} fontSize={{base:"11px", sm:"13px", md:"14px" }}>7 min read</Text>
      </Flex>

      <Flex align="center" justify={"center"} gap='3px' style={{animationDelay: '300ms' }} className="animate__animated animate__fadeInDown">
        <Icon as={BiCategory} fontSize={{base:"14px", sm:"14px", md:"16px" }} />
        <Text color={color} fontSize={{base:"11px", sm:"13px", md:"14px" }}>{articleData[0]?.category}</Text>
      </Flex>

    </Flex>
  )
}

export default ArticleDetailsInfo