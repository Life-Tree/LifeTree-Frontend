import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { ToastService } from '../services/toast/toast.service';
import { UsersService } from '../services/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UsersService, private router: Router, private toastService: ToastService) { }

    async canActivate() {
        // If the user is not logged in we'll send them back to the home page
        if (!await this.userService.hasToken()) {
            this.toastService.presentToast('Primero debes entrar e iniciar sesión','warning')
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}