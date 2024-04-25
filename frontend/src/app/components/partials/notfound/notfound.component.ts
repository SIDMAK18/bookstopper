import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
@Input()
visible =false;
@Input()
notFoundMessage="Nothing found!";
@Input()
resetLinkText="Reset";
@Input()
resetLinkRoute="/";

}
