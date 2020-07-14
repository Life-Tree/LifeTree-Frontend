import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportarIntervencionPage } from './reportar-intervencion.page';

const routes: Routes = [
  {
    path: '',
    component: ReportarIntervencionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportarIntervencionPageRoutingModule {}
