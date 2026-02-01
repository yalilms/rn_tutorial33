import { View } from 'react-native'
import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { Link, useRouter } from 'expo-router'
import { navegarError } from '@/nav/navegacion'

export default function index() {
    const [contraseña, setContraseña] =  useState("")
    const route = useRouter()

    function login(){
        if(contraseña === "1234"){
            route.replace("/admin/inicio")
        }else{
            navegarError(route,"contraseña incorrecta","vuelve a intentarlo")
        }
    }
  return (
    <View className='p-4 gap-4'>
        <Text variant='titleLarge'>Inicio</Text>
        <Button
            mode='contained' 
            onPress={()=> route.push("/invitados/catalogo")}>
                Acceso invitado
        </Button>
        <TextInput 
            mode='outlined'
            label='contraseña'
            secureTextEntry={true}
            value={contraseña}
            onChangeText={setContraseña}
        />
        <Button mode='contained'onPress={login}>
            Acceso administrador
        </Button>
        <Link href={"/about"}>
            <Text>Acerca de</Text>
        </Link>
    </View>
  )
}