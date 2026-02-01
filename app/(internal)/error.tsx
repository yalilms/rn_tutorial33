import { View} from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Text } from 'react-native-paper'

export default function error() {
    const {mensaje, detalle} = useLocalSearchParams<{mensaje:string, detalle?:string}>()
  return (
    <View className='p-4 gap-4'>
        <Text variant='titleLarge'> se ha producido un error</Text>
        <Text variant='bodyMedium'>{mensaje}</Text>
        {detalle !== undefined &&
            <Text variant='bodySmall'>{detalle}</Text>
        }
    </View>
  )
}