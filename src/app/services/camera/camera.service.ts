import { Injectable } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core'

const {Camera} = Plugins

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }

  async takePicture() {
    
    const image = await Camera.getPhoto({
      quality: 50,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      saveToGallery: false,
    });

    return image.base64String
  }
}