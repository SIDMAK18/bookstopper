import { Component } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';
import { TitleComponent } from '../../partials/title/title.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    imports: [TitleComponent, NgFor, CommonModule, RouterLink, NotfoundComponent]
})
export class CartComponent {
  cart!:Cart;
  constructor(private cartService:CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;    
      });
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.book.id);
  }

  changeQuantity(cartItem:CartItem,quantityinstring:string){
    const quantity = parseInt(quantityinstring);
    this.cartService.changeQuantity(cartItem.book.id,quantity);
  }
}
import { NotfoundComponent } from '../../partials/notfound/notfound.component';
