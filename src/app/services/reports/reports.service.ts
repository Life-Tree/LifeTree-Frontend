import { Injectable } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol.interface';

export interface BasicReport{
  labels: string[];
  data: number[];
}

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor() { }

  public findTreesPerNeighbor(arboles: Arbol[]): BasicReport{
    let arbolesMap = new Map<string, number>();
    for (let arbol of arboles){
      let count: number = 0;
      if(arbolesMap.has(arbol.ubicacion.barrio)){
        count = arbolesMap.get(arbol.ubicacion.barrio);
      }
      count++;
      arbolesMap.set(arbol.ubicacion.barrio,count);
    }
    let basicReport: BasicReport = {labels: [], data: []};
    let index = 0;
    for (let [key, value] of arbolesMap) {
      basicReport.labels.push(key);
      basicReport.data.push(value);
      index++;
      if(index == 6){
        break;
      }
    }
    return basicReport;
  }

  public findTreesPerSpecies(arboles: Arbol[]): BasicReport{
    let arbolesMap = new Map<string, number>();
    for (let arbol of arboles){
      let count: number = 0;
      if(arbolesMap.has(arbol.species.name)){
        count = arbolesMap.get(arbol.species.name);
      }
      count++;
      arbolesMap.set(arbol.species.name,count);
    }

    let basicReport: BasicReport = {labels: [], data: []};
    let index = 0;
    for (let [key, value] of arbolesMap) {
      basicReport.labels.push(key);
      basicReport.data.push(value);
      index++;
      if(index == 6){
        break;
      }
    }
    return basicReport;
  }
}
