import { Ubicacion } from './ubicacion.interface';
import { Intervencion } from './intervencion.interface';

export interface Arbol{
    _id?: string;
    ubicacion: Ubicacion;
    descripcion: string;
    imagenURL: string;
    intervenciones: Intervencion[];
    estado: "INTERVENIDO" | "ENFERMO" | "CURADO";
}