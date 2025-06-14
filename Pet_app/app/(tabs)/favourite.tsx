import Card from '@/components/Card';
import { useGlobalContext } from '@/context/Globalprovider';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import pets from '../pet';

export default function favourite() {



  const {favourite,setFavourite}=useGlobalContext();


  const FavPets=pets.filter((pet)=>favourite.includes(pet.id));

  return (
    <SafeAreaView className='py-10'>
    <View className='flex items-center justify-center'>
      <Text className='font-bold text-[20px]'>Favourite</Text>
    </View>
<View className=''>
    <FlatList
      data={FavPets}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={{ padding: 16 }}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
    ListEmptyComponent={

 <View className="flex items-center justify-center py-10">
      <Text className="text-gray-500 text-lg">No pets found.</Text>
    </View>

    }



      renderItem={({ item }) => (
        <View className="mb-4 w-[48%]">
          <Card  name={item.name} location={item.location}  img={item.image}  id={item.id}  />

        </View>
      )}
    />

</View>


    </SafeAreaView>
  )
}