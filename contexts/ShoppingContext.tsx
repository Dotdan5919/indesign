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
type SearchType=string;

interface ShopProviderProps {
  children: ReactNode;
}

interface Product {
    id:number,
    price:number,
    img:StaticImageData,
    title:string,
    categories:string,
    novelties:boolean,
    discounted:boolean


}



export default function ShoppingProvider   ({children}:ShopProviderProps) {

    const[activeCategories,setActiveCategory]=useState<categoriesType>();
    const[priceRange,setPriceRange]=useState<PriceRange>([50, 600]);
    const[Novelties,setNovelties]=useState<NoveltiesType>(false);
    const[Discounted,setDiscounted]=useState<DiscountedType>(false);

   const [inputVal,setInputVal]=useState<SearchType>("");



const allProducts:Product[]=[

{id:1,price:100,img:chair_1,title:"Modern Chair",categories:"Chairs",novelties:false,discounted:false},
{id:2,price:200,img:chair_2,title:"Modern Chair",categories:"Chairs",novelties:false,discounted:false},
{id:3,price:400,img:recliner_1,title:"Modern Chair",categories:"Recliners",novelties:false,discounted:true},
{id:4,price:230,img:chair_3,title:"Modern Shoe",categories:"Chairs",novelties:true,discounted:false},
{id:5,price:230,img:chair_3,title:"Modern Shoe",categories:"Chairs",novelties:false,discounted:false},
{id:6,price:230,img:chair_3,title:"Modern Shoe",categories:"Chairs",novelties:false,discounted:false},
{id:7,price:230,img:chair_3,title:"Modern Shoe",categories:"Chairs",novelties:false,discounted:true},
{id:8,price:230,img:chair_4,title:"Modern Shoe",categories:"Tables",novelties:true,discounted:false},


    ]


     const [shownProducts, setShownProducts] = useState<Product[]>(allProducts); 



 useEffect(()=>{
  // shown or filtered products
        let shownProduct=allProducts;

 if(activeCategories!=null){

        shownProduct=shownProduct.filter(item=>item.categories===activeCategories);
      
    }

    if(Novelties===true){

        shownProduct=shownProduct.filter(items=>items.novelties===true);
        

    }
    if(Discounted===true)
    {

        shownProduct=shownProduct.filter(items=>items.discounted===true);
        
        
        
    }
    
    if(priceRange && (priceRange[0]>0 || priceRange[1]<100)){
        
        
        shownProduct=shownProduct.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
        
    }
    if(inputVal!="")
        {
            
             const lowerCaseSearchTerm = inputVal.toLowerCase();
      shownProduct = shownProduct.filter(product =>
        product.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.categories.toLowerCase().includes(lowerCaseSearchTerm) // Example: search by ID too
      );

   }


setShownProducts(shownProduct);


    },[activeCategories,Novelties,priceRange,Discounted,inputVal])
    



    const value={
        activeCategories,
        setActiveCategory,
        priceRange,
        setPriceRange,
        Novelties,
        setNovelties,
        Discounted,
        setDiscounted,
             setShownProducts,
        shownProducts, 
          inputVal,
        setInputVal
       


    }


  

  return (
    <ShoppingContext.Provider value={value}>
      {children}
    </ShoppingContext.Provider>
  )
}
