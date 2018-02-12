import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';

import { products } from '../../assets/mock/mock-product-data';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // wrap in delayed observable to simulate server api call
        return Observable.of(null).mergeMap(() => {

            // get product by id
            if (request.url.startsWith('/api/product') && request.method === 'GET') {
              const productId = request.params.get('id');
              return Observable.of(
                new HttpResponse(
                  { status: 200,
                    body: products.find(p => p.id === +productId)
                  }));
            }

            // pass through any requests not handled above
            return next.handle(request);

        })

        // call materialize and dematerialize to ensure delay even if an error is thrown
        .materialize()
        .delay(1)
        .dematerialize();
    }
}

export let FakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
