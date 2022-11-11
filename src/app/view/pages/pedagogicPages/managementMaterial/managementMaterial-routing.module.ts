import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementMaterialPage } from './managementMaterial.page';

const routes: Routes = [
  {
    path: '',
    component: ManagementMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementMaterialPageRoutingModule {}
