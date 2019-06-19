import { Component, OnInit } from '@angular/core';
import { GlobleService } from 'src/app/services/globle.service';
declare var $;

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
users:any;
modulename='user';
modulepermi=[];
  constructor(private service:GlobleService) {
    this.service.checkPermission(this.modulename+".list",localStorage.getItem("userid"),(res)=>{
      this.modulepermi = res;
    });
    this.service.getAll("users",(res)=>{
      this.users=res;
    })
   }

  ngOnInit() {
    $(()=>{
      $("#example1").DataTable();
    })
  }

  deleteUser(id,ind)
  {
    if(confirm("Are you sure to delete this user ?")){
      this.service.deleteById("users",id,(res)=>{
        this.users.splice(ind,1);
      })
    }
  }

}
