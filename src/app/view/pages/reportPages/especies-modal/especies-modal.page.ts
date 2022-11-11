import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams} from '@ionic/angular';
import { ConservationStatus } from 'src/app/models/constants/constants';
import { Specie } from 'src/app/models/domain/specie';
import { COMMON_SPECIES_GROUP_NAME, ReportService } from 'src/app/services/reports/report.service';

@Component({
  selector: 'app-especies-modal',
  templateUrl: './especies-modal.page.html',
  styleUrls: ['./especies-modal.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class EspeciesModalPage implements OnInit {
   species: Specie[] = [];
   familiaE: string;
   descripciónE: string;
   speciesByFamily: Map<string, Specie[]>;
   speciesByFamilyToShow: Map<string, Specie[]>;
   specie: Specie;
   commonSpeciesName = COMMON_SPECIES_GROUP_NAME;
   query: string = "";
   defaultSpecie:Specie;
   conservationStatusKeyValue = ConservationStatus;
  constructor(public modalController: ModalController, public navParamsSpecies : NavParams, public reportService: ReportService) { }


  ngOnInit() {
    this.species = this.navParamsSpecies.get('species');
    this.speciesByFamily = this.navParamsSpecies.get('speciesByFamily');
    this.speciesByFamilyToShow = this.speciesByFamily;
    this.defaultSpecie = this.navParamsSpecies.get('defaultSpecie');
  }

  async salirSinInfo() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss(null);
  }

  salirConinfo(specieinfo: Specie){
    this.modalController.dismiss(specieinfo);
  }

  salirDefault(){
    this.modalController.dismiss(this.defaultSpecie);
  }

  filter(e: any){
    let query = e.target.value;
    if(query != ""){
      let speciesFiltered = this.reportService.filterSpeciesByQuery(this.species, query);
      this.speciesByFamilyToShow = this.reportService.orderSpeciesByFamily(speciesFiltered,false);
    }else{
      this.speciesByFamilyToShow = this.speciesByFamily;
    }
  }

  unsorted(a: KeyValue<string,Specie[]>, b: KeyValue<string,Specie[]>):number{
      return 0;
  }



}
