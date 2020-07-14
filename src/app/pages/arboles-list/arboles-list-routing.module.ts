import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbolesListPage } from './arboles-list.page';

const routes: Routes = [
  {
    path: '',
    component: ArbolesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArbolesListPageRoutingModule {}
