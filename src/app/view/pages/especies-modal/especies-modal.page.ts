import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams} from '@ionic/angular';
import { Especies } from 'src/app/models/especie';
import {ArbolesService, COMMON_SPECIES_GROUP_NAME} from '../../../services/arboles/arboles.service'

@Component({
  selector: 'app-especies-modal',
  templateUrl: './especies-modal.page.html',
  styleUrls: ['./especies-modal.page.scss'],
})
export class EspeciesModalPage implements OnInit {
   species: Especies[] = [];
   familiaE: string;
   descripciónE: string;
   speciesByFamily: Map<string, Especies[]>;
   speciesByFamilyToShow: Map<string, Especies[]>;
   specie: Especies;
   commonSpeciesName = COMMON_SPECIES_GROUP_NAME;
   query: string = "";
   defaultSpecie:Especies;
  constructor(public modalController: ModalController, public navParamsSpecies : NavParams, public arbolesService: ArbolesService) { }


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

  salirConinfo(specieinfo: Especies){
    this.modalController.dismiss(specieinfo);
  }

  salirDefault(){
    this.modalController.dismiss(this.defaultSpecie);
  }

  filter(e: any){
    let query = e.target.value;
    if(query != ""){
      let speciesFiltered = this.arbolesService.filterSpeciesByQuery(this.species, query);
      this.speciesByFamilyToShow = this.arbolesService.orderSpeciesByFamily(speciesFiltered,false);
    }else{
      this.speciesByFamilyToShow = this.speciesByFamily;
    }
  }

  unsorted(a: KeyValue<string,Especies[]>, b: KeyValue<string,Especies[]>):number{
      return 0;
  }



}
