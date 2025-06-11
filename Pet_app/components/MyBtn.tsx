import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import '../app/global.css';



 const MyBtn = ({name,page}) => {



    const router= useRouter();
    const handlePress = () => {

     
        router.push(page);
    }
    
  return (
    <TouchableOpacity className='flex items-center justify-center h-20 w-[150px]   rounded-lg bg-red-400' style={styles.button} activeOpacity={.7} onPress={handlePress}>

<Text className='text-white text-lg '>{name}</Text>

      </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  button: {
     // height-32 (32 * 4)
    borderRadius: 15,
    
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
export default MyBtn;