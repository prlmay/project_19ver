import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule,RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Input() customStyle: { [key: string]: string } = {};
  @Input() zInd: { [key: string]: string } = {};
}
