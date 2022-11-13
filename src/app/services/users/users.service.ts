import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { environment } from 'src/environments/environment';

export let user: User = {nickname: "User", password: "NA", tipo: "CIUDADANO"};

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private httpClient:HttpClient) { 
  }

  public validarUsuario(nickname: string, password: string): boolean{
    if(password == "pass"){
      user = {nickname: nickname, password: password, tipo:"ADMIN"};
      console.log(user);
      
      return true;
    }
    return false;
  }

  public getUser(): User{
    return user;
  } 

  logingService(email: string, password: string){
    //return this.httpClient.post<any>(`${environment.lifeTreeUrl}materials`,material)
  }

  registerService(){

  }
}
