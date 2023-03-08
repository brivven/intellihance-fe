import React from 'react'
import {Flex, Skeleton ,Box, useColorModeValue } from '@chakra-ui/react'


function ExploreSearchSkeleton() {

    const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (

    <Flex w='90%' bgColor={bgColor} align={'center'} justify='center' py='25px' gap={{base:"10px", sm:"10px", md:"15px" }} >
        <Box w={{base:"80%", sm:"80%", md:"400px" }} height='40px' borderRadius={'15px'} 
          background={useColorModeValue('linear-gradient( to left, #CBD5E0,#CBD5E0)', 'linear-gradient( to left, #1A202C, #202630)')}
          animation={'2s shine linear infinite'} 
        />
        <Skeleton px={{base:'5px',sm:'10px', md:'25px' }} height='40px' borderRadius={'15px'} animation={'2s shine linear infinite'}
          background={useColorModeValue('linear-gradient( to left, #CBD5E0,#CBD5E0)', 'linear-gradient( to left, #1A202C, #202630)')} 
        >Filters </Skeleton>

    </Flex>
  )
}

export default ExploreSearchSkeleton