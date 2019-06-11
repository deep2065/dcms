import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobleService } from 'src/app/services/globle.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {
userForm : FormGroup;
roles:any;
  constructor(private form:FormBuilder, private service:GlobleService, private router:Router, private route:ActivatedRoute) {
    this.userForm = this.form.group({
      name:['',Validators.required],
      username:['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      role:['',[Validators.required]],
      is_login:['0'],
      session_id:['0'],
      login_datetime:[new Date()],
      is_active:[true]
    });
    this.service.getAll("roles",(res)=>{
      this.roles = res;
    });

    this.route.params.subscribe(params=>{
      if(params.id){
        this.service.getById("users",params.id,(res)=>{
          this.userForm.patchValue({
            name:res.name,
            username:res.username,
            email:res.email,
            password:res.password,
            role:res.role
          });
        });
      }
    })
   }

  ngOnInit() {
  }

  saveUser(){
    if(this.userForm.valid)
    {
      this.service.insert("users",this.userForm.value,(res)=>{
        this.router.navigate(["admin/users"]);
      });
    }
  }

}
