import { Component, OnInit, Input } from '@angular/core';
import { MapComponent } from 'src/app/view/components/map/map.component';

@Component({
  selector: 'app-indicadores',
  templateUrl: './reportsMap.page.html',
  styleUrls: ['./reportsMap.page.scss'],
})

export class ReportsMapPage implements OnInit {

  constructor() { }

  ngOnInit() {
    MapComponent
  }

}
