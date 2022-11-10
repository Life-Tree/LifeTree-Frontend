import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspeciesModalPageRoutingModule } from './especies-modal-routing.module';

import { EspeciesModalPage } from './especies-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspeciesModalPageRoutingModule
  ],
  declarations: [EspeciesModalPage]
})
export class EspeciesModalPageModule {}
