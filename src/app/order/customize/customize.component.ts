import { Component, OnInit } from '@angular/core';

import { OrderService } from '../order.service';
import { Product } from '../../_models/product.model';
import { Order } from '../../_models/order.model';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent implements OnInit {
  product: Product;
  order: Order;

  private readonly productId = 1; // in real app would have been passed in for product page

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.order = this.orderService.order;
    this.getProductCustomizationOptions();
  }

  getProductCustomizationOptions() {
    this.orderService.getProductById(this.productId).subscribe(
      (product) => this.product = product,
      (error) => console.log(error)
    );
  }

  onSelectSize(sizeOption: any) {
    this.order.size = sizeOption.size;
    this.order.total = sizeOption.cost;
    this.orderService.checkOrder();
  }

  onSelectColor(color: string) {
    this.order.color = color;
  }
}
