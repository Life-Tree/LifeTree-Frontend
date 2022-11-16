import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ImgSetterComponent } from './img-setter/img-setter.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';




@NgModule({
  declarations: [HeaderComponent, MenuComponent, MapComponent, ImgSetterComponent],
  imports: [
    CommonModule, IonicModule, RouterModule, HttpClientModule, FormsModule
  ],
  providers: [ HttpClient],
  exports: [HeaderComponent, MenuComponent, MapComponent, ImgSetterComponent]
})
export class ComponentsModule { }
