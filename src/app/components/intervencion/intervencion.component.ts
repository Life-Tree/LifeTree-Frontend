import { Component, Input, OnInit } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol.interface';
import { ArbolReportar } from 'src/app/interfaces/arbolReportar.interface';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { CameraService } from 'src/app/services/camera/camera.service';

@Component({
  selector: 'app-intervencion',
  templateUrl: './intervencion.component.html',
  styleUrls: ['./intervencion.component.scss'],
})
export class IntervencionComponent implements OnInit {
  @Input() arbol: Arbol
  descripcion: string = "";
  imgBase64: string = "";
  constructor(private cameraService: CameraService,
    private arbolesService: ArbolesService) { }

  ngOnInit() { }

  async getfotoArbol() {
    this.imgBase64 = await this.cameraService.takePicture()
  }

  agregarIntervencion() {
    //Metodo Post
    if (this.descripcion !== "" && this.imgBase64 !== "") {
      let intervenciones: any = []
      for (let i = 0; i < this.arbol.intervenciones.length; i++) {
        intervenciones.push({
          imagenData: this.arbol.intervenciones[i].imagenURL,
          descripcion: this.arbol.intervenciones[i].descripcion,
          estado: this.arbol.intervenciones[i].estado
        })
      }
      intervenciones.push({
        imagenData: this.imgBase64,
        descripcion: this.descripcion,
        estado: "PENDIENTE"
      })
      let arbol: ArbolReportar = {
        ubicacion: this.arbol.ubicacion,
        descripcion: this.arbol.descripcion,
        intervenciones,
        imagenData: this.arbol.imagenURL,
        estado: "INTERVENIDO"
      }
      this.arbolesService.addIntervencion(arbol, this.arbol._id).subscribe(data => {
        console.log(data)
      }, error => console.log(error))
      console.log(arbol)
      this.descripcion = "";
      this.imgBase64 = "";
    } else {
      console.log('Campos vacios')
    }
  }

}
