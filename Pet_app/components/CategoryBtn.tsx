import pets from '@/app/pet';
import { useGlobalContext } from '@/context/Globalprovider';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import SmallBtn from './SmallBtn';

export default function CategoryBtn() {
  // const [category, setCategory] = useState(null);

  const {category,setCategory}=useGlobalContext();

  const handlePress = (type) => {
    setCategory(type);
  };

  // Get unique categories
  const uniquePets = pets.filter(
    (pet, index, self) =>
      index === self.findIndex(p => p.type === pet.type)
  );

  return (
    <View className="flex flex-row gap-5">

      <TouchableOpacity onPress={() => handlePress("All")}>
          <SmallBtn name="All" isActive={category === "All"} />
        </TouchableOpacity>
      {uniquePets.map((e) => (
        <TouchableOpacity key={e.type} onPress={() => handlePress(e.type)}>
          <SmallBtn name={e.type} isActive={category === e.type} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
