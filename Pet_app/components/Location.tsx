import React from 'react'
import { Image, Text, View } from 'react-native'

export default function Location({name,icon}) {
  return (
    <View className='flex-1 flex-row gap-2 w-20   items-center'>

<Text>{name}</Text>
      <Image source={icon} resizeMode='contain' className='w-4 h-4  rotate-180' />
      


    </View>
  )
}