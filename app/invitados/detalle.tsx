import { View} from 'react-native'
import React from 'react'
import { useCoche } from '@/store/CocheCompartido'
import { DataTable } from 'react-native-paper'

export default function detalle() {
    const {coche} = useCoche()
  return (
    <View className='p-4 gap-4'>
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Característica</DataTable.Title>
                <DataTable.Title>Valor</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
                <DataTable.Cell>Marca</DataTable.Cell>
                <DataTable.Cell>{coche.marca}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Modelo</DataTable.Cell>
                <DataTable.Cell>{coche.modelo}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Año</DataTable.Cell>
                <DataTable.Cell>{coche.año}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Color</DataTable.Cell>
                <DataTable.Cell>{coche.color}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Precio</DataTable.Cell>
                <DataTable.Cell>{coche.precio}</DataTable.Cell>
            </DataTable.Row>
        </DataTable>
    </View>
  )
}