import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienvenidoPageRoutingModule } from './welcome-routing.module';
import { WelcomePage } from './welcome.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenidoPageRoutingModule
  ],
  declarations: [WelcomePage]
})
export class WelcomePageModule {}
