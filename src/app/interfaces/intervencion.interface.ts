import { ImageSet } from "./imageset";

export interface Intervencion{
    descripcion: string;
    imageSet: ImageSet;
    estado: "APROBADA"|"PENDIENTE"|"RECHAZADA";
}