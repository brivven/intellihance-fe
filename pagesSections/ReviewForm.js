import React from 'react'
import {Flex, Box, FormControl, Button, Input , Icon, useToast, useColorModeValue, InputGroup, Text, InputRightElement, Textarea} from '@chakra-ui/react'
import {RiCloseLine} from 'react-icons/ri'
import {FaPaperPlane, FaUser} from 'react-icons/fa'
import {BsStarFill} from 'react-icons/bs'
import { useState, useEffect, useRef } from 'react'; 
import validator from 'validator';
import axios from 'axios'



function ReviewForm({articleID, closeForm}) {


    const bg = useColorModeValue('gray.200' , 'gray.700')
    const bg2 = useColorModeValue('gray.50' , 'gray.800')
    const inputborder = useColorModeValue('gray.300', 'gray.600');
    const color = useColorModeValue('gray.700', 'white');
  

    const initialFormValues = {name: "" , rating: 0  , message: "" };
    const [FormValues, setFormValues] = useState(initialFormValues);
    const [FormErrors, setFormErrors] = useState({})
    const [FormLoading, setFormLoading] = useState(false);
    const [FormSubmitted, setFormSubmitted] = useState(false);
    const toast = useToast()
    const toastIdRef = useRef()
    
    const handleFormChange = (name, value) =>{
      setFormValues({...FormValues , [name]: value });
    }
  
    const validateReview = (FormValues)=>{
      var Errors = {};
      if(validator.isEmpty(FormValues.name)) { Errors.name = 'Invalid Name.' }
      if(validator.isEmpty(FormValues.message)) { Errors.message = 'Invalid Message.' }
      if(FormValues.rating === 0){ Errors.rating = 'Invalid rating.' }
      return Errors;
    }

    const sendReview = () =>{
      setFormErrors(validateReview(FormValues));
      setFormSubmitted(true);
    }

    useEffect(() => {
      if( Object.keys(FormErrors).length == 0 && FormSubmitted ){
        setFormLoading(true);
        axios.post('https://intellihance-be.vercel.app/Articles/AddReview' , {
          articleID: articleID,
          name: FormValues.name,
          message: FormValues.message,
          rating: FormValues.rating
        })
        .then((result) => {
            setFormValues(initialFormValues)
            setFormSubmitted(false)
            setFormLoading(false)
            toastIdRef.current = toast({ description: 'Review added successfully, refresh to see it', status:'success', duration: 6000, isClosable: true, })
            closeForm();
        }, (error) => {
            setFormValues(initialFormValues)
            setFormSubmitted(false)
            setFormLoading(false)
            toastIdRef.current = toast({ description: 'there was an error try again', status:'error', duration: 6000, isClosable: true, })
            closeForm();
        });
      }
    }, [FormErrors]);



  return (

    <Flex w={{base:"80%", sm:"400px", md:"500px"}} py='50px' position={'fixed'} top={'50%'} left={'50%'} transform='translate(-50%,-50%)' 
        bgColor={bg} borderRadius={'15px'} className='animate__animated animate__fadeIn' zIndex={1000} boxShadow='lg'
        align={'center'} justify='center' direction={'column'} gap='20px' style={{animationDuration:'0.5s'}} border='1px solid' borderColor={inputborder}
    >

        <Icon cursor={'pointer'} position={'absolute'} top='15px' right='15px' as={RiCloseLine} 
          fontSize={{base:"26px", sm:"26px", md:"28px" }} onClick={closeForm} color='red.500'
        />

        <Text color={color} w='90%' textAlign={'center'} fontWeight={700} fontSize={{base:"14px", sm:"16px", md:"18px"}} >Add your review</Text>

        <FormControl isInvalid={FormErrors.hasOwnProperty('name') ? true : false} position='relative' w='90%' border={'1px solid'} 
          borderColor={inputborder} borderRadius='15px' 
        >
          <InputGroup border={'transparent'} >
            <InputRightElement mr='5px' pointerEvents='none' fontSize={{base:"14px", sm:"14px", md:"16px" }} color={color} children={<FaUser />} borderRadius='15px'  />
            <Input 
              type='text' 
              value={FormValues.name}
              borderRadius='15px' 
              placeholder='name'
              name='name'
              fontSize={{base:"12px", sm:"14px", md:"14px" }} pl='10px'
              bgColor={bg2}
              onChange={(ev) => handleFormChange('name', ev.target.value)}
              disabled={FormLoading == true ? true : false}
            />
          </InputGroup>
        </FormControl>

        <Flex w='90%' justify={'space-between'} >
          {[...Array(5)].map((e,i)=>(
          <Box w='15%' textAlign={'center'} py='5px' bgColor={bg2} borderRadius='15px' cursor={'pointer'} 
            onClick={() =>{ if(FormLoading){return} else{ handleFormChange('rating', i+1)}}} 
            _hover={{opacity:0.75}} border='2px solid'
            color={FormValues.rating === i+1 ? '#39C7C4' : color}
            borderColor={FormErrors.hasOwnProperty('rating') ? 'red.300' : 'transparent' }
             
          >
            <Icon as={BsStarFill} fontSize={{base:"14px", sm:"16px", md:"18px" }} />
            <Text fontSize={{base:"14px", sm:"16px", md:"16px" }}>{i+1}</Text>
          </Box>
          ))}
           
        </Flex>

        <Textarea w='90%' h='150px' placeholder='Put your review here' size='md' fontSize={{base:"12px", sm:"14px", md:"14px" }} resize={'none'} 
          borderColor={inputborder} bgColor={bg2}  pl='10px' name='message' borderRadius='15px' 
          value={FormValues.message}
          disabled={FormLoading == true ? true : false} 
          isInvalid={FormErrors.hasOwnProperty('message') ? true : false} 
          onChange={(ev) => handleFormChange('message', ev.target.value)}
        />

        <Button bgColor={bg2} borderRadius='15px' fontSize={{base:"11px", sm:"12px", md:"14px" }} color={color}
          fontWeight={500} _hover={{opacity:0.75}} px={{base:"20px", sm:"20px", md:"25px" }} h={{base:"28px", sm:"32px", md:"38px" }} 
          _active={{opacity:'0.5'}} boxShadow='sm' gap={'5px'} onClick={sendReview} isLoading={FormLoading}
        >
          <Text mr='3px'>Submit</Text>
          <Icon as={FaPaperPlane} fontSize={{base:"14px", sm:"16px", md:"20px" }} />
        </Button>


    </Flex>
  )
}

export default ReviewForm