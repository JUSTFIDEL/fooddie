import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline'
import Categories from '../Components/Categories'
import FeaturedRow from '../Components/FeaturedRow'

export default function HomeScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='pt-5'>
      {/* Header */}
      <View className='flex-row mt-2 pb-3 mx-4 items-center gap-2'>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-7 w-7 p-4 rounded-full bg-gray-300'
        />

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
        <UserIcon size={30} color='#00CCBB' />
      </View>

      {/* Search */}
      <View className='flex-row items-center mx-4 pb-2 gap-2'>
        <View className='flex-row items-center flex-1 bg-gray-200 p-3 gap-2'>
          <MagnifyingGlassIcon size={20} color='gray' />
          <TextInput
            placeholder='Restaurants and Cuisines'
            keyboardType='default'
          />
        </View>
        <AdjustmentsHorizontalIcon size={25} color='#00CCBB' />
      </View>

      {/* Body */}
      <ScrollView className='bg-gray-100 mb-[8rem]'>
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow
          id='123'
          title='Featured'
          description='Paid placements for our partners'
        />
        <FeaturedRow
          id='1234'
          title='Tasty discount'
          description='Everyone has been enjoying this discount'
        />
        <FeaturedRow
          id='12345'
          title='Offers near you'
          description='Why not support your local restaurants'
        />
      </ScrollView>
    </SafeAreaView>
  )
}
3
