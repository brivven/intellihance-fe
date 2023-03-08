import React from 'react'
import {Flex, Skeleton ,SkeletonCircle, useColorModeValue } from '@chakra-ui/react'


function ExploreCategoriesSkeleton() {

    const bgColor = useColorModeValue('gray.50', 'gray.800');

  return (

    <Flex w='100%' bgColor={bgColor} align={'center'} justify='center' h='80px' position={'relative'} 
        overflow={'hidden'} gap={{base:"10px", sm:"15px", md:"30px" }}
    > 
        {[...Array(14)].map((v,i)=>(  
            <Flex key={i} w='fit-content' h='fit-content' align={'center'} justify='center' direction={'column'} px='20px'
                flexShrink={0}  position='relative' cursor='pointer' borderRadius='15px' bgColor='transparent' gap='5px' 
            >
                <SkeletonCircle size='7' animation={'2s shine linear infinite'} 
                  background={useColorModeValue('linear-gradient( to left, #E2E8F0,#E2E8F0)', 'linear-gradient( to left, #2D3748, #4A5568)' )} 
                />
                <Skeleton h='12px' animation={'2s shine linear infinite'} 
                  background={useColorModeValue('linear-gradient( to left, #E2E8F0,#E2E8F0)', 'linear-gradient( to left, #2D3748, #4A5568)' )} 
                >health 
                </Skeleton>
            </Flex>
        ))}

    </Flex>
  )
}

export default ExploreCategoriesSkeleton