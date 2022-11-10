import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Species } from 'src/app/models/domain/specie';
import { environment } from 'src/environments/environment';

export const COMMON_SPECIES_GROUP_NAME = "Especies mas comunes";
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  commonSpeciesNames = ["Almendro","Mango","Coco","Flor morado","Diomate","Caucho", "Totumo"]

  reportedTree:{
    location?:{ 
      latitude?: string,         
      longitude?: string,
      address?:  string,
      neighborhood?: string
    },
    dch?: number,
    cupDiameter?: number,
    height?: number,
    numForks?: number,
    specie?: any,
    healthStatus?:{
      status?:number,
      reportedSignSymptoms?:{
        imageSet?:{
          images:{
            name?: string,
            base64?: string,
            url?: string
          }[]
        },
        signSymptom?: any
      }[]
    }            
  } = {
    location: {},
    healthStatus: {reportedSignSymptoms: []}
  }

  constructor(private httpClient:HttpClient) { }

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

  public getCommonSpecies(species: Species[]): Species[] {
    return species.filter((sp:Species) => this.commonSpeciesNames.includes(sp.name));
  }

}
