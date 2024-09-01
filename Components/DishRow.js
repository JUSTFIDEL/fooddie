import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function DishRow({ id, name, description, price, image }) {
  return (
    <TouchableOpacity className='bg-white border border-gray-200 p-4'>
      <View className='flex-row'>
        <View className='flex-1 pr-2'>
          <Text className='text-lg mb-1'>{name}</Text>
          <Text className='text-gray-400'>{description}</Text>
          <Text className='text-gray-400 mt-2'>{price}</Text>
        </View>
        <View>
          <Image
            source={{
              uri: image,
            }}
            className='h-20 w-20 bg-gray-300 p-4'
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}
