import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, CameraSource, CameraDirection } from '@capacitor/core'

const {Camera} = Plugins

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  base64 = "";
  constructor() { }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 50,
      allowEditing: false,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64,
      saveToGallery: false,
    }); 
    if (image.base64String != this.base64){
      this.base64 = image.base64String;
      return image.base64String
    }
    return "";
  }
}