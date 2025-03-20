import React, { useEffect } from 'react'
import '../global.css';
import { View,Text, SafeAreaView, Image, Button ,TouchableOpacity, } from 'react-native';
import Card from '../assets/images/Card.png';
import Card2 from '../assets/images/Card_2.png';
import logo from '../assets/images/logo.png';
import LinearGradient from 'react-native-linear-gradient'; 
import { Link } from 'expo-router';
import { useRouter,Redirect } from 'expo-router'; 
import MyBtn from '../components/MyBtn';
import { useGlobalContext } from '../context/Globalprovider';
import { session } from '@/libs/config';
import Svg, { Circle, Rect } from 'react-native-svg';
export default function index() {

  
  const router = useRouter(); 

const {user,setUser,isloggedIn}=useGlobalContext();


// const test = async ()=>{

 
//   try{ 
// const result= await session();


// }

// catch (error){

//   console.log(error);
// }

// }

console.log(isloggedIn)
if(isloggedIn){
  console.log(isloggedIn);

{/* <Redirect href="/home" /> */}
router.replace("/home");

} 



  useEffect(()=>{

   

   
    // test();
  },[user])


    
      
        const handlePress = () => {
          router.push('/signup'); // Replace '/ScreenName' with the desired screen path
        }
    

  return (
    <SafeAreaView  className='bg-slate-950 flex flex-col'>

<View className=' w-fit h-full flex flex-col gap-8  px-4  items-center justify-center'>

<Image source={logo} className='scale-50 ' />
<View className='flex flex-row items-center justify-center'> 
<Image source={Card2} className=' left-32 scale-125'/>
<Image source={Card} className=' right-10 scale-125'/>
</View>

<View className='w-[90%] flex-col gap-4 items-center justify-center'>
<Text className='text-white text-[36px] text-center font-bold items-center justify-center'>

Discover Endless Possibilities with<Text className='text-c1'> Aora</Text>

</Text>
<Text className='text-white text-center  '>Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
</View>


<MyBtn name="Continue with Email" page="/signup"/>


</View>







</SafeAreaView>
  )
}

