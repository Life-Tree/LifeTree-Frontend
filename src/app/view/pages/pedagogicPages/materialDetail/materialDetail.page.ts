import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Material } from 'src/app/models/domain/material';
import { PedagogicService } from 'src/app/services/pedagogic/pedagogic.service';

@Component({
  selector: 'app-material-detail',
  templateUrl: './materialDetail.page.html',
  styleUrls: ['./materialDetail.page.scss'],
})
export class MaterialDetailPage implements OnInit {

  material: Material;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private materialPedagogicService: PedagogicService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      
        this.id = params['id'];
        console.log("Este es el id", this.id);
        this.materialPedagogicService.getMaterialById(this.id).subscribe(data =>{
          console.log("Material consultado", data);
          this.material = data;
        })
    })
  }

}
