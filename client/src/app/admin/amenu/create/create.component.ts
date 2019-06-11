import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder,Validators, FormGroup,FormArray } from '@angular/forms';
import { GlobleService } from 'src/app/services/globle.service';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  menuform:FormGroup;
  magroup = {
    "menuid":[0],
    "menutype":[0],
    "url":['',[Validators.required]],
    "title":['',[Validators.required]],
    "icon" :[''],
    "hassubmenu" :[false],
    "permission" :['',[Validators.required]],
    "id":[''],
    "submenus" :['']
  };
  constructor(private form:FormBuilder,private router:Router, private service:GlobleService,private route: ActivatedRoute) {
   var _self= this;
    this.route.params.subscribe( params => {
      if(params.id && params.menutype=='1'){
        _self.magroup.menuid=[params.id];
        _self.magroup.menutype=[params.menutype];

        _self.service.getById("menus",params.id,(a)=>{
          _self.menuformarray.removeAt(0);
          a.submenus.forEach(element => {
            var magroup = {
              "menuid":[params.id],
              "menutype":[params.menutype],
              "url":[element.url,[Validators.required]],
              "title":[element.title,[Validators.required]],
              "icon" :[element.icon],
              "hassubmenu" :[element.hassubmenu],
              "permission" :[element.permission,[Validators.required]],
              "id":[element.id],
              "submenus" :[element.submenus]
            };
            _self.menuformarray.push(_self.form.group(magroup));
          });
        });
      }

      if(params.id && params.menutype=='2'){
        _self.service.getById("menus",params.id,(a)=>{
         var magroup = {
            "menuid":[params.id],
            "menutype":[params.menutype],
            "url":[a.url,[Validators.required]],
            "title":[a.title,[Validators.required]],
            "icon" :[a.icon],
            "hassubmenu" :[a.hassubmenu],
            "permission" :[a.permission,[Validators.required]],
            "id":[a.id],
            "submenus" :[a.submenus]
          };
          _self.menuformarray.removeAt(0);
          _self.menuformarray.push(_self.form.group(magroup));
        });
      }
    });
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
      var marray = this.menuform.value.menuformarray;
      var data = JSON.stringify(marray);
    this.service.insert("menus",data,(res)=>{
    this.router.navigate(['admin/menu']);
    });
    }
  }

  ngOnInit() {

  }


}
