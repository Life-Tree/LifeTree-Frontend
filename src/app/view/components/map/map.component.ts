import { Component, OnInit } from '@angular/core';
import { Arbol } from 'src/app/models/arbol.interface';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  ionToggle = true;
  map = null;
  heatmap = null;
  infoWindow: any
  markers: any[] = [];
  arboles: Arbol[] = [];
  assetsBase: string = '../../../assets/'
  currentLocation: {lat: number, lng: number} = { lat: 10.404972, lng: -75.511589 };
  constructor(
    private arbolesService: ArbolesService,
    private geolocationService: GeolocationService
  ) {
    //this.getA();
  }

  async ngOnInit(): Promise<void> {
    const coords = await this.geolocationService.getCurrentPosition();
    if (coords.latitude != 0 && coords.longitude != 0){
      this.currentLocation = {lat:coords.latitude, lng: coords.longitude};
      console.log(this.currentLocation);
      
    }    
    this.initMap();
    this.arbolesService.obtenerArboles().subscribe(data => {
      this.arboles = data
      //marcadores
      this.createMarkers();
      //Mapa de calor
      this.heatmap = new google.maps.visualization.HeatmapLayer({
        data: this.getPoints(),
      });
    });
    
  }

  
  initMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: this.currentLocation,
      zoom: 12,
      streetViewControl: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        mapTypeIds: ["roadmap", "satellite"],
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
    
    for (const arbol of this.arboles) {
      let pos = { lat: arbol.ubicacion.latitud, lng: arbol.ubicacion.longitud };
      this.markers.push(new google.maps.Marker({
        position: pos,
        title: 'arbol',
        icon: this.assetsBase+"tree.png",
        map: this.map
      }));
    }
    // Current location icon
    this.markers.push(new google.maps.Marker({
      position: this.currentLocation,
      title: 'Ubicación actual',
      icon: this.assetsBase+'my-location.png',
      map: this.map
    }));
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
