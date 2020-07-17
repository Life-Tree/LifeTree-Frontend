import { Injectable } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol.interface';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArbolReportar } from 'src/app/interfaces/arbolReportar.interface';

@Injectable({
  providedIn: 'root' 
})
export class ArbolesService {

  constructor(private httpClient:HttpClient) { }

  obtenerArboles(){
    return this.httpClient.get<Arbol[]>(`${environment.lifeTreeUrl}arboles`)
  }

  registrarArbol(arbol:ArbolReportar){
    return this.httpClient.post<string>(`${environment.lifeTreeUrl}arboles`,arbol)
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
}
