import React from 'react'
import {Box , useColorModeValue } from '@chakra-ui/react'
import ExploreArticleBox from './ExploreArticleBox';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import ArticleBoxSkeleton from './ArticleBoxSkeleton';



function ExploreArticles({Articles}) {


    const bgColor = useColorModeValue('gray.200', 'gray.700');
    const [ArticlesLoaded, setArticlesLoaded] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setArticlesLoaded(true)
      }
      , 1000);
    }, []);
    useEffect(() => {
      setArticlesLoaded(false)
      setTimeout(() => {
        setArticlesLoaded(true)
      }
      , 500);
    }, [Articles]);
    

  return (

    <Box w='100%' bgColor={bgColor} display={'grid'} justifyContent='center' gridColumnGap={{base:"15px", sm:"35px" }} gridRowGap='45px'
      gridTemplateColumns={{base:'repeat(auto-fill, 95%)', sm:'repeat(auto-fill, 300px)',md:'repeat(auto-fill, 275px)'  }} h='fit-content' px='25px' py='35px' 
    >

      {ArticlesLoaded ?
        Articles.map((article , index)=>(  
        <Box key={index} w={{base:"100%", sm:"300px", md:'275px' }} h={'fit-content'} overflow='hidden' borderRadius='15px' className='explore-box'>
            <Link href={`/explore/${article.titleSlug}`}> 
                <ExploreArticleBox ArticleData={article} delay={index} />
            </Link>
        </Box>
        ))
        :
        [...Array(8)].map((v,i)=>(  
          <ArticleBoxSkeleton key={i} />
          ))
        }

    </Box>
  )
}

export default ExploreArticles