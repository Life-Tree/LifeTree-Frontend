import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { ReportService } from 'src/app/services/reports/report.service';

@Component({
  selector: 'app-reportar-arbol',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ReportPage implements OnInit {

  geolocation: { latitude: number, longitude: number } = null;

  constructor(
    private geolocationService: GeolocationService,
    private reportsService: ReportService
  ) { 
  }

  ngOnInit() {
    this.getGeolocation();   
  }

  async getGeolocation() {
    this.geolocation = await this.geolocationService.getCurrentPosition();
    this.reportsService.reportedTree.location.latitude = this.geolocation?.latitude?.toString() ? this.geolocation?.latitude?.toString() : '';
    this.reportsService.reportedTree.location.longitude = this.geolocation?.longitude?.toString()? this.geolocation?.longitude?.toString() : '';
    console.log(this.geolocation);
  }  
}
