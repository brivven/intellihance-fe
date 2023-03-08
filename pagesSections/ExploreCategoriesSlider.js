import React from 'react'
import {Flex, Icon, useColorModeValue, Text} from '@chakra-ui/react'
import {IoSchoolOutline , IoShirtOutline,IoAirplaneOutline} from 'react-icons/io5'
import { AiOutlineCamera } from 'react-icons/ai'
import {MdOutlineBusinessCenter, MdOutlineFastfood } from 'react-icons/md'
import {SiFoodpanda } from 'react-icons/si' 
import {BiBrain, BiCategoryAlt } from 'react-icons/bi' 
import {VscWand } from 'react-icons/vsc' 
import {BsController } from 'react-icons/bs'
import {FaRegNewspaper} from 'react-icons/fa'
import {GiLifeInTheBalance, GiMusicalNotes, GiMountainClimbing } from 'react-icons/gi'
import { CustomLeftArrow, CustomRightArrow, responsive2 } from './CarouselComponents';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react';
import { useRouter } from 'next/router'



function ExploreCategoriesSlider() {

    const bgColor = useColorModeValue('gray.50', 'gray.800');
    const iconColor = useColorModeValue('gray.600', 'gray.300');
    const iconHover = useColorModeValue('gray.800', 'white');

    const categories = [{name:'All', icon:BiCategoryAlt }, {name:'Guides', icon:IoSchoolOutline }, {name:'Health', icon:MdOutlineFastfood },
        {name:'Tech', icon:BiBrain }, {name:'Travel', icon:IoAirplaneOutline },
        {name:'WildLife', icon:SiFoodpanda }, {name:'Lifestyle', icon:GiLifeInTheBalance },
        {name:'Photography', icon:AiOutlineCamera }, {name:'Business', icon:MdOutlineBusinessCenter },
        {name:'Art', icon:VscWand }, {name:'Sports', icon:GiMountainClimbing },
        {name:'Gaming', icon:BsController }, {name:'News', icon:FaRegNewspaper },
        {name:'Fashion', icon:IoShirtOutline }, {name:'Music', icon:GiMusicalNotes } 
    ];

    const router = useRouter();
    const {category} = router.query;
    const [ActiveCategory, setActiveCategory] = useState(category || 'All')


    const handleCategoryChange = (category)=>{
        setActiveCategory(category)
        const { query } = router;
        const currentPath = router.pathname;
        query['category'] = category
        router.push( { pathname: currentPath , query } )
    }


  return (

    <Flex w='100%' bgColor={bgColor} align={'center'} justify='center' h='80px' position={'relative'} className='categories' 
        overflow={'hidden'} gap={{base:"10px", sm:"15px", md:"30px" }}
    > 

        <Carousel responsive={responsive2} containerClass="carousel-container" infinite={false} dotListClass="custom-dot-list-style"
            customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />} 
        > 
            {categories.map((category , index)=>(
            <Flex 
                key={index} 
                w='fit-content' h='fit-content' align={'center'} justify='center' direction={'column'} 
                _hover={ActiveCategory === category.name ? {transform:'scale(1.1)'} : {color: iconHover , transform:'scale(1.1)'}} 
                transitionDuration='0.2s' 
                onClick={() => handleCategoryChange(category.name)} 
                style={{animationDelay: (index/10)+'s'}}
                className={"animate__animated animate__fadeIn" }
                flexShrink={0}  position='relative' cursor='pointer' borderRadius='15px' bgColor='transparent' gap='5px' 
                color={ActiveCategory === category.name ? '#39C7C4' : iconColor }
            >
                <Icon as={category.icon} fontSize={{base:"20px", sm:"22px", md:"24px" }} className="animate__animated animate__fadeIn" />
                <Text fontSize={'11px'} fontWeight={500} >{category.name}</Text>
            </Flex>
            ))}

        </Carousel>

    </Flex>
  )
}

export default ExploreCategoriesSlider