"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay } from 'swiper';
import Btn from './Btn/Btn';
import useLanguage from '@/Hooks/useLanguage';



const Preloader3 = ({res}:{res:any}) => {
    const router = useRouter()
 const [imgs,setImgs] = useState(
     
     [
         {img:'https://www.ishtari.com/image/data/system_banner/10000/3600/3435/first.png',position:'centerd'},
  {img:'https://www.ishtari.com/image/data/system_banner/10000/3600/3437/water-sports.png',position:'topd'},

]
)
console.log('imgs: ', imgs);
useEffect(() => {
  

    if (res && res?.MainCarousel) {
        setImgs(res?.MainCarousel)
    }
}, [])

//   const {text} = useLanguage()
    
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            maxWidth:'none',
            // maxWidth: 'lg',
            minHeight:'300px',
            height:'100%',
            maxHeight:{sm:'100%',md:'500px',lg:'500px'},
            margin: '0 auto',
            // height : {xs:'100%',sm:'450px',md:'100%'},
            
            display: {
                xs: 'flex'
            },
            // mt:20,
        }}>
            <Swiper
            
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs  && imgs?.map((item) => {
    
                    return <SwiperSlide 
                     
                    className='ztop  ' key={item?.img}>
                        <Box
                            sx={{
                                position:'relative',
                                height: '100%',
                            width:'100%'
                        }}>
                      
                            <img
            
                                className={`img contain  ${item?.position} 
                                `}
                                // ${item?.className}
                                src={`${item.img}`}
                                alt="Main Carousel Image"/>
           
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader3