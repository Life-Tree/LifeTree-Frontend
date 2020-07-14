import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Intervencion } from 'src/app/interfaces/intervencion.interface';

@Component({
  selector: 'app-intervencion-modal',
  templateUrl: './intervencion-modal.page.html',
  styleUrls: ['./intervencion-modal.page.scss'],
})
export class IntervencionModalPage implements OnInit {

  @Input() intervencion: Intervencion; 
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
