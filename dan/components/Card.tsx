import { View, Text, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import '../global.css';


const Card = () => {
  return (
    <View className="w-fit rounded-md  mx-2">
      <Image source={images.card1} resizeMode='contain' className='h-auto w-40'/>
    </View>
  )
}

export default Card