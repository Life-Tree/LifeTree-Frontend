import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';



@NgModule({
  declarations: [HeaderComponent, MenuComponent, MapaComponent],
  imports: [
    CommonModule, IonicModule, RouterModule
  ],
  exports: [HeaderComponent, MenuComponent, MapaComponent]
})
export class ComponentsModule { }
