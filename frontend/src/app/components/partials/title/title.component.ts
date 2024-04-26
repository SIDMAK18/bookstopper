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
// @Input() margin?='1rem 0 1rem 5rem';
@Input() fontSize?='2rem';
}
