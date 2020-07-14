import { Component, OnInit } from '@angular/core';

interface menuItem{
  name: string;
  icon: string;
  redirectTo: string;
}

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss'],
})
export class MenuAdminComponent implements OnInit {

  reportarArbol: menuItem; reportarIntervencion: menuItem; consultarIndicadores: menuItem; consultarInstructivos: menuItem;

  constructor() { }

  ngOnInit() {

    
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

}
