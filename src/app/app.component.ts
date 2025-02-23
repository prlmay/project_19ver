import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { CommonModule } from '@angular/common';
import { NavService } from './services/nav.service';
import { Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  // navBackgroundClass: string = '';
  // constructor(private navService: NavService){
  //   // this.navBackgroundClass = '';
  //   ngOnInit():void{
      
  //   }
  //   this.navService.background$.subscribe((background)=>{
  //     this.navBackgroundClass = background
  //   }, (e){
  //     console.log('error'); 
  //   })
  // }
}
