import { consultarCoches } from "@/helpers/CrudCoche";
import { navegarError } from "@/nav/navegacion";
import { Coche, Coches } from "@/model/Types";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Button, List, Text } from "react-native-paper";
import { useCoche } from "@/store/CocheCompartido";

export default function Catalogo() {
    const [listaCatalogo, setListaCatalogo] = useState<Coches>([])
    const { coche, setCoche } = useCoche()

    function accionCargarcoches() {
        consultarCoches()
            .then(lista => setListaCatalogo(lista))
            .catch(error => navegarError(router, "error al cargar lista coche", error.toString()))
    }

    useEffect(() => {
        accionCargarcoches()
    }, [])

    function getFlatListItem(coche:Coche){
        return <List.Item
                    title={`${coche.marca} ${coche.modelo}`}
                    left={()=> <List.Icon icon={"car"}/>}
                    onPress={()=> {
                        setCoche(coche)
                        router.push("/invitados/detalle")
                    }}
                />
    }

    return (
        <View className="p-4 gap-4">
            <Text variant="titleLarge">Catálogo de Coches</Text>
            <FlatList
                data={listaCatalogo}
                keyExtractor={(coche) => coche.id.toString()}
                renderItem={({item}) => getFlatListItem(item)}
            />
            
            <Button onPress={() => router.back()}>Volver Atrás</Button>
        </View>
    );
}
