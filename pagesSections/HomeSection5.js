import React from 'react'
import {Flex , Box, Text, Image , useColorModeValue} from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';
import ParticlesBackground from './tsparticles-bg/ParticlesBackground';
import ReviewBox from './ReviewBox';
import { useState } from 'react';
import ReviewIntro from './ReviewIntro';



function HomeSection5() {


  const bgColor = useColorModeValue('gray.200', 'gray.800');
  const color = useColorModeValue('gray.700', 'white');

  const Reviews = [{src: 'c1.png',revNbr: 1}, {src: 'c2.png',revNbr: 2},{src: 'c3.png',revNbr: 3},
    {src: 'c4.png',revNbr: 4}, {src: 'c5.png',revNbr: 5} 
  ];

  const ReviewsContent = [{reader: 'Dwayne Alexander', avatar: 'c1.png', revNbr: 1, reaction:'love', text: 'One of the things I love most about this blog is that it doesnt just focus on quick fixes or trendy diets. Instead, the author emphasizes the importance of making sustainable lifestyle changes that will lead to long-term health benefits. They provide practical tips and actionable advice that readers can incorporate into their daily lives' },
    {reader: 'Charlotte Patel', avatar: 'c2.png', revNbr: 2, reaction:'like', text: 'What I appreciate most about this blog is the authors passion for her craft and her ability to inspire readers to embrace their individuality. The posts are both inspiring and practical, leaving me feeling motivated and empowered to live my best life. Overall, I highly recommend this lifestyle blog to anyone seeking inspiration and advice for a more fulfilling life.' },
    {reader: 'William Hernandez', avatar: 'c3.png', revNbr: 3, reaction:'love', text: 'As an aspiring photographer, I was thrilled to discover this photography blog on a website. The posts were incredibly informative and covered a diverse range of topics, from equipment reviews to composition techniques.' },
    {reader: 'Sophia Davis', avatar: 'c4.png', revNbr: 4, reaction:'wow', text: 'As AI continues to develop and become more advanced, it will be increasingly important to carefully consider its implications and ensure that it is used in an ethical and responsible manner. This will require collaboration between technologists, policymakers, and society as a whole to ensure that the benefits of AI are maximized while minimizing the risks.' },
    {reader: 'Ethan Nguyen', avatar: 'c5.png', revNbr: 5, reaction:'laugh', text: 'The lifestyle section was a feast for the senses, offering a glimpse into the world of the rich and famous. The stunning photography and detailed descriptions of exotic locales and high-end products left me feeling both inspired and envious. While the blogs focus on luxury living may not be accessible to everyone, it provided a fascinating window into a world that many of us only dream of.' },
  ];

  const [activeReview, setactiveReview] = useState(3);

  

  return (

    <Box h='fit-content' bgColor={bgColor} w='100%' py={'100px'} position='relative'
    >

        <Box w='90%' mx='auto' textAlign={'center'} mb={"50px"} >
          <Fade bottom> 
            <Text w='fit-content' mx='auto' fontSize={{base:'18px', sm:'20px', md:'24px' }} fontWeight={600} className='title-underline'
              color={color} 
            >
              Readers Feedback
            </Text>
          </Fade>
        </Box>


        <Flex w='100%' mx='auto' py='20px' boxSizing='border-box' position='relative' h='fit-content' align={'center'} justify='center' 
          direction={{base:"column", sm:"column", md:"column", lg:'column', xl:'row' }} 
          gap={{base:"40px", sm:"80px", md:"80px", lg:'80px', xl:'100px', '2xl':'120px' }} 
        >

          <Fade delay={100} left> 
            <ReviewIntro />
          </Fade>

          <Fade delay={350} right> 
          <Flex w='fit-content' h='100%' direction={'column'} align={'center'} justify='center'>

            <Flex w={{base:"90%", sm:"90%", md:"600px", lg:'700px', xl:'500px', '2xl':'600px' }} h='100px' 
              align={'center'} justify='center' gap={{base:'15px', sm:'20px', md:'25px'}}
            > 
              {Reviews.map((rev, index)=>(
              <Box key={index} w={{base:'40px', sm:'50px', md:'60px'}} h={{base:'40px', sm:'50px', md:'60px'}}
                background={'linear-gradient(to bottom, #43a3a2, #39C7C4)'} overflow='hidden' 
                borderRadius={'50%'} onClick={() => setactiveReview(rev.revNbr)} opacity={activeReview == rev.revNbr ? '1' : '0.45'}
                cursor='pointer' transform={activeReview == rev.revNbr ? 'scale(1)' : (activeReview !== rev.revNbr && rev.revNbr % 2) ? 'scale(0.6)' : 'scale(0.8)' }
                _hover={{opacity:'1'}} transitionDuration='0.2s'
              >
                <Image src={rev.src} w='100%' h='100%' />
              </Box>
              ))}            
            </Flex>

            {ReviewsContent.map((review,i)=>(
              <ReviewBox key={i} display={review.revNbr == activeReview ? 'flex' : 'none'} avatar={review.avatar} text={review.text} 
                reader={review.reader} reaction={review.reaction} 
              />
            ))}

          </Flex>
          </Fade>
          
        </Flex>


    </Box>
  )
}

export default HomeSection5