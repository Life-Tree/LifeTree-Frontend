import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialDetailPageRoutingModule } from './materialDetail-routing.module';

import { MaterialDetailPage } from './materialDetail.page';
import { ComponentsModule } from 'src/app/view/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialDetailPageRoutingModule,
    ComponentsModule,

  ],
  declarations: [MaterialDetailPage]
})
export class MaterialDetailPageModule {}
