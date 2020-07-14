import { Component, OnInit, Input } from '@angular/core';
import { MapaComponent } from 'src/app/components/mapa/mapa.component';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.page.html',
  styleUrls: ['./indicadores.page.scss'],
})

export class IndicadoresPage implements OnInit {

  constructor() { }

  ngOnInit() {
    MapaComponent
  }

}
