import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import {Page} from './page.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  formPpage:any;
  pageform:FormGroup;
  constructor(private builder:FormBuilder) { }
  ngOnInit() {
    this.formPpage=[
        {
          name:'name',
          type:'text',
          value:'',
          label:'Page Name',
          labelattr:{},
          validation:['required'],
          userbootstrap:true,
          attr:{}
        },
        {
          name:'description',
          type:'text',
          value:'',
          label:'Page Description',
          labelattr:{},
          validation:['required'],
          userbootstrap:true,
          attr:{}
        },
        {
          name:'content',
          type:'editor',
          value:'',
          label:'Page Content',
          labelattr:{},
          validation:['required'],
          userbootstrap:true,
          attr:{}
        }
      ];

   this.pageform = new Page(this.builder).buildForm();
  }

  savePage(){
    console.log(this.pageform.value);
  }

}
