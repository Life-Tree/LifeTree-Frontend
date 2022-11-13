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

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

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
            // const token = this.storageService.token;
            // if (!token) {
            //   return next.handle(request)
            //     .pipe(catchError(this.handleError));
            // }
            // const headers = request.clone({
            //   headers: request.headers.set('x-access-token', `${token}`)
            // });
            // return next.handle(headers)
            //   .pipe(catchError(this.handleError));
    }

  handleError(error: HttpErrorResponse) {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.log(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error.message}`);
    console.log(error);
    this.router.navigate(['/login']);

    // return an observable with a user-facing error message
    return throwError(error);
  }
}
