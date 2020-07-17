import { Component, OnInit } from '@angular/core';
import { Pedagogia } from 'src/app/interfaces/pedagogia.interface';
import { PedagogiaService } from 'src/app/services/pedagogia/pedagogia-life-tree.service';

@Component({
  selector: 'app-instructivos',
  templateUrl: './instructivos.page.html',
  styleUrls: ['./instructivos.page.scss'],
})
export class InstructivosPage implements OnInit {
  descripcion: string = '';
  constructor(private pedagogiaService: PedagogiaService) {
  }

  ngOnInit() {
    this.pedagogiaService.obtenerPedagogia().subscribe(data => {
      this.descripcion = data[1].descripcion;
    })
  }

}
