import { Router } from "expo-router";

export function navegarError(router:Router, mensaje:string, detalles:string){
    router.push({
        pathname:"/error",
        params:{mensaje,detalles}
    })

}