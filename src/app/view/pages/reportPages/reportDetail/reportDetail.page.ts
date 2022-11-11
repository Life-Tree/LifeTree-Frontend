import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-report-modal',
  templateUrl: './reportDetail.page.html',
  styleUrls: ['./reportDetail.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ReportDetailPage {
  @Input() report: any;
  constructor(private modalCtrl: ModalController) { 
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
