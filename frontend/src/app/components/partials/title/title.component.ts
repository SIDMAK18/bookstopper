import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
@Input() title!: string;
}
