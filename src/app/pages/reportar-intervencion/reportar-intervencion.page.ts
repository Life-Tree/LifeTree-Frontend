import { Component, OnInit, Input } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol.interface';

@Component({
  selector: 'app-reportar-intervencion',
  templateUrl: './reportar-intervencion.page.html',
  styleUrls: ['./reportar-intervencion.page.scss'],
})
export class ReportarIntervencionPage implements OnInit {

  @Input() arbol :Arbol;
  constructor() { }

  ngOnInit() {
  }

}
