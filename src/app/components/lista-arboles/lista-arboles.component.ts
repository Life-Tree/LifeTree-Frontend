import { Component, OnInit, Input } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol.interface';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { ModalController } from '@ionic/angular';
import { ArbolModalPage } from 'src/app/pages/arbol-modal/arbol-modal.page';
//import { ArbolModalPage } from 'src/app/pages/arbol-modal/arbol-modal.page';

@Component({
  selector: 'app-lista-arboles',
  templateUrl: './lista-arboles.component.html',
  styleUrls: ['./lista-arboles.component.scss'],
})
export class ListaArbolesComponent implements OnInit {

  @Input() filtro: "ALL" | "PENDING_INTERVENCION";
  arboles: Arbol[] = [];
  arbolesLoaded: Arbol[] = [];
  constructor(private arbolesService: ArbolesService, private modalCtrl: ModalController) {
    
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      for(let i=this.arbolesLoaded.length; i<this.arbolesLoaded.length+25; i++){
        if(i < this.arboles.length){
          this.arbolesLoaded.push(this.arboles[i]);
        }        
      }
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.arbolesLoaded.length == this.arboles.length) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  async abrirModal(arbol: Arbol): Promise<void>{
    const modal = await this.modalCtrl.create(
      {
        component: ArbolModalPage,
        //cssClass: 'my-custom-class',
        componentProps: {
          'arbol': arbol
        }
      }
    );
    return await modal.present();
  }

  ngOnInit() {
    let todosLosArboles =  this.arbolesService.getArboles();
    console.log(this.filtro);
    if(this.filtro == "PENDING_INTERVENCION"){
      for (const arbol of todosLosArboles) {
        for (const intervencion of arbol.intervenciones) {
          if(intervencion.estado == "PENDIENTE"){
            console.log("ee");
            this.arboles.push(arbol); break;
          }
        }
      }
    }else{
      this.arboles = todosLosArboles;
    }

    for(let i=0; i<25; i++){
      if(i < this.arboles.length){
        this.arbolesLoaded.push(this.arboles[i]);
      }      
    }
  }

}
