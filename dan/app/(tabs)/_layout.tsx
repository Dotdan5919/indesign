import { Redirect, Stack, Tabs, useRouter } from 'expo-router';
import icons from '@/constants/icons'
import Home from './home';
import {Text,View,Image} from 'react-native'

import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useGlobalContext } from '../../context/Globalprovider';

const TabIcons=({icon,color,name,focused})=>{

 const router =useRouter();
  const{user,setUser,isloggedIn}=useGlobalContext();


  if(!isloggedIn){<Redirect href="/" />}

useEffect(()=>{

 

 


},[])
  



return(
<View className="  items-center justify-center flex gap-1">


<Image 
source={icon}
resizeMode="contain"
tintColor={color}
className="w-10 h-6 "

/>

<Text className='w-full' style={{color}}>{name}</Text>
</View>


);


};

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
      tabBarShowLabel:false,
      tabBarStyle: {
        backgroundColor: "#0F172A",
        borderTopWidth: 0,
        borderTopColor: "#0F172A",
        height: 84,
        paddingTop:25
      },
      
      
      }}>
      <Tabs.Screen name="home" 
      options={{
        title:'Home',
        headerShown:false,
        tabBarIcon:({color,focused})=>(

          <TabIcons
          name="Home"
          icon={icons.home}
          color={color}
          focused={focused}
          />

        ),




      }} />
      <Tabs.Screen name="profile" 
      
      options={{
        title:'Profile',
        headerShown:false,
        tabBarIcon:({color,focused})=>(

          <TabIcons
          name="profile"
          icon={icons.profile}
          color={color}
          focused={focused}
          />

        ),




      }} />
      <Tabs.Screen name="create" 
       options={{
        title:'Create',
        headerShown:false,
        tabBarIcon:({color,focused})=>(

          <TabIcons
          name="Create"
          icon={icons.create}
          color={color}
          focused={focused}
          />

        ),




      }} />
      <Tabs.Screen name="bookmark" 
       options={{
        title:'Bookmark',
        headerShown:false,
        tabBarIcon:({color,focused})=>(

          <TabIcons
          name="Bookmark"
          icon={icons.bookmark}
          color={color}
          focused={focused}
          />

        ),




      }} />



<StatusBar style='light' backgroundColor="#161622" />


    </Tabs>
  );
}