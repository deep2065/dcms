import { Component, OnInit } from '@angular/core';
import { GlobleService } from 'src/app/services/globle.service';
import { AdminbredcrubService } from 'src/app/services/adminbredcrub.service';
import { Validators } from '@angular/forms';
import { ConfigInterface, TreeModel } from 'ng6-file-man';

@Component({
  selector: 'app-pagecreate',
  templateUrl: './pagecreate.component.html',
  styleUrls: ['./pagecreate.component.css']
})
export class PagecreateComponent implements OnInit {
  pageform:any;
  tree:any;
  constructor(private service:GlobleService, private bred:AdminbredcrubService) {
    const treeConfig: ConfigInterface = this.service.media;
    this.tree = new TreeModel(treeConfig)
    this.pageform =[
      {name:"name",type:"text",label:"Name",validation:[Validators.required]},
      {name:"country",type:"select",label:"Country",validation:[Validators.required],chooise:[{value:"1",lable:"India"}]},
      {name:"description",type:"editor",label:"Description",validation:[Validators.required]},
      ];
      this.pageform['fbreak']=[
        {name:"image",type:"mediaimage",label:"Image",validation:[Validators.required]},
        {name:"publish_date",type:"date",label:"Publish Date",validation:[Validators.required]},
        {name:"unpublish_date",type:"date",label:"Unpublish Date",validation:[Validators.required]},
      ];
  }


  ngOnInit() {
    this.bred.changeMessage("Create Page");

   // this.bred.bred.push( {title:"Page",url:"admin/page"});
    this.bred.bred.push( {title:"Create Page",url:"admin/page/create"});
    this.bred.changeBredcrub();
  }

  saveForm(data){
    console.log(data);
  }

}

