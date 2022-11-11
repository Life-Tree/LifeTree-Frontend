import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagementMaterialPageRoutingModule } from './managementMaterial-routing.module';

import { ManagementMaterialPage } from './managementMaterial.page';
import { ComponentsModule } from 'src/app/view/components/components.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagementMaterialPageRoutingModule,
    ComponentsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule
  ],
  declarations: [ManagementMaterialPage]
})
export class ManagementMaterialPageModule {}
