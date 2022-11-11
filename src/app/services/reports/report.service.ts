import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specie } from 'src/app/models/domain/specie';
import { environment } from 'src/environments/environment';

export const COMMON_SPECIES_GROUP_NAME = "Especies mas comunes";
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  commonSpeciesNames = ["Almendro","Mango","Coco","Flor morado","Diomate","Caucho", "Totumo"]
  wholeTree = [1,2,3,4,5];

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
  signSymptomsToShow: {signsymptom: any, loaded: boolean, base64: string}[] = [];

  constructor(private httpClient:HttpClient) { }

  getSpecies(){
    return this.httpClient.get<Specie[]>(`${environment.lifeTreeUrl}reports/species`)
  }

  getSignSymptomsByTreeParts(treeParts: number[]){
    if(treeParts.length == 1 && treeParts[0] == 6) treeParts = this.wholeTree; // All parts if part selected is 6 [Whole]
    return this.httpClient.get<any[]>(`${environment.lifeTreeUrl}reports/signsymptoms/byparts/${treeParts.toString()}`)
  }

  getConditions(){
    return this.httpClient.get<any[]>(`${environment.lifeTreeUrl}reports/conditions`)
  }

  async fillSignSymptomsToShow(signSymptoms: any[]) {
    if(signSymptoms && signSymptoms !== null) {
      this.signSymptomsToShow = [];
      signSymptoms.forEach(signsymptom => {
        this.signSymptomsToShow.push({signsymptom, loaded: false, base64: ''});
      });
    }
    if(this.signSymptomsToShow.length === 0){
      const allSignSymptoms = await this.getSignSymptomsByTreeParts([1,2,3,4,5]).toPromise();
      allSignSymptoms.forEach(signsymptom => {
        this.signSymptomsToShow.push({signsymptom, loaded: false, base64: ''});
      });
    }
  }

  public orderSpeciesByFamily(species: Specie[], withCommon = true): Map<string, Specie[]> {
    let speciesMap = new Map<string, Specie[]>();
    if(withCommon){
      speciesMap.set(COMMON_SPECIES_GROUP_NAME, this.getCommonSpecies(species));
    }    
    for(let sp of species){
      if (sp.family != "unknown"){
        let spsOfFamily: Specie[] = [];
        if(speciesMap.has(sp.family)){
          spsOfFamily = speciesMap.get(sp.family);
        }
        spsOfFamily.push(sp);
        speciesMap.set(sp.family,spsOfFamily);
      }      
    }
    return speciesMap;
  }

  filterSpeciesByQuery(species: Specie[], query: string){
    return species.filter((sp) => sp.name.toLowerCase().includes(query.toLowerCase()));
  }

  public getCommonSpecies(species: Specie[]): Specie[] {
    return species.filter((sp:Specie) => this.commonSpeciesNames.includes(sp.name));
  }

  public report() {
    return this.httpClient.post<any>(`${environment.lifeTreeUrl}reports`,{reportedTree: this.reportedTree});
  }

  getReports(){
    return this.httpClient.get<any[]>(`${environment.lifeTreeUrl}reports`)
  }

}
