import { Component, OnInit } from '@angular/core';
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
  reportarArbol: menuItem; 
  reportarIntervencion: menuItem; 
  consultarIndicadores: menuItem; 
  verMapa: menuItem;
  consultarInstructivoIdentificacion: menuItem; 
  listaIntervenciones: menuItem; 
  consultarInstructivoIntervencion: menuItem;
  listaArbolesRegistrados: menuItem;
  //itemsMenu: menuItem[] = [];
  constructor(
    public userService: UsersService
  ) {   
  }

  ngOnInit() {

    console.log("USer",this.userService.permissions)

    this.reportarArbol =  {
      name: "Reportar un árbol",
      icon: "../../../assets/arbol-muerto.svg",
      redirectTo: "/report"
    };

    this.listaArbolesRegistrados =  {
      name: "Lista de reportes",
      icon: "../../../assets/list-svgrepo-com.svg",
      redirectTo: "/reportList"
    };

    this.consultarIndicadores = {
      name: "Consultar indicadores",
      icon: "../../../assets/bar-chart-svgrepo-com.svg",
      redirectTo: "/reportStatistics"
    };

    this.verMapa = {
      name: "Mapa de reportes",
      icon:"../../../assets/mapa.svg",
      redirectTo: "/reportsMap"
    };
    
    this.consultarInstructivoIdentificacion ={
      name: "Aprende a identificar",
      icon:"../../../assets/cuaderno.svg",
      redirectTo: "/listMaterial"
    };

  }

  logout(){
    this.userService.logout();
  }
}
