import { Component, OnInit } from '@angular/core';
import { GlobleService } from 'src/app/services/globle.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roles:any;
  constructor(private service :GlobleService) {
    this.service.getAll("roles",(res)=>{
      this.roles =res;
    })
   }

  ngOnInit() {
  }

  deleteRole(id,ind){
    if(confirm("Are you sure to delete this role ?")){
      this.service.deleteById("roles",id,(res)=>{
        this.roles.splice(ind,1);
      })
    }
  }



}
