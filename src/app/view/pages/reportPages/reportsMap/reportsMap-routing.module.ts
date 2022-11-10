import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsMapPage } from './reportsMap.page';


const routes: Routes = [
  {
    path: '',
    component: ReportsMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsMapPageRoutingModule {}
