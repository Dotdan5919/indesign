import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';

export default function Location({name,icon}) {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  return (
    <View className='flex-1 flex-row gap-2 w-20   items-center'>

<Text>{name}</Text>
      <Image source={icon} resizeMode='contain' className='w-4 h-4  rotate-180' />
      
        {/* <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    /> */}


    </View> 
  )
}