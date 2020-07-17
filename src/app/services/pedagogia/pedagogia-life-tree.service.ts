import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedagogia } from 'src/app/interfaces/pedagogia.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedagogiaService {

  constructor(private httpClient:HttpClient) { }


  obtenerPedagogia(){
      return this.httpClient.get<Pedagogia[]>(`${environment.lifeTreeUrl}pedagogia`)
  }

}
