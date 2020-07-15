import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users/users.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})




export class LoginPage implements OnInit {
  usuario: string;
  contrasena: string;
  result: boolean;

  constructor(private userServices: UsersService, private router:Router) {
    
   }

  public validacion():void{
    this.result= this.userServices.validarUsuario(this.usuario,this.contrasena);
    if(this.result){
      //redirectTo:"/inicio-admin";
      this.router.navigate(['/inicio-admin'])
      
    }else{
      console.log("Usuario o contraseña errados")
    }

  }

  ngOnInit() {
  }

}
