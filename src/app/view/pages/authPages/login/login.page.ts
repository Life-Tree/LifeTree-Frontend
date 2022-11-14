import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Preferences } from '@capacitor/preferences';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

// eslint-disable-next-line @angular-eslint/component-class-suffix
export class LoginPage {
  username: string = "";
  password: string = "";
  result: boolean;

  constructor(
    private router: Router,
    private toastService: ToastService,
    private userService: UsersService,
    private loadingCtrl: LoadingController,) {

  }

  public async validation(): Promise<void> {
    if(this.username != "" && this.password != ""){
      const loading = await this.loadingCtrl.create({
        cssClass: 'custom-loading',
        showBackdrop:true,
        spinner:"lines"
      });
      this.userService.login({username: this.username, password: this.password}).subscribe( data=>{
        Preferences.set({key: 'token', value: data.access_token}).then(()=> {
          this.router.navigate(['/inicio']);
          loading.dismiss();
        });
      }, err => {
        this.toastService.presentToast(err?.error?.message, 'danger');
        loading.dismiss();
      });
    }else{
      this.toastService.presentToast("Debes ingresar todos los datos", 'danger');
    }
  }
}
