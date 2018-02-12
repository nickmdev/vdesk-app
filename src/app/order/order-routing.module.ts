import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OrderComponent} from './order.component';
import {CustomizeComponent} from './customize/customize.component';
import {PaymentComponent} from './payment/payment.component';
import {ReviewComponent} from './review/review.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';

const orderRoutes: Routes = [
  { path: 'order', component: OrderComponent, children: [
      { path: '', redirectTo: 'customize', pathMatch: 'full'},
      { path: 'customize', component: CustomizeComponent, data: {animation: {page: 'customize'}}  },
      { path: 'payment', component: PaymentComponent, data: {animation: {page: 'payment'}}  },
      { path: 'review', component: ReviewComponent, data: {animation: {page: 'review'}}  },
      { path: 'confirmation', component: ConfirmationComponent, data: {animation: {page: 'confirm'}}  }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(orderRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class OrderRoutingModule {}
