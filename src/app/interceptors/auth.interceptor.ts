import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UsersService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return from(Preferences.get({ key: 'token' }))
            .pipe(switchMap(token => {
                if (!token.value) {
                    return next.handle(request)
                        .pipe(catchError(this.handleError));
                }
                const headers = request.clone({
                    headers: request.headers.set('Authorization', 'Bearer'+' '+token.value)
                });
                return next.handle(headers)
                    .pipe(catchError(this.handleError));
            }));
    }

  handleError(error: HttpErrorResponse) {
    if (!error.url.endsWith('/auth/login') && error.status === 401) {
      console.log(error);
    }
    return throwError(error);
  }
}
