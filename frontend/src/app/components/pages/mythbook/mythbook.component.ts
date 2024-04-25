import { Component } from '@angular/core';
import { MythologicalBook } from '../../../shared/models/mytholobook';
import { MythologicalService } from '../../../services/mythological.service';
import { ActivatedRoute, Router } from '@angular/router';
import {RouterModule} from '@angular/router';
import {NgFor} from '@angular/common';
import { HeaderComponent } from '../../partials/header/header.component';
import { NgIf } from '@angular/common';
import { Book } from '../../../shared/models/Book';
import { CartService } from '../../../services/cart.service';
import { NotfoundComponent } from '../../partials/notfound/notfound.component';
@Component({
  selector: 'app-mythbook',
  standalone: true,
  imports: [RouterModule,NgFor,NgIf,HeaderComponent,NotfoundComponent],
  templateUrl: './mythbook.component.html',
  styleUrl: './mythbook.component.css'
})
export class MythbookComponent extends Book{
  mythbook!:MythologicalBook;
  constructor(private mythService:MythologicalService,private activatedRoute:ActivatedRoute,private router:Router,private cartService:CartService) {
    super();
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
          mythService.getMythbooksById(params['id']).subscribe((mythbook) => {
          this.mythbook = mythbook;
        });
      }
    });
  }
  addToCart(){
    this.cartService.addToCart(this.mythbook);
    this.router.navigateByUrl('/cart');
  }
}
