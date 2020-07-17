import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment';

export let user: User = { nickname: "User", password: "NA", tipo: "CIUDADANO" };
@Injectable({
  providedIn: 'root'
})
export class UserLifeTreeService {
  user: User
  constructor(private httpClient: HttpClient) {
  }

  validarUsuario(user2: User): boolean {
    this.httpClient.post<User>(`${environment.lifeTreeUrl}users/valid`, user2).subscribe(data => {
      if(data != null){
        this.user = data
      }
    })
    if(this.user != undefined){
      user = { nickname: this.user.nickname, password: this.user.password, tipo: 'ADMIN' }
      console.log(user)
    }
    return this.user != undefined 
  }

  getUsuario(): User {
    return user;
  }

  cambiarUsuario(){
    user = { nickname: "User", password: "NA", tipo: "CIUDADANO" };
  }
}
