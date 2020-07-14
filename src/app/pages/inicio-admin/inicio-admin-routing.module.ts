import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioAdminPage } from './inicio-admin.page';
import { ComponentsModule } from 'src/app/components/components.module';

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
