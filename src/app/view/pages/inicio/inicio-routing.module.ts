import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
