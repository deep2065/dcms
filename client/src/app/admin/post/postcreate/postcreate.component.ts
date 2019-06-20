import { Component, OnInit } from '@angular/core';
import { GlobleService } from 'src/app/services/globle.service';
import { AdminbredcrubService } from 'src/app/services/adminbredcrub.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatashareService } from 'src/app/services/datashare.service';
import { ConfigInterface, TreeModel } from 'ng6-file-man';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.css']
})
export class PostcreateComponent implements OnInit {

  postform:any;
  tree:any;
  constructor(private service:GlobleService, private bred:AdminbredcrubService,private router:Router, private route:ActivatedRoute, private ds:DatashareService) {
    this.route.params.subscribe(a=>{
      if(a){
        this.service.getById("post",a.id,(res)=>{
          res['tag']=res.tag.join(",");
          this.ds.changedata(res);
        })
      }
    })
    const treeConfig: ConfigInterface = this.service.media;
    this.tree = new TreeModel(treeConfig)
    this.postform =[
      {name:"name",type:"text",label:{name:"Name",class:"control-lable required"},validation:[Validators.required]},
      {name:"description",type:"textarea",label:{name:"Description",class:"control-lable required"},validation:[Validators.required]},
      {name:"content",type:"editor",label:{name:"Content",class:"control-lable required"},validation:[Validators.required]},
      {name:"tag",type:"autocomplete",label:{name:"Tags",class:"control-lable"},datamodel:"post.tag",multi:true,validation:[]},
      ];
      this.postform['fbreak']=[
        {name:"status",type:"select",label:{name:"Status",class:"control-lable required"},validation:[Validators.required],chooise:[{value:"1",lable:"Active"},{value:'2',lable:"Deactive"}]},
        {name:"image",type:"mediaimage",label:{name:"Image",class:"control-lable required"},validation:[Validators.required]},
        {name:"category",type:"autocomplete",label:{name:"Category",class:"control-lable required"},datamodel:"post.category",multi:false,validation:[Validators.required]},
      ];
    }

    ngOnInit() {
      this.bred.changeMessage("Create Post");

     // this.bred.bred.push( {title:"Page",url:"admin/page"});
      this.bred.bred.push( {title:"Create Post",url:"admin/page/create"});
      this.bred.changeBredcrub();
    }

    saveForm(data){
      this.service.insert("post",data,(res)=>{
       this.router.navigate(['admin/post']);
      });
    }

}
