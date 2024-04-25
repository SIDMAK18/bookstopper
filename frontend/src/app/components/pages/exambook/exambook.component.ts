import { Component } from '@angular/core';
import { ExamBook } from '../../../shared/models/exambook';
import { ExamService } from '../../../services/exam.service';
import { ActivatedRoute, Router } from '@angular/router';
import {RouterModule} from '@angular/router';
import {NgFor} from '@angular/common';
import { HeaderComponent } from '../../partials/header/header.component';
import { NgIf } from '@angular/common';
import { Book } from '../../../shared/models/Book';
import { CartService } from '../../../services/cart.service';
import { NotfoundComponent } from '../../partials/notfound/notfound.component';
@Component({
  selector: 'app-exambook',
  standalone: true,
  imports: [RouterModule,NgFor,NgIf,HeaderComponent,NotfoundComponent],
  templateUrl: './exambook.component.html',
  styleUrl: './exambook.component.css'
})
export class ExambookComponent extends Book{
  exambook!:ExamBook;
  constructor(private examService:ExamService,private activatedRoute:ActivatedRoute,private router:Router,private cartService:CartService) {
    super();
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        examService.getExambooksById(params['id']).subscribe((exambook) => {
          this.exambook = exambook;
        });
      }
    });
  }
  addToCart(){
    this.cartService.addToCart(this.exambook);
    this.router.navigateByUrl('/cart');
  }
}
