import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import Card from './Card'
import '../global.css';

import * as Animatable from 'react-native-animatable';



const zoomOut={
0:{


  scale:0.9,
},
1:{

  scale:1.1,
}


};
const zoomIn={
  0:{
  
  
    scale:1,
  },
  1:{
  
    scale:.9,
  }
  
  
  };


const TrendingPosts = () => {


const[activeItem,setActiveItem]=useState();

const viewableItemsChanged = ({ viewableItems }) => {
  if (viewableItems.length > 0) {
    setActiveItem(viewableItems[0].key);
    // console.log(viewableItems[0].key)
    // console.log(activeItem)
  }
};

  return (
    <View className='flex '>
      <Text className='text-white'>Trending Posts</Text>

    <FlatList showsHorizontalScrollIndicator={false}
showsVerticalScrollIndicator={false}  
// keyExtractor={(item) => item.id.toString()}

onViewableItemsChanged={viewableItemsChanged}



contentOffset={{ x: 170 }}

data={["1","2","3","4","5"]} horizontal
 renderItem={({item})=>(

<Animatable.View  duration={500} animation={activeItem === "1" ? zoomOut :zoomIn} >


<Card/> 

</Animatable.View>


    )}   
   
    contentOffset={{ x: 170 }} />


    </View>



  )
}

export default TrendingPosts