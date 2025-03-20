"use client";

import { IProduct } from '@/Types/Types';
import { useState, useEffect } from 'react';

const useProducts = (products: IProduct[]) => {
  const [array1, setArray1] = useState<IProduct[]>([]);
  const [array2, setArray2] = useState<IProduct[]>([]);
  const [array3, setArray3] = useState<IProduct[]>([]);
  const [array4, setArray4] = useState<IProduct[]>([]);

  useEffect(() => {
    if (!products) return;

    const categorizedProducts: Record<string, IProduct[]> = {};

    products.forEach(product => {
      if (!categorizedProducts[product.category]) {
        categorizedProducts[product.category] = [];
      }
      categorizedProducts[product.category].push(product);
    });

    const sortedCategories = Object.values(categorizedProducts);

    setArray1(sortedCategories[0] || []);
    setArray2(sortedCategories[1] || []);
    setArray3(sortedCategories[2] || []);
  }, [products]);

  return { array1, array2, array3, array4 };
};

export default useProducts;
