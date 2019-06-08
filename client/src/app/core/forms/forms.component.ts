import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
@Input('form') form: any;
  constructor() { }

  ngOnInit() {
    console.log(this.form);
  }

}
