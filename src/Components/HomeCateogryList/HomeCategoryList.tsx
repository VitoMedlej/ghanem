"use client"
import {Box, Grid, Typography} from "@mui/material"
import CategoryItem from "./CategoryItem"
import {useRef, useEffect} from "react";
// import staticData from '../../staticData.json'

const Category = ({categories} : {categories:any} ) => {
    // const CategoryItems = [
    //     {phone:true,img:'https://www.ishtari.com/image/data/system_banner/10000/3600/3436/appliances.png'},
    //     {phone:true,img:'https://www.ishtari.com/image/data/system_banner/10000/3600/3436/automotives.png'},
    //     {img:'https://www.ishtari.com/image/data/system_banner/10000/3600/3436/beauty.png'},


    //     {img:'https://www.ishtari.com/image/data/system_banner/10000/3600/3436/camping.png'},
    //     {img:'https://www.ishtari.com/image/data/system_banner/10000/3600/3436/kitchen.png'},
    //     {img:'https://www.ishtari.com/image/data/system_banner/10000/3600/3436/massager.png'},
    //     {img:'https://www.ishtari.com/image/data/system_banner/10000/3600/3436/office.png'},
    //     {img:'https://www.ishtari.com/image/data/system_banner/10000/3600/3436/inflatable.png'},


    //     {img:'https://www.ishtari.com/image/data/system_banner/10000/3600/3436/camera.png'}]




    return (

        <Box
            sx={{
            mt:1,
                mb: {
                xs: '4em',
                sm: '6em'
            },
            mx: {
                xs: 1,
            }
        }}>
            {/* <Typography
                className='sectionTitle text-center center auto box'
                sx={{
                pb: '.5em',
                px:1,
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                fontWeight: '300'
            }}>
                Explore Different Categories
            </Typography> */}

            <Grid
                container
                sx={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                


                <Box className='auto center flex' sx={{ flexWrap: 'wrap', width: { xs: "100%" } }}>
    {categories && categories.map((cate: any) => (
        cate && cate?.cateArray.map((item: any) => (
            <CategoryItem
                key={item?.img}
                //?type=${subcategory?.name ? `${encodeURIComponent(subcategory.name.replace(/ /g, '-').replace(/&/g, '%26')).toLowerCase()}` : null}`
                href={`/${encodeURIComponent(item?.categoryName?.replace(/ /g, '-')).toLowerCase()}/products`}
                // href={`/${item?.categoryName.toLocaleLowerCase()}/products`}
                title={item?.categoryName}
                height='200px'
                // phone={item.phone} // Assuming phone is a property of item
                img={item.img}
            />
        ))
    ))}
</Box>
                {/* <Box
                className='auto center flex'
                    sx={{
                    flexWrap: 'wrap',
                    width: {
                        xs: "100%",
                    }
                }}>
                    {CategoryItems && CategoryItems.length > 0 && CategoryItems.map((item:any) => {

                         
return   <CategoryItem
                            key={item.img}
                                href={item.href}
                                title={item.title}
                                height='200px'
                                phone={item.phone}
                                img={`${item.img}`}/>
                    })}

                </Box> */}

            </Grid>
        </Box>

    )
}

export default Category