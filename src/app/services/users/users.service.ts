import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: any;
  permissions: Map<string,boolean> = new Map<string,boolean>();

  constructor(private httpClient:HttpClient,
    private router: Router) { 
  }

  public getOwnUser(): any{
    return this.httpClient.get<any>(`${environment.lifeTreeUrl}users/own`);
  } 

  login(data: any){
    return this.httpClient.post<any>(`${environment.lifeTreeUrl}auth/login`,data);
  }

  async logout(){
    await Preferences.remove({ key: 'token' });
    this.user = "";
    this.router.navigate(['/bienvenido']);
  }

  signup(data: any){
    return this.httpClient.post<any>(`${environment.lifeTreeUrl}auth/signup`,data);
  }

  fillPermissions(user: any){
    this.user = user;
    user.role.permissions.forEach(permission=> {
      this.permissions.set(permission.name,true);
    });
  }

  async hasToken(): Promise<boolean>{
    const { value } = await Preferences.get({ key: 'token' });
    if(value && value.length > 0){
      return true;
    }
    return false;
  }
}
