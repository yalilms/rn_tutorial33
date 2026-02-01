import { router } from "expo-router";
import { View} from "react-native";
import { Button } from "react-native-paper";

export default function Catalogo() {
    return (
        <View>
            <Button onPress={()=> router.back()}>Volver Atras</Button>
        </View>
    );
}
