'use client';


import useCart from '@/hooks/useCart';
import useFavorite from '@/hooks/useFavorite';
import {
  faBars,
  faHeart,
  faSearch,
  faStore,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';


export default function Navbar() {
  const [nav, setNav] = useState(false);

  const {wishlistArray}=useFavorite();

  const {cartArray}=useCart();
  return (
    
   
    <div className="flex flex-row items-center justify-between w-full relative px-6 py-4">
      <h1 className="font-bold text-4xl">In.design</h1>

      {/* Desktop Menu */}
      <ul className="xl:flex hidden flex-row gap-10 text-sm">
        
        <Link href="/" className="hover:text-prim">Home</Link>
        <Link href="/about" className="hover:text-prim">About us</Link>
        <Link href="/services" className="hover:text-prim">Service</Link>
        <Link href="/blog" className="hover:text-prim">Blog</Link>
        <Link href="/shop" className="hover:text-prim">Shop</Link>
        <Link href="/contact" className="hover:text-prim">Contact</Link>
      </ul>

      {/* Desktop Icons */}
      <div className="xl:flex hidden flex-row items-center gap-5">
        <FontAwesomeIcon icon={faSearch} />
        <div className="flex relative">
        <FontAwesomeIcon icon={faHeart} />

{ wishlistArray.length>0 && (
 <span className="absolute bg-prim w-4 h-4 rounded-full flex items-center justify-center -top-2 left-3 text-white text-[10px]">
            {wishlistArray.length}
          </span>)

}
        </div>

        <div className="flex relative">
          <FontAwesomeIcon icon={faStore} />
          { cartArray.length>0 && (
 <span className="absolute bg-prim w-4 h-4 rounded-full flex items-center justify-center -top-2 left-3 text-white text-[10px]">
            {cartArray.length}
          </span>)

}
   
         
        </div>
      </div>

      {/* Contact Info */}
      <div className="xl:flex hidden flex-col gap-1 items-end">
        <h1 className="font-bold">+44 207722 00 88</h1>
        <p className="text-prim cursor-pointer">order a call</p>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="xl:hidden flex z-50">
        <FontAwesomeIcon
          icon={nav ? faTimes : faBars}
          className="text-xl cursor-pointer hover:text-prim transition-all"
          onClick={() => setNav(!nav)}
          />
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="xl:hidden fixed top-0 right-0 w-96 h-screen bg-white p-10 z-40 gap-7">
          <ul className="flex flex-col gap-6 text-xs pt-36">
          <Link href="/" className="hover:text-prim">Home</Link>
        <Link href="/about" className="hover:text-prim">About us</Link>
        <Link href="/services" className="hover:text-prim">Service</Link>
        <Link href="/blog" className="hover:text-prim">Blogs</Link>
        <Link href="/shop" className="hover:text-prim">Shop</Link>
        <Link href="/contact" className="hover:text-prim">Contact</Link>
          </ul>


      <div className="xl:hidden flex flex-row items-center gap-5 pt-8">
        <FontAwesomeIcon icon={faSearch} />

<div className="flex relative">
        <FontAwesomeIcon icon={faHeart} />

{ wishlistArray.length>0 && (
 <span className="absolute bg-prim w-4 h-4 rounded-full flex items-center justify-center -top-2 left-3 text-white text-[10px]">
            {wishlistArray.length}
          </span>)

}
        </div>

        <div className="flex relative">
          <FontAwesomeIcon icon={faStore} />
         
        </div>
      </div>


          <div className="xl:hidden flex flex-col gap-1 items-start pt-6">
        <h1 className="font-bold">+44 207722 00 88</h1>
        <p className="text-prim cursor-pointer">order a call</p>
      </div>


        </div>
      )}
    </div>
     
      
  );
}
