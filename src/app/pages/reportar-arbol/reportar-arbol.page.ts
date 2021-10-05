import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { CameraService } from 'src/app/services/camera/camera.service';
import { ArbolReportar } from 'src/app/interfaces/arbolReportar.interface';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Frame } from 'src/app/interfaces/imageset';
import { Species } from 'src/app/interfaces/especie';

@Component({
  selector: 'app-reportar-arbol',
  templateUrl: './reportar-arbol.page.html',
  styleUrls: ['./reportar-arbol.page.scss'],
})
export class ReportarArbolPage implements OnInit {

  descripcion: string = "";
  geolocation: { latitude: number, longitude: number } = null;
  imgBase64: string = "";
  barrio: string = "";
  species: Species[] = [];
  defaultSpecies: Species;
  constructor(
    private geolocationService: GeolocationService,
    private cameraService: CameraService,
    private arbolesService: ArbolesService,
    public toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.getGeolocation()
    this.arbolesService.getSpecies().subscribe( (data) => {
      this.species = data;
      for (const sp of data){
        if (sp.name == 'unknown'){
          this.defaultSpecies = sp;
          break;
        }
      }
    });
  }

  async getGeolocation() {
    this.geolocation = await this.geolocationService.getCurrentPosition()
  }

  async getfotoArbol() {
    this.imgBase64 = await this.cameraService.takePicture()
    let pre:string = "data:image/png;base64,";
    this.imgBase64 = pre+this.imgBase64;
  }

  registrarArbol() {
    //Metodo Post
    if (this.descripcion !== "" && this.barrio !== "" && this.imgBase64 !== "") {
      let arbol: ArbolReportar = {
        ubicacion: {
          latitud: this.geolocation.latitude,
          longitud: this.geolocation.longitude,
          barrio: this.barrio
        },
        descripcion: this.descripcion,
        imageSet: {images: [{frame: Frame.TRONCO, base64: this.imgBase64, url: ''}]},
        species: this.defaultSpecies
      }
      console.log(arbol);
      this.arbolesService.registrarArbol(arbol).subscribe(data => {
        console.log(data)
      }, error=> console.log(error))
      console.log(arbol)
      this.descripcion = "";
      this.imgBase64 = "";
      this.barrio = "";
      this.presentToast("¡Árbol reportado exitosamente!");
      this.router.navigate(['./indicadores'])
    } else {
      this.presentToast("¡Llene todos los campos, por favor!");
      console.log('Campos vacios')
    }
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
}
