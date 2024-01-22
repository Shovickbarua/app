import { View, Text } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'

export default function CartIcon() {
  return (
    <View classNmae='absolute bottom-5 w-full z-50'>
       <TouchableOpacity
            className='flex-row justify-between items-center mx-5 rounded-full p-4 py-4 shadow-lg'
            style={{backgroundColor: themeColors.bgColor(1)}}
        >
            <View className='p-2 px-4 rounded-full' style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
                <View className='font-extrabold text-white text-lg'>
                    3
                </View>
            </View>
            <Text className='flex-1 text-center font-extrabold text-white text-lg'>
                View
            </Text>
            <Text className=' font-extrabold text-white text-lg'>
                ${23}
            </Text>
        </TouchableOpacity>
    </View>
  )
}