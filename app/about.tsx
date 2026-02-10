import { router } from "expo-router";
import { Pressable, View } from "react-native";
import { Text } from "react-native-paper";

export default function About() {
    return (
        <View className="flex-1 p-4">
            <Text variant="titleMedium">About</Text>
            <Pressable
                className="flex-1 bg-[rgba(0,0,0,0.4)]"
                onPress={() => router.back()}
            /> 
            <View className="absolute left-0 bottom-0 h-[50%] p-4 w-full bg-white rounded-tl-2xl rounded-tr-2xl">
                <Text variant="titleLarge" className="align-middle">Acerca de</Text>
            </View>   
        </View>
    );
}
