import { Component } from '@angular/core';
import { Textbook } from '../../../shared/models/textbook';
import { TextbookService } from '../../../services/textbook.service';
import { ActivatedRoute, Router } from '@angular/router';
import {RouterModule} from '@angular/router';
import {NgFor} from '@angular/common';
import { HeaderComponent } from '../../partials/header/header.component';
import { NgIf } from '@angular/common';
import { Book } from '../../../shared/models/Book';
import { CartService } from '../../../services/cart.service';
import { NotfoundComponent } from '../../partials/notfound/notfound.component';
@Component({
  selector: 'app-textbook',
  standalone: true,
  imports: [RouterModule,NgFor,NgIf,HeaderComponent,NotfoundComponent],
  templateUrl: './textbook.component.html',
  styleUrl: './textbook.component.css'
})
export class TextbookComponent extends Book{
  textbook!:Textbook;
  constructor(private textService:TextbookService,private activatedRoute:ActivatedRoute,private router:Router,private cartService:CartService) {
    super();
    activatedRoute.params.subscribe((params) => {
    if(params['id']){
      textService.getTextbooksById(params['id']).subscribe((textbook) => { 
        this.textbook = textbook;
      });
    }
    });
  }
  addToCart(){
    this.cartService.addToCart(this.textbook);
    this.router.navigateByUrl('/cart');
  }
}
