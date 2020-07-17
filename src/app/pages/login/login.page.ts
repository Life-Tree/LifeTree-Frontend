import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';
import { UserLifeTreeService } from 'src/app/services/users/user-life-tree.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})




export class LoginPage implements OnInit {
  usuario: string;
  contrasena: string;
  result: boolean;

  constructor(private userServices: UsersService, private router:Router, 
    private userLifeTreeService:UserLifeTreeService) {
    
   }

  public validacion():void{
    this.userLifeTreeService.validadUsuario({nickname:this.usuario,password:this.contrasena})

    if(this.userLifeTreeService.user.tipo === 'ADMIN'){
      //redirectTo:"/inicio-admin";
      this.router.navigate(['/inicio-admin'])
      
    }else{
      console.log("Usuario o contraseña errados")
    }

  }

  ngOnInit() {
  }

}
