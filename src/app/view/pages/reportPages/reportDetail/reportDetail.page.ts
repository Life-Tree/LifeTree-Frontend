import { Component, OnInit, Input } from '@angular/core';
import { Arbol } from 'src/app/models/arbol.interface';
import { ModalController } from '@ionic/angular';
import { Intervencion } from 'src/app/models/intervencion.interface';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/models/user.interface';
import { UserLifeTreeService,user} from 'src/app/services/users/user-life-tree.service';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';

@Component({
  selector: 'app-arbol-modal',
  templateUrl: './reportDetail.page.html',
  styleUrls: ['./reportDetail.page.scss'],
})
export class ReportDetailPage implements OnInit {
  public  user: User
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
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
