import { View, Text } from 'react-native'
import React, { Children, createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
import { session } from '@/libs/config';
import { isLoading } from 'expo-font';

const GlobalContext= createContext();
export const useGlobalContext=()=> useContext(GlobalContext);


interface user{
name:string,
email:string

}


const GlobalProvider = ({children}) => {

    const[user,setUser]=useState<user>({name:'',email:''});
    const[isloggedIn,setIsLoggedIn]=useState(false);

    const [loading,setLoading]=useState(false);



useEffect(()=>{


session().then((res)=>


{
  
setLoading(true);
  console.log("i reach here");

if(res){

 
  setIsLoggedIn(true);
 

  setUser({name:res.name,email:res.email});
  setLoading(false);

}
else{

  setIsLoggedIn(false);
  setLoading(false);
}




})
.catch((error)=>{


console.log(error)

})



},[])

    
  return (
    
<GlobalContext.Provider value={{user,setUser,isloggedIn,setIsLoggedIn,loading,setLoading}}>


{children}
</GlobalContext.Provider>




  )
}

export default GlobalProvider