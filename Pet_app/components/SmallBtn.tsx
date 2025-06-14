import React from 'react';
import { Text, View } from 'react-native';

export default function SmallBtn({ name, isActive }) {
  return (
    <View
      className={
        isActive
          ? 'flex items-center justify-center rounded-lg bg-red-950 p-3'
          : 'flex items-center justify-center rounded-lg bg-gray-200 p-3'
      }
    >
      <Text
        className={isActive ? 'font-bold text-white' : 'font-bold text-black'}
      >
        {name}
      </Text>
    </View>
  );
}
