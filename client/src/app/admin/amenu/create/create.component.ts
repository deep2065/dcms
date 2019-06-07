import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder,Validators, FormGroup,FormArray } from '@angular/forms';
import { GlobleService } from 'src/app/services/globle.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  menuform:FormGroup;
  magroup = {
    "upid":[],
    "url":['',[Validators.required]],
    "title":['',[Validators.required]],
    "icon" :[''],
    "hassubmenu" :[false],
    "permission" :['',[Validators.required]],
    "id":[''],
    "submenus" :['']
  };
  constructor(private form:FormBuilder,private service:GlobleService) {
    this.menuform = this.form.group({
      "menuformarray":this.form.array([
        this.form.group(this.magroup)
      ]),

    });
   }
   get menuformarray() {
    return this.menuform.get('menuformarray') as FormArray;
  }

  addMore() {
    this.menuformarray.push(this.form.group(this.magroup));
  }

  deleteRow(index) {
    this.menuformarray.removeAt(index);
  }

  menuSubmit(){
    if(this.menuform.valid){
      var data = JSON.stringify(this.menuform.value.menuformarray);
    this.service.insertMenu(data,function(res){
    console.log(res);
    });
    }
  }

  ngOnInit() {

  }


}
