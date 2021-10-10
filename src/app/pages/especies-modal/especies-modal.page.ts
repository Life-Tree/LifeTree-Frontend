import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams} from '@ionic/angular';

@Component({
  selector: 'app-especies-modal',
  templateUrl: './especies-modal.page.html',
  styleUrls: ['./especies-modal.page.scss'],
})
export class EspeciesModalPage implements OnInit {
   nombreE: string;
   familiaE: string;
   descripciónE: string;
 
  constructor(public modalController: ModalController, public navParamsNombre : NavParams,
     public navParamsFamilia : NavParams, public navParamsDescripcion : NavParams) { }

  ngOnInit() {
    this.nombreE = this.navParamsNombre.get('nombre'); 
    this.familiaE = this.navParamsFamilia.get('familia');
    this.descripciónE = this.navParamsDescripcion.get('descripcion'); 
  }

  async dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
