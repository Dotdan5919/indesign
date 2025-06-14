import React, { createContext, useContext, useState } from 'react';



const GlobalContext = createContext();

export const useGlobalContext=()=> useContext(GlobalContext);



export default function Globalprovider({children}) {


  const [category,setCategory]=useState("All");
  const [favourite,setFavourite]=useState([]);



  return (
    <GlobalContext.Provider value={{category,setCategory,favourite,setFavourite}}>

      {children}

      </GlobalContext.Provider>
  )
}