import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

    private backgroundSubject = new BehaviorSubject<string>('default-background')
    background$ = this.backgroundSubject.asObservable()
    setBeckground(background: string) {
      this.backgroundSubject.next(background)
    }
  // constructor() { }
}
