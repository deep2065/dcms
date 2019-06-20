import { Component, OnInit } from '@angular/core';
import { GlobleService } from 'src/app/services/globle.service';
import { AdminbredcrubService } from 'src/app/services/adminbredcrub.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatashareService } from 'src/app/services/datashare.service';
import { Validators } from '@angular/forms';
import { ConfigInterface, TreeModel } from 'ng6-file-man';

@Component({
  selector: 'app-gallerycreate',
  templateUrl: './gallerycreate.component.html',
  styleUrls: ['./gallerycreate.component.css']
})
export class GallerycreateComponent implements OnInit {

  galleryform:any;
  tree:any;
  constructor(private service:GlobleService, private bred:AdminbredcrubService,private router:Router, private route:ActivatedRoute, private ds:DatashareService) {
    this.route.params.subscribe(a=>{
      if(a.id){
        this.service.getById("gallery",a.id,(res)=>{
          this.ds.changedata(res);
        })
      }
    })
    const treeConfig: ConfigInterface = this.service.media;
    this.tree = new TreeModel(treeConfig);
    var year=[];
    for (let index = 2018; index <= new Date().getFullYear(); index++) {
      year.push({value:index,lable:index});
    }
    this.galleryform =[
      {name:"name",type:"text",label:{name:"Name",class:"control-lable required"},validation:[Validators.required]},
      {name:"description",type:"textarea",label:{name:"Description",class:"control-lable required"},validation:[Validators.required]},
      {name:"metaimages",type:"gallery",label:{name:"Gallery",class:"control-lable required"},validation:[Validators.required]},
      ];
      this.galleryform['fbreak']=[
        {name:"status",type:"select",label:{name:"Status",class:"control-lable required"},validation:[Validators.required],chooise:[{value:"1",lable:"Active"},{value:'2',lable:"Deactive"}]},
        {name:"image",type:"mediaimage",label:{name:"Image",class:"control-lable required"},validation:[Validators.required]},
        {name:"category",type:"select",label:{name:"Year",class:"control-lable required"},validation:[Validators.required],chooise:year},
      ];
    }

    ngOnInit() {
      this.bred.changeMessage("Create Gallery");

     // this.bred.bred.push( {title:"Page",url:"admin/page"});
      this.bred.bred.push( {title:"Create Gallery",url:"admin/gallery/create"});
      this.bred.changeBredcrub();
    }

    saveForm(data){
      this.service.insert("post",data,(res)=>{
       this.router.navigate(['admin/gallery']);
      });
    }

}
