import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntructivoIntervencionesPageRoutingModule } from './intructivo-intervenciones-routing.module';

import { IntructivoIntervencionesPage } from './intructivo-intervenciones.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntructivoIntervencionesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IntructivoIntervencionesPage]
})
export class IntructivoIntervencionesPageModule {}
