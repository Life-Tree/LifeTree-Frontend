import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../../components/components.module';
import { ReportsMapPageRoutingModule } from './reportsMap-routing.module';
import { ReportsMapPage } from './reportsMap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportsMapPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReportsMapPage]
})
export class ReportsMapPageModule {}
