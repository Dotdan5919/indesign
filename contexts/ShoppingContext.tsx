'use client'

import { Bold } from 'lucide-react';
import { StaticImageData } from 'next/image';
import React, { useEffect } from 'react'

import chair_1 from '@/images/chairs/chair_1.png'
import chair_2 from '@/images/chairs/1@0.33x.png'
import chair_3 from '@/images/chairs/3@0.33x.png'
import chair_4 from '@/images/chairs/4.png'
import recliner_1 from '@/images/chairs/8@0.33x.png'

 import { createContext,useState, ReactNode } from 'react'


// Define the shape of the object that the context will provide
// interface ShoppingContextValue {
//   activeCategories: categoriesType;
//   setActiveCategory: React.Dispatch<React.SetStateAction<categoriesType>>;
//   priceRange: PriceRange;
//   setPriceRange: React.Dispatch<React.SetStateAction<PriceRange>>;
//   Novelties: NoveltiesType;
//   setNovelties: React.Dispatch<React.SetStateAction<NoveltiesType>>;
//   Discounted: DiscountedType;
//   setDiscounted: React.Dispatch<React.SetStateAction<DiscountedType>>;
// }

// ---------------------------
// 2. Create the Context with a properly typed default value (undefined is common)
// ---------------------------
// The default value should be of type ShoppingContextValue or undefined
// export const ShoppingContext = createContext<ShoppingContextValue | undefined>(undefined);
export const ShoppingContext = createContext();



type PriceRange=[number,number];

 
type DiscountedType=boolean;
type NoveltiesType=boolean;
type categoriesType=string;

interface ShopProviderProps {
  children: ReactNode;
}





export default function ShoppingProvider   ({children}:ShopProviderProps) {

    const[activeCategories,setActiveCategory]=useState<categoriesType>();
    const[priceRange,setPriceRange]=useState<PriceRange>([50, 600]);
    const[Novelties,setNovelties]=useState<NoveltiesType>(false);
    const[Discounted,setDiscounted]=useState<DiscountedType>(false);

   







    



    const value={
        activeCategories,
        setActiveCategory,
        priceRange,
        setPriceRange,
        Novelties,
        setNovelties,
        Discounted,
        setDiscounted,
       


    }


  

  return (
    <ShoppingContext.Provider value={value}>
      {children}
    </ShoppingContext.Provider>
  )
}
