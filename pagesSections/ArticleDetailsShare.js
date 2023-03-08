import React from 'react'
import {Flex} from '@chakra-ui/react';
import {FaFacebookF, FaTwitter, FaRedditAlien, FaTumblr, FaLinkedinIn} from 'react-icons/fa'
import {
  FacebookShareButton,WhatsappShareButton,RedditShareButton,TwitterShareButton,TumblrShareButton, TelegramShareButton, LinkedinShareButton,PinterestShareButton,
  WhatsappIcon,RedditIcon,FacebookIcon,TwitterIcon,TumblrIcon,TelegramIcon,LinkedinIcon,PinterestIcon
} from 'react-share';
import {IoLogoWhatsapp} from 'react-icons/io'


function ArticleDetailsShare({articleData}) {

    const socialMediaWithColor = [
      { icon: FaFacebookF, color: '#3b5998' },
      { icon: FaTwitter, color: '#1da1f2' },
      { icon: IoLogoWhatsapp, color: '#25d366' },
      { icon: FaRedditAlien, color: '#ff4500' },
      { icon: FaTumblr, color: '#36465d' },
      { icon: FaLinkedinIn, color: '#0077b5' },
    ];

    const shareUrl = `http://localhost:3000/explore/${articleData[0]?.titleSlug}`;


  return (

    <Flex w={{base:"90%", sm:"85%", md:"700px" ,lg:'900px',xl:'1200px'}} h='fit-content' align="center" 
      justify={{base:"flex-start", sm:"flex-start", md:"center"}} wrap="wrap" 
      gap={{base:"10px", sm:"15px", md:"20px"}} mb='5px' className="animate__animated animate__fadeInDown"
    >

      <FacebookShareButton url={shareUrl} quote={articleData[0]?.title} hashtag={articleData[0]?.category} >
        <FacebookIcon size={35} round={true} />
      </FacebookShareButton> 

      <WhatsappShareButton url={shareUrl} quote={articleData[0]?.title} hashtag={articleData[0]?.category} >
        <WhatsappIcon size={35} round={true} />
      </WhatsappShareButton> 

      <RedditShareButton url={shareUrl} quote={articleData[0]?.title} hashtag={articleData[0]?.category} >
        <RedditIcon size={35} round={true} />
      </RedditShareButton> 

      <TwitterShareButton url={shareUrl} quote={articleData[0]?.title} hashtag={articleData[0]?.category} >
        <TwitterIcon size={35} round={true} />
      </TwitterShareButton> 

      <TumblrShareButton url={shareUrl} quote={articleData[0]?.title} hashtag={articleData[0]?.category} >
        <TumblrIcon size={35} round={true} />
      </TumblrShareButton>

      <TelegramShareButton url={shareUrl} quote={articleData[0]?.title} hashtag={articleData[0]?.category} >
        <TelegramIcon size={35} round={true} />
      </TelegramShareButton> 

      <PinterestShareButton url={shareUrl} quote={articleData[0]?.title} hashtag={articleData[0]?.category} >
        <PinterestIcon size={35} round={true} />
      </PinterestShareButton> 

      <LinkedinShareButton url={shareUrl} quote={articleData[0]?.title} hashtag={articleData[0]?.category} >
        <LinkedinIcon size={35} round={true} />
      </LinkedinShareButton> 
      

    </Flex>
  )
}

export default ArticleDetailsShare