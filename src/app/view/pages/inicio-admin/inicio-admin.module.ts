import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioAdminPageRoutingModule } from './inicio-admin-routing.module';

import { InicioAdminPage } from './inicio-admin.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InicioAdminPage]
})
export class InicioAdminPageModule {}
