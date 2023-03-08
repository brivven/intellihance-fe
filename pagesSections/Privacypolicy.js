import React from 'react'
import Fade from 'react-reveal/Fade';
import {Flex , Text, useColorModeValue} from '@chakra-ui/react';


export default function Privacypolicy() {

  const textColor = useColorModeValue('gray.700', 'gray.300');
  const textColor2 = useColorModeValue('gray.700', 'white');

  const Privacypolicy = [
    '1. We respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and protect your personal information.',
    '2. We collect personal information such as your name, email address, and other contact information when you sign up for our blog or submit a comment. We use this information to communicate with you and to improve your experience on our blog.',
    '3. We use cookies and similar technologies to collect information about your activity on our blog. This information may include your IP address, device type, browser type, and pages you visited. We use this information to improve your experience on our blog.',
    '4. We may use third-party services such as Google Analytics to collect and analyze information about your use of our blog. This information is used to improve the quality of our content and to understand how our readers interact with our blog.',
    '5. We do not sell or rent your personal information to third parties. We may share your personal information with our trusted partners and service providers who assist us in operating our blog and providing our services to you.',
    '6. We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse. However, we cannot guarantee that your personal information will always be secure, and you should take precautions to protect your personal information.',
    '7. We may use your personal information to send you promotional and marketing messages about our blog and our services. You can opt-out of these messages at any time by following the unsubscribe link at the bottom of the email.',
    '8. We may share your personal information in response to a valid legal request, such as a court order or subpoena. We may also share your personal information to protect our rights or property, or to comply with applicable laws and regulations.',
    '9. We may store your personal information outside of your country of residence. By using our blog, you consent to the transfer of your personal information to our servers located in other countries.',
    '10. We may retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy. We will also retain and use your personal information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.',
    '11. We provide links to third-party websites on our blog, but we are not responsible for the privacy practices of these websites. We encourage you to read the privacy policies of these websites before providing any personal information.',
    '12. If you are under the age of 13, you must have your parent or guardians permission before providing any personal information to us.',
    '13. We may update this privacy policy from time to time. The updated version will be posted on our blog, and we encourage you to review it periodically to stay informed of our privacy practices.',
    '14. You have the right to access, correct, and delete your personal information that we have collected. You can exercise these rights by contacting us using the contact information provided on our blog.',
    '15. By using our blog, you consent to the terms of this privacy policy and agree to the collection, use, and disclosure of your personal information in accordance with this policy.',
    '16. We may use your personal information to personalize your experience on our blog, such as by recommending content or products based on your interests and preferences.',
    '17. We may use your personal information to conduct research and analysis to improve our blog and our services.',
    '18. We may use your personal information to respond to your inquiries, comments, or requests for assistance.',
  ];

  return (
    <Flex w='90%' h='80%' overflowY={'scroll'} p='20px' direction={'column'} >
      <Fade>
        <Text w='100%' fontSize={'20px'} color={textColor2} mb={"20px"}>Privacy policy</Text>
      </Fade>
      <Fade delay={250} >
        {Privacypolicy.map((term , index) => (
          <Text w='100%' fontSize={'14px'} my={4} color={textColor} key={index} >{term} </Text>   
        ))}
      </Fade>
    </Flex>
  )
}