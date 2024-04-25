import { Component, Input } from '@angular/core';
import { Order } from '../../../shared/models/order';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'orderitemlist',
  standalone: true,
  imports: [NgFor, CommonModule, RouterLink],
  templateUrl: './orderitemlist.component.html',
  styleUrl: './orderitemlist.component.css'
})
export class OrderitemlistComponent {
  @Input()
  order!:Order;
  

}
