import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReportDetailPage } from '../../pages/reportPages/reportDetail/reportDetail.page';
import { ReportService } from 'src/app/services/reports/report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './reportList.component.html',
  styleUrls: ['./reportList.component.scss'],
})
export class ReportListComponent implements OnInit {
  reportsLoaded: any[] = [];
  reports: any[] = [];
  constructor(
    private reportsService: ReportService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.reportsService.getReports().subscribe(data => {
      this.reports = data;
      for (let i = 0; i < 25; i++) {
        if (i < this.reports.length) {
          this.reportsLoaded.push(this.reports[i]);
        }
      }
    })
  }

  getImage(reportedSignSymptoms: any[]): string {
    for (const reportedSignSymptom of reportedSignSymptoms) {
      if(reportedSignSymptom?.imageSet?.images[0]?.url && reportedSignSymptom.imageSet.images[0].url !== ''){
        return reportedSignSymptom?.imageSet?.images[0]?.url;
      }
    }
    return '';
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      for (let i = this.reportsLoaded.length; i < this.reportsLoaded.length + 25; i++) {
        if (i < this.reports.length) {
          this.reportsLoaded.push(this.reports[i]);
        }
      }
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.reportsLoaded.length == this.reports.length) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  async abrirModal(report: any): Promise<void> {
    const modal = await this.modalCtrl.create(
      {
        component: ReportDetailPage,
        //cssClass: 'my-custom-class',
        componentProps: {
          'report': report
        }
      }
    );
    return await modal.present();
  }

}
