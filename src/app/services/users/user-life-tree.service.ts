import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLifeTreeService {
  user:User
  constructor(private httpClient: HttpClient) { 
    this.user = {nickname : "" , password : "NA" , tipo : 'CIUDADANO'}

  }

  validadUsuario(user:User){
    this.httpClient.post<User>(`${environment.lifeTreeUrl}users/valid`,user).subscribe(data => {
      if(data){
        this.user = {nickname:data.nickname, password:data.password,tipo : "ADMIN"}
      }
    })
  }
}
