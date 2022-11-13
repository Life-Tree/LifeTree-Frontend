import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';
import { UserLifeTreeService } from 'src/app/services/users/user-life-tree.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  usuario: string = "";
  contrasena: string = "";
  result: boolean;

  constructor(private userServices: UsersService, private router: Router,
    private userLifeTreeService: UserLifeTreeService,
    private toastService: ToastService,
    private userService: UsersService) {

  }

  public async validation(): Promise<void> {
    console.log(this.userLifeTreeService.validarUsuario({ nickname: this.usuario, password: this.contrasena }))
    if(this.usuario != "" && this.contrasena != ""){
      /*this.userService.logingService().subscribe(data=>{

      }).err{}*/
      await Preferences.set({key: 'token', value: "50"});
      this.router.navigate(['/inicio'])
    }else{
      this.toastService.presentToast("Debes ingresar todos los datos", 'danger');
    }
    

  }

}
