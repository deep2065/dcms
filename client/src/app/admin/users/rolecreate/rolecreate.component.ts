import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { GlobleService } from 'src/app/services/globle.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rolecreate',
  templateUrl: './rolecreate.component.html',
  styleUrls: ['./rolecreate.component.css']
})
export class RolecreateComponent implements OnInit {

  modules:any;
  modelname:any='';
  error='';

  perform = {};
  modulepwe=[];
  constructor(private form:FormBuilder,private service :GlobleService, private router:Router, private route:ActivatedRoute) {

    this.service.getAll("modules",(res)=>{
      if(res)
      {
        this.modules = res;
      }
    });

    this.route.params.subscribe(params=>{
      if(params.id){
      this.service.getById("roles",params.id,(res)=>{
        this.perform = res.roles;
        this.modelname = res.name;
        this.modulepwe = Object.keys(res.roles);
      })
      }
    })



   }
  ngOnInit() {
  }

  saveRole(data){
    if(data.name != "" && Object.keys(this.perform).length>0){
      var indata = {
        name:data.name,
        roles:this.perform
      }
    this.service.insert("roles",indata,(res)=>{
      this.router.navigate(['admin/user/role']);
    })
    }else{
      this.error ="Role name and at least one permission is required.";
    }
  }

  removeItem(event,data){
    if(event.target.checked){
      this.perform[data]=true;
    }else{
      delete this.perform[data];
    }
  }
}
