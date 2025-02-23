import { Component } from '@angular/core';
import { GalleryHeaderComponent } from '../gallery-header/gallery-header.component';

@Component({
  selector: 'app-about-main',
  standalone: true,
  imports: [GalleryHeaderComponent],
  templateUrl: './about-main.component.html',
  styleUrl: './about-main.component.css'
})
export class AboutMainComponent {

}
