import { Component, OnInit } from '@angular/core';
import { GlobleService } from 'src/app/services/globle.service';
import { AdminbredcrubService } from 'src/app/services/adminbredcrub.service';
import { Validators } from '@angular/forms';
import { ConfigInterface, TreeModel } from 'ng6-file-man';
import { Router, ActivatedRoute } from '@angular/router';
import { DatashareService } from 'src/app/services/datashare.service';

@Component({
  selector: 'app-pagecreate',
  templateUrl: './pagecreate.component.html',
  styleUrls: ['./pagecreate.component.css']
})
export class PagecreateComponent implements OnInit {
  pageform:any;
  tree:any;
  constructor(private service:GlobleService, private bred:AdminbredcrubService,private router:Router, private route:ActivatedRoute, private ds:DatashareService) {
    this.route.params.subscribe(a=>{
      if(a){
        this.service.getById("page",a.id,(res)=>{
          this.ds.changedata(res);
        })
      }
    })
    const treeConfig: ConfigInterface = this.service.media;
    this.tree = new TreeModel(treeConfig)
    this.pageform =[
      {name:"name",type:"text",label:{name:"Name",class:"control-lable required"},validation:[Validators.required]},
      {name:"description",type:"textarea",label:{name:"Description",class:"control-lable required"},validation:[Validators.required]},
      {name:"content",type:"editor",label:{name:"Content",class:"control-lable required"},validation:[Validators.required]},
      ];
      this.pageform['fbreak']=[
        {name:"status",type:"select",label:{name:"Status",class:"control-lable required"},validation:[Validators.required],chooise:[{value:"1",lable:"Active"},{value:'2',lable:"Deactive"}]},
        {name:"image",type:"mediaimage",label:{name:"Image",class:"control-lable required"},validation:[Validators.required]},
      ];
  }


  ngOnInit() {
    this.bred.changeMessage("Create Page");

   // this.bred.bred.push( {title:"Page",url:"admin/page"});
    this.bred.bred.push( {title:"Create Page",url:"admin/page/create"});
    this.bred.changeBredcrub();
  }

  saveForm(data){
    this.service.insert("page",data,(res)=>{
     this.router.navigate(['admin/page']);
    });
  }

}

