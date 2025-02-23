import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeHeaderComponent } from '../../components/home-header/home-header.component';
import { HomeMainComponent } from '../../components/home-main/home-main.component';
import { QuestionsComponent } from '../../components/questions/questions.component';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, HomeMainComponent, QuestionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // constructor(private navService: NavService){
  //       this.navService.setBeckground('.default-background ')
  // }
}
