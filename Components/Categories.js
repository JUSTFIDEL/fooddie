import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl='https://shorturl.at/fUeW3' title='Egusi' />
      <CategoryCard imgUrl='https://shorturl.at/KWCtW' title='Jollof' />
      <CategoryCard imgUrl='https://shorturl.at/7qsan' title='Afang' />
      <CategoryCard imgUrl='https://shorturl.at/fUeW3' title='Egusi' />
      <CategoryCard imgUrl='https://shorturl.at/KWCtW' title='Jollof' />
      <CategoryCard imgUrl='https://shorturl.at/7qsan' title='Afang' />
    </ScrollView>
  )
}
