import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';

import { ReportarArbolPageRoutingModule } from './reportar-arbol-routing.module';

import { ReportarArbolPage } from './reportar-arbol.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { CameraService } from 'src/app/services/camera/camera.service';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { ToastController } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { PersonalComponent } from './steps/personal/personal.component';
import { SpeciesComponent } from './steps/species/species.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportarArbolPageRoutingModule, 
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    ComponentsModule,
    MatSelectModule
  ],
  providers: [CameraService, GeolocationService, ArbolesService, ToastController, 
    {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
    },
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    }
  ],  
  declarations: [ReportarArbolPage, PersonalComponent, SpeciesComponent]
})
export class ReportarArbolPageModule {}
