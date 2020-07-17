import { Ubicacion } from './ubicacion.interface';
export interface ArbolReportar {
    ubicacion: Ubicacion;
    descripcion: string;
    intervenciones?: {imagenData:string, descripcion:string, estado: "APROBADA"|"PENDIENTE"|"RECHAZADA"}[];
    imagenData: string;
    estado?: "INTERVENIDO" | "ENFERMO" | "CURADO"

}

