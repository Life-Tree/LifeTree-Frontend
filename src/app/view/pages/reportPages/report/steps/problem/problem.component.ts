import { Component, Input, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ToastController } from '@ionic/angular';
import { Frame, ImageSet } from 'src/app/models/imageset';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { CameraService } from 'src/app/services/camera/camera.service';
import { ReportService } from 'src/app/services/reports/report.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit{

  @Input() stepper: MatStepper;
  treeParts = [false,false,false,false,false,false];
  knowCondition = 0;
  conditions: any[] = [];
  conditionSelected: any;


  constructor(
    private reportService: ReportService,
    public toastController: ToastController) {
  }
  async ngOnInit(): Promise<void> {
    this.conditions = await this.reportService.getConditions().toPromise();
  }

  changeCheckbox(value: number){
    this.treeParts[value] = !this.treeParts[value]
  }
  async onFinish() {
    if(this.knowCondition === 1) {
      if(this.conditionSelected) {
        this.reportService.fillSignSymptomsToShow(this.conditionSelected.signSymptoms);
        this.stepper.steps.get(0).completed = true;
        this.stepper.steps.get(1).completed = true;
        this.stepper.next();
      } else {
        this.presentToast('Debes seleccionar una afección de la lista', 'danger'); 
      }
    }else if(this.knowCondition === 2) {
      const parts = this.extractAffectedTreeParts();
      if(parts && parts.length > 0) {
        const signsymptoms = await this.reportService.getSignSymptomsByTreeParts(parts).toPromise();
        this.reportService.fillSignSymptomsToShow(signsymptoms);
        this.stepper.steps.get(0).completed = true;
        this.stepper.steps.get(1).completed = true;
        this.stepper.next();
      }else {
        this.presentToast('Debes marcar las partes del árbol que ves afectadas', 'danger'); 
      }
    }
  }

  onPrevious() {
    this.stepper.previous();
  }

  async presentToast(mensaje: string, color= 'success') {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'top',
      color: color
    });
    toast.present();
  }

  onChangeAnswer(event: any) {
    this.knowCondition = event.value;
  }

  extractAffectedTreeParts(): number[] {
    const parts:number[] = [] = [];
    this.treeParts.forEach((value, index) => {
      if(value) parts.push(index+1);
    });
    return parts;
  }

  extractConditionValue(condition: any): string{
    if(!condition) return '';
    if(condition.commonName !== '') {
      return condition.commonName;
    }
    if(condition.scientificName) {
      return condition.scientificName;
    }
    if(condition.family !== '' && condition.causativeAgent !== ''){
      return condition.family + ', causa: '+condition.causativeAgent;
    }
    return '';
  }

  onChangeConditionSelection(event: any) {
    this.conditionSelected = event.detail.value;
  }

}
