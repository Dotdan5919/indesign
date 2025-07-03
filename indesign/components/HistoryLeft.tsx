'use client';

import React, { useEffect } from 'react'
import imga from "@/images/section a.jpg"
import imgb from "@/images/section b.jpg"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Modal from 'react-modal';
import { motion } from "motion/react"



export default function HistoryLeft() {

  
  const [isOpen,setIsOpen]=useState(false);

const openModal=()=>setIsOpen(true);
const closeModal=()=>setIsOpen(false);





  return (
   <motion.div
   
   
   initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      whileInView={{  x: .2, opacity: 1 }}
   
   className="flex flex-row gap-4 w-auto relative ">
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
           
            className="absolute top-0 left-0 w-full h-full"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <button onClick={closeModal} className="bg-prim text-white px-3 py-1 rounded">
            Close
          </button>
        </div>
      </Modal>




<div className="flex flex-col absolute w-80 px-8 py-6 z-20 shadow-xl bg-white -bottom-10 right-5 gap-2">

<h1 className='font-bold'>Watch a video about how we work and try for our customers</h1>

<div className="flex flex-row items-center justify-between gap-2 w-full" onClick={openModal}>
<p>Play video</p>

<div className="border-2 w-20 h-0 bg-gray-300"></div>

<div className="flex rounded-full bg-prim p-5 hover:shadow-lg hover:scale-110 transition-all duration-200">


<FontAwesomeIcon icon={faPlay} className='text-white' />

</div>


</div>

</div>


     <Image src={imga}
   className="max-w-[250px] h-auto"  alt="indesign modern interior" />
   
     <Image src={imgb}
   className="max-w-[250px] h-auto" alt="indesign modern interior" />
   
   
   
   </motion.div>
  )
}
