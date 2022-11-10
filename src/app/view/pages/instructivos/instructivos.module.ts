import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructivosPageRoutingModule } from './instructivos-routing.module';

import { InstructivosPage } from './instructivos.page';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructivosPageRoutingModule,
    ComponentsModule
  ],
  providers: [DocumentViewer],
  declarations: [InstructivosPage]
})
export class InstructivosPageModule {}
