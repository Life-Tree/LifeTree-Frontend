import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Intervencion } from 'src/app/interfaces/intervencion.interface';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users/users.service';
import { AlertController } from '@ionic/angular';
import { UserLifeTreeService } from 'src/app/services/users/user-life-tree.service';
import { Arbol } from 'src/app/interfaces/arbol.interface';
import { ArbolReportar } from 'src/app/interfaces/arbolReportar.interface';
import { ArbolesLifeTreeService } from 'src/app/services/arboles/arboles-life-tree.service';

@Component({
  selector: 'app-intervencion-modal',
  templateUrl: './intervencion-modal.page.html',
  styleUrls: ['./intervencion-modal.page.scss'],
})
export class IntervencionModalPage implements OnInit {

  private user: User;
  @Input() arbol: Arbol;
  @Input() intervencion: Intervencion;
  constructor(private modalCtrl: ModalController,
    private userService: UsersService,
    public alertController: AlertController,
    private UserLifeTreeService: UserLifeTreeService,
    private arbolesLifeTreeService: ArbolesLifeTreeService) {
    this.user = this.UserLifeTreeService.user;
  }

  ngOnInit() {
  }

  dismiss() {
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
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.intervencion.estado = "RECHAZADA"
            for (let index = 0; index <  this.arbol.intervenciones.length; index++) {
              const intervencion = this.arbol.intervenciones[index];
              if(intervencion.estado === "PENDIENTE"|| intervencion.estado === "APROBADA"){
                this.arbol.estado = "INTERVENIDO"
                break
              }else{
                this.arbol.estado = "ENFERMO"
              }
            }    
            this.arbol.estado = "ENFERMO"
            this.arbolesLifeTreeService.cambiarEstadoIntervencion(this.arbolActualizar(), this.arbol._id)
              .subscribe(data => {
                console.log(data)
              },error=>console.log(error))
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
            console.log('Confirm Cancelar');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.intervencion.estado = "APROBADA"
            this.arbol.estado = "INTERVENIDO"
            this.arbolesLifeTreeService.cambiarEstadoIntervencion(this.arbolActualizar(),this.arbol._id)
            .subscribe(data=>{
             console.log(data)
            },error=>console.log(error))
          }
        }
      ]
    });

    await alert.present();
  }

  arbolActualizar(): ArbolReportar {
    let intervenciones:any = []
    for (let i = 0; i < this.arbol.intervenciones.length; i++) {
      intervenciones.push({
        imagenData: this.arbol.intervenciones[i].imagenURL,
        descripcion: this.arbol.intervenciones[i].descripcion,
        estado: this.arbol.intervenciones[i].estado
      })
    }
    let arbol: ArbolReportar = {
      ubicacion: this.arbol.ubicacion,
      descripcion: this.arbol.descripcion,
      intervenciones,
      imagenData: this.arbol.imagenURL,
      estado: this.arbol.estado
    }
    return arbol;
  }

}
