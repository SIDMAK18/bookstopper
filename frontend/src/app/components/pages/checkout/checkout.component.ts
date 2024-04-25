import { Component } from '@angular/core';
import { Order } from '../../../shared/models/order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { TitleComponent } from "../../partials/title/title.component";
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from "../../partials/text-input/text-input.component";
import { OrderitemlistComponent } from "../../partials/orderitemlist/orderitemlist.component";
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-checkout',
    standalone: true,
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.css',
    imports: [TitleComponent, ReactiveFormsModule, TextInputComponent, OrderitemlistComponent]
})
export class CheckoutComponent {
  order:Order=new Order();
  checkoutForm!:FormGroup;
  constructor(cartService:CartService,private formBuilder:FormBuilder,private userService:UserService,private toastrService:ToastrService,private orderService:OrderService,private router:Router) {
    const cart=cartService.getCart();
    this.order.items=cart.items;
    this.order.totalPrice=cart.totalprice;
   }
   ngOnInit():void{
    let {name,address}=this.userService.currentUser;
    this.checkoutForm=this.formBuilder.group({
      name:[name,Validators.required],
      address:[address,Validators.required]
    });
   }
   get fc(){
    return this.checkoutForm.controls;
   }

   createOrder(){
    if(this.checkoutForm.invalid){
      this.toastrService.warning('Please fill in the form','Invalid Inputs');
      return;
    }
    this.order.name = this.fc['name'].value;
    this.order.address = this.fc['address'].value;
    console.log(this.order);
    this.orderService.create(this.order).subscribe({
      next:() => {
        this.router.navigateByUrl('/payment');
      },
      error:(errorResponse) => {
        this.toastrService.error(errorResponse.error, 'Cart');
      }
    })
  }
}

