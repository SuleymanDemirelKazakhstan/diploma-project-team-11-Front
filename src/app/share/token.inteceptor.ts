import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { PersistenseService } from './services/persistense.service';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public persistenseService: PersistenseService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistenseService.get('token');

    if (request.url.includes('login')) {
      return next.handle(request);
    }

    if (request.headers.has(InterceptorSkipHeader)) {
      request = request.clone({
        // setHeaders: { Authorization: `Bearer ${token}` }
      });
      return next.handle(request);
    }

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(request);
  }

  private handleAuthError(error: HttpErrorResponse): Observable<any> {
    return of(error);
  }
}
