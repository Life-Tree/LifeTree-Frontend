import { Injectable } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol.interface';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArbolReportar } from 'src/app/interfaces/arbolReportar.interface';
import { Species } from 'src/app/interfaces/especie';
import { Options } from 'selenium-webdriver';


export const COMMON_SPECIES_GROUP_NAME = "Especies mas comunes";
@Injectable({
  providedIn: 'root' 
})
export class ArbolesService {
  commonSpeciesNames = ["Almendro","Mango","Coco","Flor morado","Diomate","Caucho", "Totumo"]
  form: {
    names?: string,
    lastNames?: string,
    typeId?: string,
    numId?: number,
    address?: string,
    phoneNumber?: number, 
    email?: string,
    date?: Date,
    geolocation?: { latitude: number, longitude: number };
  } = {}
  
  constructor(private httpClient:HttpClient) { }

  obtenerArboles(){
    return this.httpClient.get<Arbol[]>(`${environment.lifeTreeUrl}arboles`)
  }

  getSpecies(){
    return this.httpClient.get<Species[]>(`${environment.lifeTreeUrl}arboles/species`)
  }

  registrarArbol(arbol:ArbolReportar){
    return this.httpClient.post<string>(`${environment.lifeTreeUrl}arboles`,arbol, {responseType: 'text' as 'json'})
  }

  eliminarArbol(id:string){
    return this.httpClient.delete<string>(`${environment.lifeTreeUrl}arboles/${id}`)
  }

  public cambiarEstadoIntervencion(arbol:ArbolReportar,id:string){
    return this.httpClient.put<string>(`${environment.lifeTreeUrl}arboles/${id}`,arbol)
  }

  public addIntervencion(arbol:ArbolReportar,id:string){
    return this.httpClient.post<string>(`${environment.lifeTreeUrl}/arboles/intervencion/${id}`,arbol)
  }

  public orderSpeciesByFamily(species: Species[], withCommon = true): Map<string, Species[]> {
    let speciesMap = new Map<string, Species[]>();
    if(withCommon){
      speciesMap.set(COMMON_SPECIES_GROUP_NAME, this.getCommonSpecies(species));
    }    
    for(let sp of species){
      if (sp.family != "unknown"){
        let spsOfFamily: Species[] = [];
        if(speciesMap.has(sp.family)){
          spsOfFamily = speciesMap.get(sp.family);
        }
        spsOfFamily.push(sp);
        speciesMap.set(sp.family,spsOfFamily);
      }      
    }
    return speciesMap;
  }

  filterSpeciesByQuery(species: Species[], query: string){
    return species.filter((sp) => sp.name.toLowerCase().includes(query.toLowerCase()));
  }

  public getCommonSpecies(species: Species[]): Species[] {
    return species.filter((sp:Species) => this.commonSpeciesNames.includes(sp.name));
  }
}
