import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from '../_models/product.model';
import { Order } from '../_models/order.model';

@Injectable()
export class OrderService {
  order: Order;

  constructor(private http: HttpClient) {
    this.order = new Order();
  }

  checkOrder() {
    console.log(this.order);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>('/api/product', {
      headers: new HttpHeaders().set('Accept', 'application/json'),
      params: new HttpParams().set('id', id.toString())
    })
      .catch(() => {
        return Observable.throw('Error loading product');
      });
  }

  setBillingDetails(details: any) {
    const billingInstance = this.order.billing;
    billingInstance.name = details.name.value;
    billingInstance.card = details['card-number'].value;
    billingInstance.expMonth = details['exp-month'].value;
    billingInstance.expYear = details['exp-year'].value;
    billingInstance.cvv = details.cvv.value;
  }
}
