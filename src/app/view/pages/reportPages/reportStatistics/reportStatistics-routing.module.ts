import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportStatisticsPage } from './reportStatistics.page';

const routes: Routes = [
  {
    path: '',
    component: ReportStatisticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportStatisticsPageRoutingModule {}
