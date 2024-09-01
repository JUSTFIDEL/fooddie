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
      <CategoryCard imgUrl='https://in.mt/6Jc' title='Egusi' />
      <CategoryCard imgUrl='https://in.mt/6Jd' title='Jollof' />
      <CategoryCard imgUrl='https://in.mt/6Je' title='Afang' />
      <CategoryCard imgUrl='https://in.mt/6Jc' title='Egusi' />
      <CategoryCard imgUrl='https://in.mt/6Jd' title='Jollof' />
      <CategoryCard imgUrl='https://in.mt/6Je' title='Afang' />
    </ScrollView>
  )
}
