import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntervencionesPageRoutingModule } from './intervenciones-routing.module';

import { IntervencionesPage } from './intervenciones.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntervencionesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IntervencionesPage]
})
export class IntervencionesPageModule {}
