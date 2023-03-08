import React, {useState} from 'react'
import {Flex, Button, Input , useColorMode, useColorModeValue, InputGroup, InputRightElement} from '@chakra-ui/react'
import {RiSearch2Line } from 'react-icons/ri'
import {HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import {HiX} from 'react-icons/hi'
import ExploreFilters from './ExploreFilters';
import { useRouter } from 'next/router'



function ExploreSearch() {


    const bgColor = useColorModeValue('gray.200', 'gray.700');
    const inputBg = useColorModeValue('gray.50', 'gray.800');
    const inputborder = useColorModeValue('gray.200', 'gray.700');
    const text = useColorModeValue('gray.700', 'white');
    const { colorMode } = useColorMode();
    const [showFilters, setshowFilters] = useState(false);
    const [SearchKeywordValue, setSearchKeywordValue] = useState("");
    const Router = useRouter();

    const VerifyKeyDown = (ev)=>{
      if(ev.key == 'Enter'){
        SearchKeyword();
      }
      else{
        return;
      }
    }
    const SearchKeyword = () =>{
      if(!SearchKeywordValue || SearchKeywordValue.length == 0){
        return
      }
      const currentPath = Router.pathname;
      const { query } = Router;
  
      if(SearchKeywordValue && SearchKeywordValue.length !== 0){
        query['searchKeyword'] = SearchKeywordValue;
      }
      Router.push({pathname: currentPath , query })
  
    }



  return (
    <> 
      <Flex w={{base:"95%", sm:"90%", md:"90%" }} bgColor={bgColor} align={'center'} justify='center' py='25px' gap={{base:"10px", sm:"10px", md:"15px" }} >
 

        <InputGroup w={{base:"80%", sm:"80%", md:"400px" }} borderRadius={'15px'} borderColor={inputborder} boxShadow='sm' className="animate__animated animate__fadeIn">
          <InputRightElement fontSize={{base:"16px", sm:"16px", md:"18px" }} color={colorMode == 'light' ? '#2D3748' : 'white'} cursor='pointer' 
            children={<RiSearch2Line cursor={'pointer'} />} onClick={SearchKeyword}
          />
          <Input 
            type='search' 
            borderRadius='15px' 
            placeholder='Search articles..'
            name='Name'
            fontSize={{base:"12px", sm:"13px", md:"14px" }} pl='15px'
            bgColor={inputBg}
            value={SearchKeywordValue}   
            onChange={(ev)=> setSearchKeywordValue(ev.target.value)} 
            onKeyDown={VerifyKeyDown}   
            enterkeyhint="send"
          />
        </InputGroup>  


        <Button h='40px' px={{base:"15px", sm:"15px", md:"25px" }} fontWeight={500} fontSize={{base:'12px',sm:'13px', md:'14px' }} 
          borderRadius='15px' bgColor={inputBg}  color={showFilters ? '#F56565' : text} display={{base:"none", sm:"flex", md:"flex"}}
          _active={{ opacity: "0.5"}} _hover={{opacity:0.75}} boxShadow='sm' onClick={()=> setshowFilters(!showFilters)}       
          leftIcon={showFilters ? <HiX fontSize={'18px'} /> : <HiOutlineAdjustmentsHorizontal fontSize={'18px'} />}
        > 
          {showFilters ? 'Close' : 'Filters' }
        </Button> 


        <Button h='40px' px='10px' borderRadius='15px' bgColor={inputBg} color={text} display={{base:"flex", sm:"none", md:"none"}}
            _active={{ opacity: "0.5"}} _hover={{opacity: "0.8"}} boxShadow='sm' onClick={()=> setshowFilters(!showFilters)} 
            className="animate__animated animate__fadeIn"
        > 
          {showFilters ? <HiX fontSize={'18px'} color='#F56565' /> : <HiOutlineAdjustmentsHorizontal fontSize={'18px'} />}
        </Button> 


      </Flex>
    

      {showFilters ? <ExploreFilters /> : null }


    </>
  )
}

export default ExploreSearch