import { Component } from '@angular/core';
import { Order } from '../../../shared/models/order';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
import { OrderitemlistComponent } from "../../partials/orderitemlist/orderitemlist.component";
import { TitleComponent } from "../../partials/title/title.component";
import { PayComponent } from "../../partials/pay/pay.component";

@Component({
    selector: 'app-payment',
    standalone: true,
    templateUrl: './payment.component.html',
    styleUrl: './payment.component.css',
    imports: [OrderitemlistComponent, TitleComponent, PayComponent]
})
export class PaymentComponent {
  order:Order=new Order();
  constructor(orderService:OrderService,router:Router){
    orderService.getNewOrderForCurrentUser().subscribe({
      next:(order)=>{
        this.order=order;
      },
      error:()=>{
        router.navigateByUrl('/checkout');
      }
    })
  }
}
