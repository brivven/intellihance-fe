import {Box, Flex, Text, Stack, Icon, Drawer, DrawerContent, DrawerOverlay, useColorModeValue,DrawerCloseButton} from '@chakra-ui/react';
import {BsFillInfoCircleFill, BsChatQuote} from 'react-icons/bs' 
import {TiHomeOutline} from 'react-icons/ti'
import { BiCategoryAlt} from 'react-icons/bi'
import { TbInfoSquare} from 'react-icons/tb'
import Link from 'next/link'
import { useRouter } from 'next/router';


function NavbarDrawer({isOpen, onClose, DrawerBtnRef}) {

  const { pathname } = useRouter();

  const drawer_links = [
    {text: "Home" , icon: TiHomeOutline , href: "/"}, {text: "Explore" , icon: BiCategoryAlt , href: "/explore"},
    {text: "Contact" , icon: BsChatQuote , href: "/contact-us"}, {text: "About" , icon: TbInfoSquare , href: "/about-us"}
  ]
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const active = useColorModeValue('rgba(26, 32, 44,0.1)',  'rgba(252, 245, 220,0.1)'); 


  return (
    <Drawer isOpen={isOpen}  placement='left' display={{base:"block", sm:"block",md:"block",lg:"none", xl: "none"}} 
        onClose={onClose} finalFocusRef={DrawerBtnRef} position='absolute' 
      >
        <DrawerOverlay display={{base:"block", sm:"block",md:"block",lg:"none", xl: "none"}}   />

        <DrawerContent display={{base:"block", sm:"block",md:"block",lg:"none", xl: "none"}} bgColor={bgColor} >

          <DrawerCloseButton position={"absolute"} color={textColor} top="20px" right="15px" />
          
          <Stack py="20px" spacing='15px' mt={50} flexDirection='column' align={'center'} justify={'center'} >

            {drawer_links.map((navItem , index) => (
            <Box key={index} bgColor={pathname == navItem.href ? active : 'transparent' } 
              borderRadius='50px' 
              w='90%'
              _hover={{bgColor:active}} 
              transitionDuration='0.3s' 
              className="animate__animated animate__fadeInUp" 
              style={{animationDelay: index * 150+'ms' }}

            >
              <Link href={navItem.href} onClick={() => onClose()} > 
                <Flex align={'center'} py={1} px={3} justify='left' transitionDuration='0.3s' color={pathname == navItem.href ? '#39C7C4' : textColor }
                  fontWeight={500} borderRadius='50px' _hover={{ color:'#39C7C4'}} fontFamily='Poppins' >
                  <Icon as={navItem.icon} fontSize="18px" />
                  <Text pl='8px' fontSize={'14px'} fontWeight={700} textTransform='uppercase' >{navItem.text}</Text>
                </Flex>
              </Link>
            </Box>      
            ))}
          
          </Stack>
          
        </DrawerContent>

    </Drawer>
  )
}

export default NavbarDrawer