import { Component } from '@angular/core';
import { GalleryHeaderComponent } from '../../components/gallery-header/gallery-header.component';
import { GalleryMainComponent } from '../../components/gallery-main/gallery-main.component';
import { RouterModule } from '@angular/router';
import { QuestionsComponent } from '../../components/questions/questions.component';
import { NavComponent } from '../../components/nav/nav.component';
import { NavService } from '../../services/nav.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [RouterModule,NavComponent,CommonModule ,GalleryHeaderComponent,GalleryMainComponent,QuestionsComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  // constructor(private navService: NavService){
  //     this.navService.setBeckground('contact-background')
  // }
  // navStyleClass = 'custom-nav-style';
  parentStyle = {
    'box-shadow': '0px -8px 52px 0px rgba(245, 245, 245, 0.17)',
    'background': 'rgb(30, 12, 6)',
    'border-radius': '0px 0px 79px 79px',
  }
}
