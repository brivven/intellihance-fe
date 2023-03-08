import React from 'react'
import Head from 'next/head'
import {Flex,  Button, Text, Image, useColorModeValue } from '@chakra-ui/react'
import { useState, useEffect } from 'react'; 
import ExploreSearch from '../../pagesSections/ExploreSearch';
import ExploreCategoriesSlider from '../../pagesSections/ExploreCategoriesSlider';
import ExploreArticles from '../../pagesSections/ExploreArticles';
import ExploreSearchSkeleton from '../../pagesSections/ExploreSearchSkeleton';
import ExploreCategoriesSkeleton from '../../pagesSections/ExploreCategoriesSkeleton';
import axios from 'axios'
import Noresult from '../../pagesSections/Noresult';
import { useRouter } from 'next/router';


function Explore({Articles}) {

  
    const bgColor = useColorModeValue('gray.200', 'gray.700');
    const router = useRouter();

    const [loadingComps, setloadingComps] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setloadingComps(false)
      }, 500);
    }, []);

    const [RemoveLoadMore, setRemoveLoadMore] = useState(false)

    useEffect(() => {
      if(Articles?.length < 10){
        setRemoveLoadMore(true)
      }
      else{
        setRemoveLoadMore(false)
      }
    }, [Articles]);


    const [LoadMore, setLoadMore] = useState(false);

    const handleLoadMore = ()=>{     
      if(Articles?.length < 10 ){
        return
      }
      else{
        setLoadMore(true);
        axios.get('http://localhost:3001/Articles' , { params:{
        category: router.query.category || 'All',
        skip: Articles.length,
        orderBy: router.query.orderBy || undefined,
        rating: router.query.rating || 0,
        searchKeyword: router.query.searchKeyword || undefined,
        }})
        .then((response)=>{
          if(response.data.articles.length < 10 ){
            setRemoveLoadMore(true)
            Articles.push(...response.data.articles);
          }
          else{
            Articles.push(...response.data.articles);
            setRemoveLoadMore(false)
          }
          setLoadMore(false);
        }).catch((error)=>{
          setLoadMore(false);
        });
      }

    }

    

  return (

  <>
    <Head>
        <title>Explore | Intellihance </title>
    </Head>


    <Flex w='100%' h='fit-content' align={'center'} justify='flex-start' direction={'column'} pb='200px' background={bgColor} >


      {loadingComps ? <ExploreSearchSkeleton />  : <ExploreSearch /> }

      {loadingComps ? <ExploreCategoriesSkeleton />  : <ExploreCategoriesSlider /> }

      { Articles?.length === 0 || Articles === null ? 
      <Noresult /> 
      :
      <ExploreArticles Articles={Articles} />
      }


      <Flex w='100%' h='60px' transitionDuration={'0.2s'} align='center' justify={'center'} > 
      {Articles?.length === 0 || Articles === null || LoadMore || RemoveLoadMore ?  
        null 
        :
        <Button bgColor={'white'} borderRadius='15px' border='2px solid' borderColor='white' fontSize={{base:"12px", sm:"12px", md:"14px" }}
          fontWeight={700} _hover={{bgColor:'#39C7C4', border:'1px solid transparent', color:'black'}} px={"25px"} h='32px' color='gray.700'
          _active={{opacity:'0.5'}} boxShadow='sm' my='25px' onClick={handleLoadMore}
        >
          <Text>Load More</Text>
        </Button>
        }

        {LoadMore ? <Image src='https://img.uhdpaper.com/asset/cat.gif?dl' alt='load' mixBlendMode={'multiply'} /> : null }
      </Flex>


    </Flex>
  </>
  )
}


export default Explore



export async function getServerSideProps ({query}) {

  const paramsObj = {
    category: query.category || 'All',
    skip: 0,
    orderBy: query.orderBy || 'newest',
    rating: query.rating || 0,
    searchKeyword: query.searchKeyword || undefined,
  }
  const endpoint = process.env.NODE_ENV === 'development' ? process.env.backend_dev_url : process.env.backend_prod_url

  try {
    const response = await axios.get(`${endpoint}/Articles` , {params: paramsObj})
    return{
      props:{
        Articles: response?.data?.articles
      }
    }
  } catch (error) {
    return{
      props:{
        Articles: null
      }
    }
  }
}
