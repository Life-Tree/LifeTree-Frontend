import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.interface';

export let user: User = {nickname: "User", password: "NA", tipo: "CIUDADANO"};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //private user: User;
  constructor() { 
    //this.user = {nickname: "User", password: "NA", tipo: "CIUDADANO"};
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
}
