import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntervencionModalPage } from './intervencion-modal.page';

const routes: Routes = [
  {
    path: '',
    component: IntervencionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntervencionModalPageRoutingModule {}
