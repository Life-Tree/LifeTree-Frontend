import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructivosPageRoutingModule } from './instructivos-routing.module';

import { InstructivosPage } from './instructivos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructivosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InstructivosPage]
})
export class InstructivosPageModule {}
