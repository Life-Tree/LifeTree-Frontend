import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReportStatisticsPage } from './reportStatistics.page';
import { ComponentsModule } from 'src/app/view/components/components.module';
import { ReportStatisticsPageRoutingModule } from './reportStatistics-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportStatisticsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReportStatisticsPage]
})
export class ReportStatisticsModule {}
