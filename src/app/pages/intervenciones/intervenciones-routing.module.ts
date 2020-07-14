import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntervencionesPage } from './intervenciones.page';

const routes: Routes = [
  {
    path: '',
    component: IntervencionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntervencionesPageRoutingModule {}
