import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { type } from 'os';
import { ToastService } from 'src/app/services/toast/toast.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class SingupPage{

  name: string = "";
  lastName: string = "";
  email: string ="";
  password: string = ""; 
  number: string = "";
  type: number = 1;
  address: string ="";
  passwordConfirm: string = "";
  phone: string = "";

  constructor(
    private userService: UsersService,
    private toastService: ToastService,
    private router: Router,
    private loadingCtrl: LoadingController,
  ) { }



  async register(){
    if(this.name == "" || this.lastName == "" || this.email== "" || this.password == "" || this.number ==""  || this.address == ""){
      this.toastService.presentToast("Debes llenar todos los campos","danger")
    }else if(this.password != this.passwordConfirm ){
      this.toastService.presentToast("Las contraseñas no coinciden, verifiquelas","danger")
    }else{
      const loading = await this.loadingCtrl.create({
        cssClass: 'custom-loading',
        showBackdrop:true,
        spinner:"lines"
      });
      this.userService.signup({
        firstName: this.name,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        idNumber: this.number,
        idType: this.type,
        address: this.address,
        phone: this.phone
      }).subscribe((response) => {
        loading.dismiss();
        if(response.registered){
          this.toastService.presentToast("¡Registro exitoso! Revisa tu correo electrónico para activar tu cuenta", "success")
          this.router.navigate(['/login'])
        }else{
          this.toastService.presentToast("El usuario ya se encuentra registrado, por favor inicia sesión o activa tu cuenta", "success")
          this.router.navigate(['/login'])
        }  
      }, err => {
        loading.dismiss();
        this.toastService.presentToast("Algo salió mal, vuelve a intentarlo mas", "danger")
      })
    }
    
  }
}
