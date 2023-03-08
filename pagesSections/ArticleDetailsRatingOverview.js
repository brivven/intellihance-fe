import React from 'react'
import {Flex , Icon  ,Button, Text, Progress, useColorModeValue} from '@chakra-ui/react';
import {BsStar, BsStarFill} from 'react-icons/bs'
import {GiQuillInk} from 'react-icons/gi'
import Fade from 'react-reveal/Fade';


function ArticleDetailsRatingOverview({articleData, ratings, setshowReviewForm}) {

    const bg = useColorModeValue('gray.200' , 'gray.800')
    const color = useColorModeValue('gray.700', 'white');


  return (
    <Flex w={{base:"90%", sm:"85%", md:"700px" ,lg:'900px',xl:'1200px'}} h='fit-content' direction={'column'} align="center" justify={"center"} gap='15px' wrap="wrap" >

        <Fade>
            <Text color={color} fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px"}} >Rating overview</Text>
        </Fade>


        <Fade delay={100}> 
          <Flex direction={'row'} align="center" justify={"center"} gap='10px' borderRadius={'25px'} mb='15px' wrap='wrap' >
            <Flex direction={'row'} align="center" justify={"center"} gap='8px'> 
              {[...Array(5)].map((e,i)=>{
                if(i+1 > articleData[0]?.rating){
                  return( <Icon key={i} as={BsStar} fontSize={{base:"14px", sm:"16px", md:"18px" }} color={color} />)
                }
                else{
                  return( <Icon key={i} as={BsStarFill} fontSize={{base:"14px", sm:"16px", md:"18px" }} color={'#39C7C4'}/>)
                }
              })}
            </Flex>
            <Text color={color} fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px" }} mt='2px' >
              <span style={{color:'#39C7C4'}} >{articleData[0]?.rating}</span> <sub>/ 5</sub>
            </Text>
            <Text color={color} fontWeight={700} fontSize={{base:"11px", sm:"13px", md:"14px" }} mt='4px' >
              {articleData[0]?.rating == 0 ? ' ( no reviews yet )' : ' ( '+articleData[0]?.reviews.length+' reviews )'} 
            </Text> 
          </Flex>
        </Fade>


        <Fade delay={200}> 
          <Flex direction={'column'} align="center" justify={"center"} gap='10px' mb='15px'>
            {ratings.map((val,i)=>(
              <Flex key={i} align="center" justify={"space-between"} gap='10px' >
                <Text w={{base:"40px", sm:"50px" }} color={color} fontWeight={700} fontSize={{base:"11px", sm:"12px", md:"14px" }} >{val.rating} star</Text>
                <Progress bgColor={bg} value={val.percentage} size='md' w={{base:"160px", sm:"250px", md:"300px" }} borderRadius={'15px'} />
                <Text w={{base:"40px", sm:"50px" }} textAlign={'center'} color={color} fontWeight={700} fontSize={{base:"11px", sm:"12px", md:"14px" }} >
                  ( {val.raters} )
                </Text>
            </Flex>
            ))}
          </Flex>
        </Fade>


        <Fade delay={300}> 
          <Button bgColor={bg} borderRadius='15px' fontSize={{base:"11px", sm:"12px", md:"14px" }} color={color}
            fontWeight={500} _hover={{opacity:0.75}} px={{base:"20px", sm:"20px", md:"25px" }} h={{base:"28px", sm:"32px", md:"38px" }} 
            _active={{opacity:'0.5'}} boxShadow='sm' gap={'5px'} onClick={()=> setshowReviewForm(true)}
          >
            <Text mr='3px'>Write a review</Text>
            <Icon as={GiQuillInk} fontSize={{base:"14px", sm:"16px", md:"20px" }} />
          </Button>
        </Fade>


    </Flex>
  )
}

export default ArticleDetailsRatingOverview