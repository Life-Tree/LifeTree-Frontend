import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

import { InicioAdminPage } from './inicio-admin.page';

const routes: Routes = [
  {
    path: '',
    component: InicioAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class InicioAdminPageRoutingModule {}
