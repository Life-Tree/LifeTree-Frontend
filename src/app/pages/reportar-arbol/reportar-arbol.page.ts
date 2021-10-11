import { Component, OnInit, SecurityContext } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { CameraService } from 'src/app/services/camera/camera.service';
import { ArbolReportar } from 'src/app/interfaces/arbolReportar.interface';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Frame, ImageSet } from 'src/app/interfaces/imageset';
import { Species } from 'src/app/interfaces/especie';
import { EspeciesModalPage } from '../especies-modal/especies-modal.page';
import { ThrowStmt } from '@angular/compiler';
import { KeyValue, NumberFormatStyle } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-reportar-arbol',
  templateUrl: './reportar-arbol.page.html',
  styleUrls: ['./reportar-arbol.page.scss'],
})
export class ReportarArbolPage implements OnInit {

  descripcion: string = "";
  geolocation: { latitude: number, longitude: number } = null;
  imageSet: ImageSet = {images:[]};
  imgBase64: string = "";
  barrio: string = "";
  species: Species[] = [];
  defaultSpecies: Species;
  framesLoaded: Map<string,{loaded: boolean, path: string}>;
  speciesByFamily: Map<string,Species[]>;
  specie: Species;
  specieSelected: Species;

  constructor(
    private geolocationService: GeolocationService,
    private cameraService: CameraService,
    private arbolesService: ArbolesService,
    public toastController: ToastController,
    private router: Router,
    public modalController: ModalController,
    public sanitizer: DomSanitizer
  ) { 
    this.framesLoaded = new Map<string, {loaded: boolean, path: string}>();
    this.speciesByFamily = new Map<string,Species[]>();
  }

  ngOnInit() {
    this.getGeolocation()
    this.arbolesService.getSpecies().subscribe( (data) => {
      this.species = data;
      for (const sp of data){
        if (sp.name == 'unknown'){
          this.defaultSpecies = sp;
          break;
        }
        this.speciesByFamily = this.arbolesService.orderSpeciesByFamily(data);
      }
    });
    this.framesLoaded.set(Frame.HOJAS.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.RAIZ.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.RAMAS.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.TRONCO.toString(),{loaded: false, path: ""});
  }

  async getGeolocation() {
    this.geolocation = await this.geolocationService.getCurrentPosition()
  }

  async setArbolPicture(frameString: string) {
    try {
      this.imgBase64 = await this.cameraService.takePicture();
      let pre:string = "data:image/png;base64,";
      this.imgBase64 = pre+this.imgBase64;
      let frame = this.getFrameFromString(frameString);
      this.framesLoaded.set(frameString,{loaded: true, path: this.imgBase64});
      this.imageSet.images.push({frame: frame, base64: this.imgBase64, url:''})
    } catch (error) {
      console.log(error);      
    }
  }

  unsetArbolPicture(frameString: string){
    let newImages = this.imageSet.images.filter((img) => img.frame != frameString);
    this.imageSet.images = newImages;
    this.framesLoaded.set(frameString, {loaded: false, path: ""});    
  }

  getFrameFromString(fs: string): Frame {
    switch (fs) {
      case 'TRONCO':
        return Frame.TRONCO;
      case 'RAMAS':
        return Frame.RAMAS;
      case 'HOJAS':
        return Frame.HOJAS;
      case 'RAIZ':
          return Frame.RAIZ;
      default:
        return Frame.TRONCO;
    }
  }

  async presentModal() {
    let species;

    const modal = await this.modalController.create({
      component: EspeciesModalPage,
      
      componentProps: {
        species: this.species,
        speciesByFamily: this.speciesByFamily
      }
    });
    
    await modal.present();

    const { data } = await modal.onWillDismiss();
    this.specieSelected = data;
    console.log(this.specieSelected.name);
  }

  registrarArbol() {
    //Metodo Post
    if (this.descripcion !== "" && this.barrio !== "" && this.imageSet.images.length > 0 ) {
      let arbol: ArbolReportar = {
        ubicacion: {
          latitud: this.geolocation.latitude,
          longitud: this.geolocation.longitude,
          barrio: this.barrio
        },
        descripcion: this.descripcion,
        imageSet: this.imageSet,
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
      this.species = [];
      this.imageSet = {images:[]}
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
