import React from 'react'
import {Flex , Icon , Box , Text, Avatar, useColorModeValue} from '@chakra-ui/react';
import {BsStar, BsStarFill} from 'react-icons/bs'
import Fade from 'react-reveal/Fade';


function ArticleDetailsRatingBox({articleData}) {

    const bg = useColorModeValue('gray.200' , 'gray.800')
    const color = useColorModeValue('gray.700', 'white');
    const DateOptions = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };



  return (
    <Flex w={{base:"90%", sm:"85%", md:"700px" ,lg:'900px',xl:'1200px'}} direction='column' align="center" justify={"center"} gap='30px' > 


      <Fade>
        <Text color={color} fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px" }} >Readers reviews</Text>
      </Fade>

      {articleData[0]?.reviews.map((review,i)=>(
        <Flex key={i} w='100%' bgColor={bg} direction='column' gap='15px' p='25px' borderRadius={'15px'}> 
          
          <Flex gap='10px' className='animate__animated animate__fadeIn' > 

            <Avatar bgColor={'gray.500'} name={review.author} />

            <Flex w='100%' h='fit-content' direction={'column'} align={'flex-start'} justify={'center'}> 
              <Text fontSize={{base:"13px", sm:"13px", md:"14px" }} fontWeight={700} >{review.author}</Text>
              <Box w='100%' h='fit-content' >
                {[...Array(5)].map((e,i)=>{
                  if(review.rating > i){
                    return( <Icon key={i} as={BsStarFill} fontSize={{base:"12px", sm:"13px", md:"14px" }} color={'#39C7C4'} mr='6px' />)
                  }
                  else{
                    return( <Icon key={i} as={BsStar} fontSize={{base:"12px", sm:"13px", md:"14px" }} color={color} mr='6px' />)
                  }
                })}
              </Box>
            </Flex>

            <Text w='50%' textAlign={'right'} color={color} fontSize={{base:"11px", sm:"12px", md:"13px" }} >
              {(new Date(review.createdAt)).toLocaleDateString("en-US", DateOptions)}
            </Text>

          </Flex>

          <Fade delay={100}> 
            <Text w='100%' mx='auto' fontSize={{base:"12px", sm:"13px", md:"14px" }} lineHeight='30px' fontWeight={500} className='animate__animated animate__fadeIn'>
              ❝{review.content}❞
            </Text>
          </Fade>

        </Flex>
      ))}


    </Flex>
  )
}

export default ArticleDetailsRatingBox