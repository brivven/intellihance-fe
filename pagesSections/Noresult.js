import { Box ,Flex, useColorModeValue, Text, Image} from "@chakra-ui/react"

export default function Noresult() {
  const PageBg = useColorModeValue('gray.200' , 'gray.700');

    return(
      <> 
      <Flex h={"70vh"} w="100%" background={PageBg} direction='column'
         align='center' justify={'center'} gap='30px' position={'relative'}
      >
        <Image m='0' alt="empty" src="https://res.cloudinary.com/dlbr9wrif/image/upload/v1677836422/noresult_ale6td.png" 
          width={{base:"75%", sm:"350px", md:"400px"}} className='animate__animated animate__fadeIn' 
        />
        <Text fontSize={{base:'14px', sm:'16px', md:'18px'}} fontWeight={700} className='animate__animated animate__fadeIn' >No Articles found, try again.</Text>
      </Flex>
      </>
    ) 
}