import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup,FormArray } from '@angular/forms';
import { GlobleService } from 'src/app/services/globle.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modulecreate',
  templateUrl: './modulecreate.component.html',
  styleUrls: ['./modulecreate.component.css']
})
export class ModulecreateComponent implements OnInit {

  moduleForm:FormGroup;
  mpermission={
    permission:['',[Validators.required]]
  }
  constructor(private form:FormBuilder, private service:GlobleService,private router:Router, private route:ActivatedRoute) { 
    this.route.params.subscribe( params => {
      if(params.id){
        this.service.getById("modules",params.id,(res)=>{
          this.moduleForm.patchValue({
            "name":res.name
          });
          this.modulepermission.removeAt(0);
          res.modulepermission.forEach(element => {
            var mpermission={
              permission:[element.permission,[Validators.required]]
            };
            this.modulepermission.push(this.form.group(mpermission))
          });

        });
      }
    });
    this.moduleForm = this.form.group({
      "name":['',[Validators.required]],
      "modulepermission":this.form.array([
        this.form.group(this.mpermission)
      ])
    });
  }
  get modulepermission (){
    return this.moduleForm.get("modulepermission") as FormArray;
  }
  addMore() {
    this.modulepermission.push(this.form.group(this.mpermission));
  }

  deleteRow(index) {
    this.modulepermission.removeAt(index);
  }

  ngOnInit() {
  }

  moduleSubmit(){
    if(this.moduleForm.valid){
      this.service.insert("modules",this.moduleForm.value,(res)=>{
        this.router.navigate(['admin/module']);
      })
    }
  }

}
