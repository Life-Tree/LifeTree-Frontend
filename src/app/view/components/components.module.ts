import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { ReportListComponent } from './reportList/reportList.component';
import { MapComponent } from './map/map.component';
import { ImgSetterComponent } from './img-setter/img-setter.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [HeaderComponent, MenuComponent, MapComponent, ReportListComponent, ImgSetterComponent],
  imports: [
    CommonModule, IonicModule, RouterModule, HttpClientModule, FormsModule
  ],
  providers: [ArbolesService, HttpClient],
  exports: [HeaderComponent, MenuComponent, MapComponent, ReportListComponent, ImgSetterComponent]
})
export class ComponentsModule { }
