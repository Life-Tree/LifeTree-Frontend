import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { CameraService } from 'src/app/services/camera/camera.service';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';

@Component({
  selector: 'app-reportar-arbol',
  templateUrl: './reportar-arbol.page.html',
  styleUrls: ['./reportar-arbol.page.scss'],
})
export class ReportarArbolPage implements OnInit {

  descripcion:string = "";
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

  async getfotoArbol(){
    this.imgBase64 = await this.cameraService.takePicture()
  }

  registrarArbol(){
    //Metodo Post
    let respuesta = this.arbolesService.crearArbol(this.descripcion, this.barrio, 
      this.geolocation.latitude, this.geolocation.longitude, this.imgBase64);
    console.log(respuesta);
    
  }
}
