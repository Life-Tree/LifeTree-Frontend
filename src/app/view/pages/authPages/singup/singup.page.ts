import { Component, OnInit } from '@angular/core';
import { type } from 'os';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {

  name: string = "";
  lastName: string = "";
  email: string ="";
  password: string = ""; 
  number: number;
  type: any = ""; 
  address: string ="";
  passwordConfirm: string = "";

  constructor() { }

  ngOnInit() {
  }


  register(){
    console.log("Registrado con exito", this.type );
  }
}
