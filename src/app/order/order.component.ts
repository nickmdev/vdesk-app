import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routeSlideTrigger } from './order-route-animations';
import { Order } from '../_models/order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  animations: [routeSlideTrigger]
})
export class OrderComponent implements OnInit {
  order: Order;
  orderSteps: any[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.order = this.orderService.order;
    this.initOrderSteps();
  }

  getAnimationData(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData['animation'];
    if (!routeData) { return 'customize'; }
    return routeData['page'];
  }

  private initOrderSteps() {
    this.orderSteps = [
      {
        friendlyName: 'Customize',
        route: 'customize'
      },
      {
        friendlyName: 'Shipping and payment',
        route: 'payment'
      },
      {
        friendlyName: 'Review your order',
        route: 'review'
      },
      {
        friendlyName: 'Confirmation',
        route: 'confirmation'
      }
    ];
  }
}
