import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from 'react-native-heroicons/outline'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/solid'
import Dishes from '../Components/Dishes'
import BasketIcon from '../Components/BasketIcon'

export default function RestaurantScreen() {
  const navigation = useNavigation()
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_des,
      dishes,
      long,
      lat,
    },
  } = useRoute()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  return (
    <>
      <BasketIcon />

      <ScrollView>
        <View className='relative'>
          <Image
            source={{
              uri: imgUrl,
            }}
            className='w-full h-56 bg-gray-300 p-4'
          />

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
          >
            <ArrowLeftIcon size={20} color='#00CC88' />
          </TouchableOpacity>
        </View>

        <View className='bg-white'>
          <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>
            <View className='flex-row gap-2 my-1'>
              <View className='flex-row items-center gap-2'>
                <StarIcon color='green' opacity={0.5} size={18} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-green-400'>{rating}</Text> • {genre}
                </Text>
              </View>

              <View className='flex-row items-center gap-2'>
                <MapPinIcon color='gray' opacity={0.5} size={18} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-gray-400'>Nearby • {address}</Text>
                </Text>
              </View>
            </View>
            <Text className='text-gray-500 mt-2 pb-4'>{short_des}</Text>
          </View>

          <TouchableOpacity className='flex-row items-center gap-2 p-4 border-y border-gray-300'>
            <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
            <Text className='pl-2 flex-1 text-md font-bold'>
              Have a food allergy?
            </Text>
            <ChevronRightIcon color='#00CCBB' />
          </TouchableOpacity>
        </View>

        <View className='pb-36'>
          <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>

          {/* Dishes */}
          <View className='pt-4'>
            <Dishes />
          </View>
        </View>
      </ScrollView>
    </>
  )
}
