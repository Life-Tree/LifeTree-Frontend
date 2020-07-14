import { Component, OnInit, Input } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol.interface';
import { ModalController } from '@ionic/angular';
import { IntervencionModalPage } from '../intervencion-modal/intervencion-modal.page';
import { Intervencion } from 'src/app/interfaces/intervencion.interface';

@Component({
  selector: 'app-arbol-modal',
  templateUrl: './arbol-modal.page.html',
  styleUrls: ['./arbol-modal.page.scss'],
})
export class ArbolModalPage implements OnInit {

  @Input() arbol: Arbol;
  constructor(private modalCtrl: ModalController) { 
    
  }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  async abrirModalIntervencion(inter: Intervencion): Promise<void>{
    const modal = await this.modalCtrl.create(
      {
        component: IntervencionModalPage,
        //cssClass: 'my-custom-class',
        componentProps: {
          'intervencion': inter
        }
      }
    );
    return await modal.present();
  }

}
