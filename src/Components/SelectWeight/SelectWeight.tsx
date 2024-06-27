"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function ProductCard({ setselectedSize, selectedSize, sizes }: any) {

  const isEmpty = sizes?.length > 0 && sizes[0]?.size === '';
  console.log('isEmpty: ', isEmpty);
  if (isEmpty) return <></>;
  const handleChange = (event: any) => {
    if (!sizes || isEmpty) {
      return;
    }

    const weight = event.target.value;
    const option = sizes.find((option: any) => `${option?.size}` == weight);
    setselectedSize({ size: option.size, price: option.price });
  };

  return (
    <Box className='flex items-center' sx={{ minWidth: { xs: '100%', lg: '100%' } }}>
      <FormControl fullWidth>
        <InputLabel id="weight-label">Sizes</InputLabel>
        <Select
          size='medium'
          labelId="weight-label"
          id="weight-select"
          value={selectedSize?.size}
          label="Weight"
          onChange={handleChange}
        >
          {sizes && sizes?.map((option: any) => (
            <MenuItem key={option.size} value={option.size}>
              {option.size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
