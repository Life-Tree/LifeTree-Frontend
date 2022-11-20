import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ModalController, ToastController } from '@ionic/angular';
import { EspeciesModalPage } from 'src/app/view/pages/reportPages/especies-modal/especies-modal.page';
import { ThemePalette } from '@angular/material/core'; 
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { ReportService } from 'src/app/services/reports/report.service';
import { Specie } from 'src/app/models/domain/specie';
import { DCH_VIDEO_URL } from 'src/app/models/constants/constants';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  @Input() stepper : MatStepper
      
  color: ThemePalette = "primary";
  species: Specie[] = [];
  defaultSpecies: Specie;
  speciesByFamily: Map<string,Specie[]>;
  specieSelected: Specie;
  iconSpeciesText = '';
  hintSpeciesText = 'Seleccione la especie'
  speciesDisable = true;
  styleExp = '';
  DCH_VIDEO_URL_CONSTANT = DCH_VIDEO_URL;

  constructor(
    private reportService: ReportService, 
    public toastController: ToastController, 
    public modalController: ModalController,
    private videoPlayer: VideoPlayer) {
    this.speciesByFamily = new Map<string,Specie[]>();
   }

  ngOnInit(): void {
    this.reportService.getSpecies().subscribe( (data) => {
      this.species = data;
      for (const sp of data){
        if (sp.name == 'unknown'){
          this.defaultSpecies = sp;
          break;
        }
        this.speciesByFamily = this.reportService.orderSpeciesByFamily(data);
      }
    }, (error) => {
      console.log(error);
      this.presentToast('Upss, verifique su conexión a internet', 'danger');
    });
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

  async onNext(form: NgForm){
    if (form.invalid) {
      console.log("Invalido");
      this.presentToast('Debe completar los campos requeridos', 'danger'); 
    }else{
      console.log("Formulario", form.value);
      this.stepper.steps.get(0).completed =true;
      this.reportService.reportedTree.location.address = form.value.address;
      this.reportService.reportedTree.location.neighborhood = form.value.neighborhood;
      this.reportService.reportedTree.dch = +form.value.dch;
      this.reportService.reportedTree.cupDiameter = +form.value.cupDiameter;
      this.reportService.reportedTree.height = +form.value.height;
      this.reportService.reportedTree.numForks= +form.value.numForks;
      this.reportService.reportedTree.specie = this.specieSelected;
      console.log("Form del service", this.reportService.reportedTree);
      this.stepper.next();
    }
  }

  async presentModal(form: NgForm) {
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
      this.specieSelected = data
      this.iconSpeciesText = 'check_circle';
      this.hintSpeciesText = 'Especie seleccionada';
      this.styleExp = 'var(--ion-color-primary)'
      this.speciesDisable = false;
      let value = this.specieSelected?.name ? this.specieSelected?.name : '';
      form.form.get('commonName').setValue(value);
      console.log(form.form.value);
    }else{
      this.presentToast('Upss verifique su conexión a internet', 'danger');
    }
    
  }

  openVideo(url: string){
    this.videoPlayer.play(url).then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
}
