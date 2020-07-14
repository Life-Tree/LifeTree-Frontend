import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users/users.service';

export interface menuItem{
  name: string;
  icon: string;
  redirectTo: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  user: User;
  reportarArbol: menuItem; reportarIntervencion: menuItem; consultarIndicadores: menuItem; consultarInstructivos: menuItem;
  //itemsMenu: menuItem[] = [];
  constructor(private userService: UsersService) {
    this.user = this.userService.getUser();
  }

  ngOnInit() {
    
    //this.itemsMenu = this.getItems();

    this.reportarArbol =  {
      name: "Reportar arbol enfermo",
      icon: "../../../assets/arbol-muerto.svg",
      redirectTo: "/reportar-arbol"
    };

    this.reportarIntervencion ={
      name:"Reportar intervención",
      icon:"../../../assets/ambiente.svg",
      redirectTo: "/reportar-intervencion"
    };

    this.consultarIndicadores = {
      name: "Consultar indicadores",
      icon:"../../../assets/mapa.svg",
      redirectTo: "/indicadores"
    };
    
    this.consultarInstructivos ={
      name: "Consultar instructivos",
      icon:"../../../assets/cuaderno.svg",
      redirectTo: "/instructivos"
    };

  }

  onClick(){
    console.log("Sii");
    
  }

  /*getItems(): menuItem[]{
    let items = [
      {
        name: "Reportar arbol",
        icon: "../../../assets/arbol-muerto.svg",
        redirectTo: "/reportar-arbol"
      },
      {
        name: "",
        icon: "",
        redirectTo: ""
      }
    ];
    return items;
  }*/



}
