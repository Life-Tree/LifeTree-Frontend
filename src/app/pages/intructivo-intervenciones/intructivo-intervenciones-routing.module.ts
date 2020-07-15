import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntructivoIntervencionesPage } from './intructivo-intervenciones.page';

const routes: Routes = [
  {
    path: '',
    component: IntructivoIntervencionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntructivoIntervencionesPageRoutingModule {}
