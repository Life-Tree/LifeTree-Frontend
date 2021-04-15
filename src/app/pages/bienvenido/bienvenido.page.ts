import { Component, OnInit } from '@angular/core';
import { UserLifeTreeService, user } from 'src/app/services/users/user-life-tree.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {
  constructor( private userService : UserLifeTreeService) { }

  ngOnInit() {
   this.userService.cambiarUsuario()
   console.log(user)
  }
}
