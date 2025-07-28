'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import CompleteHero from "@/components/sections/CompleteHero";
import History from "@/components/sections/History";
import Team from "@/components/sections/Team";
import OurProcess from "@/components/sections/OurProcess";
import Projects from "@/components/sections/Projects";
import Testimonial from "@/components/sections/Testimonial";
import Getintouch from "@/components/sections/Getintouch";
import OurBlog from "@/components/sections/OurBlog";
import Footer from "@/components/sections/Footer";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import ClientProviders from "@/contexts/ClientProviders";


export default function Home() {

  const homeRef = useRef<HTMLDivElement>(null);
const [showButton,setShowButton]=useState()

  useEffect(() => {
  const handleScroll = () => {
    if (homeRef.current) {
      const homeBottom = homeRef.current.getBoundingClientRect().bottom;
      setShowButton(homeBottom < 0); // show when scrolled past
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);






  const scrollUp = () =>

    {


  window.scrollTo({ top: 0, behavior: 'smooth' });


    }


  return (
      <ClientProviders>
    <div className=" w-screen overflow-hidden    " >
  
      
<div className="flex" ref={homeRef}>  

      <CompleteHero/>
      </div>


    
    {showButton && (
      
      <div className="flex z-50 w-15 h-15 bg-prim items-center justify-center p-2 fixed bottom-3 right-5 rounded-full hover:shadow-2xl hover:scale-101 duration-200" onClick={scrollUp}>


    <FontAwesomeIcon icon={faArrowUp} className="text-white" />

    </div>
    )}
   

      <History/>


      <Team/>

      <OurProcess/>


      <Projects />

      <Testimonial/>

      <Getintouch/>

      <OurBlog />


      <Footer/>



          </div>


        </ClientProviders>
  );
}
