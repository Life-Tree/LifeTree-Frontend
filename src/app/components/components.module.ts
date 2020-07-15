import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
import { ListaArbolesComponent } from './lista-arboles/lista-arboles.component';
import { ArbolesService } from '../services/arboles/arboles.service';
import { ArbolModalPageModule } from '../pages/arbol-modal/arbol-modal.module';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [HeaderComponent, MenuComponent, MapaComponent, ListaArbolesComponent],
  imports: [
    CommonModule, IonicModule, RouterModule, HttpClientModule
  ],
  providers: [ArbolesService, HttpClient],
  exports: [HeaderComponent, MenuComponent, MapaComponent, ListaArbolesComponent, MenuAdminComponent]
})
export class ComponentsModule { }
