import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'; 

import '../global.css';

const MyBtn = ({name,page}) => {


const router = useRouter(); 
      

        const handlePress = () => {
          router.push(page); // Replace '/ScreenName' with the desired screen path
        }

  return (
    <TouchableOpacity  activeOpacity={0.7} className='w-full h-16 rounded-md  bg-red-300 items-center justify-center ' style={{backgroundColor:"orange"}}  onPress={handlePress}>
    
            <Text  className='text-black  ' >{name}</Text>
            
          </TouchableOpacity>
  )
}

export default MyBtn