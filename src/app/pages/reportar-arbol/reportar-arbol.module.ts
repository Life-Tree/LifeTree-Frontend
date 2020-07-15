import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportarArbolPageRoutingModule } from './reportar-arbol-routing.module';

import { ReportarArbolPage } from './reportar-arbol.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { CameraService } from 'src/app/services/camera/camera.service';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportarArbolPageRoutingModule, 
    ComponentsModule
  ],
  providers: [CameraService, GeolocationService, ArbolesService],
  declarations: [ReportarArbolPage]
})
export class ReportarArbolPageModule {}
