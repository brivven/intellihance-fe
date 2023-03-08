import React from 'react'
import Fade from 'react-reveal/Fade';
import {Flex , Text, useColorModeValue} from '@chakra-ui/react';


export default function Corporateculture() {

  const textColor = useColorModeValue('gray.700', 'gray.300');
  const textColor2 = useColorModeValue('gray.700', 'white');

  const Corporateculture = [
    'At our company, we believe that corporate culture is critical to our success. We strive to create a positive work environment where employees feel supported and encouraged to do their best work. Our culture is built on values such as collaboration, respect, and transparency, which are integrated into everything we do.',
    'When it comes to hiring, we take great care in finding the right people to join our team. We are not just looking for someone with the right skills and experience; we are also looking for someone who shares our values and fits in with our corporate culture. This is because we believe that hiring people who share our vision and values is the key to building a successful team.',
    'One of the ways we ensure that our hiring process is effective is by involving our team members in the process. We believe that team members are best placed to assess the cultural fit of potential hires, so we make sure that they are involved in interviews and other hiring activities.',
    'We also make sure that our hiring process is transparent and fair. We strive to provide equal opportunities to all candidates and make sure that everyone is evaluated based on their skills, experience, and potential. We do not discriminate based on race, gender, age, or any other factors that are not related to job performance.',
    'In addition to looking for the right cultural fit, we also invest in the development of our team members. We provide regular training and development opportunities to ensure that our team members are equipped with the skills and knowledge they need to excel in their roles.',
    'We also believe in open communication and transparency. We encourage our team members to speak up and share their ideas and concerns. We have an open-door policy, and our management team is always available to listen and provide support.',
    'In conclusion, our corporate culture is the foundation of our success. We believe that it is essential to hire people who share our values and vision, and we are committed to providing our team members with the support and resources they need to excel in their roles. Our commitment to a positive work environment, work-life balance, and open communication is what sets us apart from other companies, and we are proud of the culture we have built.',
  ];

  return (
    <Flex w='90%' h='80%' overflowY={'scroll'} p='20px' direction={'column'} >
      <Fade>
        <Text w='100%' fontSize={'20px'} color={textColor2} mb={"20px"}>Corporate culture and hiring team</Text>
      </Fade>
      <Fade delay={250} >
        {Corporateculture.map((term , index) => (
          <Text w='100%' fontSize={'14px'} my={4} color={textColor} key={index} >{term} </Text>   
        ))}
      </Fade>
    </Flex>
  )
}