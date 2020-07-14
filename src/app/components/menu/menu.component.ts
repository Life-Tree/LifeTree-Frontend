import { Component, OnInit } from '@angular/core';

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

  reportarArbol: menuItem; reportarIntervencion: menuItem; consultarIndicadores: menuItem; consultarInstructivos: menuItem;
  //itemsMenu: menuItem[] = [];
  constructor() { }

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
