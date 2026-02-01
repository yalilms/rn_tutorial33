import { View} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { borrarCoche } from '@/helpers/CrudCoche'
import { ActivityIndicator, Text } from 'react-native-paper'

export default function borradoCoche() {
  const [borradoCorrecto, setBorradoCorrecto] = useState<boolean | undefined>(undefined)
  const params = useLocalSearchParams<{id:string}>()
  const id = parseInt(params.id)
  useEffect(accionBorrarCoche,[])

  function accionBorrarCoche(){
    borrarCoche(id)
      .then(() => setBorradoCorrecto(true))
      .catch(() => setBorradoCorrecto(false))
  }
  return (
    <View className='p-4 gap-4'>
      {
        borradoCorrecto === undefined ? <ActivityIndicator size="large"/> :
        borradoCorrecto === true ? <Text variant='titleLarge'>Coche borrado correctamente</Text> :
                    <Text variant='titleLarge'>No se puede borrar el coche</Text>
      }
    </View>
  )
}