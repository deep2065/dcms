import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
menuform:FormGroup;
  constructor(private form:FormBuilder) { }

  ngOnInit() {
    this.menuform = this.form.group({
      "name" :['',[Validators.required]],
      "url":['',[Validators.required]],
      "title":['',[Validators.required]],
      "icon" :[''],
      "hassubmenu" :['',[Validators.required]],
      "permission" :['',[Validators.required]],
      "parent":['',[Validators.required]],
      "id":['',[Validators.required]],
      "submenus" :['']
    });
  }

}
