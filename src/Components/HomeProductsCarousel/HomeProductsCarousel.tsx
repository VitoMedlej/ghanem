"use client"
import {Box, Divider, Typography} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { IProduct } from '@/Types/Types'
import Btn from '../Btn/Btn'
import SwiperCarousel from './SwiperCarousel/SwiperCarousel'
import { useRouter } from 'next/navigation'
const ProductCollection = ({sx,delay,Collectiontitle,data,setQuickView,category} : {
    Collectiontitle: string,
    delay : number,
    category : string,
    data: IProduct[],
    sx ?: any;
    setQuickView ?: Dispatch<SetStateAction<{
        isOpen: boolean;
        productId: null | string;
    }>>
}) => {
    
    const router = useRouter()

    return (
        <Box
            sx={{
            maxWidth: 'lg',
            width :'99%',
            margin: '0 auto',
            // my: '3em',
            mt:'1em',
            mb:'3em',
            ...sx,
        }}>
             <Box className="flex justify-between row auto" sx={{px:1,pb:0,maxWidth:'lg'}}>

<Typography
component={'h1'}
    className='sectionTitle   box'
    sx={{
 textAlign: 'left',
     fontSize: {
        xs: '1em',
    },
    padding:.5,
    fontWeight: '500'
}}>
{Collectiontitle || `Our Latest Collections`}
</Typography>


<Btn v2
sx={{px:{xs:1,sm:2},fontSize:{xs:'.7em',sm:'.8em'},width:'fit-content'}}
onClick={()=>router.push(`/${category || 'collection'}/products`)}
>
   Explore More
</Btn>
</Box>
            
            <Box
                sx={{
                display: {
                    xs: "flex",
                 
                }
            }}>
                <SwiperCarousel
                delay={delay}
                
                data={data && data.length > 0 && data?.slice(0,35) || []}/>
            </Box>

   
{/* <Divider  light /> */}
        
                </Box>
                
                )
                
            }

export default ProductCollection