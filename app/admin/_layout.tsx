import { View, Text } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { IconButton } from 'react-native-paper'

export default function _layout() {
  return (
    <Stack initialRouteName='inicio' screenOptions={{
        headerStyle:{backgroundColor:"#FF0000"},
        headerTintColor:"white"
    }}>
        <Stack.Screen name='inicio' options={{
            title:"zona de administracion", 
            headerRight: () => (
                <IconButton 
                    icon={"logout"}
                    onPress={() => router.replace("/")}
                />
            )
        }}/>
        <Stack.Screen name='borrar/[id]' options={{
            title:"borrado del Coche"
        }}/>
    </Stack>
  )
}