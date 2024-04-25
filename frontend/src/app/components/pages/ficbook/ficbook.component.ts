import { Component } from '@angular/core';
import { FictionBook } from '../../../shared/models/ficbook';
import { FicbookService } from '../../../services/ficbook.service';
import { ActivatedRoute, Router } from '@angular/router';
import {RouterModule} from '@angular/router';
import {NgFor} from '@angular/common';
import { HeaderComponent } from '../../partials/header/header.component';
import { NgIf } from '@angular/common';
import { Book } from '../../../shared/models/Book';
import { CartService } from '../../../services/cart.service';
import { NotfoundComponent } from '../../partials/notfound/notfound.component';
@Component({
  selector: 'app-ficbook',
  standalone: true,
  imports: [RouterModule,NgFor,NgIf,HeaderComponent,NotfoundComponent],
  templateUrl: './ficbook.component.html',
  styleUrl: './ficbook.component.css'
})
export class FicbookComponent extends Book{
  ficbook!:FictionBook;
  constructor(private ficService:FicbookService,private activatedRoute:ActivatedRoute,private router:Router,private cartService:CartService) {
    super();
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        ficService.getFicbooksById(params['id']).subscribe((ficbook) => {
          this.ficbook = ficbook;
        });
      }
    });
  }
  addToCart(){
    this.cartService.addToCart(this.ficbook);
    this.router.navigateByUrl('/cart');
  }
}
