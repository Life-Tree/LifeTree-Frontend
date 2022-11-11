import { Especies } from './especie';
import { ImageSet } from './imageset';
import { Ubicacion } from './ubicacion.interface';
export interface ArbolReportar {
    ubicacion: Ubicacion;
    descripcion: string;
    imageSet: ImageSet;
    species: Especies;
    intervenciones?: {imageSet:ImageSet, descripcion:string, estado: "APROBADA"|"PENDIENTE"|"RECHAZADA"}[];
    estado?: "INTERVENIDO" | "ENFERMO" | "CURADO"
}
