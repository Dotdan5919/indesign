'use client';

import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {  useState } from 'react'
import HistoryRight from '../HistoryRight'
import imga from "@/images/section a.jpg"
import imgb from "@/images/section b.jpg"
import Image from 'next/image'
import Modal from 'react-modal';


export default function AboutHistory() {



    const [isOpen,setIsOpen]=useState(false);
  
  const openModal=()=>setIsOpen(true);
  const closeModal=()=>setIsOpen(false);
  
  
  


  return (
   <div className="flex sm:flex-row flex-col justify-between lg:pt-14 lg:pb-80  lg:px-32 p-8 ">

<HistoryRight more={false}/>


<div className="flex relative">

<div className="w-auto h-auto absolute -left-70 -top-30 hidden lg:flex">

   <Image src={imga}
   className="max-w-[250px] h-auto -top-40 right-50 absolute"  alt="indesign modern interior" />
   
     <Image src={imgb}
   className="max-w-[250px] h-auto" alt="indesign modern interior" />
   </div>


  <div className="flex flex-col lg:absolute w-80 h-fit px-8 py-6 z-20 shadow-xl bg-white top-10 right-30 gap-2">
  
  <h1 className='font-bold'>Watch a video about how we work and try for our customers</h1>
  
  <div className="flex flex-row items-center justify-between gap-2 w-full" >
  <p>Play video</p>
  
  <div className="border-2 w-20 h-0 bg-gray-300"></div>
  
  <div className="flex rounded-full bg-prim p-5 hover:shadow-lg hover:scale-110 transition-all duration-200"  onClick={openModal}>
  
  
  <FontAwesomeIcon icon={faPlay} className='text-white' />
  
  </div>
  
  
  
  </div>


 
  
  </div>


   <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="YouTube Video"
           ariaHideApp={false}
          className="flex justify-center items-center h-full"
          overlayClassName="fixed inset-0  bg-[#00000080] flex justify-center items-center z-50"
        >
          <div className="bg-white rounded-lg p-4 w-[90vw] max-w-2xl">
            <div className="relative pb-[56.25%] h-0 mb-4">
           
              <iframe  src="https://www.youtube.com/embed/zumJJUL_ruM?si=KnAanfsETN4nVkyA" 
              title="YouTube video player" 
              frameborder="0"
              className="absolute top-0 left-0 w-full h-full"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <button onClick={closeModal} className="bg-prim text-white px-3 py-1 rounded">
              Close
            </button>
          </div>
        </Modal>

   <div className="flex w-20 h-10 bg-prim p-30 absolute -bottom-50 -right-7 -z-10"></div>

</div>





</div>
  )
}
