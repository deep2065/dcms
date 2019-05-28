import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobleService } from 'src/app/services/globle.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
loginRedirect ="admin/dashboard";
loginForm:FormGroup;
error:any=null;
  constructor(private service:GlobleService, private route:Router,private fbuilder:FormBuilder) {
    if(this.service.isLogin)
    {
      this.route.navigate([this.loginRedirect]);
    }
    this.buildForm();

   }
   get f() { return this.loginForm.controls; }

   buildForm()
   {
     this.loginForm = this.fbuilder.group(
       {
         'username':['',[Validators.required,Validators.minLength(4)]],
         'password':['',[Validators.required,Validators.maxLength(12)]]
       }
     );
   }

  ngOnInit() {
    document.body.className="hold-transition login-page";
    $(()=>{
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }

  ngOnDestroy() {
    document.body.className="";
  }
login(){
 var self = this;
this.service.login(this.loginForm.value,function(chk){
  if(chk){
    self.route.navigate([self.loginRedirect]);
    }else{
      self.error="Username and Password Invalid";
      return false;
    }
});

}

}
