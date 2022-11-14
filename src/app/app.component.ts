import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PedagogicService } from './services/pedagogic/pedagogic.service';
import { Preferences } from '@capacitor/preferences';
import { UsersService } from './services/users/users.service';

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
    private materialService: PedagogicService,
    private userService: UsersService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.materialService.getMaterials();
    const { value } = await Preferences.get({ key: 'token' });
    if(value && value.length > 0){
      this.userService.getOwnUser().subscribe((data) => {
        this.userService.fillPermissions(data);
      })
    }
  }
}
