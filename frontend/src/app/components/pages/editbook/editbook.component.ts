import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditorsBook } from '../../../shared/models/edibook';
import { EditorService } from '../../../services/editor.service';
import { RouterModule } from '@angular/router';
import {NgFor} from '@angular/common';
import { HeaderComponent } from '../../partials/header/header.component';
import { NgIf } from '@angular/common';
import { Book } from '../../../shared/models/Book';
import { CartService } from '../../../services/cart.service';
import { NotfoundComponent } from '../../partials/notfound/notfound.component';
@Component({
  selector: 'app-editbook',
  standalone: true,
  imports: [RouterModule,NgFor,NgIf,HeaderComponent,NotfoundComponent],
  templateUrl: './editbook.component.html',
  styleUrl: './editbook.component.css'
})
export class EditbookComponent extends Book{
  editbook!:EditorsBook;
  constructor(private editService:EditorService,private activatedRoute:ActivatedRoute,private cartService:CartService,private router:Router) {
    super();
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        editService.getEditbooksById(params['id']).subscribe((editbook) => {
          this.editbook = editbook;
        });
      }
    });
  }
  addToCart(){
    this.cartService.addToCart(this.editbook);
    this.router.navigateByUrl('/cart');
  }
}
