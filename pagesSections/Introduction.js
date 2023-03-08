import React from 'react'
import Fade from 'react-reveal/Fade';
import {Flex , Text, useColorModeValue} from '@chakra-ui/react';


export default function Introduction() {

  const textColor = useColorModeValue('gray.700', 'gray.300');
  const textColor2 = useColorModeValue('gray.700', 'white');

  const Introduction = [
    'Welcome to our website! We are a trusted source of information and inspiration for our dedicated fan base. Our blog has been providing high-quality content for [insert number of years] years, and our commitment to excellence has earned us a reputation as a credible and reliable source for every possible topic.',
    'We take pride in our ability to provide insightful and informative content that is based on in-depth research and analysis. Our team of experienced writers, editors, and subject matter experts work tirelessly to bring you the latest news, trends, and insights in every category.',
    'Whether youre a seasoned expert or a curious newcomer, our blog is the perfect destination for anyone looking to expand their knowledge and stay up-to-date on the latest developments in every possible topic. So why not join our community of passionate readers today and start exploring the exciting world of every topic with us!',
  ];

  return (
    <Flex w='90%' h='80%' overflowY={'scroll'} p='20px' direction={'column'} >
      <Fade>
        <Text w='100%' fontSize={'20px'} color={textColor2} mb={"20px"}>Introduction to Intellihance</Text>
      </Fade>
      <Fade delay={250} >
        {Introduction.map((term , index) => (
          <Text w='100%' fontSize={'14px'} my={3} color={textColor} key={index} >{term} </Text>   
        ))}
      </Fade>
    </Flex>
  )
}