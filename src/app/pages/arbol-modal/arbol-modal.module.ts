import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArbolModalPageRoutingModule } from './arbol-modal-routing.module';

import { ArbolModalPage } from './arbol-modal.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArbolModalPageRoutingModule, ComponentsModule
  ],
  declarations: [ArbolModalPage]
})
export class ArbolModalPageModule {}
