import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucreate',
  templateUrl: './menucreate.component.html',
  styleUrls: ['./menucreate.component.css']
})
export class MenucreateComponent implements OnInit {
  allNumbers: number[] = [];
  constructor() {
    for (let insertNumbers = 0; insertNumbers <= 100; insertNumbers++) {
      this.allNumbers.push(insertNumbers);
    }
   }

  ngOnInit() {
  }

}
