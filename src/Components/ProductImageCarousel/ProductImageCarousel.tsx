"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";


// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Box } from "@mui/material";

export default function App({images}:{images:string[] | []| undefined}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        freeMode={true}

        effect={"fade"}
        autoplay={
          {delay:2000}
        }
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper"
      >
{
          images && images.map(img=>{
            return    <SwiperSlide key={img}>
              <Box sx={{height:{xs:'500px',md:'600px'}}}>

            <img className='img contain' src={`${img}-/resize/600/`} alt={'Product Image'} />
              </Box>
          </SwiperSlide>
          })
        }
      </Swiper>
    </>
  );
}
