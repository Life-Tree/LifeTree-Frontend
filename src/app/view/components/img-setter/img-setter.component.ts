import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CameraService } from 'src/app/services/camera/camera.service';

@Component({
  selector: 'app-img-setter',
  templateUrl: './img-setter.component.html',
  styleUrls: ['./img-setter.component.css']
})
export class ImgSetterComponent implements OnInit {

  @Input() name: string;
  @Input() url: string;
  @Input() infoMessage: string;
  @Output() set = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();
  imageData: {name: string, loaded: boolean, base64: string};

  constructor(private cameraService: CameraService) { }

  ngOnInit(): void {
    this.imageData = this.url && this.url !== '' ?  {name: this.name, loaded: true, base64: this.url} : {name: this.name, loaded: false, base64: ''};
  }

  async setImage() {
    try {
      let base64 = await this.cameraService.takePicture();
      let pre:string = "data:image/png;base64,";
      base64 = pre+base64;
      this.imageData.base64 = base64;
      this.imageData.loaded = true;
      this.set.emit(base64);
    } catch (error) {
      console.log(error);      
    }
  }

  async removeImage() {
    this.imageData.base64 = '';
    this.imageData.loaded = false;
    this.remove.emit(this.imageData.name);
  }

}
