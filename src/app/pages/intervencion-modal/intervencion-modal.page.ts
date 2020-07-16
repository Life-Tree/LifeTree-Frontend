import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Intervencion } from 'src/app/interfaces/intervencion.interface';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users/users.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-intervencion-modal',
  templateUrl: './intervencion-modal.page.html',
  styleUrls: ['./intervencion-modal.page.scss'],
})
export class IntervencionModalPage implements OnInit {

  private user: User;
  @Input() intervencion: Intervencion; 
  constructor(private modalCtrl: ModalController, private userService: UsersService, public alertController: AlertController) {
    this.user = this.userService.getUser();
  }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ALERTA',
      message: '¿Deseas <strong>rechazar</strong> esta intervención?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ALERTA',
      message: '¿Deseas <strong>Confirmar</strong> esta intervención?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
