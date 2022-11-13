import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLifeTreeService, user } from 'src/app/services/users/user-life-tree.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class WelcomePage implements OnInit {

  login: Boolean = false;

  constructor( private userService : UserLifeTreeService,
    private router: Router) { }

  ngOnInit() {
   this.userService.cambiarUsuario()
   console.log(user)
  }

  redirect(){
    if(this.login){
      this.router.navigate(['/inicio']);
    }else{
      this.router.navigate(['/login']);
    }
    
  }
}
