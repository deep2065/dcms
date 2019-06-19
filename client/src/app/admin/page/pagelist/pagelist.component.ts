import { Component, OnInit } from '@angular/core';
import { GlobleService } from 'src/app/services/globle.service';
import { Router } from '@angular/router';
import { DatatableService } from 'src/app/services/datatable.service';
import { AdminbredcrubService } from 'src/app/services/adminbredcrub.service';

@Component({
  selector: 'app-pagelist',
  templateUrl: './pagelist.component.html',
  styleUrls: ['./pagelist.component.css']
})
export class PagelistComponent implements OnInit {
pagedata={
  modulename:"page",
  tabletitle:"Page List",
  createbtnurl:"create",
  createbtntitle:"Add New Page",
  buttons:[
    {title:"Edit",icon:"fas fa-edit", class:"btn btn-primary",type:"edit",permission:"page.list"},
    {title:"Delete",icon:"fas fa-trash", class:"btn btn-danger",type:"delete", permission:"page.delete"}
  ],
  columns:[
    {name:"id",lable:"ID"},
    {name:"name",lable:"Name"},
    {name:"description",lable:"Description"},
    {name:"status",lable:"Status"},
    {name:"created_at",lable:"Create Date"},
    {name:'action',lable:"Actions"}]
};
  constructor(private service:GlobleService, private router:Router, private dt:DatatableService, private bred:AdminbredcrubService) {
    this.service.getAll("page",(res)=>{
      this.pagedata['data']=res;
    });
   }

  ngOnInit() {

    this.bred.changeMessage("Page List");
   this.bred.bred.push( {title:"Page List",url:"admin/page"});
   this.bred.changeBredcrub();
  }

  actionTable(data){
    if(data.type=='delete')
    {
      this.service.deleteById("page",data.data[0],(res)=>{
        this.dt.changedatatable(1);
      });
    }else if(data.type=="edit")
    {
      this.router.navigate(["admin/page/create/"+data.data[0]]);
    }
    };

}
