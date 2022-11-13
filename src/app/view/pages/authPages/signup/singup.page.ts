import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private userService: UsersService,
    private toastService: ToastService,
    private router: Router
  ) { }



  register(){
    this.userService.signup({
      firstName: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      idNumber: this.number,
      idType: this.type,
      address: this.address
    }).subscribe((response) => {
      if(response.regitered){
        this.toastService.presentToast("¡Registro exitoso! Revisa tu correo electrónico para activar tu cuenta", "success")
        this.router.navigate(['/login'])
      }else{
        this.toastService.presentToast("El usuario ya se encuentra registrado, por favor inicia sesión o activa tu cuenta", "success")
      }  
    }, err => {
      this.toastService.presentToast("Algo salió mal, vuelve a intentarlo mas", "danger")
    })
  }
}
