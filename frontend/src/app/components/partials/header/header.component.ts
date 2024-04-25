import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf,SearchComponent,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartquantity=0;
  user!:User;
  constructor(cartService:CartService,private toastr:ToastrService,private userService:UserService) { 
    cartService.getCartObservable().subscribe((newCart)=>{
      this.cartquantity=newCart.totalcount;
    })

    
      userService.userObservable.subscribe((newUser) => {
        this.user = newUser;
      })
     }
    
    logout(){
      this.userService.logout();
    }
    
    get isAuth(){
      return this.user.token;
    }
}
