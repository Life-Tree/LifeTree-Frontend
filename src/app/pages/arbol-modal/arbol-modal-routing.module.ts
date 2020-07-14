import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbolModalPage } from './arbol-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ArbolModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArbolModalPageRoutingModule {}
