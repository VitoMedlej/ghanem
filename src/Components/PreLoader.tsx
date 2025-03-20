"use client"
import React, { useEffect, useState } from 'react'
import { Box,  Container, Grid, Typography } from "@mui/material"
// import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
// import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
// import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import Btn from './Btn/Btn'
import ContactSection from './ContactSection/ContactSection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import HomeCategoryList from './HomeCateogryList/HomeCategoryList'
import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import { useCategoriesContext } from '@/context/Contexts'
import useProducts from '@/Hooks/useProducts'

const 
PreLoader = ({data,featuredProducts,brands,resImages,vids,SectionsRes}:any) => {
  console.log('data: ', data);
  const {categories} = useCategoriesContext();
  const { array1, array2, array3 , array4 } = useProducts(data)
  console.log('array1: ', array1);
  // let videosArray = vids && vids[0]?.videos?.videos || null
  // const router= useRouter();
  // const {text} = useLanguage()
  // const textsArray = [
  //   {
  //     id: 1,
  //     title: text('100% Natural', '100٪ طبيعي'),
  //     desc: text(
  //       'Our honey is sourced from the purest natural environments, ensuring 100% natural goodness without any artificial additives or preservatives.',
  //       'عسلنا يأتي من أجواء طبيعية نقية، مما يضمن لك الخير الطبيعي بنسبة 100٪ دون أي إضافات صناعية أو مواد حافظة.'
  //     ),
  //   },
  //   {
  //     id: 2,
  //     title: text('Purity and Potency', 'النقاء والفعالية'),
  //     desc: text(
  //       'We carefully select our beehives in pristine locations, ensuring the purity and potency of our honey, so you experience the best benefits.',
  //       'نحن نختار خلايانا بعناية في أماكن نقية، مما يضمن نقاء وفعالية عسلنا، لتجربة فوائد متميزة.'
  //     ),
  //   },
  //   {
  //     id: 3,
  //     title: text('Expertly Formulated', 'صياغة خبيرة'),
  //     desc: text(
  //       'Our honey is expertly crafted by our team of experienced beekeepers, ensuring a premium product that delivers superior taste and quality.',
  //       'تم تصنيع عسلنا بخبرة من قبل فريق من مربي النحل ذوي الخبرة، مما يضمن لك منتجًا ممتازًا يقدم طعمًا وجودة فائقين.'
  //     ),
  //   },
  //   {
  //     id: 4,
  //     title: text('Great Value', 'قيمة عظيمة'),
  //     desc: text(
  //       'Ghanem Trading honey provides great value for your health, offering the highest quality honey at an affordable price for you and your family.',
  //       'عسل بي أورجانيك يقدم قيمة عظيمة لصحتك، حيث يوفر عسل عالي الجودة بسعر معقول لك ولعائلتك.'
  //     ),
  //   },
  // ];
  
  const filterProductsByCategory = (data: any, categoryName: string) => {
    // // If the category name is 'collection', return all data
    // if (categoryName === 'collection') {
    //   return data;
    // }
  
    // // Filter products based on the category name
    // const filteredProducts = data.filter((product: any) => product?.category === categoryName);
  
    // // If there are no products with the specified category, return an empty array
    // if (!filteredProducts || filteredProducts.length === 0) {
    //   return [];
    // }
  
    return data;
  };

  return (
    <Box >
      <MainCarousel imgs={resImages}/>
      {/* <HomeProductCollection  products={data}/> */}

{
  categories &&
  <HomeCategoryList categories={categories}/>

}

<HomeProductsCarousel
delay={2500}
category='all'
Collectiontitle=''
data={array1}
/>
{/* <HomeProductCollection  
          products={array2}
          pt={1}
          // category={'collection'}
          sectionTitle={'Browse Collections'}
          // delay={2500}
        /> */}


{/* {
  SectionsRes && SectionsRes.map((section: any) => {
    const productsForCategory = filterProductsByCategory(data, `${section?.category || 'collection'}` );

    return (
      <Box key={`${section?.title}`}>
        {section?.images && <Grid  container className='flex' sx={{ gap: 1, px: 1 }}>
        { section?.images?.length > 0 && section?.images.map((img: string, idx: number) => (
            <Grid key={idx} item xs={12} sm={section.images.length > 1 ? 5.9 : 12}>
              <Box>
                <img src={`${img}`} alt="" className="img" />
              </Box> 
          </Grid>
        ))}
        </Grid>
}
        <HomeProductsCarousel  
          data={productsForCategory}
          category={section?.category}
          Collectiontitle={section?.title || 'Our Latest Collections'}
          delay={2000}
        />
      </Box>
    );
  })
} */}
       
  
       <HomeProductsCarousel  
          data={array2}
          category={'collection'}
          Collectiontitle={'Our Latest Collections'}
          delay={2500}
        />

      {/* <Perks/> */}

      <HomeProductsCarousel  
          delay={2500}

          data={array3}
          category={`collection`}
          // category={'collection'}
          Collectiontitle={'Shop Products'}
          // delay={3000}
        />

         <HomeProductsCarousel  
          delay={2500}

          data={array4}
          category={`collection`}
          // category={'collection'}
          Collectiontitle={'Shop Products'}
          // delay={3000}
        />
   
        {/* <HomeProductsCarousel  sx={{mt:2}} data={data.slice(7,12)} Collectiontitle={'Home & Tools Collection'} delay={2000}/> */}



        {/* <Grid container className='flex' sx={{gap:1,px:1}}>
          <Grid item xs={12} sm={5.9}>
            <Box>
              <img src="https://www.ishtari.com/image/data/system_banner/10000/3600/3456/cleaning.png" alt="" className="img" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={5.9}>
            <Box>
              <img src="https://www.ishtari.com/image/data/system_banner/10000/3600/3456/car-tools.png" alt="" className="img" />
            </Box>
          </Grid>
        </Grid>
   
        <HomeProductsCarousel  sx={{mt:2}} data={data.slice(6,33)} Collectiontitle={'Car & Cleaning Collection'} delay={2000}/>
        */}
       
       

     


      <Container className='' sx={{maxWidth:'lg',pt:1,pb:4}}>
   

        <Box sx={{mt:1}} className='flex row  wrap justify-between center text-center'>
          { 

// [
//   `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/dorsch.png`,
//  `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/electrolux.png`,
//  `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/kenwood.png`,
//  `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/korkmaz.png`,
//  `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/optimal.png`,
//  `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/chicco.png`,
//  `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/braun.png`,
//  `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/beper.png`,
//  `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/barista.png`,
//  `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/tefal.png`,
//  `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/total.png`,
//  `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/mulinex.png`,
// ]
brands && brands[0] && brands[0]?.BrandsArray.map((i: {img:string})=>{
            return  <Box key={i?.img} sx={{width:{xs:'30%',sm:'22%',md:'22%'},maxWidth:'220px'}}>
            <Box>
              <img 
               src={`${i?.img}-/resize/400/`} alt="" className="img" />
              </Box>
              

            </Box>
          })}
        </Box>


      </Container>



        <ContactSection/>
  </Box>
  )
}

export default PreLoader