"use client"
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import MenuHover from './MenuHover'
// import MenuHover from './MenuHover'





const NavButtom = ({categories} : any) => {

  return (
    <Box
        className=' wrap bg  space-evenly'
        sx={{
            flex:1,
            position:'relative',
        // width: '100%',
        mx: 0,
        display : {xs:'none',md:'flex'}
    }}>
        <Container
            className='flex bg   '
            sx={{
            justifyContent: 'flex-start',
            maxWidth: 'lg',
            overflow:'hidden',
            py:1.5,

        }}>
{/* <Link className=' decor-none uppercase' href={`/collection/products`}>
                    <Typography  component='p' sx={{width:'max-content',fontWeight:400,fontSize:{xs:'.7em',sm:'.85em'}}}>
                    Sale
                    </Typography>
                </Link> */}
                  <Link className='white decor-none ' href={`/`}>

<Typography 
className=' cursor center flex gap1 white decor-none captialize'
id="button"
component='h1' sx={{width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:500,fontSize:{xs:'.86em',sm:'.95em'}}}>
Home
</Typography>
</Link>

<Link className='white decor-none ' href={`/collection/products`}>

<Typography 
className=' cursor center flex gap1 white decor-none captialize'
id="button"
component='h1' sx={{width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:500,fontSize:{xs:'.86em',sm:'.95em'}}}>
Collection
</Typography>
</Link>

{
    categories && categories.map((cate: any) => {
        return cate?.cateArray.map((item: any, index: number) => {
            if (item?.subcategories?.length === 0) {
                return (
                    <Link 
                        key={item?.categoryName} 
                        className='white decor-none' 
                        href={`/${item?.categoryName?.toLocaleLowerCase()}/products`}
                    >
                        <Typography 
                            className='cursor center flex gap1 white decor-none captialize'
                            component='h1' 
                            sx={{
                                width:'max-content',
                                mx:'1em',
                                alignItems: 'center',
                                fontWeight:500,
                                fontSize:{xs:'.86em',sm:'.95em'}
                            }}
                        >
                            {`${item?.categoryName}`}
                        </Typography>
                    </Link>
                );
            } else {
                return (
                    <MenuHover 
                        key={item?.categoryName}
                        img={cate.img} // assuming img is stored in the cate object
                        category={`${item?.categoryName}`} 
                        subcategories={item?.subcategories} 
                    />
                );
            }
        });
    })
}

{/* <MenuHover img='https://www.ishtari.com/image/data/system_banner/10000/600/519/home-appliances.png' category={'5D Diy Kits'} subcategories={[  
 "LANDSCAPES",
 'PORTRAIT',
 "NATURE",
 "RELIGIOUS",
 "KIDS & CARTOONS",
 "TISSUE BOX",
 "CUP COASTER",
 "KEY CHAINS",
 "DOUBLE MIRROR",
 "PENCIL CASE"
]}/>

<MenuHover img='https://www.ishtari.com/image/data/system_banner/10000/600/523/camerass.png' category={'Materials'} subcategories={[  "SEALER BRIHTNER",
  "OTHERS",
  "BOXES & STORAGES",
  "LED LIGHT PAD",
  "CORRECTION & FENEL",
  "CLIPS & MON-STICK PAPPER",
  "LABEL NUMBER STICKERS",
  "PLATE & ROLLER",
  "PENS"
]}/>


{
    [   
        // `Craft Supplies`,
    // `5D DIY Kits`,
    // 'MATERIELS',
    `Customized`,
   
    ].map(i=>{
        return <Link key={i} className='white decor-none ' href={`/${i.toLocaleLowerCase()}/products`}>

        <Typography 
        component='h1'
        className=' cursor center flex gap1 white decor-none captialize'
        id="button"
        sx={{width:'max-content',
        mx:'1em',
        alignItems: 'center',
        fontWeight:500,fontSize:{xs:'.86em',sm:'.95em'}}}>
        {i}
        </Typography>
        </Link>
    })
} */}













                {/* <Link className='white decor-none uppercase' href={`/birds/products`}>

                <Typography 
      className=' cursor center flex gap1 white decor-none uppercase'
        id="button"
        component='p' sx={{width:'max-content',
        mx:'1em',
        alignItems: 'center',
        
        fontWeight:600,fontSize:{xs:'.6em',sm:'.75em'}}}>
     Birds
   </Typography>
   </Link> */}
           

            {/* { [
    {cate:"Categories",subCate:catsSubcategories,img:`https://th.bing.com/th/id/R.1776ae53615a64b359d8d65cf5eca544?rik=WKeDBh1pbwPftA&riu=http%3a%2f%2fwww.kmart.com.au%2fwcsstore%2fKmart%2fimages%2fespots%2fpets-beds-050418-tall-banner.jpg&ehk=fwMSwpMwGOLad6eRmrG%2bT48oAdH2G7Y8Mm2thOjl3Zk%3d&risl=&pid=ImgRaw&r=0`},
    // {cate:"Dogs",subCate:dogsSubcategories,img:`https://mypetguru.com/imgs/uploads/toy-for-dog.jpg`},
    // {cate:"Offers",subCate:offersSubcategories,img:'https://i.pinimg.com/originals/bf/cb/59/bfcb59f20bddc43101e39de2cc142f7e.jpg'}
].map(i => {
                // return <Link className='clr decor-none uppercase' key={i} href={`/${i.replace(/ /g, '-').toLocaleLowerCase()}/products`}>
                //     <Typography  component='p' sx={{width:'max-content',fontWeight:600,fontSize:{xs:'.6em',sm:'.75em'}}}>                    
                //     {i}
                //     </Typography>
                // </Link>
                return  <MenuHover img={i.img} key={i.cate} category={i.cate} subcategories={i.subCate}/>
            })} */}


        </Container>

        
   
    </Box>
  )
}

export default NavButtom