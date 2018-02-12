import { Component, OnInit } from '@angular/core';

import { OrderService } from '../order.service';
import { Order } from '../../_models/order.model';

@Component({
  selector: 'order-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  order: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.order = this.orderService.order;
  }

}
