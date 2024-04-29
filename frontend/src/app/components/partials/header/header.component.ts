import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';
import {ViewChild, ElementRef} from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf,RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userLoggedIn=false;
  cartquantity=0;
  user!:User;
  searchTerm='';
  @ViewChild('searchbox') searchbox!:ElementRef;
  @ViewChild('closebtn') closebtn!:ElementRef;
  @ViewChild('searchbtn') searchbtn!:ElementRef;
  constructor(cartService:CartService,private toastr:ToastrService,private userService:UserService,private activatedRoute:ActivatedRoute,private router:Router) { 
    cartService.getCartObservable().subscribe((newCart)=>{
      this.cartquantity=newCart.totalcount;
    })
      userService.userObservable.subscribe((newUser) => {
        this.user = newUser;
      })

    activatedRoute.params.subscribe((params) => {
        if(params['searchTerm']){
          this.searchTerm=params['searchTerm'];
        }
    });
    this.userService.userLoggedIn.subscribe((loggedIn) => {
      this.userLoggedIn = loggedIn;
    });
    }
    
    search(term:string):void{
      if(term){
        this.router.navigateByUrl(`/search/${term}`);
      }
    }
    
    logout(){
      this.userService.logout();
    }
    
    get isAuth(){
      return this.user.token;
    }
    
    show(){
    this.searchbox.nativeElement.classList.add('active');
    this.closebtn.nativeElement.classList.add('active');
    this.searchbtn.nativeElement.classList.add('active');
    console.log("Working");
  }
  close(){
    this.searchbox.nativeElement.classList.remove('active');
    this.closebtn.nativeElement.classList.remove('active');
    this.searchbtn.nativeElement.classList.remove('active');
    console.log("closing");
  }
}
