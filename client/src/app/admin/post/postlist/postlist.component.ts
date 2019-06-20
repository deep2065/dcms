import { Component, OnInit } from '@angular/core';
import { GlobleService } from 'src/app/services/globle.service';
import { Router } from '@angular/router';
import { DatatableService } from 'src/app/services/datatable.service';
import { AdminbredcrubService } from 'src/app/services/adminbredcrub.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  postdata={
    modulename:"post",
    tabletitle:"Post List",
    createbtnurl:"create",
    createbtntitle:"Add New Post",
    buttons:[
      {title:"Edit",icon:"fas fa-edit", class:"btn btn-primary",type:"edit",permission:"post.edit"},
      {title:"Delete",icon:"fas fa-trash", class:"btn btn-danger",type:"delete", permission:"post.delete"}
    ],
    columns:[
      {name:"id",lable:"ID"},
      {name:"name",lable:"Name"},
      {name:"description",lable:"Description"},
      {name:"category",lable:"Category"},
      {name:"category",lable:"Tags"},
      {name:"status",lable:"Status"},
      {name:"created_at",lable:"Create Date"},
      {name:'action',lable:"Actions"}]
  };
    constructor(private service:GlobleService, private router:Router, private dt:DatatableService, private bred:AdminbredcrubService) {
      this.service.getAll("post",(res)=>{
        this.postdata['data']=res;
      });
     }

    ngOnInit() {

      this.bred.changeMessage("Post List");
     this.bred.bred.push( {title:"Post List",url:"admin/post"});
     this.bred.changeBredcrub();
    }

    actionTable(data){
      if(data.type=='delete')
      {
        this.service.deleteById("post",data.data[0],(res)=>{
          this.dt.changedatatable(1);
        });
      }else if(data.type=="edit")
      {
        this.router.navigate(["admin/post/create/"+data.data[0]]);
      }
      };

}
