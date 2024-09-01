import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import DishRow from './DishRow'

export default function Dishes() {
  return (
    <View>
      <DishRow
        name='Rice'
        description='Best food in the world'
        image='https://in.mt/6Jd'
        price='N4,500'
      />
      <DishRow
        name='Egusi'
        description='One of the best soups in the world'
        image='https://in.mt/6Jc'
        price='N5,000'
      />
      <DishRow
        name='Afang'
        description='Among the best Calabar soup'
        image='https://in.mt/6Jc'
        price='N5,000'
      />
      <DishRow
        name='Salad'
        description='Enjoy toy jollof rice with this'
        image='https://in.mt/6Je'
        price='N2,000'
      />
      <DishRow
        name='Rice'
        description='This food never goes wrong'
        image='https://in.mt/6Jd'
        price='N5,000'
      />
    </View>
  )
}

//  className='mb-[9rem]'
