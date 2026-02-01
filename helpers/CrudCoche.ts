import { Coches } from "@/model/Types";
import axios from "axios";

const IP = "10.0.2.2"
export async function consultarCoches():Promise<Coches>{
    const url = `http://${IP}:3000/coches`
    const respuesta = await axios.get(url)
    return respuesta.data
}
export async function borrarCoche(id:number){
    const url = `http://${IP}:3000/coches/${id}`
    await axios.delete(url)


}