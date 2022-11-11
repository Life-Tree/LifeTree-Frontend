import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialDetailPage } from './materialDetail.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialDetailPageRoutingModule {}
