import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMaterialPageRoutingModule } from './listMaterial-routing.module';

import { ListMaterialPage } from './listMaterial.page';
import { ComponentsModule } from 'src/app/view/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMaterialPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListMaterialPage]
})
export class ListMaterialPageModule {}
