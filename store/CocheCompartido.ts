import { create } from 'zustand';
import { Coche } from "../model/Types";

type CocheCompartido = {
    coche: Coche,
    setCoche: (coche: Coche) => void
}

const COCHE_INICIAL = {
    id:0,
    marca:"",
    modelo:"",
    año:0,
    color:"",
    precio:0
}

export const useCoche = create<CocheCompartido>(set => ({
    coche: COCHE_INICIAL,
    setCoche: (c: Coche) => set({ coche: c })
}))