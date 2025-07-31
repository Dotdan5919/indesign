'use client'


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


interface ShoppingContext{
   activeCategories:string | undefined,
   setActiveCategory:React.Dispatch<React.SetStateAction<string | undefined>>,
   priceRange:PriceRange,
   setPriceRange:React.Dispatch<React.SetStateAction<PriceRange>>,
   Novelties:boolean,
   setNovelties:React.Dispatch<React.SetStateAction<NoveltiesType>>,
   Discounted:boolean,
   setDiscounted:React.Dispatch<React.SetStateAction<DiscountedType>>,
   setShownProducts:React.Dispatch<React.SetStateAction<Product[]>>,
   shownProducts:Product[],
   inputVal:SearchType | undefined,
   setInputVal:React.Dispatch<React.SetStateAction<SearchType | undefined>>,
   allProducts:Product[]
}

export const ShoppingContext = createContext<ShoppingContext| undefined>(undefined);



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
    discounted:boolean,
    description:string


}



export default function ShoppingProvider   ({children}:ShopProviderProps) {

    const[activeCategories,setActiveCategory]=useState<categoriesType>();
    const[priceRange,setPriceRange]=useState<PriceRange>([50, 600]);
    const[Novelties,setNovelties]=useState<NoveltiesType>(false);
    const[Discounted,setDiscounted]=useState<DiscountedType>(false);

   const [inputVal,setInputVal]=useState<SearchType | undefined>("");



const allProducts:Product[]=[


  {
    id: 1,
    price: 100,
    img: chair_1,
    title: "Modern Chair",
    categories: "Chairs",
    novelties: false,
    discounted: false,
    description: "A sleek and contemporary chair featuring clean lines and minimalist design. Perfect for modern living spaces, this chair combines comfort with style at an affordable price point."
  },
  {
    id: 2,
    price: 200,
    img: chair_2,
    title: "Modern Chair",
    categories: "Chairs",
    novelties: false,
    discounted: false,
    description: "An elevated modern chair with premium materials and enhanced ergonomic features. Designed for both comfort and durability, this mid-range option offers superior quality and sophisticated aesthetics."
  },
  {
    id: 3,
    price: 400,
    img: recliner_1,
    title: "Modern Chair",
    categories: "Recliners",
    novelties: false,
    discounted: true,
    description: "A luxurious modern reclining chair with adjustable positions and plush cushioning. Features smooth reclining mechanism and contemporary styling. Now available at a special discounted price for exceptional value."
  },
  {
    id: 4,
    price: 230,
    img: chair_3,
    title: "Modern Shoe",
    categories: "Chairs",
    discounted:false,
    novelties: true,
    description: "An innovative new addition to our chair collection featuring a unique curved design reminiscent of modern footwear aesthetics. This conversation-starting piece combines artistic flair with functional seating."
  },
  {
    id: 5,
    price: 230,
    img: chair_3,
    title: "Modern Shoe",
    categories: "Chairs",
    novelties: false,
    discounted: false,
    description: "A distinctive chair with sculptural design inspired by contemporary shoe silhouettes. Features ergonomic comfort with an artistic twist, making it a standout piece for design-conscious spaces."
  },
  {
    id: 6,
    price: 230,
    img: chair_3,
    title: "Modern Shoe",
    categories: "Chairs",
    novelties: false,
    discounted: false,
    description: "An eye-catching chair that blends form and function with its unique shoe-inspired design. Crafted with attention to detail, this piece adds personality and comfort to any modern interior."
  },
  {
    id: 7,
    price: 230,
    img: chair_3,
    title: "Modern Shoe",
    categories: "Chairs",
    novelties: false,
    discounted: true,
    description: "The same distinctive shoe-inspired chair design now offered at a reduced price. Features the same quality construction and unique aesthetic, making it an excellent value for those seeking statement furniture."
  },
  {
    id: 8,
    price: 230,
    img: chair_4,
    title: "Modern Shoe",
    categories: "Tables",
    novelties: true,
    discounted: false,
    description: "A revolutionary new table design that brings the artistic shoe-inspired aesthetic to surface furniture. This innovative piece serves as both functional table and sculptural art, perfect for modern spaces seeking unique statement pieces."
  }



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
    if (inputVal && inputVal !== "") {
      const lowerCaseSearchTerm = inputVal.toLowerCase();
      shownProduct = shownProduct.filter(product =>
        product.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.categories.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }


setShownProducts(shownProduct);


    },[])
    



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
        setInputVal,
        allProducts
       


    }


  

  return (
    <ShoppingContext.Provider value={value}>
      {children}
    </ShoppingContext.Provider>
  )
}
