"use client"
import {Box, Typography} from "@mui/material"
import {useRouter} from "next/navigation"
// import {ICategoryItem} from "../../src/Types"


const CategoryItem = ({img, desktopHeight,phone,height, href, title} : any) => {
    const router = useRouter()

    return (
        <Box
            className='box flex col'
            onClick={() => router.push(`${href}`)}
            sx={{
                display:'flex',
            // display : {xs:phone ? 'flex' : 'none',sm:'flex'},
           width:{xs:'23%',sm:'200px'},
           height:{xs:'23vw',sm:'200px'},
            position: 'relative',
            margin: '5px',
            cursor: 'pointer',
            transition: '.2s ease',
            overflow: 'hidden'
        }}>
            <Box
                className='layered'
                sx={{
                width: '100%',
                // position: 'absolute',
                height: `100%`,
                borderRadius: '0%'
            }}>
                
                <img  className='img   contain' src={`${img}-/resize/400/`} alt="Category Image"/>
            </Box>
            {/* <Box className=' auto center text-center'>
                <Typography fontSize='.8em'>
                    {title}
                </Typography>
            </Box> */}
        </Box>
    )
}
export default CategoryItem