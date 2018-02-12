import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { OrderComponent } from './order.component';
import { PaymentComponent } from './payment/payment.component';
import { CustomizeComponent } from './customize/customize.component';
import { ReviewComponent } from './review/review.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SummaryComponent } from './summary/summary.component';

import { OrderService } from './order.service';
import { FakeBackendProvider } from '../_helpers/index';

import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [
    OrderComponent,
    CustomizeComponent,
    PaymentComponent,
    ReviewComponent,
    ConfirmationComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    OrderRoutingModule
  ],
  providers: [OrderService, FakeBackendProvider]
})
export class OrderModule {}
