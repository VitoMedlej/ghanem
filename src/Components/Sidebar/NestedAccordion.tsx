"use client"
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemButton } from '@mui/material';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

export const mainCategories = ["5d diy kits", "materials"];

export const getCategorySubcategories = (category : string) => {
  switch (category) {
    case '5d diy kits':
      return ["LANDSCAPES",
 'PORTRAIT',
      
      "NATURE", "RELIGIOUS", "KIDS & CARTOONS", "TISSUE BOX", "CUP COASTER", "KEY CHAINS", "DOUBLE MIRROR", "PENCIL CASE"];
    case 'materials':
      return ["SEALER BRIHTNER", "OTHERS", "BOXES & STORAGES", "LED LIGHT PAD", "CORRECTION & FENEL", "CLIPS & MON-STICK PAPPER", "LABEL NUMBER STICKERS", "PLATE & ROLLER", "PENS"];
    default:
      return [];
  }
};
const YourComponent = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);




  return (
    <div>
      {mainCategories.map((category) => (
        <Accordion key={category} sx={{ border: 'none', boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<AiOutlineArrowUp />}
            aria-controls={`panel-${category.toLowerCase()}-content`}
            id={`panel-${category.toLowerCase()}-header`}
          >
            <Typography component='h1' sx={{ fontWeight: 600 }}>
              {category}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List disablePadding>
              <ListItem
                sx={{ padding: 0, width: '100%' }}
                onClick={() => {
                  setOpen(false);
                  router.push(`/${category.toLowerCase()}/products`);
                }}
              >
                <ListItemButton>
                  <Typography sx={{ fontWeight: 300 }}>View All</Typography>
                </ListItemButton>
              </ListItem>

              {getCategorySubcategories(category).map((subCategory) => (
                <ListItem
                  sx={{ padding: 0, width: '100%' }}
                  key={subCategory}
                  onClick={() => {
                    setOpen(false);
                    router.push(`/${category.toLowerCase()}/products?type=${encodeURIComponent(subCategory?.toLowerCase())}`);
                  }}
                >
                  <ListItemButton>
                    <Typography sx={{ fontWeight: 300 }}>{subCategory}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default YourComponent;
