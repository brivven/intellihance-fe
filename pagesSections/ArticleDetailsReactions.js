import React, {useState} from 'react'
import {Flex , Image, Text, useColorModeValue} from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';


function ArticleDetailsReactions({articleData}) {

    
    const reactions = [ 
        {icon:'https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/upvote-512x512.png', value:articleData[0]?.interactions?.likes , name:'Like'},
        {icon:'https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/love-512x512.png', value:articleData[0]?.interactions?.hearts , name:'Love'},
        {icon:'https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/surprised-512x512.png', value:articleData[0]?.interactions?.wow  , name:'Wow'},
        {icon:'https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/funny-512x512.png', value:articleData[0]?.interactions?.laughs , name:'Funny'},
        {icon:'https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/angry-512x512.png', value:articleData[0]?.interactions?.angry , name:'Angry'},
    ];
    const color = useColorModeValue('gray.700', 'white');
    const [activeReaction, setactiveReaction] = useState(null)


    
  return (

    <Flex  w={{base:"90%", sm:"85%", md:"700px" ,lg:'900px',xl:'1200px'}} h='fit-content' direction={'column'} align="center" justify={"center"} wrap="wrap" >

        <Fade>
            <Text color={color} fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px" }} >
                what do you think?
            </Text>
        </Fade>
        <Fade >
            <Text color={color} fontWeight={500} fontSize={{base:"12px", sm:"13px", md:"14px" }} mb='15px' >
              {activeReaction !== null ? articleData[0]?.interactionsNumber +1 : articleData[0]?.interactionsNumber} reactions
            </Text>
        </Fade>


        <Flex w='100%' h='fit-content' direction={'row'} align="center" justify={"center"} gap={{base:"30px", sm:"50px", md:"60px"}}  >

          {reactions.map((reaction,i)=>(

          <Fade key={i} delay={i*100}> 
            <Flex align="center" justify={"center"} gap='5px' direction={'column'} cursor='pointer' 
              _hover={{opacity:0.75}} onClick={()=> setactiveReaction(reaction.name)} transitionDuration='0.2s'
            >

              <Image src={reaction.icon} h={{base:"26px", sm:"30px", md:"40px" }} alt='emoji' />

              <Text fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px" }} 
                color={activeReaction === reaction.name ? '#39C7C4' : useColorModeValue('gray.700' , 'white')}
              >
                {activeReaction === reaction.name ? reaction.value+1 : reaction.value}
              </Text>

              <Text color={activeReaction === reaction.name ? '#39C7C4' : color} fontWeight={500} 
                fontSize={{base:"10px", sm:"11px", md:"12px" }} 
              >
                {reaction.name}
              </Text>

            </Flex>
          </Fade>
          ))}

        </Flex>


    </Flex>
  )
}

export default ArticleDetailsReactions