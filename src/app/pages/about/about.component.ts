import { Component } from '@angular/core';
import { AboutHeaderComponent } from '../../components/about-header/about-header.component';
import { AboutMainComponent } from '../../components/about-main/about-main.component';
import { QuestionsComponent } from '../../components/questions/questions.component';
import { NavComponent } from '../../components/nav/nav.component';
import { NavService } from '../../services/nav.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NavComponent,AboutHeaderComponent,AboutMainComponent, QuestionsComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  // constructor(private navService: NavService){
  //   this.navService.setBeckground('about-background')
  // }
  // navStyleClass = 'custom-nav-style';
  parentStyle = {
    'box-shadow': '0px -8px 52px 0px rgba(245, 245, 245, 0.17)',
    'background': 'rgb(30, 12, 6)',
    'border-radius': '0px 0px 79px 79px',
  }
}
