import { Icon, useColorModeValue } from '@chakra-ui/react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import {RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri'


export const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 800 },
      items: 4,
      slidesToSlide: 2 
    },
    desktop: {
      breakpoint: { max: 800, min: 600 },
      items: 2,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 600, min: 450 },
      items: 1.5,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
};
export const responsive2 = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1700 },
    items: 15,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1000 },
    items: 11,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1000, min: 450 },
    items: 7,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 450, min: 0 },
    items: 4,
    slidesToSlide: 1,
  }
};



export const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  return <Icon as={RiArrowLeftSLine} cursor='pointer' fontSize={{base:"22px", sm:"24px", md:"28px" }} left='5px' boxShadow={'xl'}
    zIndex={100} position='absolute' onClick={() => onClick()} color={useColorModeValue('white','gray.700')} 
    _hover={{opacity:0.7}} transitionDuration='0.2s' bgColor={useColorModeValue('gray.800','white')} borderRadius='50%'
  />
};

export const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  return <Icon as={RiArrowRightSLine} fontSize={{base:"22px", sm:"24px", md:"28px" }}  right='5px' zIndex={100} boxShadow={'xl'}
    position='absolute' onClick={() => onClick()}  cursor='pointer' color={useColorModeValue('white','gray.700')} 
    _hover={{opacity:0.7}} transitionDuration='0.2s' bgColor={useColorModeValue('gray.800','white')} borderRadius='50%'
  />
};