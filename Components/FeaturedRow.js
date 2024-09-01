import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({ title, description }) {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>

      <Text className='text-xs text-gray-500 px-4'>{title}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* Restaurants */}
        <RestaurantCard
          id='123'
          imgUrl='https://in.mt/6Jc'
          title='Egusi Soup'
          rating={4.5}
          genre='Soup'
          address='123 Lagos street'
          short_des='The best food in the world'
          dishes={[]}
          long={123.45}
          lat={211.23}
        />
        <RestaurantCard
          id='123'
          imgUrl='https://in.mt/6Jd'
          title='Rice'
          rating={4.5}
          genre='Rice'
          address='123 Lagos street'
          short_des='The best food in the world'
          dishes={[]}
          long={123.45}
          lat={211.23}
        />
        <RestaurantCard
          id='123'
          imgUrl='https://in.mt/6Je'
          title='Salad'
          rating={4.5}
          genre='Salad'
          address='123 Lagos street'
          short_des='The best food in the world'
          dishes={[]}
          long={123.45}
          lat={211.23}
        />
        <RestaurantCard
          id='123'
          imgUrl='https://in.mt/6Jc'
          title='Afang Soup'
          rating={4.5}
          genre='Soup'
          address='123 Lagos street'
          short_des='The best food in the world'
          dishes={[]}
          long={123.45}
          lat={211.23}
        />
        <RestaurantCard
          id='1234'
          imgUrl='https://in.mt/6Jd'
          title='Coconut Rice'
          rating={4.5}
          genre='Rice'
          address='123 Lagos street'
          short_des='The best food in the world'
          dishes={[]}
          long={123.45}
          lat={211.23}
        />
      </ScrollView>
    </View>
  )
}
