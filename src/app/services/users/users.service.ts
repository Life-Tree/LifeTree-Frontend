import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private user: User;
  constructor() { 
    this.user = {nickname: "User", password: "NA", tipo: "CIUDADANO"};
  }

  public validarUsuario(nickname: string, password: string): boolean{
    if(password == "pass"){
      this.user = {nickname: nickname, password: password, tipo:"ADMIN"};
      return true;
    }
    return false;
  }

  public getUser(): User{
    return this.user;
  } 
}
