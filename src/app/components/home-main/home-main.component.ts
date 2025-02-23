import { Component } from '@angular/core';
import { AboutHeaderComponent } from '../about-header/about-header.component';
import { GalleryHeaderComponent } from '../gallery-header/gallery-header.component';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [AboutHeaderComponent,GalleryHeaderComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.css'
})
export class HomeMainComponent {

}
