import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function Inicio() {
    const [id, setId] = useState("")
    const route = useRouter()
    return (
        <View className="p-4 gap-4">
            <View className="flex-row p-4">
                <TextInput
                    mode="outlined"
                    label="id"
                    value={id}
                    onChangeText={setId}
                />
                <Button 
                    mode="contained"
                    onPress={()=> route.push({
                        pathname: "/admin/borrar/[id]",
                        params: { id }
                    })}>
                    Borrar
                </Button>
            </View>
        </View>
    );
}
