import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides, ToastController } from '@ionic/angular';
import { ReportService } from 'src/app/services/reports/report.service';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class InicioPage {

  constructor(private reportService: ReportService, private toastController: ToastController) { 
    this.reportService.getReports().subscribe((data) => {
      // This is the first calling to the server
    }, async (error) => {
      const toast = await this.toastController.create({
        message: 'Verifique su conexión a internet',
        duration: 10000,
        position: 'top',
        color: 'danger'
      });
      toast.present();
    });
  }
}
