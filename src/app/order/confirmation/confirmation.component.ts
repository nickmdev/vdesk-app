import { Component, OnInit } from '@angular/core';

import { OrderService } from '../order.service';
import { Order } from '../../_models/order.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  order: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.order = this.orderService.order;
  }

}
