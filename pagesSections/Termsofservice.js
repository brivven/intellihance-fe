import React from 'react'
import Fade from 'react-reveal/Fade';
import {Flex , Text, useColorModeValue} from '@chakra-ui/react';


export default function Termsofservice() {

  const textColor = useColorModeValue('gray.700', 'gray.300');
  const textColor2 = useColorModeValue('gray.700', 'white');

  const termsOfService = [
    '1. The content on this blog is intended for general informational purposes only and is not intended to be a substitute for professional advice. While we strive to provide accurate and up-to-date information, we make no guarantees as to the accuracy or completeness of the content on this blog.',
    '2. We reserve the right to modify or terminate the blog or any portion of it at any time and without notice. We also reserve the right to change these terms of service at any time and without notice. Your continued use of the blog after any such changes constitutes your acceptance of the new terms of service.',
    '3. The opinions expressed by blog authors and commenters are their own and do not necessarily reflect the opinions of the blog owner. We are not responsible for any opinions expressed on the blog.',
    '4. We may include links to third-party websites or resources on our blog. We have no control over and are not responsible for the content or practices of these websites or resources.',
    '5. We do not guarantee the accuracy, completeness, or timeliness of the information on this blog. The content on this blog is provided "as is" and we make no warranties or representations of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the blog or the information, products, services, or related graphics contained on the blog for any purpose.',
    '6. You may use this blog for your personal and non-commercial use. You agree not to use this blog for any illegal or unauthorized purpose, and you agree to comply with all applicable laws and regulations.',
    '7. You agree not to use any automated means, including scrapers and spiders, to access or collect data from this blog. You also agree not to use any data mining, robots, or similar data gathering and extraction methods in connection with this blog.',
    '8. You agree not to post any material that is defamatory, obscene, or otherwise offensive or illegal. You also agree not to post any content that infringes on the intellectual property rights of others.',
    '9. You agree to indemnify and hold harmless the blog owner and its affiliates, agents, officers, and employees from any claim or demand, including reasonable attorneys\' fees, made by any third party due to or arising out of your use of the blog or your violation of these terms of service.',
    '10. These terms of service are governed by the laws of [insert jurisdiction], and any disputes arising from them shall be resolved in the courts of [insert jurisdiction]. These terms of service constitute the entire agreement between you and the blog owner and supersede all prior agreements or understandings, whether written or oral, relating to the blog. If any provision of these terms of service is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.'
  ];

  return (
    <Flex w='90%' h='80%' overflowY={'scroll'} p='20px' direction={'column'} >
      <Fade>
        <Text w='100%' fontSize={'20px'} color={textColor2} mb={"20px"}>Terms of service</Text>
      </Fade>
      <Fade delay={250} >
        {termsOfService.map((term , index) => (
          <Text w='100%' fontSize={'14px'} my={4} color={textColor} key={index} >{term} </Text>   
        ))}
      </Fade>
    </Flex>
  )
}
