import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { SharedService } from './shared.service';
import { environment } from '../../environments/environment';

@Injectable()
export class MindsparkInterceptor implements HttpInterceptor {
    jwt: any;

    constructor(private sharedService: SharedService) {
        this.sharedService.getJWT().subscribe(
            result => {
                if (result) {
                    this.jwt = result.jwt;
                    return this.jwt;
                }
            }

        );
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let changedReq = req.clone();
        if (this.jwt) {
            changedReq = req.clone({ headers: req.headers.set('jwt', this.jwt) });
        }
        return next.handle(changedReq).do(
            event => {
                if (event instanceof HttpResponse) {
                    if (!environment.production) { console.log('interceptor response', event); }
                    this.sharedService.setJWT(event);
                    this.sharedService.changeLanguage(event.body);
                }
            });
    }
}

