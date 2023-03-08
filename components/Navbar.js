import React from 'react'
import {Flex , Stack ,Box, Image , Tooltip, Icon, useDisclosure, Button, Text, useColorMode, useColorModeValue} from '@chakra-ui/react';
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'; 
import { useRouter } from 'next/router';
import NavbarDrawer from '../pagesSections/NavbarDrawer';
import {FiSun, FiSearch} from 'react-icons/fi'  
import {TfiMenu} from 'react-icons/tfi'  
import {BsEnvelope} from 'react-icons/bs'  
import {FaRegMoon,FaRegEnvelope} from 'react-icons/fa'



function Navbar() {
  
  const { pathname } = useRouter();

  const NAV_ITEMS = [
    {text: "Home" , href: "/"}, {text: "Explore" ,href: "/explore"},
    {text: "Contact" ,href: "/contact-us"}, {text: "About" ,href: "/about-us"}, 
  ]


  const { isOpen, onOpen, onClose } = useDisclosure();
  const DrawerBtnRef = useRef();

  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue('gray.200', 'gray.800');
  const menubg = useColorModeValue('gray.50', 'gray.700');
  const hover = useColorModeValue('gray.300', 'gray.700'); 
  const textColor = useColorModeValue('gray.700', 'white');

  const [FixedNavbar, setFixedNavbar] = useState(false)
  useEffect(() => {
    if(typeof window !== "undefined"){
      window.addEventListener('scroll', ()=>{
        if(window.pageYOffset > 20){
          setFixedNavbar(true)
        }
        else{
          setFixedNavbar(false)
        }
      });
    }
  }, []);



  return (

    <Flex
      align="center"
      justify="space-between"
      w="100%"
      h={{base:'65px', sm:'70px', md:'90px' }}
      flexDirection="row"
      px={{base:'10px', sm:'15px' ,md:'30px',lg:"40px", xl: "50px"}}  
      boxShadow='md'
      boxSizing="border-box"
      color="black"
      zIndex={1000}
      position={FixedNavbar ? 'fixed' : "relative"}
      className={FixedNavbar ? "animate__animated animate__slideInDown" : '' }
      transitionDuration={'0.25s'}
      top={0} 
      bgColor={bgColor}
    >




      <Link href="/" >
        <Flex width="fit-content" align="center" justify={'center'}  bgColor="transparent" >
          <Flex bgColor="transparent" align="center" justify={'center'} flexDirection='row' h='fit-content' >
            <Image src={colorMode == 'light' ? "/intellihanceb.png" : "/intellihanceb&w.png"}  alt="intellihance Logo" h={{base:"24px", sm:"28px", md:"32px" }} 
              className="animate__animated animate__fadeInDown" style={{animationDelay: '100ms' }}
            />
          </Flex>
          <Text fontFamily='Chewy' letterSpacing={'1px'} px={1} bgColor="transparent" className="animate__animated animate__fadeInDown"
            fontSize={{base:"20px", sm:"22px", md:"24px" }} color={textColor} fontWeight={500} style={{animationDelay: '100ms' }}
          > 
            Intellihance 
          </Text>
        </Flex>
      </Link>
      


      <Stack direction={'row'} spacing={0} color={textColor} align="center" bgColor={menubg} overflow='hidden'
        display={{base:"none", sm:"none", md:"none", lg:"flex", xl: "flex"}} borderRadius={'20px'} h='34px' boxShadow={'sm'}
      >
        {NAV_ITEMS.map((navItem , index) => (
        <Box key={index} bgColor={'transparent'} textAlign={'center'} h='100%' >
          <Link href={navItem.href} > 
            <Flex align={'center'} justify='center' transitionDuration='0.3s' color={pathname == navItem.href ? "gray.700" : textColor }  
              fontSize={'14px'} fontWeight={700} h='100%'
              px={{base:"none", sm:"none", md:"none", lg:"30px", xl: "35px"}}
              _hover={pathname == navItem.href ? {color: "white"} : {color: "#39C7C4"}} fontFamily='Poppins' className="animate__animated animate__fadeInDown"
              style={{animationDelay: (index+2) * 100+'ms' }} bgColor={pathname == navItem.href ? "#39C7C4" : '' } borderRadius={'20px'}
            >
              <Text >{navItem.text}</Text>
            </Flex>
          </Link>
        </Box>      
        ))}
      </Stack>



      <Stack display={{base:"flex", sm:"flex", md:"flex", lg:"none", xl: "none"}} flex='1 0' ml='5px' >
        <Flex align={'center'} justify='flex-start' _hover={{bgColor:hover, color: "#39C7C4"}} color={textColor} 
          ref={DrawerBtnRef} p={{base:1, sm:1, md:1.5}} w='fit-content'  borderRadius='5px' transitionDuration='0.3s' ml={{base:"0px", sm:"8px", md:"8px" }}
        >
          <Icon as={TfiMenu} fontSize={{base:"18px", sm:"20px", md:"22px" }}  className="animate__animated animate__fadeInDown"
            style={{animationDelay: '300ms' }}   onClick={onOpen} borderRadius='5px' cursor='pointer' 
          />
        </Flex>
      </Stack>

  

      <Stack color={textColor} spacing={{base:2, sm:2, md:3 }} direction={'row'} align='center' className="animate__animated animate__fadeInDown" 
        style={{animationDelay: '500ms' }} 
      >
        {colorMode == 'light' ?
        <Tooltip label='dark mode' fontSize='12px' > 
          <Flex align={'center'} justify='center' _hover={{bgColor:hover, color: "#39C7C4"}} borderRadius='5px' cursor='pointer' p={{base:1, sm:1, md:1.5}} 
            transitionDuration='0.2s' onClick={toggleColorMode} 
          >
            <Icon as={FaRegMoon} fontSize={{base:"16px", sm:"18px", md:"20px" }}  className="animate__animated animate__fadeIn"
            />
          </Flex>
        </Tooltip>
        : null }
        {colorMode == 'dark' ?
        <Tooltip label='light mode' fontSize='12px' > 
          <Flex align={'center'} justify='center' _hover={{bgColor:hover, color: "#39C7C4"}} borderRadius='5px' transitionDuration='0.2s' 
            cursor='pointer' p={{base:1, sm:1, md:1.5}} onClick={toggleColorMode} 
          >
            <Icon as={FiSun} fontSize={{base:"16px", sm:"18px", md:"20px" }}  className="animate__animated animate__fadeIn"
            />
          </Flex>
        </Tooltip>
        : null }
        
        <Tooltip label='search article' > 
          <Link href='/explore'> 
            <Flex align={'center'} justify='center'  _hover={{bgColor:hover, color: "#39C7C4"}} transitionDuration='0.2s' borderRadius='5px' 
              p={{base:1, sm:1, md:1.5}} cursor='pointer' 
            >
              <Icon as={FiSearch} fontSize={{base:"16px", sm:"18px", md:"20px" }}  />
            </Flex>
          </Link>
        </Tooltip>

        <Link href='/contact-us' > 
          <Button bgColor={menubg} borderRadius='20px' fontSize={{base:"11px", sm:"12px", md:"14px" }} color={textColor}
            fontWeight={500} _hover={{opacity:0.75}} px={{base:"15px", sm:"20px", md:"25px" }} h={{base:"28px", sm:"32px", md:"34px" }} 
            _active={{opacity:'0.5'}} boxShadow='sm' gap={'5px'} 
          >
            <Text mr='3px'>Reach</Text>
            <Icon as={BsEnvelope} fontSize={{base:"14px", sm:"16px", md:"18px" }} />
          </Button>
        </Link>

      </Stack>
      



      <NavbarDrawer isOpen={isOpen} onClose={onClose} DrawerBtnRef={DrawerBtnRef} />

    </Flex>
  )
}


export default Navbar