import icons from '@/constants/icons'
import React, { Component } from 'react'
import { Image, TextInput, View } from 'react-native'

export default class search extends Component {
  render() {
    return (
      <View className='bg-neutral-300 rounded-full pt-2  px-3 mt-4 w-96 text-white flex flex-row gap-2 items-center '>
        <Image source={icons.search} resizeMode='contain' className='w-7 h-10' />
       <TextInput  
       
       placeholder='Search'
       keyboardType='default'
       placeholderTextColor="white"
       
       >
         </TextInput>
      </View>
    )
  }
}
