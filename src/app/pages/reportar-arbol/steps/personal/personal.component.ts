import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms'
import { MatStepper } from '@angular/material/stepper';
import { ToastController } from '@ionic/angular';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  @Input() stepper: MatStepper;
  geolocation: { latitude: number, longitude: number } = null;

  constructor(
    private geolocationService: GeolocationService,
    private arbolesService: ArbolesService,
    public toastController: ToastController
  ) { }

  ngOnInit(): void {
    this.getGeolocation();
  }

  async getGeolocation() {
    this.geolocation = await this.geolocationService.getCurrentPosition();
    console.log(this.geolocation);
    
  }

  async onSubmit(form: NgForm){
    if (form.invalid) {
      console.log("Invalido");
      this.presentToast('Debe completar los campos requeridos', 'danger'); 
    }else{
      console.log("Formulario", form);
      this.stepper.steps.get(0).completed =true;
      this.arbolesService.form.date = new Date();
      this.arbolesService.form.geolocation= this.geolocation;
      this.arbolesService.form.names = form.value.names;
      this.arbolesService.form.lastNames = form.value.lastNames;
      this.arbolesService.form.typeId = form.value.typeIdentification;
      this.arbolesService.form.numId= form.value.numIdentification;
      this.arbolesService.form.address= form.value.address;
      this.arbolesService.form.phoneNumber= form.value.phoneNumber;
      this.arbolesService.form.email= form.value.email;
      console.log("Form del service", this.arbolesService.form);
      this.stepper.next();
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

  
}
