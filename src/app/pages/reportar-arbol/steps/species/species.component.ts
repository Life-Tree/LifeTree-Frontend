import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ModalController, ToastController } from '@ionic/angular';
import { Species } from 'src/app/interfaces/especie';
import { EspeciesModalPage } from 'src/app/pages/especies-modal/especies-modal.page';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { ThemePalette } from '@angular/material/core'; 

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  @Input() stepper : MatStepper
      
  color: ThemePalette = "primary";
  species: Species[] = [];
  defaultSpecies: Species;
  speciesByFamily: Map<string,Species[]>;
  specieSelected: Species;
  iconSpeciesText = '';
  hintSpeciesText = 'Seleccione la especie'
  speciesDisable = true;

  constructor(private arbolesService: ArbolesService, 
    public toastController: ToastController, 
    public modalController: ModalController,) {
    this.speciesByFamily = new Map<string,Species[]>();  
   }

  ngOnInit(): void {
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

  onNext(form: NgForm) {
    if(form.valid) {
      this.stepper.steps.get(1).completed = true;  
      this.stepper.next();          
    }
  }

  onPrevious(form: NgForm) {
    this.stepper.previous();
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
      this.speciesDisable = false;
      let value = this.specieSelected?.name ? this.specieSelected?.name : '';
      form.form.get('commonName').setValue(value);
      console.log(form.form.value);
    }else{
      this.presentToast('Upss verifique su conexión a internet', 'danger');
    }
    
  }
}
