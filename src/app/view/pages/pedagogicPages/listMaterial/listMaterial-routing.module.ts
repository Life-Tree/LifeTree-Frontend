import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMaterialPage } from './listMaterial.page';

const routes: Routes = [
  {
    path: '',
    component: ListMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMaterialPageRoutingModule {}
