import { Component, Input, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ToastController } from '@ionic/angular';
import { Frame, ImageSet } from 'src/app/models/imageset';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { CameraService } from 'src/app/services/camera/camera.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() stepper: MatStepper;
  imageSet: ImageSet = {images:[]};
  imgBase64: string = "";
  framesLoaded: Map<string,{loaded: boolean, path: string}>;
  geolocation: { latitude: number, longitude: number } = null;

  constructor(private cameraService: CameraService,
    private arbolesService: ArbolesService,
    public toastController: ToastController) {
    this.framesLoaded = new Map<string, {loaded: boolean, path: string}>();
  }

  ngOnInit(): void {
    this.framesLoaded.set(Frame.HOJAS.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.RAIZ.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.FLOR.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.TALLO.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.FRUTO.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.PARTE_ENFERMA.toString(),{loaded: false, path: ""});
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

  onFinish() {    
    if(this.imageSet.images.length == 6) {
      this.stepper.steps.get(1).completed = true;
      console.log(this.imageSet);            
      this.presentToast('¡Árbol registrado con éxito!', 'success');
    }else {
      this.presentToast('Debe añadir todas las fotos requeridas', 'danger'); 
    }
  }

  onPrevious() {
    this.stepper.previous();
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

  cleanFramesLoaded(){
    this.framesLoaded.set(Frame.HOJAS.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.RAIZ.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.FLOR.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.TALLO.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.FRUTO.toString(),{loaded: false, path: ""});
    this.framesLoaded.set(Frame.PARTE_ENFERMA.toString(),{loaded: false, path: ""});
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

}
