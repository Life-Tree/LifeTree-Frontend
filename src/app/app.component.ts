import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ArbolesService } from './services/arboles/arboles.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private arbolesService: ArbolesService,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.arbolesService.obtenerArboles().subscribe((data) => {
      // This is the first calling to the server
    }, async (error) => {
      const toast = await this.toastController.create({
        message: 'Verifique su conexión a internet',
        duration: 10000,
        position: 'top',
        color: 'danger'
      });
      toast.present();
    });
  }
}
