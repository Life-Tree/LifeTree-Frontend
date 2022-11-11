import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Material } from 'src/app/models/domain/material';
import { Segment } from 'src/app/models/domain/segment';
import { PedagogicService } from 'src/app/services/pedagogic/pedagogic.service';

@Component({
  selector: 'app-list-material',
  templateUrl: './listMaterial.page.html',
  styleUrls: ['./listMaterial.page.scss'],
})
export class ListMaterialPage {


  materialList: Material[];
  autorize:Boolean = true;

  constructor(
    private materialPedagogicService: PedagogicService,
    private router: Router
  ) { }

  ionViewWillEnter(){
    this.materialPedagogicService.getMaterials().subscribe(data =>{
      console.log("Esta es la data", data);
      this.materialList = data;
      console.log("Esta es la materialList", this.materialList);
    })
  }

  /*ngOnInit() {
    this.materialPedagogicService.getMaterials().subscribe(data =>{
      console.log("Esta es la data", data);
      this.materialList = data;
      console.log("Esta es la materialList", this.materialList);
    })
  }*/

  imgSelector(segmentList: Segment[]){
    for (const segment of segmentList) {
      if(segment.file.url != ""){
        return segment.file.url;
      }
    }
  }

  textSelector(segmentList: Segment[]){
    for (const segment of segmentList) {
      if(segment.text != ""){
        return segment.text;
      }
    }
  }

  redirect(id: string){
    this.router.navigate(['/managementMaterial', id]);
  }
  redirectView(id: string){
    this.router.navigate(['/materialDetail', id]);
  }

}
