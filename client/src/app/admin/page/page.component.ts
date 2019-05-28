import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import {Page} from './page.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  constructor(private builder:FormBuilder) { }
  pageform:FormGroup = new Page(this.builder).buildForm();
  ngOnInit() {
  }

  savePage(){
    console.log(this.pageform.value);
  }

}
