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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IntervencionComponent } from './intervencion/intervencion.component';




@NgModule({
  declarations: [HeaderComponent, MenuComponent, MapaComponent, ListaArbolesComponent,IntervencionComponent],
  imports: [
    CommonModule, IonicModule, RouterModule, HttpClientModule
  ],
  providers: [ArbolesService, HttpClient],
  exports: [HeaderComponent, MenuComponent, MapaComponent, ListaArbolesComponent,IntervencionComponent]
})
export class ComponentsModule { }
