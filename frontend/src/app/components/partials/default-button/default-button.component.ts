import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'default-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './default-button.component.html',
  styleUrl: './default-button.component.css'
})
export class DefaultButtonComponent {
@Input()
type:'submit'|'button'='submit';
@Input()
text:string='Submit';
@Input()
bgColor='#ff8e3c';
@Input()
color='#0d0d0d';
@Input()
fontSizeRem=1.3;
@Input()
widthRem=12;
@Output()
onClick=new EventEmitter();
}
