import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArbolesListPageRoutingModule } from './arboles-list-routing.module';

import { ArbolesListPage } from './arboles-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArbolesListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ArbolesListPage]
})
export class ArbolesListPageModule {}
