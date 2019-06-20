import { Component, OnInit } from '@angular/core';
import { GlobleService } from 'src/app/services/globle.service';
import { Router } from '@angular/router';
import { DatatableService } from 'src/app/services/datatable.service';
import { AdminbredcrubService } from 'src/app/services/adminbredcrub.service';

@Component({
  selector: 'app-gallerylist',
  templateUrl: './gallerylist.component.html',
  styleUrls: ['./gallerylist.component.css']
})
export class GallerylistComponent implements OnInit {


  gallerydata={
    modulename:"gallery",
    tabletitle:"Gallery List",
    createbtnurl:"create",
    createbtntitle:"Add New Gallery",
    buttons:[
      {title:"Edit",icon:"fas fa-edit", class:"btn btn-primary",type:"edit",permission:"gallery.edit"},
      {title:"Delete",icon:"fas fa-trash", class:"btn btn-danger",type:"delete", permission:"gallery.delete"}
    ],
    columns:[
      {name:"id",lable:"ID"},
      {name:"image",lable:"Image"},
      {name:"name",lable:"Name"},
      {name:"category",lable:"Category"},
      {name:"description",lable:"Description"},
      {name:"status",lable:"Status"},
      {name:"created_at",lable:"Create Date"},
      {name:'action',lable:"Actions"}]
  };
    constructor(private service:GlobleService, private router:Router, private dt:DatatableService, private bred:AdminbredcrubService) {
      this.service.getAll("gallery",(res)=>{
        this.gallerydata['data']=res;
      });
     }

    ngOnInit() {

      this.bred.changeMessage("Gallery List");
     this.bred.bred.push( {title:"Gallery List",url:"admin/gallery"});
     this.bred.changeBredcrub();
    }

    actionTable(data){
      if(data.type=='delete')
      {
        this.service.deleteById("gallery",data.data[0],(res)=>{
          this.dt.changedatatable(1);
        });
      }else if(data.type=="edit")
      {
        this.router.navigate(["admin/post/create/"+data.data[0]]);
      }
      };


}
