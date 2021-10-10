import { Component, OnInit } from '@angular/core';
import { UserLifeTreeService,user} from 'src/app/services/users/user-life-tree.service';
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
  reportarArbol: menuItem; reportarIntervencion: menuItem; consultarIndicadores: menuItem; 
  consultarInstructivoIdentificacion: menuItem; listaIntervenciones: menuItem; 
  consultarInstructivoIntervencion: menuItem;
  //itemsMenu: menuItem[] = [];
  constructor(private userService: UsersService,private userLifeTreeService:UserLifeTreeService) {
    //console.log(this.user);    
  }

  ngOnInit() {
    
    //this.itemsMenu = this.getItems();

    this.reportarArbol =  {
      name: "Reportar árbol enfermo",
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
    
    this.consultarInstructivoIdentificacion ={
      name: "Aprende a identificarlo",
      icon:"../../../assets/cuaderno.svg",
      redirectTo: "/instructivos"
    };

    this.consultarInstructivoIntervencion ={
      name: "Aprende sobre intervenciones",
      icon:"../../../assets/ambiente.svg",
      redirectTo: "/intructivo-intervenciones"
    };

    this.listaIntervenciones= {
      name: "Lista de intervenciones",
      icon:"../../../assets/aprobacion.svg",
      redirectTo:"/intervenciones"
    };

  }

  getUserTipo(): string{
    return user.tipo;
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
