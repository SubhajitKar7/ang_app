import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';




@Injectable()
export class AuthInterceptor implements HttpInterceptor {

constructor(private loginService:LoginService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("###########");
    console.log(this.loginService.isLoggedIn());
    console.log(localStorage.getItem("token"));
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return next.handle(req);
  }
}