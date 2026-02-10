import "../global.css";
import { Stack, useRouter } from "expo-router";
import { IconButton, PaperProvider, Text } from "react-native-paper";
import { useCoche } from "@/store/CocheCompartido";
import { View } from "react-native";

export default function Layout() {
    const router = useRouter()
    const {coche} = useCoche()
    return (
        <PaperProvider>
            <Stack initialRouteName="index"
                screenOptions={{
                    headerStyle: {backgroundColor:"#6200EE"},
                    headerTintColor: "white",
                    headerTitleAlign: "left"
            }}>
            <Stack.Screen name="index" options={{
                title:"Concesionario Hermenegildo"
            }}/>
            <Stack.Screen name="about" options={{
                title:"About",
                headerShown:false,
                presentation: "transparentModal",
                animation:"slide_from_bottom"
            }}/>
            <Stack.Screen name="(internal)/error" options={{
                title:"Error",
                headerStyle:{backgroundColor:"#FF0000"},
                headerTintColor:"white",
                headerTitleAlign:"center"
            }}/>
            <Stack.Screen name="invitados/catalogo" options={{
                title:"Catálogo Coches"
            }}/>
            <Stack.Screen name="invitados/detalle" options={{
                title:"Detalle del Coche",
                headerRight: () => <IconButton
                                        icon={"share-variant"}
                                        onPress={()=> console.log("compartir pulsado")}
                                        />,
                headerTitle: () => (
                    <View>
                        <Text variant="titleLarge" className="color-white">Detalle del Coche</Text>
                        <Text variant="titleSmall" className="color-white">{coche.marca} {coche.modelo}</Text>
                    </View>
                )
            }}/>
            <Stack.Screen name="admin/inicio" options={{
                title:"Admin"
}           }/>
            <Stack.Screen name="admin/borrar/[id]" options={{
                title:"Borrar Coche"
            }}/>
            <Stack.Screen name="admin" options={{
                headerShown: false,
                
            }}/>
            

            </Stack>
        </PaperProvider>
    );
}
