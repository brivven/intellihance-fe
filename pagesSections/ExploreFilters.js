import React from 'react'
import {Flex, FormControl, useColorMode, useColorModeValue} from '@chakra-ui/react'
import Select from 'react-select'
import { SelectBoxesData } from './ExploreFiltersSelectBoxesData'
import { useRouter } from 'next/router'



function ExploreFilters() {


  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const router = useRouter();
  const { colorMode } = useColorMode();

  const SelectBoxStyle = { 
    control: (baseStyle, state) => ({
      ...baseStyle,
      background: colorMode == 'dark' ? "#1A202C" : '#F7FAFC',
      borderRadius: '15px',
      borderColor: 'transparent',
      boxShadow: state.isFocused ? null : null,
      cursor:'pointer',
      fontSize:'13px',
      "&:hover": {
        borderColor: state.isFocused ? "#39C7C4" : "#39C7C4"
      }
    }),
    option: (baseStyle) => ({
        ...baseStyle,
        padding: '8px 0',
        fontSize: '13px',
        paddingLeft: '10px',
        color: colorMode == 'dark' ? "white" : '#2D3748', 
        cursor:'pointer',
        background: colorMode == 'dark' ? "#2D3748" : '#E2E8F0',
        "&:hover": {
          opacity: 0.9,
        }
    }),
    menu: (baseStyle) => ({
        ...baseStyle,
        zIndex: 10000,
    }),
    placeholder: (baseStyle) => {
      return {
          ...baseStyle,
          fontSize: '13px',
          fontWeight: '500',
          paddingLeft: '5px',
          color: colorMode == 'dark' ? "white" : '#2D3748', 
      }
    },
    menuList: (baseStyle) => ({
      ...baseStyle,
      // kill the white space on first and last option
      padding: 0
    })
  }


  const handleFilterChange = (activeQuery)=>{
    const currentPath = router.pathname;
    const { query } = router;
    query[activeQuery.queryName] = activeQuery.queryValue
    router.push( { pathname: currentPath , query } )
  }




  return (

    <> 
    <Flex w={{base:"90%", sm:"90%", md:"80%" }} bgColor={bgColor} wrap='wrap' align={'center'} justify='center' 
      pb='25px' gap='20px' 
    > 
 
      {SelectBoxesData.map((filter, index)=>(
        <FormControl position='relative' flex='1 1 200px' maxW={'450px'} h='fit-content' color='black' 
          key={filter.queryName} style={{animationDelay: index * 100+'ms' }} className='animate__animated animate__fadeIn'
        >
          <Select  
            options={filter.options} 
            name={filter.name} 
            styles={SelectBoxStyle} 
            placeholder={filter.placeholder} 
            menuPortalTarget={document.body} 
            menuPosition={'fixed'}
            style={{animationDelay: (index/2)+'s'}}
            className={"animate__animated animate__fadeIn" }
            onChange={(ev)=> handleFilterChange( {queryName:filter.queryName, queryValue: ev.value }) }
          />
        </FormControl>
      )
      )}

    </Flex>
    </>
  )
}

export default ExploreFilters