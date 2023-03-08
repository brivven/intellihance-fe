import React from 'react'
import {Flex , Box, useColorModeValue } from '@chakra-ui/react';
import ArticleBox from './ArticleBox';
import { useState, useEffect } from 'react';
import Link from 'next/link'


function HomeSection1() {

  const [WaitAminute, setWaitAminute] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setWaitAminute(true)
    }, 1500);
  }, [])

  const bgColor = useColorModeValue('gray.200', 'gray.800');
  

  return (

    <Flex h='fit-content' bgColor={bgColor} w='100%' justify='center' boxSizing='border-box' wrap='wrap' 
          direction={{base:'column', sm:'column', md:'column', lg:'column', xl:'row'}} 
    >

        <Box flex={{base:'none', sm:'none', md:'none', lg:'none', xl:'1 0 0'}} 
            h={{base:'350px', sm:'350px', md:'350px', lg:'450px', xl:'800px'}} transitionDuration='0.1s' 
        > 
          {WaitAminute ?
          <Link href='/explore/nature-beauty-through-the-lens-a-guide-to-outdoor-photography-for-outdoor-enthusiasts'> 
            <ArticleBox size='lg' image='https://res.cloudinary.com/dlbr9wrif/image/upload/v1676019951/photography_1_ddgr43.jpg' category='Photography' delay={0} 
              title='Nature Beauty Through the Lens: A Guide to Outdoor Photography for Outdoor Enthusiasts' rating={4.8} date='Jan 20, 2023' reactions={15}
            /> 
          </Link>
          : null }
        </Box>
         

        <Flex flex={{base:'none', sm:'none', md:'none', lg:'none', xl:'1 0 0'}} h={{base:'700px', sm:'700px', md:'700px', lg:'700px', xl:'800px'}} 
          direction={{base:'column-reverse', sm:'column-reverse', md:'column-reverse', lg:'column-reverse', xl:'column'}} transitionDuration='0.1s'  
        >
          <Box w='100%' h='50%'  >
            {WaitAminute ? 
            <Link href='/explore/uncovering-the-secrets-of-the-asian-cormorat-fishing-style-a-journey-through-time-and-traditions'> 
              <ArticleBox size='md' image='https://res.cloudinary.com/dlbr9wrif/image/upload/v1675887464/cormorant_k6gh76.jpg' category='Lifestyle' 
                delay={3} title='Uncovering the Secrets of the Asian Cormorat Fishing Style: A Journey Through Time and Traditions'
                rating={4.5} date='Feb 28, 2023' reactions={11}
              />
            </Link>
            : null }
          </Box>

          <Flex flex='1 0 0' h='50%' direction={{base:'column', sm:'row', md:'row', lg:'row', xl:'row'}} >
            <Box w='100%' h={{base:'50%', sm:'100%', md:'100%', lg:'100%', xl:'100%'}} >
              {WaitAminute ? 
              <Link href='/explore/waking-up-to-better-health-a-guide-to-rethinking-your-current-eating-habits'> 
                <ArticleBox size='sm' image='https://res.cloudinary.com/dlbr9wrif/image/upload/v1675887471/breakfast_vqbudz.jpg' category='Health' 
                  delay={1} title='Waking Up to Better Health: A Guide to Rethinking Your Current eating Habits'
                  rating={4.6} date='Feb 15, 2023' reactions={8}
                />
              </Link>
              : null }
            </Box>
            <Box w='100%' h={{base:'50%', sm:'100%', md:'100%', lg:'100%', xl:'100%'}} >
              {WaitAminute ? 
              <Link href='/explore/from-bytes-to-business-the-data-management-approaches-of-todays-biggest-tech-companies'> 
                <ArticleBox size='sm' image='https://res.cloudinary.com/dlbr9wrif/image/upload/v1675887613/.21_ogqcvn.jpg' category='Tech' 
                  delay={2} title='From Bytes to Business: The Data Management Approaches of Todays Biggest Tech Companies'
                  rating={4.9} date='Feb 15, 2023' reactions={20}
                />
              </Link>
              : null }
            </Box>
          </Flex>

        </Flex>

    </Flex>
  )
}

export default HomeSection1