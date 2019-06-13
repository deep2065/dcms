import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminbredcrubService {

  private pageTitleSource = new BehaviorSubject('Dashboard');
  currentTitle = this.pageTitleSource.asObservable();

  private bredSource = new BehaviorSubject([
    {title:"Home","url":"admin"},
    {title:"Dashboard","url":"admin/dashboard"}
  ]);
  currentBredcrub = this.bredSource.asObservable();

  bred=[
    {title:"Home","url":"admin"}
  ];
  constructor() { }

  changeMessage(message: string) {
    this.pageTitleSource.next(message);
  }

  changeBredcrub() {
    this.bredSource.next(this.bred);
  }
}
