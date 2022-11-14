import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Material } from 'src/app/models/domain/material';
import { Segment } from 'src/app/models/domain/segment';
import { PedagogicService } from 'src/app/services/pedagogic/pedagogic.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-list-material',
  templateUrl: './listMaterial.page.html',
  styleUrls: ['./listMaterial.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ListMaterialPage {


  materialList: Material[];

  constructor(
    private materialPedagogicService: PedagogicService,
    private router: Router,
    public userService: UsersService
  ) { }

  ionViewWillEnter(){
    this.materialPedagogicService.getMaterials().subscribe(data =>{
      console.log("Esta es la data", data);
      this.materialList = data;
      console.log("Esta es la materialList", this.materialList);
    })
  }



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
