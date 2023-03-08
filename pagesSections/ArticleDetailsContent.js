import React from 'react'
import {Flex, Text, Image, useColorModeValue} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';



function ArticleDetailsContent({articleData}) {

    const newTheme = {
        p: props => {
          const { children } = props;
          return (
            <Text w='100%' fontSize={{base:"12px", sm:"14px", md:"16px" }} color={useColorModeValue('gray.700', 'white')} lineHeight='30px' >
              {children}  
            </Text>
          );
        },
        h4: props => {
          const { children } = props;
          return (
            <Text w='100%' fontSize={{base:"16px", sm:"18px", md:"20px" }} fontWeight={700}
              color='#39C7C4' mt='30px' >
              {children}
            </Text>
          );
        },
        img: props => {
            return(
                <Image src={props.src} alt={props.alt} w={{base:"100%", sm:"100%", md:"75%" ,lg:'65%',xl:'60%'}} maxH={'350px'} borderRadius='3px' 
                    className="animate__animated animate__fadeIn" mx='auto' mt='10px'
                />
            )
          },
    };

     
  return (

    <Flex w={{base:"90%", sm:"85%", md:"700px" ,lg:'900px',xl:'1200px'}} align='flex-start' justify='flex-start' direction='column' 
        className="animate__animated animate__fadeIn" 
    >
        <ReactMarkdown components={ChakraUIRenderer(newTheme)} children={articleData[0]?.contentMarkdown} />
    </Flex>
  )
}

export default ArticleDetailsContent