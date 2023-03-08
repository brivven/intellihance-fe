import React, {useState, useEffect} from 'react'
import {Flex ,Image, Text, useColorModeValue, Divider} from '@chakra-ui/react';
import Head from 'next/head'
import axios from 'axios'

import ReviewForm from '../../pagesSections/ReviewForm';
import ArticleDetailsReactions from '../../pagesSections/ArticleDetailsReactions';
import ArticleDetailsInfo from '../../pagesSections/ArticleDetailsInfo';
import ArticleDetailsShare from '../../pagesSections/ArticleDetailsShare';
import ArticleDetailsRatingOverview from '../../pagesSections/ArticleDetailsRatingOverview';
import ArticleDetailsRatingBox from '../../pagesSections/ArticleDetailsRatingBox';
import ArticleDetailsContent from '../../pagesSections/ArticleDetailsContent';
 



function PropertyDetails({articleData}) {


  const PageBg = useColorModeValue('gray.50' , 'gray.700')
  const color = useColorModeValue('gray.700', 'white');
  const [showReviewForm, setshowReviewForm] = useState(false);
  const [RatingsNumbers, setRatingsNumbers] = useState({});


  useEffect(() => {
    setRatingsNumbers(ratingSystem(articleData[0]?.reviews))
  }, []);
  

  const ratingSystem = (reviews) => {
    const numberOfRatings = {oneStar: 0, twoStar: 0, threeStar: 0, fourStar: 0, fiveStar: 0}
    reviews.map((review,i)=>{
      if(review.rating === 5){numberOfRatings.fiveStar = numberOfRatings.fiveStar+1 }
      if(review.rating === 4){numberOfRatings.fourStar = numberOfRatings.fourStar+1 }
      if(review.rating === 3){numberOfRatings.threeStar = numberOfRatings.threeStar+1}
      if(review.rating === 2){numberOfRatings.twoStar = numberOfRatings.twoStar+1}
      if(review.rating === 1){numberOfRatings.oneStar = numberOfRatings.oneStar+1}
    })
    return numberOfRatings
  }

  const ratings = [
    {rating: 5, raters: RatingsNumbers.fiveStar, percentage: articleData[0]?.reviews?.length == 0 ? 0 : (RatingsNumbers.fiveStar / articleData[0]?.reviews?.length)*100},
    {rating: 4, raters: RatingsNumbers.fourStar, percentage: articleData[0]?.reviews?.length == 0 ? 0 : (RatingsNumbers.fourStar / articleData[0]?.reviews?.length)*100},
    {rating: 3, raters: RatingsNumbers.threeStar, percentage: articleData[0]?.reviews?.length == 0 ? 0 : (RatingsNumbers.threeStar / articleData[0]?.reviews?.length)*100},
    {rating: 2, raters: RatingsNumbers.twoStar, percentage: articleData[0]?.reviews?.length == 0 ? 0 : (RatingsNumbers.twoStar / articleData[0]?.reviews?.length)*100},
    {rating: 1, raters: RatingsNumbers.oneStar, percentage: articleData[0]?.reviews?.length == 0 ? 0 : (RatingsNumbers.oneStar / articleData[0]?.reviews?.length)*100},
  ];




  return (
    <>
      <Head>
        <title>{articleData[0]?.title}</title>
      </Head>
      <Flex w="100%" h="fit-content" bgColor={PageBg} flexDirection='column' align="center" justify={"flex-start"} wrap="wrap" pb='300px' 
        pt='50px' gap='15px'
      >


        <Text w={{base:"90%", sm:"80%", md:"600px" ,lg:'800px',xl:'1000px'}} textAlign={'center'} color={color} fontWeight={700} 
          fontSize={{base:"18px", sm:"20px", md:"22px" ,lg:'24px',xl:'26px'}} className="animate__animated animate__fadeInDown" 
          mb='10px'
        >
          {articleData[0]?.title}
        </Text> 


        <ArticleDetailsInfo articleData={articleData} />


        <ArticleDetailsShare articleData={articleData} />



        <Image src={articleData[0]?.image} alt='article-img' w={{base:"90%", sm:"85%", md:"700px" ,lg:'900px',xl:'1200px'}} maxH={'600px'} borderRadius='3px' 
          style={{animationDelay: '500ms' }} className="animate__animated animate__fadeIn" 
        />



        <ArticleDetailsContent articleData={articleData} />



        <Divider w={{base:"20%", sm:"100px", md:"100px" }} borderColor={useColorModeValue('gray.400', 'gray.500')} my='25px' />


        <ArticleDetailsReactions articleData={articleData} />


        <Divider w={{base:"20%", sm:"100px", md:"100px" }} borderColor={useColorModeValue('gray.400', 'gray.500')} my='25px' />


        <ArticleDetailsRatingOverview articleData={articleData} ratings={ratings} setshowReviewForm={setshowReviewForm} />


        {articleData[0]?.reviews?.length == 0 ? null : 
        <Divider w={{base:"20%", sm:"100px", md:"100px" }} borderColor={useColorModeValue('gray.400', 'gray.500')} my='25px' />
        }


        {articleData[0]?.reviews?.length == 0 ? null : 
        <ArticleDetailsRatingBox articleData={articleData} />
        }


        {showReviewForm ? <ReviewForm articleID={articleData[0]?._id} closeForm={() => setshowReviewForm(false)} /> : null }


      </Flex>
    </>
  )
}


export default PropertyDetails;



export async function getServerSideProps ( {params:{slug}} ) {

  const endpoint = process.env.NODE_ENV === 'development' ? process.env.backend_dev_url : process.env.backend_prod_url

  try {
    const response = await axios.get(`${endpoint}/Articles/${slug}`)
    return{
      props:{
        articleData: response?.data?.articleData
      }
    }
  } catch (error) {
    return{
      props:{
        articleData: null
      }
    }
  }
}

