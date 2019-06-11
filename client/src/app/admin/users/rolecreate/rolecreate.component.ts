import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { GlobleService } from 'src/app/services/globle.service';

@Component({
  selector: 'app-rolecreate',
  templateUrl: './rolecreate.component.html',
  styleUrls: ['./rolecreate.component.css']
})
export class RolecreateComponent implements OnInit {

  roleform:FormGroup;
  rolesp={
    role:['',[Validators.required]]
  };
  modules:any;
  constructor(private form:FormBuilder,private service :GlobleService) {

    this.roleform = this.form.group({
      "name":['',[Validators.required]],
      "roles":this.form.array([])
    });

    this.service.getAll("modules",(res)=>{
      if(res)
      {
        this.modules = res;
        res.forEach(element1 => {
          element1.modulepermission.forEach(element2 => {            
          var rolesp={
            role:[element2.permission,[Validators.required]]
          };
          this.roles.push(this.form.group(rolesp));
          });
        });
      }
    });
     


   }

  get roles(){
    return this.roleform.get("roles") as FormArray;
  }

  // addRow(){
  //   this.roles.push(this.form.group(this.rolesp));
  // }

  // deleteRow(index){
  //   this.roles.removeAt(index);
  // }

  ngOnInit() {
  }

  saveRole(data){
    console.log(data);
  }

}
