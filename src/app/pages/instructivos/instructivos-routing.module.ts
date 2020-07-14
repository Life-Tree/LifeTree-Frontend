import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructivosPage } from './instructivos.page';

const routes: Routes = [
  {
    path: '',
    component: InstructivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructivosPageRoutingModule {}
