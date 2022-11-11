import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsersService } from 'src/app/services/users/users.service';
import { ComponentsModule } from '../../../components/components.module';
import { ReportDetailPage } from './reportDetail.page';
import { ReportDetailPageRoutingModule } from './reportDetail-routing.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportDetailPageRoutingModule, ComponentsModule, SwiperModule
  ],
  providers: [UsersService],
  declarations: [ReportDetailPage]
})
export class ReportDetailPageModule {}
