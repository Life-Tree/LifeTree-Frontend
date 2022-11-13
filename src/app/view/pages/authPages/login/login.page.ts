import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Preferences } from '@capacitor/preferences';

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
    private userService: UsersService) {

  }

  public async validation(): Promise<void> {
    if(this.username != "" && this.password != ""){
      this.userService.login({username: this.username, password: this.password}).subscribe(async data=>{
        await Preferences.set({key: 'token', value: data.access_token});
        this.router.navigate(['/inicio'])
      }, err => {
        console.log(err);
      });
    }else{
      this.toastService.presentToast("Debes ingresar todos los datos", 'danger');
    }
  }
}
