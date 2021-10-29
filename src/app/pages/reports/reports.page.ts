import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { BasicReport, ReportsService } from 'src/app/services/reports/reports.service';
Chart.register(...registerables);

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  @ViewChild("doughnutCanvas1") doughnutCanvas1: ElementRef;
  @ViewChild("doughnutCanvas2") doughnutCanvas2: ElementRef;
  private doughnutChartSpecies : Chart;
  private doughnutChartNeighbor : Chart;
  reportsPerNeighbor: BasicReport;
  reportsPerSpecies: BasicReport;

  constructor(private arbolesService: ArbolesService, private reportsService: ReportsService) { }

  ngOnInit() {
    this.arbolesService.obtenerArboles().subscribe(arboles  => {
      this.reportsPerNeighbor = this.reportsService.findTreesPerNeighbor(arboles);
      this.reportsPerSpecies = this.reportsService.findTreesPerSpecies(arboles);
      setTimeout(() => {
        this.createTPerSpeciesChart();
        this.createTPerNeighborChart();
      }, 400);
    });    
  }

  createTPerSpeciesChart(){    
    this.doughnutChartSpecies = new Chart(this.doughnutCanvas1.nativeElement, {
      type: "doughnut",
      data: {
        labels: this.reportsPerSpecies.labels,
        datasets: [
          {
            label: "# de Árboles",
            data: this.reportsPerSpecies.data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
  }

  createTPerNeighborChart(){
    this.doughnutChartNeighbor = new Chart(this.doughnutCanvas2.nativeElement, {
      type: "bar",
      data: {
        labels: this.reportsPerNeighbor.labels,
        datasets: [
          {
            label: "# de Árboles",
            data: this.reportsPerNeighbor.data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
