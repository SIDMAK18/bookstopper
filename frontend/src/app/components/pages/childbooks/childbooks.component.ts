import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChildrenBook } from '../../../shared/models/childbook';
import { ChildrenService } from '../../../services/children.service';
import {RouterModule} from '@angular/router';
import {NgFor} from '@angular/common';
import { HeaderComponent } from '../../partials/header/header.component';
import { NgIf } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { Book } from '../../../shared/models/Book';
import { NotfoundComponent } from '../../partials/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-childbooks',
  standalone: true,
  imports: [RouterModule,NgFor,NgIf,HeaderComponent,NotfoundComponent,HttpClientModule],
  templateUrl: './childbooks.component.html',
  styleUrl: './childbooks.component.css'
})
export class ChildbooksComponent extends Book{
  childbook!:ChildrenBook;
  constructor(childService:ChildrenService,activatedRoute:ActivatedRoute,private cartService:CartService,private router:Router) {
    super();
      activatedRoute.params.subscribe((params) => {
        if(params['id']){
          childService.getChildbooksById(params['id']).subscribe((childbook) => {
            this.childbook = childbook;
          });
        }
        });
      }
      addToCart(){
        this.cartService.addToCart(this.childbook);
        this.router.navigateByUrl('/cart');
      }
  }


