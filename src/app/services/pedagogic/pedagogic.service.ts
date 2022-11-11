import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Material } from 'src/app/models/domain/material';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedagogicService {

  constructor(private httpClient:HttpClient) { }


  getMaterials(){
    return this.httpClient.get<Material[]>(`${environment.lifeTreeUrl}materials`)
  }

  postMaterials(material: Material){
    return this.httpClient.post<Material[]>(`${environment.lifeTreeUrl}materials`,material)
  }

  getMaterialById(id:string){
    return this.httpClient.get<Material>(`${environment.lifeTreeUrl}materials/${id}`);
  }

  putEditMaterial(material: Material){
    return this.httpClient.put<Material[]>(`${environment.lifeTreeUrl}materials`,material)
  }

  
}
