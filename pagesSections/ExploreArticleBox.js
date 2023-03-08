import React from 'react'
import {Flex , Icon , Image, Box , Text, useColorModeValue} from '@chakra-ui/react';
import {BsEmojiSunglassesFill, BsStarFill} from 'react-icons/bs'
import {FiClock} from 'react-icons/fi'



function ExploreArticleBox({ArticleData, delay}) {


  const text = useColorModeValue('gray.700', 'white');
  const text2 = useColorModeValue('gray.600', 'gray.300');

  const DateOptions = { weekday: undefined, year: 'numeric', month: 'short', day: 'numeric' };


  return (
  
    <Box w='100%' h='fit-content' position={'relative'} className='animate__animated animate__fadeIn' 
      overflow='hidden'  bgColor={'transparent'} style={{animationDelay: (delay/15)+'s' }}
    >
  
        <Box w='100%' h={{base:"200px", sm:"230px" }} borderRadius='15px' position='relative' overflow={'hidden'}
          background={useColorModeValue('linear-gradient( to left, #CBD5E0,#CBD5E0)', 'linear-gradient( to left, #1A202C, #171923)')}
        >
          <Image src={ArticleData.image} w='100%' h='100%' alt='art-img'
             borderRadius='15px' transition={'0.2s ease'}
          />
          <Text fontSize={{base:'11px', sm:'12px', md:'12px'}} px='10px' py='2px' borderRadius='15px' w='fit-content'
            bgColor={'#0eede8'} color='gray.700' boxShadow='2xl' position={'absolute'} top='15px' left='15px' fontWeight={600}
          >
            {ArticleData.category}
          </Text>
        </Box>


        <Flex w='100%' h={{base:"110px", sm:"125px", md:'135px' }} align={'flex-start'} justify='space-between' direction='column' mt='1px' py='10px'>

            <Flex w='100%' justify={'space-between'} direction='row' >

              <Flex w='100%' align={'flex-start'} justify='flex-start' color={text2} >
                <Text fontSize={{base:'11px', sm:'12px', md:'13px'}} fontWeight={600} mr={"4px"} >
                  {(new Date(ArticleData.createdAt)).toLocaleDateString("en-US", DateOptions)}
                </Text>
                <Icon as={FiClock} fontSize={{base:"14px", sm:"14px", md:"16px" }} />
              </Flex> 

              <Flex alignItems='center' justify='center' gap='4px' color={useColorModeValue('#eb9621', '#eda43e')} >
                <Icon as={BsStarFill} fontSize={{base:"14px", sm:"14px", md:"16px" }} mb='3px' />
                <Text fontSize={{base:'11px', sm:'12px', md:'14px'}} fontWeight={600} >{ArticleData.rating}</Text>
              </Flex>

            </Flex>

            <Text w='100%' color={text} textAlign={'left'} fontWeight={600} 
              fontSize={{base:'12px', sm:'13px', md:'14px'}} 
            >
              {ArticleData.title}
            </Text>

            <Flex w='100%' align={'center'} justify='flex-start' color={useColorModeValue('#db9d0b', '#ffcb4c')} >
              <Text fontSize={{base:'11px', sm:'12px', md:'13px'}} mr={"4px"} fontWeight={600} > {ArticleData.interactionsNumber} Reaction</Text>
              <Icon as={BsEmojiSunglassesFill} fontSize={{base:"14px", sm:"14px", md:"16px" }} />
            </Flex>


        </Flex>

    </Box>
  )
}

export default ExploreArticleBox