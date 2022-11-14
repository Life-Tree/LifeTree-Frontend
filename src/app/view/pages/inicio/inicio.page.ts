import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides, ToastController } from '@ionic/angular';
import { ReportService } from 'src/app/services/reports/report.service';
import { UsersService } from 'src/app/services/users/users.service';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class InicioPage {

  constructor(private reportService: ReportService, private toastController: ToastController, private userService: UsersService) { 
    this.reportService.getReports();
    this.userService.getOwnUser().subscribe(data=>{
      this.userService.user = data;
      data.role.permissions.forEach(permission=> {
        this.userService.permissions.set(permission.name,true);
      });
      console.log("USEr inicio",this.userService.user)
    });
  }


}
