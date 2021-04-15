import { Component, OnInit, Input } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol.interface';
import { ModalController } from '@ionic/angular';
import { IntervencionModalPage } from '../intervencion-modal/intervencion-modal.page';
import { Intervencion } from 'src/app/interfaces/intervencion.interface';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user.interface';
import { UserLifeTreeService,user} from 'src/app/services/users/user-life-tree.service';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { ReportarIntervencionPage } from '../reportar-intervencion/reportar-intervencion.page';

@Component({
  selector: 'app-arbol-modal',
  templateUrl: './arbol-modal.page.html',
  styleUrls: ['./arbol-modal.page.scss'],
})
export class ArbolModalPage implements OnInit {
  private user: User
  @Input() arbol: Arbol;
  constructor(private modalCtrl: ModalController, public alertController: AlertController,
    private arbolesService: ArbolesService , 
    private userlifeTreeService: UserLifeTreeService) { 
      this.user = this.userlifeTreeService.getUsuario()
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
          'arbol':this.arbol,
          'intervencion': inter
        }
      }
    );
    return await modal.present();
  }

  async abrirModalReportarIntervencion(): Promise<void>{
    const modal = await this.modalCtrl.create(
      {
        component: ReportarIntervencionPage,
        componentProps: {
          'arbol':this.arbol
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
          handler: () => {
            console.log('Confirm Cancel: Cancelado'); //Aqui se maneja si hace click en rechazar
          }
        }, {
          text: 'Confirmar',
          handler: () => {  
            this.arbolesService.eliminarArbol(this.arbol._id).subscribe((result) => {
              if(result){
                console.log(result); //Aqui se maneja si hace click en confirmar
                this.dismiss()
              }
            })
          }
        }
      ]
    });

    await alert.present();
  }

}
