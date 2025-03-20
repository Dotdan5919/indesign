import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Redirect, Stack, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { useGlobalContext } from '../../context/Globalprovider';
import { useRoute } from '@react-navigation/native';

export default function _layout() {

const {user,setUser,isloggedIn,isLoading}=useGlobalContext();


const router=useRouter();

if(isloggedIn){

console.log(isloggedIn);
{/* <Redirect href="/home" /> */}

router.replace("/home");

} 


useEffect(()=>{




})
  return (
    <Stack>
        <Stack.Screen name='signup' options={{headerShown:false}} />
      <Stack.Screen name='signin' options={{headerShown:false}} />
      
      <StatusBar style='light' backgroundColor="#161622" />
    </Stack>
  )
}