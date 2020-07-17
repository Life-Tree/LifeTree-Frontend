import { Component, OnInit } from '@angular/core';
import { PedagogiaService } from 'src/app/services/pedagogia/pedagogia-life-tree.service';

@Component({
  selector: 'app-intructivo-intervenciones',
  templateUrl: './intructivo-intervenciones.page.html',
  styleUrls: ['./intructivo-intervenciones.page.scss'],
})
export class IntructivoIntervencionesPage implements OnInit {
  descripcion: string = '';
  constructor(private pedagogiaService: PedagogiaService) { }

  ngOnInit() {
    this.pedagogiaService.obtenerPedagogia().subscribe(data => {
      this.descripcion = data[0].descripcion;
    })
  }

}
