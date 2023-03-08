import { Box ,Flex, useColorModeValue, Image} from "@chakra-ui/react"
import Head from 'next/head'

export default function Custom404() {
  const PageBg = useColorModeValue('gray.50' , 'gray.700');

    return(
      <> 
      <Head>
        <title>Page not found</title>
      </Head>
      <Flex h={"90vh"} w="100%" background={PageBg}
         align='center' justify={'center'}  pb='100px'
      >
        <Box>
          <Image alt="empty" src="https://res.cloudinary.com/dlbr9wrif/image/upload/v1677836420/404_dhlkw8.png" width={{base:"80%", sm:"350px", md:"450px"}} mx={"auto"}  />
        </Box>
      </Flex>
      </>
    ) 
}