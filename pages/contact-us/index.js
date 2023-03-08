import Head from 'next/head'
import {Flex , useColorModeValue } from '@chakra-ui/react'
import ContactUsIntro from '../../pagesSections/ContactUsIntro'
import ContactUsForm from '../../pagesSections/ContactUsForm';


function Contactus() {

  const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (

    <>
    <Head>
      <title>Contact us | Intellihance </title>
    </Head>

    <Flex w='100%' h='fit-content' align={'center'} justify='center' background={bgColor} pb='100px'>

      <Flex w='100%' h='fit-content' background={"transparent"} align={'center'} justify='center' direction={'column'} >

        <ContactUsIntro />

        <ContactUsForm />
   
      </Flex>

    </Flex>
    </>
  )
}

export default Contactus