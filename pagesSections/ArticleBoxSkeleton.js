import React from 'react'
import {Flex , Icon , Image, Box , Text, useColorMode, useColorModeValue} from '@chakra-ui/react';
import {AiOutlineLike, AiOutlineClockCircle} from 'react-icons/ai'
import {HiStar} from 'react-icons/hi'
import { useState } from 'react';



function ArticleBoxSkeleton() {

  const { colorMode } = useColorMode();
  const text = useColorModeValue('gray.700', 'white');
  const text2 = useColorModeValue('gray.600', 'gray.300');


  return (
  
    <Box w='100%' h='fit-content' position={'relative'} 
      overflow='hidden'  bgColor={'transparent'} 
    >
  
        <Box w='100%' h={{base:"210px", sm:"230px" }} borderRadius='15px' position='relative'
          background={useColorModeValue('linear-gradient( to left, #CBD5E0,#CBD5E0)', 'linear-gradient( to left, #1A202C, #202630)')}
        >
        </Box>


        <Flex w='100%' h='120px' align={'flex-start'} justify='center' direction='column' mt='1px' gap='6px'>

            <Flex w='100%' justify={'space-between'} direction='row' >
                <Box w='45%' h='20px' borderRadius={'3px'}
                  background={useColorModeValue('linear-gradient( to left, #CBD5E0,#CBD5E0)', 'linear-gradient( to left, #1A202C, #202630)')}
                />
                <Box w='15%' h='20px' borderRadius={'3px'}
                  background={useColorModeValue('linear-gradient( to left, #CBD5E0,#CBD5E0)', 'linear-gradient( to left, #1A202C, #202630)')}
                />
            </Flex>
            <Box w='90%' h='20px' borderRadius={'3px'}
                background={useColorModeValue('linear-gradient( to left, #CBD5E0,#CBD5E0)', 'linear-gradient( to left, #1A202C, #202630)')}
            />
            <Box w='40%' h='20px' borderRadius={'3px'}
                background={useColorModeValue('linear-gradient( to left, #CBD5E0,#CBD5E0)', 'linear-gradient( to left, #1A202C, #202630)')}
            />
            <Box w='35%' h='20px' borderRadius={'3px'}
                background={useColorModeValue('linear-gradient( to left, #CBD5E0,#CBD5E0)', 'linear-gradient( to left, #1A202C, #202630)')}
            />  

        </Flex>

    </Box>
  )
}

export default ArticleBoxSkeleton