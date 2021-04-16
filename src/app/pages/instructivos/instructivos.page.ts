import { Component, OnInit } from '@angular/core';
import { Pedagogia } from 'src/app/interfaces/pedagogia.interface';
import { PedagogiaService } from 'src/app/services/pedagogia/pedagogia-life-tree.service';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

const options: DocumentViewerOptions = {
  title: 'Como identificar un árbol enfermo'
}

@Component({
  selector: 'app-instructivos',
  templateUrl: './instructivos.page.html',
  styleUrls: ['./instructivos.page.scss'],
})
export class InstructivosPage implements OnInit {
  descripcion: string = '';
  
  constructor(private pedagogiaService: PedagogiaService, private document: DocumentViewer) {
  }  

  ngOnInit() {
    this.pedagogiaService.obtenerPedagogia().subscribe(data => {
      this.descripcion = data[1].descripcion;
    })
  }

  leerPDF(){
    //let baseUrl:string = location.href.replace("/index.html", "");
    this.document.viewDocument(this.getPath('instructivo-Identificar.pdf'), 'application/pdf', options)
    //this.document.viewDocument('../../../assets/instructivo-Identificar.pdf', 'application/pdf', options)
    
  }

  getPath(fileName: string){
    return `file:///android_asset/www/assets/${fileName}`;
  }

}
