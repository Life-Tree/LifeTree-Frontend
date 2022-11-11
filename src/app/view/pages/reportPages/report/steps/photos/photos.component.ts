import { Component, Input, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ReportService } from 'src/app/services/reports/report.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {

  @Input() stepper: MatStepper;
  imgBase64: string = "";
  geolocation: { latitude: number, longitude: number } = null;
  reportState: {loading: boolean, loaded: boolean} = {loading: false, loaded: false};

  constructor(
    public reportService: ReportService,
    private router: Router,
    public toastController: ToastController) {
  }

  async setImage(base64:any, signsymptomToShow: any) {
    const imageSet = {images: [{name: signsymptomToShow.signsymptom.name, base64: base64, url:''}]}
    this.reportService.reportedTree.healthStatus.reportedSignSymptoms.push({imageSet: imageSet, signSymptom: signsymptomToShow.signsymptom});
    console.log(this.reportService.reportedTree)
  }

  async removeImage(name:any, signsymptomToShow: any) {
    const reportedSignSymptoms = this.reportService.reportedTree.healthStatus.reportedSignSymptoms;
    this.reportService.reportedTree.healthStatus.reportedSignSymptoms = reportedSignSymptoms.filter((reportedSignSymptom) => reportedSignSymptom.signSymptom.id !== signsymptomToShow.signsymptom.id);
    console.log(this.reportService.reportedTree)
  }

  onFinish() {    
    this.reportService.reportedTree.healthStatus.status = 2;
    console.log(this.reportService.reportedTree);
    if(this.reportService.reportedTree.healthStatus.reportedSignSymptoms.length > 0){
      this.stepper.steps.get(2).completed = true;
      this.report();
    }else {
      this.presentToast('Debe añadir almenos una foto de un signo o síntoma', 'danger'); 
    }
  }

  onPrevious() {
    this.stepper.previous();
  }

  report() {
    this.reportState.loading = true;
    this.reportState.loaded = false;
    this.reportService.report().subscribe((data) => {
      console.log(data);
      this.reportState.loading = false;
      this.reportState.loaded = true;
      if (data && data.id !== ''){
        this.presentToast("¡Árbol reportado exitosamente!");
        this.router.navigate(['./reportsMap'])
      }else{
        this.presentToast("¡Upss, algo salió mal!", 'danger')
      }
    }, err => {
      this.reportState.loading = false;
      this.reportState.loaded = true;
      this.presentToast("¡Upss, algo salió mal!", 'danger')
    })
  }

  reportFake(){
    this.reportState.loading = true;
    this.reportState.loaded = false;
    setTimeout(() => {
      this.reportState.loading = false;
      this.reportState.loaded = true;
      this.router.navigate(['./reportsMap'])
    }, 3000);
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
