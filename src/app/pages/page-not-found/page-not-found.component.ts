import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [NavComponent,RouterLink,CommonModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  zInd = {
    'z-index': '3',
  }
}
