import { Coche } from "@/model/Types";
import { Platform } from "react-native";
import axios from "axios";

const IP = Platform.OS==="android"? "10.0.2.2" : "localhost"
export async function consultarCoche():Promise<Coche>{
    const url = `http://${IP}:3000/coches`
    const respuesta = await axios.get(url)
    return respuesta.data
}
export async function borrarCoche(id:number){
    const url = `http://${IP}:3000/coches/${id}`
    await axios.delete(url)


}