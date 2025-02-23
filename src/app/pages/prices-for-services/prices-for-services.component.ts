import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { GalleryHeaderComponent } from '../../components/gallery-header/gallery-header.component';
import { QuestionsComponent } from '../../components/questions/questions.component';
import { NavService } from '../../services/nav.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prices-for-services',
  standalone: true,
  imports: [NavComponent,CommonModule ,GalleryHeaderComponent,QuestionsComponent],
  templateUrl: './prices-for-services.component.html',
  styleUrl: './prices-for-services.component.css'
})
export class PricesForServicesComponent {
  // constructor(private navService: NavService){
  //     this.navService.setBeckground('price-for-services-background')
  // }
  // navStyleClass = 'custom-nav-style';
  parentStyle = {
    'box-shadow': '0px -8px 52px 0px rgba(245, 245, 245, 0.17)',
    'background': 'rgb(30, 12, 6)',
    'border-radius': '0px 0px 79px 79px',
  }
}
