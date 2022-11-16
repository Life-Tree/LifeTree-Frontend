import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../../components/components.module';
import { ReportListPage } from './reportList.page';
import { ReportListPageRoutingModule } from './reportList-routing.module';
import { ReportListComponent } from './reportListComponent/reportList.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReportListPage, ReportListComponent]
})
export class ReportListPageModule {}
