import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { CameraService } from 'src/app/services/camera/camera.service';
import { ArbolReportar } from 'src/app/models/arbolReportar.interface';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Frame, ImageSet } from 'src/app/models/imageset';
import { DomSanitizer } from '@angular/platform-browser';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EspeciesModalPage } from '../../especies-modal/especies-modal.page';
import { Especies } from 'src/app/models/especie';

@Component({
  selector: 'app-reportar-arbol',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  descripcion: string = "";
  geolocation: { latitude: number, longitude: number } = null;
  imageSet: ImageSet = {images:[]};
  imgBase64: string = "";
  barrio: string = "";
  species: Especies[] = [];
  defaultSpecies: Especies;
  framesLoaded: Map<string,{loaded: boolean, path: string}>;
  speciesByFamily: Map<string,Especies[]>;
  specie: Especies;
  specieSelected: Especies;
  reportState: {loading: boolean, loaded: boolean} = {loading: false, loaded: false};

  firstFormGroup: UntypedFormGroup;
  secondFormGroup: UntypedFormGroup;

  constructor(
    private geolocationService: GeolocationService,
    private cameraService: CameraService,
    private arbolesService: ArbolesService,
    public toastController: ToastController,
    private router: Router,
    public modalController: ModalController,
    public sanitizer: DomSanitizer,
    private formBuilder: UntypedFormBuilder
  ) { 
    this.framesLoaded = new Map<string, {loaded: boolean, path: string}>();
    this.speciesByFamily = new Map<string,Especies[]>();    
  }

  ngOnInit() {
    this.getGeolocation();
    
    this.arbolesService.getSpecies().subscribe( (data) => {
      this.species = data;
      for (const sp of data){
        if (sp.name == 'unknown'){
          this.defaultSpecies = sp;
          break;
        }
        this.speciesByFamily = this.arbolesService.orderSpeciesByFamily(data);
      }
    }, (error) => {
      console.log(error);
      this.presentToast('Upss, verifique su conexión a internet', 'danger');
    });
    this.framesLoaded.set(Frame.HOJAS.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.RAIZ.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.FLOR.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.TALLO.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.FRUTO.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.PARTE_ENFERMA.toString(),{loaded: false, path: ""});

    
  }

  async getGeolocation() {
    this.geolocation = await this.geolocationService.getCurrentPosition();
    console.log(this.geolocation);
    
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
      case 'TALLO':
        return Frame.TALLO;
      case 'FLOR':
        return Frame.FLOR;
      case 'HOJAS':
        return Frame.HOJAS;
      case 'RAIZ':
          return Frame.RAIZ;
      case 'FRUTO':
        return Frame.FRUTO;
      case 'PARTE_ENFERMA':
        return Frame.PARTE_ENFERMA;
      default:
        return Frame.TALLO;
    }
  }

  async presentModal() {
    if(this.species.length > 0){
      const modal = await this.modalController.create({
        component: EspeciesModalPage,
        cssClass: 'popup-modal-lg',   
        mode: 'ios',     
        backdropDismiss: true,
        
        componentProps: {
          species: this.species,
          speciesByFamily: this.speciesByFamily,
          defaultSpecie: this.defaultSpecies
        }
      });
      
      await modal.present();
  
      const { data } = await modal.onWillDismiss();
      this.specieSelected = data;
    }else{
      this.presentToast('Upss verifique su conexión a internet', 'danger');
    }
    
  }

  registrarArbol() {
    //Metodo Post
    if (this.descripcion !== "" && this.barrio !== "" && this.imageSet.images.length > 0 && this.specieSelected != null) {
      this.reportState.loading = true;
      this.reportState.loaded = false;
      let arbol: ArbolReportar = {
        ubicacion: {
          latitud: this.geolocation.latitude,
          longitud: this.geolocation.longitude,
          barrio: this.barrio
        },
        descripcion: this.descripcion,
        imageSet: this.imageSet,
        species: this.specieSelected
      }
      console.log(arbol);
      this.arbolesService.registrarArbol(arbol).toPromise().then((data:string) => {
        this.reportState.loading = false;
        this.reportState.loaded = true;
        console.log("Data: " +data)
        this.descripcion = "";
        this.imgBase64 = "";
        this.barrio = "";
        this.species = [];
        this.imageSet = {images:[]}
        this.cleanFramesLoaded();
        this.specieSelected = null;
        if (data == "EL ARBOL SE HA GUARDADO CORRECTAMENTE"){
          this.presentToast("¡Árbol reportado exitosamente!");
          this.router.navigate(['./indicadores'])
        }else{
          this.presentToast(data,'danger');
        }
      }).catch((err) => {
        console.log("error: ")
        console.log(err);        
        this.reportState.loading = false;
        this.reportState.loaded = true;
        this.presentToast("¡Upss, algo salió mal!", 'danger');        
      });  
    } else {
      this.presentToast("¡Llene todos los campos, por favor!", 'warning');
      console.log('Campos vacios')
    }
  }

  async presentToast(mensaje: string, color= 'success') {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'top',
      color: color
    });
    toast.present();
  }

  cleanFramesLoaded(){
    this.framesLoaded.set(Frame.HOJAS.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.RAIZ.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.FLOR.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.TALLO.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.FRUTO.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.PARTE_ENFERMA.toString(),{loaded: false, path: ""});
  }
  
}
