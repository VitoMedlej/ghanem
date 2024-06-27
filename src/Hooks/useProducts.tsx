"use client"
import { IProduct } from '@/Types/Types';
import { useState, useEffect } from 'react';


const useProducts = (products: IProduct[]) => {
  const [array1, setArray1] = useState<IProduct[]>([]);
  const [array2, setArray2] = useState<IProduct[]>([]);
  const [array3, setArray3] = useState<IProduct[]>([]);

  useEffect(() => {
    const shuffleArray = (array: IProduct[]) => {
      let currentIndex = array?.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    const splitArray = (array: IProduct[]) => {
      const third = Math.ceil(array.length / 3);
      setArray1(array.slice(0, third));
      setArray2(array.slice(third, 2*third));
      setArray3(array.slice(2*third));
    }

    console.log('products: ', products);
    if (!products) return;
    const shuffledProducts =  products && shuffleArray([...products]);
    splitArray(shuffledProducts);
  }, [products]);

  return { array1, array2, array3 };
};

export default useProducts