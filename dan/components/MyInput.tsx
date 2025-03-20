import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import icon from '@/constants/icons'
import icons from '@/constants/icons';

interface MyInputProps {  // Define the interface for props
  name: string;
  newstyles?: string; // Make newstyles optional
  hideTitle: boolean;
  handleChange:(text: string) => void;
}

const MyInput: React.FC<MyInputProps> = ({name,newstyles,hideTitle,handleChange}) => {


  const [showPassword,setShowPassword]=useState(false);
  const [focus,setFocus]=useState(false);

  const [type,setType]=useState(name);


  useState(()=>{

   
  })




  return (
   <View className={'flex w-full gap-4  '+newstyles}> 

   {hideTitle ? (<Text></Text>
   ): (<Text className='text-white text-[16px]'>{name}</Text> ) }
   <View className={'flex px-3   h-16 bg-slate-800 rounded-md  justify-between items-center w-full flex-row border-2   ' + (focus && 'border-c1')}> 


   <TextInput className='w-[80%] h-[60%]  flex-1 text-base  text-white shadow-md ' 
    onFocus={()=>setFocus(true)}
    onBlur={()=>setFocus(false)}
    onChangeText={handleChange}
    secureTextEntry={name==='Password' && !showPassword}
   maxLength={40}
   
   placeholder={name} 
    keyboardType={"default"}
   placeholderTextColor="gray" >  
     </TextInput>


{name==="Password" && (
  
<TouchableOpacity className='' onPress={()=>setShowPassword(!showPassword)}>

{ showPassword? (<Image source={icons.eyeHide} resizeMode='contain' className='w-10' />
): (<Image source={icons.eye} resizeMode='contain' className='w-10' />
) }



</TouchableOpacity>
) }


   </View>
   </View>
  )
}

export default MyInput