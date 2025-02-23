import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { NavService } from '../../services/nav.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [NavComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // constructor(private navService: NavService){
  //   this.navService.setBeckground('contact-background')
  // }
  // navStyleClass: string = 'custom-nav-style';
  parentStyle = {
    'box-shadow': '0px -8px 52px 0px rgba(245, 245, 245, 0.17)',
    'background': 'rgb(30, 12, 6)',
    'border-radius': '0px 0px 79px 79px',
  }
}
