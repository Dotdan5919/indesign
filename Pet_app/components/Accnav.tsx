import icons from '@/constants/icons'
import React from 'react'
import { Image, Text, View } from 'react-native'

export default function Accnav({name}) {
  return (
      <View className='w-full '>

<View className='flex flex-row w-full items-center justify-between p-10 border-b border-gray-300 my-4'>
    <Text className='font-bold text-[18px]'>{name}</Text>

    <Image source={icons.arrow} resizeMode="contain" className="w-4 h-4 rotate-90" />
</View>

      </View>
  )
}