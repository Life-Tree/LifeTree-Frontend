import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  private options = {enableHighAccuracy: true}
  constructor() { }

  async getCurrentPosition():Promise<{latitude:number , longitude:number}> {
    const coordinates = await Geolocation.getCurrentPosition(this.options);
    return {latitude: coordinates.coords.latitude, longitude: coordinates.coords.longitude}
  }


}