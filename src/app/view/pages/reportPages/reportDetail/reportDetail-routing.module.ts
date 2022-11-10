import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportDetailPage } from './reportDetail.page';

const routes: Routes = [
  {
    path: '',
    component: ReportDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportDetailPageRoutingModule {}
