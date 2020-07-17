import { Component, OnInit } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol.interface';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
declare var google;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  ionToggle = true;
  map = null;
  heatmap = null;
  markers: any[] = [];
  arboles: Arbol[] = [];
  constructor(
    private arbolesService: ArbolesService,
  ) {
    //this.getA();
  }

  ngOnInit(): void {
    this.loadMap();
    //this.arboles = arbolesService.getArboles();
    this.arbolesService.obtenerArboles().subscribe(data => {
      this.arboles = data
      //marcadores
      this.createMarkers();
      //Mapa de calor
      this.heatmap = new google.maps.visualization.HeatmapLayer({
        data: this.getPoints(),
      });
    })
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = { lat: 10.404972, lng: -75.511589 };
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12,
      streetViewControl: false,
      mapTypeControlOptions: {
        mapTypeIds: ["roadmap"],
      }

    });

  }

  toggleHeatmap() {
    console.log(this.ionToggle)
    if (this.ionToggle) {
      this.heatmap.setMap(this.map);
      this.desactivarMarkers();
      this.ionToggle = !this.ionToggle;
    } else {
      this.activarMarkers();
      this.heatmap.setMap(null);
      this.ionToggle = !this.ionToggle;
    }
  }

  getPoints(): any[] {
    let points: any[] = [];
    for (const arbol of this.arboles) {
      points.push(new google.maps.LatLng(arbol.ubicacion.latitud, arbol.ubicacion.longitud));
    }
    return points;
  }

  createMarkers() {
    console.log(this.arboles)
    for (const arbol of this.arboles) {
      let pos = { lat: arbol.ubicacion.latitud, lng: arbol.ubicacion.longitud };
      this.markers.push(new google.maps.Marker({
        position: pos,
        title: 'arbol',
        map: this.map
      }));
    }
  }

  desactivarMarkers(): void {
    for (const marker of this.markers) {
      marker.setMap(null);
    }
  }

  activarMarkers(): void {
    for (const marker of this.markers) {
      marker.setMap(this.map);
    }
  }

}
