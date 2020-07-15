import { Injectable } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol.interface';
import { Ubicacion } from 'src/app/interfaces/ubicacion.interface';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class ArbolesService {

  private BASE_URL: string = "http://lifetreev1.herokuapp.com";
  private selectedArbol: Arbol;
  private arboles: Arbol[] = [];
  constructor(private http: HttpClient) {
    
    this.arboles = [
      { 
      ubicacion: {'latitud': 10.394470,  'longitud': -75.510788, 'barrio': "España"},
      description: "Arbol inclinado",
      imagenURL: "https://ichef.bbci.co.uk/news/ws/720/amz/worldservice/live/assets/images/2014/10/09/141009111834_arbol1_640x360_bbc_nocredit.jpg",
      intervenciones: [],
      estado: "ENFERMO"
      },
      {
        ubicacion: {'latitud': 10.423965, 'longitud': -75.548001, 'barrio': "España"},
        description: "Arbol con huecos en el tronco, este se ve debilitado y pareciera a punto de caerse. ",
        imagenURL: "https://www.guadalajaradiario.es/images/mini/images/2018/12/01/arbol_enfermo-300x400.JPG",
        intervenciones: [
          {descripcion: "Se regó el arbol", imgURL: "https://files.alerta.rcnradio.com/alerta_caribe/public/2020-04/whatsapp_image_2020-04-06_at_11.13.47_0.jpeg", estado: "APROBADA"},
          {descripcion: "Se aplicó químico hidratador", imgURL: "https://ecowasser.mx/uploads/1/1/0/4/110426297/super-absorbent-polymer-for-plants-1_orig.jpg", estado: "APROBADA"},
          {descripcion: "Aplicamos presión en el tronco para enderezar el arbol", imgURL: "https://lh3.googleusercontent.com/proxy/vv4EaPcQlR6kB0BZf7b5H_xvYFaEh_q40zF_YNqJ8WAkXi-QDxGaiNcnePoy31AElxQyL8pjpntGyAQxTAtTw6Wisd41QPZSDmzdKIv3hBnR4gLAWEF4ox3IQjux3Cuv5FqeU-Wm7AGXfSSF-FDiCum166Ine7QjDqM", estado: "PENDIENTE"}
        ],
        estado: "INTERVENIDO"
      },
      { 
        ubicacion: {'latitud': 10.416044, 'longitud': -75.539268, 'barrio': "Armenia"},
        description: "Arbol deshidratado",
        imagenURL: "https://jardinessinfronteras.files.wordpress.com/2018/07/reforzamiento-de-l-arbol.jpg?w=616",
        intervenciones: [],
        estado: "ENFERMO"
      },
      { 
        ubicacion: {'latitud': 10.396203, 'longitud': -75.521840, 'barrio': "Campestre"},
        description: "Arbol sin hojas",
        imagenURL: "https://www.elheraldo.co/sites/default/files/styles/width_860/public/articulo/2017/04/22/arboles1.jpg?itok=zr4qxsq0",
        intervenciones: [
          {descripcion: "Se aplicó fuerza contraria al tronco para buscar enderezarlo", imgURL: "https://jardinessinfronteras.files.wordpress.com/2018/10/leaningtree.jpg?w=616&h=398", estado: "APROBADA"},
          {descripcion: "Se aplicó hidratador a las raices", imgURL: "https://storage.googleapis.com/portalfruticola/2017/10/ghchchfgh-1024x576.jpg", estado: "PENDIENTE"},
          {descripcion: "Se realizó poda para equilibrar el peso con ayuda de la empresa Ambiente LTDA", imgURL: "https://lh3.googleusercontent.com/proxy/15JARPLjHgJwIs1izeQHonv9g2iLWMjbYsqq0AFXlPRN3BPECQnYZjjHo3CxtVwFgMkDUBkYWIUV99TJMs3nrY44-j_xinprKKWiRvQTjktja1vEArr3WR2ddeWusx4Q", estado: "PENDIENTE"}
        ],
        estado: "INTERVENIDO"
      },
      { 
        ubicacion: {'latitud': 10.384545,  'longitud': -75.465249, 'barrio': "Esperanza"},
        description: "Arbol a punto de caerse",
        imagenURL: "https://sevillasemueve.org/wp-content/uploads/2013/04/IMG_1763.jpg",
        intervenciones: [
          {descripcion: "La comunidad regó el arbol", imgURL: "https://previews.123rf.com/images/photozi/photozi1707/photozi170700014/81915344-riego-de-pl%C3%A1ntulas-de-%C3%A1rboles-frutales-despu%C3%A9s-de-plantar-en-el-suelo-jardiner%C3%ADa-gu%C3%ADa-paso-a-paso.jpg", estado: "APROBADA"},
          {descripcion: "Se realizó injección de ajo para salvar el arbol", imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKTdm-uRCYytiLx7w5Qv5gfP-QsDQ_OEB-xA&usqp=CAU", estado: "APROBADA"},
          {descripcion: "Aplicamos químico al tronco para curar las grietas", imgURL: "https://jardinessinfronteras.files.wordpress.com/2018/07/endoterapia-arboles.jpg?w=616&h=411", estado: "PENDIENTE"}
        ],
        estado: "INTERVENIDO"
      }
    
    ];
    this.selectedArbol = this.arboles[0];
  }

  public getArboles(): Arbol[]{
    return this.arboles;
  }

  public crearArbol(descripcion: string, barrio:string, lat:number, lon:number, imgBase64:string): string{
    return; //Metodo post
  }

  public addIntervencion(): string{
    return; //Metodo put
  }

  public deleteArbol(): string{
    return; //Metodo Delee
  }

  public cambiarEstadoIntervencion(): string{
    return; //Metodo Put
  }

  getA(): Observable<Arbol[]>{
    return this.http.get<Arbol[]>(`${this.BASE_URL}/arboles`);
  }

}
