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
  reportarArbol: menuItem; 
  reportarIntervencion: menuItem; 
  consultarIndicadores: menuItem; 
  verMapa: menuItem;
  consultarInstructivoIdentificacion: menuItem; 
  listaIntervenciones: menuItem; 
  consultarInstructivoIntervencion: menuItem;
  listaArbolesRegistrados: menuItem;
  name: string = "";
  role: string = "";
  lastName: string = "";
  //itemsMenu: menuItem[] = [];
  constructor(private userService: UsersService,private userLifeTreeService:UserLifeTreeService) {
    //console.log(this.user);    
  }

  ngOnInit() {
    
    //this.itemsMenu = this.getItems();

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
      icon: "../../../assets/chart-svgrepo-com.svg",
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

  logout(){
    console.log("Desloguarse")
  }



}
