import { Ubicacion } from './ubicacion.interface';
import { Intervencion } from './intervencion.interface';

export interface Arbol{
    _id?: any;
    ubicacion: Ubicacion;
    description: string;
    imagenURL: string;
    intervenciones: Intervencion[];
    estado: "INTERVENIDO" | "ENFERMO" | "CURADO";
}