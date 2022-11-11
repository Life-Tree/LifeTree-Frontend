import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Material } from 'src/app/models/domain/material';
import { Segment } from 'src/app/models/domain/segment';
import { PedagogicService } from 'src/app/services/pedagogic/pedagogic.service';

@Component({
  selector: 'app-management-material',
  templateUrl: './managementMaterial.page.html',
  styleUrls: ['./managementMaterial.page.scss'],
})
export class ManagementMaterialPage implements OnInit {

  material: Material;
  id: string;


  constructor(
    private materialPedagogicService: PedagogicService,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.material = {segments: [new Segment(0)], title: ""};
   }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      if(params['id']!="new"){
        this.id = params['id'];
        this.materialPedagogicService.getMaterialById(this.id).subscribe(data =>{
          console.log("Material consultado", data);
          this.material = data;
        })
      }
    })
    console.log("Lista", this.material.segments);
  }

  addSegment(){
    this.material.segments.push(new Segment(this.material.segments.length));
    console.log("Lista", this.material.segments);
  }
  
  deleteSegment(){
    this.material.segments.length = this.material.segments.length-1;
    console.log("Lista", this.material.segments);
  }

  onSetImg(base64: string, segment: Segment ){
      segment.file.base64 =base64;
      segment.file.type=1;
  }

  deletImg(segment){
    segment.file.base64="";
    segment.file.url="";
    segment.file.type=0;
  }

  selectSubmit(){
    if(this.id != ""){
      this.submitEditMaterial();
    }else{
      this.submitMaterial();
    }
  }

  async submitEditMaterial(){
    let valid = false;
    console.log(this.material);

    for (const segment of this.material.segments) {
      if(segment.text != "" || segment.file.base64 != "" || segment.file.url != ""){
        valid = true;
        console.log("control",valid);
        break;
      }
    }

    if(valid && this.material.title!=""){
      console.log("Listo para enviar");
      const loading = await this.loadingCtrl.create({
        cssClass: 'custom-loading',
        showBackdrop:true,
        mode: "ios",
        spinner:"lines"
      });
      loading.present();  
      this.materialPedagogicService.putEditMaterial(this.material).subscribe(data=>{
        console.log("Data despues de guardar", data);
        loading.dismiss();
        this.material = {segments: [new Segment(0)]}
        this.presentToast('Material pedagogico actualizado con exito', 'success');
        this.router.navigate(['/listMaterial']);
      });
    }else{
      console.log("No listo para enviar");
      this.presentToast('Ingrese alguna imagen o texto por sección', 'danger');

    }
  }

  
  async submitMaterial(){
    let valid = false;
    console.log(this.material);

    for (const segment of this.material.segments) {
      if(segment.text != "" || segment.file.base64 != "" || segment.file.url != ""){
        valid = true;
        console.log("control",valid);
        break;
      }
    }

    if(valid && this.material.title!=""){
      console.log("Listo para enviar");
      const loading = await this.loadingCtrl.create({
        message: 'Loading...',
        cssClass: 'custom-loading',
      });
      loading.present();  
      this.materialPedagogicService.postMaterials(this.material).subscribe(data=>{
        console.log("Data despues de guardar", data);
        loading.dismiss();
        this.material = {segments: [new Segment(0)]}
        this.presentToast('Material pedagogico guardado con exito', 'success');
        this.router.navigate(['/listMaterial']);
      });
    }else{
      console.log("No listo para enviar");
      this.presentToast('Ingrese alguna imagen o texto por sección', 'danger');

    }
    
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

}
