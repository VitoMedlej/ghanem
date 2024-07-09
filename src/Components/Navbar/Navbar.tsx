"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import {BiCart} from 'react-icons/ci'

import { useEffect, useState} from 'react';

import SearchModal from './SearchModal';
import Link from 'next/link';
import {Badge, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
// import {AiOutlineHome,AiOutlineShoppingCart} from 'react-icons/ai'
// import SearchInput from './SearchInput';

import NavButtom from './NavButtom';
import { useCartContext, useCategoriesContext, useDrawerContext } from '@/context/Contexts';
import SearchInput from './SearchInput';
// import Btn from '../Btn/Btn';



export const categories =  [`Craft Supplies`,
`DIY Kits`,
`customized`,
`Home Decor`];

export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,
        setOpenModal] = useState(false);
    
    const [localCart,
        setLocalCart] = useState([]);

    const {cartOpen, setCartOpen} = useCartContext();
    const router = useRouter()


    const {categories} = useCategoriesContext();

    // const localCart = [1]
    useEffect(() => {
        const cart : any = []
        // const cart = loadState('l12oxio951209XJkgop15v') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])

    return ( <>
     <Box
     id='navy'
    className='center auto relative    flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                width:'100%',
                boxShadow:'none',
        background:'white',
        border: 'none',
        px:0,
        flexGrow: 1
    }}>
      
        <AppBar
     id='navy2'

    className='center relative   flex'

            sx={{

                boxShadow:'none',

                background:'white',
            // maxWidth: 'lg',
                width:'100%',
            margin: '0 auto',
        }}>
            {/* <Box className='center text-center' sx={{background:'#0f0f0f',width:'100%',py:.25}}>
                <Typography className='clr' component='p' sx={{py:.2,fontSize:{xs:'.75em',sm:'.75em'}}}>
            DELIVERY AVAILABLE ALL OVER LEBANON
                </Typography>
            </Box> */}
            <Toolbar
     id='navy3'

    className=' relative  flex   w100  auto'

                sx={{
                    justifyContent: {xs:'space-between',md:'space-evenly'},
                    
                background:'white',
                    maxWidth:'lg',
                px:'0 !important',
                
                flexWrap: 'wrap'
            }}> 
              

                <Box
                    sx={{
                    px:1,
                    display:{xs:'flex',md:'flex'},

                    // flex: 1,
                    flexWrap: 'wrap',
                    justifyContent: {
                        xs: 'right',
                    },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
                             
                        
                             
                             {/* <Btn
                            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                            sx={{
                                margin : '8px',padding:0,
                            color: 'black',

                            // margin: '0.1em',
                        }}>
                            {text('العربية','English')}
                        </Btn> */}
                        {/* <IconButton
                            onClick={() => setOpenModal(!openModal)}
                            sx={{
                            color: 'black'
                        }}>

                                <CiSearch color='black'/>
                          
                        </IconButton> */}
                 
   

                        <IconButton
                            onClick={() => setOpen(!open)}
                            size="medium"
                            edge="start"
                            aria-label="menu"
                            sx={{
                            margin : '8px',padding:0,
                            color: 'black',
                            // margin: '0.1em',
                            display: {
                                md: 'none'
                            }
                        }}>
                            <RiMenu2Fill color='black'/>
                        </IconButton>
<Box
sx={{display:{xs:'none',md:'flex'}}}
>

                        <Link 
                        
                        className='flex center  aling-center items-center '
                        
                        
                        href='/' color='inherit'>

<Box className='flex'
    sx={{
    mx: {
        xs:'.15em',
        sm: '1em'
    },
    width:{xs:'120px',sm: '120px'}
}}>
    <img
        className='img cover'
        src={`https://ucarecdn.com/5796ba3f-8471-4ae4-9da0-9009623d470d/-/resize/200/`}
        alt="ghanem trading logo"/>
</Box>
</Link>

</Box>

                   
   {/* <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' className='flex decor-none' rel='noopener'>

                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                     
                            <AiOutlinePhone color='black'/>

                        </IconButton>
    </a> */}
                    
                    </Box>

                </Box>

<Box
sx={{
    backgroundColor:'transparent',
    pointerEvents:'none',
    display:{xs:'flex',md:'none'},
    height:{xs:'90px',sm: '100px'}

}}
className="decoy">

</Box>


                <Box
sx={{display:{xs:'flex',md:'none'},
    right:'50%',
    width:{xs:'110px'},
    top: 0,
    transform: 'translateX(50%)',
}}
className='absolute '
>

                        <Link 
                        
                        className='flex center  aling-center items-center '
                        
                        
                        href='/' color='inherit'>

<Box className='flex'
    sx={{
    mx: {
        xs:'.15em',
        sm: '1em'
    },
    width:'120px',
    height:{xs:'90px',sm: '100px'}
}}>
    <img
        className='img contain'
        src={`https://ucarecdn.com/5796ba3f-8471-4ae4-9da0-9009623d470d/-/resize/200/`}
        alt="ghanem trading logo"/>
</Box>
</Link>

</Box>
  <SearchInput/>

  {/* <IconButton
                            onClick={() => setOpenModal(!openModal)}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                            margin : '8px',padding:0,
                            color: 'black',
                       
                        }}>
                            <BiSearchAlt  color='black'/>
                        </IconButton> */}


                     <IconButton
                            size="medium"

                              onClick={() => setCartOpen(!cartOpen)}

                            // onClick={() => router.push('/collection/products')}
                            sx={{
                                margin : '8px',padding:0,
                            color: 'black'
                        }}>
                            <Typography sx={{
                                display:{xs:'none',sm:'flex'},
                                fontSize:'.67em !important',fontWeight:400}} className=''>
                            Basket
                            </Typography>
                            {/* <Badge color='primary' badgeContent={`${localCart.length || '0'}`}> */}

                                <AiOutlineShoppingCart color='black'/>
                            {/* </Badge> */}
                         
                        </IconButton>
                        <SearchInput
mobile
                    /> 
<SearchModal openModal={openModal} setOpenModal={setOpenModal }/>
             
            </Toolbar>

            
<NavButtom categories={categories}/>

        </AppBar>
    </Box> 

    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}