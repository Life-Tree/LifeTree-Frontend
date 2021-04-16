import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { CameraService } from 'src/app/services/camera/camera.service';
import { ArbolReportar } from 'src/app/interfaces/arbolReportar.interface';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';

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
  constructor(
    private geolocationService: GeolocationService,
    private cameraService: CameraService,
    private arbolesService: ArbolesService
  ) { }

  ngOnInit() {
    this.getGeolocation()
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
        imagenData: this.imgBase64
      }
      console.log(arbol);
      this.arbolesService.registrarArbol(arbol).subscribe(data => {
        console.log(data)
      }, error=> console.log(error))
      console.log(arbol)
      this.descripcion = "";
      this.imgBase64 = "";
      this.barrio = "";
    } else {
      console.log('Campos vacios')
    }
  }
}
