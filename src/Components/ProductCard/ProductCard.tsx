"use client"

import { Box, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'
import useCart from '@/Hooks/useCart'
import { BsCartPlus } from "react-icons/bs";

const ProductCard = ({
    title,
    price,
    sizes,
    stock,
    images,
    category,
    _id,
    width,
    height,
    inStock,
    newPrice
}: {
    inStock?: boolean,
    _id: string,
    title: string,
    stock?: string | number,
    sizes: {
        size: number;
        price: number;
    }[] | null;
    price: number,
    newPrice?: number,
    images: string[],
    category: string,
    width?: string | number | any,
    height?: string | number
}) => {
    const router = useRouter()
    const { addToCart } = useCart()
    return (
        <Box
            className='trans cardproduct center text-center'
            sx={{
                py: 1,
                margin: '0em auto',
                my: 1,
                minWidth: { sm: '30%' },
                width: width
                    ? width
                    : {
                        xs: '48%',
                        sm: '32%',
                        md: '22%'
                    },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: height || { xs: '370px', sm: '400px', md: '450px' },
                position: 'relative' // Ensure relative positioning for the button
            }}>
            <Box
                className='cursor auto'
                onClick={() => router.push(`/product/${_id}`)}
                sx={{
                    width: { xs: '98%', sm: '100%', md: 'auto' },
                    height: '60%'
                }}>
                <img
                    src={images
                        ? `${images[0]}/-/resize/300/`
                        : ''}
                    alt="Product image"
                    className="img contain" />
            </Box>

            <Box
                sx={{
                    mt: .5,
                }}>
                <Typography
                    className='cursor'
                    component='h1'
                    onClick={() => router.push(`/product/${_id}`)}
                    sx={{
                        color: 'black',
                        textAlign: 'left',
                        fontSize: { xs: '.75em', sm: '.85em', md: '.95em' },
                        fontWeight: '600',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical'
                    }}>
                    {title}
                </Typography>

                {inStock !== false && Number(stock) !== 0 ?
                    <>
                        <Typography
                            component='p'
                            sx={{
                                mb: 0.5,
                                fontWeight: '500',
                                color:  'green',
                                fontSize: { xs: '.9em', sm: '1em' },
                            }}>
                            {category?.toLocaleLowerCase() !== 'almost done' && newPrice ? (
                                (price !== 0 || `${price}` == '0' ? <>
                                    <s>{price}$</s> {newPrice}$
                                </> : 
                                  sizes && sizes?.length > 0 && sizes[0]?.price > 0 ? `${sizes[0]?.price}$` : ''
                                
                                )
                            ) : (
                                category?.toLocaleLowerCase() !== 'almost done' 
                                && price ? `${price}` == '0' ? 
                                
                                sizes && sizes?.length > 0 && sizes[0]?.price > 0 ? `${sizes[0]?.price}$` : ''
                                
                                
                                : `${price}$` : `${sizes && sizes[0].price}$`
                            )}
                        </Typography>
                        {/* {sizes && sizes.length > 0 && (
                            <Box sx={{ mt: 1 }}>
                                <Typography component="div" sx={{ mb: 0.5, fontWeight: '500', fontSize: { xs: '.9em', sm: '1em' } }}>
                                    Available Sizes:
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
                                    {sizes.map((sizeOption) => (
                                        <Box
                                            key={sizeOption.size}
                                            sx={{
                                                border: '1px solid black',
                                                borderRadius: '5px',
                                                padding: '5px 10px',
                                                cursor: 'default'
                                            }}
                                        >
                                            {sizeOption.size} - ${sizeOption.price}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        )} */}
                        {category?.toLocaleLowerCase() !== 'almost done' &&
                            <Btn
                                className='cursor bg black gap1'
                                onClick={() =>
                                    sizes && sizes.length > 0 ?
                                        router.push(`/product/${_id}`)
                                        : Number(stock) !== 0 &&
                                        addToCart(1, _id, { title, category, img: images[0], _id, price: newPrice ? Number(newPrice) : price }, true)}
                                v2
                                sx={{
                                    color: 'black !important',
                                    margin: '.15em auto',
                                    position: 'absolute',
                                    bottom: '10px', // Fix the button to the bottom of the card
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '90%'
                                }}>
                                <Box className="flex white gap1 gap">
                                    {sizes && sizes.length > 0 ? 'Select' : 'ADD'}
                                    <BsCartPlus color='white' fontSize='20px' />
                                </Box>
                            </Btn>}
                    </> :
                    (category?.toLocaleLowerCase() !== 'almost done' || category?.toLocaleLowerCase() !== 'customized' ? <Typography
                        sx={{
                            mb: .5,
                            color: 'red',
                            fontWeight: '600',
                            fontSize: { xs: '.99em', sm: '1.06em' }
                        }}>
                        Out Of Stock
                    </Typography> : `${category}`)
                }
            </Box>
        </Box>
    )
}

export default ProductCard
