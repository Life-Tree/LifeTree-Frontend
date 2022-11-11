import { Injectable } from '@angular/core';
import { Arbol } from 'src/app/models/arbol.interface';

export interface BasicReport{
  labels: string[];
  data: number[];
}

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  public findTreesPerNeighbor(reports: any[]): BasicReport{
    let reportsMap = new Map<string, number>();
    for (let report of reports){
      let count: number = 0;
      if(reportsMap.has(report.reportedTree.location.neighborhood)){
        count = reportsMap.get(report.reportedTree.location.neighborhood);
      }
      count++;
      reportsMap.set(report.reportedTree.location.neighborhood,count);
    }
    let basicReport: BasicReport = {labels: [], data: []};
    let index = 0;
    for (let [key, value] of reportsMap) {
      basicReport.labels.push(key);
      basicReport.data.push(value);
      index++;
      if(index == 6){
        break;
      }
    }
    return basicReport;
  }

  public findTreesPerSpecies(reports: any[]): BasicReport{
    let reportsMap = new Map<string, number>();
    for (let report of reports){
      let count: number = 0;
      if(reportsMap.has(report.reportedTree.specie.name)){
        count = reportsMap.get(report.reportedTree.specie.name);
      }
      count++;
      reportsMap.set(report.reportedTree.specie.name,count);
    }

    let basicReport: BasicReport = {labels: [], data: []};
    let index = 0;
    for (let [key, value] of reportsMap) {
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
