import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { OrderService } from '../order.service';
import { Order } from '../../_models/order.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  order: Order;
  paymentForm: FormGroup;
  months: string[];
  years: string[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.order = this.orderService.order;
    this.initForm();
  }

  private initForm() {
    this.paymentForm = new FormGroup({
      'name': new FormControl(this.order.billing.name || null, Validators.required),
      'card-number': new FormControl(this.order.billing.card || null, [Validators.required]),
      'exp-month': new FormControl(this.order.billing.expMonth || null, Validators.required),
      'exp-year': new FormControl(this.order.billing.expYear || null, Validators.required),
      'cvv': new FormControl(this.order.billing.cvv || null, Validators.required),
    });
    this.initDateLists();
  }

  private initDateLists() {
    this.months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    this.years = ['2018', '2019', '2020', '2021', '2022', '2023'];
  }

  onSubmit() {
    this.validateForm();
  }

  private validateForm() {
    this.markFormDirty();
    if (this.paymentForm.invalid) {
      // invalid
    } else {
      // update billing details to order instance
      this.orderService.setBillingDetails(this.paymentForm.controls);
      this.router.navigate(['../review'], { relativeTo: this.route });
    }
  }

  private markFormDirty() {
    Object.keys(this.paymentForm.controls).forEach(key => {
      this.paymentForm.get(key).markAsDirty();
    });
  }
}
