import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  async getCurrentPosition():Promise<{latitude:number , longitude:number}> {
    const coordinates = await Geolocation.getCurrentPosition();
    return {latitude: coordinates.coords.latitude, longitude: coordinates.coords.longitude}
  }


}