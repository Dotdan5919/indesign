import React from 'react';

import icons from '@/constants/icons';
import { Tabs, useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native';



interface TabIcon{

    icon:any;
    name:string;
    color:string;
    focused:boolean
}



const TabIcon: React.FC<TabIcon> = ({icon, name,color, focused}) =>{

const route= useRouter();



return(


<View className=' flex flex-col items-center justify-center gap-3  '>
    
<Image source={icon} 
    tintColor={color}
resizeMode='contain' className='w-8 h-8 flex items-center justify-center ' />
<Text style={{color}} className=' w-full'>{name}</Text>

    
</View>


);


};

export default function TabLayout() {
  return (
    
    <Tabs

    screenOptions={{
tabBarActiveTintColor:"#fc4828",
tabBarShowLabel:false,
tabBarStyle:{ 
    backgroundColor:'white',
    height:120,
    paddingTop:40,
    borderTopWidth:0,
   
},



    }}
    

    
    
    >


        <Tabs.Screen name="home"   
        options={{
            title:'Home',
            headerShown:false,
            tabBarIcon:({color,focused})=>(

                <TabIcon 
                name="Home"
                icon={icons.home}
                color={color}
                focused={focused}
                
                />


            )
    

        }}
        />
        <Tabs.Screen name="favourite" 
           options={{
            title:'Favourite',
            headerShown:false,
         tabBarIcon:({color,focused})=>(

                <TabIcon 
                name="Favorite"
                icon={icons.heart}
                color={color}
                focused={focused}
                
                />


            )

        }}
        
        />
        <Tabs.Screen name="account"
           options={{
            title:'Account',
            headerShown:false,
                 tabBarIcon:({color,focused})=>(

                <TabIcon 
                name="Account"
                icon={icons.user}
                color={color}
                focused={focused}
                
                />


            )
    

        }}
        />

          <Tabs.Screen name="chat"
           options={{
            title:'Chat',
            headerShown:false,
         tabBarIcon:({color,focused})=>(

                <TabIcon 
                name="Chat"
                icon={icons.chat}
                color={color}
                focused={focused}
                
                />


            )

        }}
        />




        

        
    </Tabs>



  )
}