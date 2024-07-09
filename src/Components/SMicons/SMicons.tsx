"use client"
import { Box, Typography } from '@mui/material';
import React from 'react'
// import {FaInstagram,FaWhatsapp} from 'react-icons/fa';
// import {BsTiktok} from 'react-icons/bs';


const sm = [
    {
      label: 'instagram link',
        Icon:'https://www.svgrepo.com/show/520798/instagram.svg',
        href:'https://www.instagram.com/ghanem.trading/'
    },
    {
      label: 'Whatsapp link',
      
      Icon:'https://www.svgrepo.com/show/506628/whatsapp.svg',href:'https://wa.me/+96103261854'},
    // {Icon:'https://www.svgrepo.com/show/494202/facebook.svg',href:'https://www.facebook.com/diy_crafts_diamond_paintinglb?mibextid=LQQJ4d'},
  
 ]
const SMicons = ({sx,color}:{color?:string,sx?:any}) => {
  return (
    <Box className='col flex' sx={{zIndex:1234567,...sx}}>
      <Typography sx={{fontWeight:500}} component={'p'}> 
        Connect With Us
      </Typography>
      <Box className="flex row" >

    {sm.map((item)=>{
      return <Box  key={item.href} className='relative bg flex center items-center justify-center space-between' sx={{borderRadius:'50%',width:'50px',mx:.35,mt:1,height:'50px'}}>
      <a  
      aria-label={item.label}
      style={{width:'80%',height:'80%'}} className='img absolute' href={`${item.href}`} target='_blank' rel={'noneferrer'}>
          
            <img src={item.Icon} style={{filter:'invert(1)'}} alt="" className="img contain " />
         </a>
            </Box>
    })}
    </Box>
    </Box>
  )
}

export default SMicons