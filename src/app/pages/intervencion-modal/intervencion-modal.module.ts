import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntervencionModalPageRoutingModule } from './intervencion-modal-routing.module';

import { IntervencionModalPage } from './intervencion-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntervencionModalPageRoutingModule
  ],
  declarations: [IntervencionModalPage]
})
export class IntervencionModalPageModule {}
