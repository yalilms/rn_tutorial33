import { useRouter } from "expo-router";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default function Inicio() {
    const route = useRouter()
    return (
        <View>
            <Button mode="contained" onPress={()=> route.replace("/")}>
                cerrar Sesion
            </Button>
        </View>
    );
}
