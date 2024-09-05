import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import DishRow from './DishRow'

export default function Dishes() {
  return (
    <View>
      <DishRow
        id='123451'
        name='Rice'
        description='Best food in the world'
        image='https://shorturl.at/KWCtW'
        price='4500'
      />
      <DishRow
        id='123452'
        name='Egusi'
        description='One of the best soups in the world'
        image='https://shorturl.at/fUeW3'
        price='5000'
      />
      <DishRow
        id='123453'
        name='Afang'
        description='Among the best Calabar soup'
        image='https://shorturl.at/7qsan'
        price='5000'
      />
      <DishRow
        id='123454'
        name='Salad'
        description='Enjoy toy jollof rice with this'
        image='https://shorturl.at/mudOo'
        price='2000'
      />
      <DishRow
        id='123455'
        name='Rice'
        description='This food never goes wrong'
        image='https://shorturl.at/KWCtW'
        price='5000'
      />
    </View>
  )
}

//  className='mb-[9rem]'
