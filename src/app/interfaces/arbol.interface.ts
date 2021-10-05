import { Ubicacion } from './ubicacion.interface';
import { Intervencion } from './intervencion.interface';
import { ImageSet } from './imageset';
import { Species } from './especie';

export interface Arbol{
    _id?: string;
    ubicacion: Ubicacion;
    descripcion: string;
    imageSet: ImageSet;
    intervenciones: Intervencion[];
    estado: "INTERVENIDO" | "ENFERMO" | "CURADO";
    species: Species;
}