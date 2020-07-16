import { Component, OnInit, Input } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol.interface';
import { ModalController } from '@ionic/angular';
import { IntervencionModalPage } from '../intervencion-modal/intervencion-modal.page';
import { Intervencion } from 'src/app/interfaces/intervencion.interface';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users/users.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-arbol-modal',
  templateUrl: './arbol-modal.page.html',
  styleUrls: ['./arbol-modal.page.scss'],
})
export class ArbolModalPage implements OnInit {

  private user: User;
  @Input() arbol: Arbol;
  constructor(private modalCtrl: ModalController, private userService: UsersService, public alertController: AlertController) { 
    this.user = this.userService.getUser();
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
        componentProps: {
          'intervencion': inter
        }
      }
    );
    return await modal.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ALERTA',
      message: '¿Deseas <strong>eliminar</strong> este arbol?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah'); //Aqui se maneja si hace click en rechazar
          }
        }, {
          text: 'Confirmar',
          handler: () => {   
            console.log('Confirm Okay'); //Aqui se maneja si hace click en confirmar
          }
        }
      ]
    });

    await alert.present();
  }

}
