import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsById,
} from '../features/basketSlice'

export default function DishRow({ id, name, description, price, image }) {
  const [isPressed, setIsPressed] = useState(false)
  const items = useSelector((state) => selectBasketItemsById(state, id))
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }))
  }

  const removeItemFromBasket = () => {
    if (!items.length > 0) return

    dispatch(removeFromBasket({ id }))
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border border-gray-200 p-4 ${
          isPressed && 'border-b-0'
        }`}
      >
        <View className='flex-row'>
          <View className='flex-1 pr-2'>
            <Text className='text-lg mb-1'>{name}</Text>
            <Text className='text-gray-400'>{description}</Text>
            <Text className='text-gray-400 mt-2'>{price}</Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: '#F3F3F4',
              }}
              source={{
                uri: image,
              }}
              className='h-20 w-20 bg-gray-300 p-4'
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className='bg-white px-4'>
          <View className='flex-row items-center gap-2 py-3'>
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? '#00CCBB' : 'rgb(182, 182, 182)'}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color='#00CCBB' />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}
