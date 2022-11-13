import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { User } from 'src/app/models/user.interface';
import { environment } from 'src/environments/environment';

export let user: User = {nickname: "User", password: "NA", tipo: "CIUDADANO"};

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private httpClient:HttpClient) { 
  }

  public getUser(): User{
    return user;
  } 

  login(data: any){
    return this.httpClient.post<any>(`${environment.lifeTreeUrl}auth/login`,data);
  }

  async logout(){
    await Preferences.remove({ key: 'token' });
  }

  signup(data: any){
    return this.httpClient.post<any>(`${environment.lifeTreeUrl}auth/signup`,data);
  }
}
