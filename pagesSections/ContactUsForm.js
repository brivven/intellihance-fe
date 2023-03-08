import {Flex, FormControl, Button, Input , useToast, useColorModeValue, InputGroup, Text, InputRightElement, Textarea} from '@chakra-ui/react'
import {FaUser} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md' 
import {AiFillFileText} from 'react-icons/ai'
import { useState, useEffect, useRef } from 'react'; 
import validator from 'validator';
import emailjs from 'emailjs-com'




function ContactUsForm() {


  const inputBg = useColorModeValue('gray.50', 'gray.800');
  const inputborder = useColorModeValue('gray.200', 'gray.600');
  const text = useColorModeValue('gray.700', 'white');


  const initialFormValues = {Name: "" , Email: ""  , Subject: ""  , Message: "" };
  const [FormValues, setFormValues] = useState(initialFormValues);
  const [FormErrors, setFormErrors] = useState({})
  const [MainError, setMainError] = useState('')
  const [FormLoading, setFormLoading] = useState(false);
  const [FormSubmitted, setFormSubmitted] = useState(false);
  const contactFormRef = useRef();
  const toast = useToast()
  const toastIdRef = useRef()




  const handleFormChange = (event) =>{
    const {name , value } = event.target;
    setFormValues({ ...FormValues , [name]: value });
  }


  const validateContactForm = (FormValues)=>{
    var Errors = {};
    if(validator.isEmpty(FormValues.Name)) { Errors.Name = 'Invalid Name.' }
    if(validator.isEmpty(FormValues.Subject)) { Errors.Subject = 'Invalid Subject.' }
    if(validator.isEmpty(FormValues.Message)) { Errors.Message = 'Invalid Message.' }
    if(!(validator.isEmail(FormValues.Email))) { Errors.Email = "invalid password." ;}
    return Errors;
  }


  const sendMessage = () =>{
    setFormErrors(validateContactForm(FormValues));
    setFormSubmitted(true);
  }


  useEffect(() => {

    if( Object.keys(FormErrors).length == 0 && FormSubmitted ){
      setFormLoading(true);
      setMainError('');
      emailjs.sendForm('service_9loleyr', 'template_bmq91cd', contactFormRef.current, process.env.EMAILJS_PUBLICKEY)
      .then((result) => {
          setFormValues(initialFormValues)
          setFormSubmitted(false)
          setFormLoading(false)
          toastIdRef.current = toast({ description: 'Your Message has been sent successfully', status:'success', duration: 10000, isClosable: true, })
      }, (error) => {
          setFormValues(initialFormValues)
          setFormSubmitted(false)
          setFormLoading(false)
          setMainError('There was an error, refresh and try again.');
      });
    }

    else if( Object.keys(FormErrors).length !== 0 && FormSubmitted ){
      setMainError('Please fill all the required inputs.');
    }

  }, [FormErrors]);






    return (
    
        <form ref={contactFormRef} style={{ width:'100%', height:'100%'}} > 

          <Flex w={{base:"100%", sm:"100%", md:"90%", lg:"80%", xl: "65%"}} mx='auto' h='fit-content' bgColor={'transparent'} position='relative' 
            direction={'column'} zIndex='16' align={'center'} justify='center' gap='20px' mb='150px' mt={{base:"40px", sm:"40px", md:"20px" , lg:"10px", xl: "-50px"}}
          >

            <Text fontWeight={600} w='85%' textAlign={'center'} fontSize={{base:'16px', sm:'18px', md:'20px'}} >
              Fill out the form below and get in touch with us in realtime 
            </Text>

            <FormControl isInvalid={FormErrors.hasOwnProperty('Name') ? true : false} position='relative' w='90%' border={'1px solid'} 
              borderColor={inputborder} borderRadius='15px'   
            >
              <InputGroup  border={'transparent'} >
                <InputRightElement mr='5px' pointerEvents='none' fontSize={{base:"12px", sm:"14px", md:"16px" }} color={text} children={<FaUser />} borderRadius='15px'  />
                <Input 
                  type='text' 
                  value={FormValues.Name}
                  borderRadius='15px' 
                  placeholder='Name'
                  name='Name'
                  fontSize={{base:"12px", sm:"14px", md:"14px" }} pl='10px'
                  bgColor={inputBg} 
                  onChange={handleFormChange}
                  disabled={FormLoading == true ? true : false}
                />
              </InputGroup>
            </FormControl>

            <Flex w='90%' direction={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}} justify='center' gap='20px' >

              <FormControl isInvalid={FormErrors.hasOwnProperty('Email') ? true : false} position='relative' flex='1 0 0' border={'1px solid'} 
                borderColor={inputborder} borderRadius='15px' 
              >
                <InputGroup border={'transparent'} >
                  <InputRightElement mr='5px' pointerEvents='none' fontSize={{base:"14px", sm:"14px", md:"16px" }} color={text} children={<MdEmail />} borderRadius='15px'  />
                  <Input 
                    type='text' 
                    value={FormValues.Email}
                    borderRadius='15px' 
                    placeholder='Email'
                    name='Email'
                    fontSize={{base:"12px", sm:"14px", md:"14px" }} pl='10px'
                    bgColor={inputBg}
                    onChange={handleFormChange}
                    disabled={FormLoading == true ? true : false}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isInvalid={FormErrors.hasOwnProperty('Subject') ? true : false} position='relative' flex='1 0 0' border={'1px solid'} 
                borderColor={inputborder} borderRadius='15px'  
              >
                <InputGroup border={'transparent'} >
                  <InputRightElement mr='5px' pointerEvents='none' fontSize={{base:"14px", sm:"14px", md:"16px" }} color={text} children={<AiFillFileText />} borderRadius='15px'  />
                  <Input 
                    type='text' 
                    value={FormValues.Subject}
                    borderRadius='15px' 
                    placeholder='Subject'
                    name='Subject'
                    bgColor={inputBg}
                    fontSize={{base:"12px", sm:"14px", md:"14px" }} pl='10px'
                    onChange={handleFormChange}
                    disabled={FormLoading == true ? true : false}
                  />
                </InputGroup>
              </FormControl>

            </Flex>


            <Textarea w='90%' h={{base:'170px', sm:'170px', md:'150px' }} placeholder='Message' size='md' fontSize={{base:"12px", sm:"14px", md:"14px" }} resize={'none'} 
              borderColor={inputborder} bgColor={inputBg}  pl='10px' name='Message' onChange={handleFormChange} borderRadius='15px'  value={FormValues.Message}
              disabled={FormLoading == true ? true : false} isInvalid={FormErrors.hasOwnProperty('Message') ? true : false} 
            />


            {MainError !== '' ?
            <Text w='90%' mx='auto' color={'red.400'} textAlign={'center'} fontSize={{base:"14px", sm:"14px", md:"14px" }} >{MainError}</Text>
            : null }


            <Button bgColor={'#39C7C4'} borderRadius='15px' fontSize={{base:"12px", sm:"12px", md:"14px" }} 
              fontWeight={500} _hover={{opacity:'0.75'}} px={"25px"} h='34px' color={'gray.800'}  
              isLoading={FormLoading} onClick={sendMessage} disabled={FormLoading} _active={{opacity:'0.5'}} boxShadow='md'
            >
              <Text >Send Message</Text>
            </Button>


          </Flex>

        </form>
    )
}

export default ContactUsForm