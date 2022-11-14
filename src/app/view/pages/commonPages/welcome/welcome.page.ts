import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class WelcomePage{

  constructor(
    private router: Router,
    ) { }

  async redirect(){
    const { value } = await Preferences.get({ key: 'token' });
    if(value && value.length > 0){
      this.router.navigate(['/inicio']);
    }else{
      this.router.navigate(['/login']);
    }
    
  }
}
