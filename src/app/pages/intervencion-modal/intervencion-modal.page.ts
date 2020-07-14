import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Intervencion } from 'src/app/interfaces/intervencion.interface';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-intervencion-modal',
  templateUrl: './intervencion-modal.page.html',
  styleUrls: ['./intervencion-modal.page.scss'],
})
export class IntervencionModalPage implements OnInit {

  private user: User;
  @Input() intervencion: Intervencion; 
  constructor(private modalCtrl: ModalController, private userService: UsersService) {
    this.user = this.userService.getUser();
  }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
