import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SidemenuService {
menu:any=[];
permission:any={};
  constructor(private http:HttpClient) { 
    this.buildmenu();
  }

  buildmenu(){
    this.menu=[
      {name:"Pages",url:"page",icon:"fa fa-files-o",parent:"",id:"menu-pages",hassubmenu:false,permission:"page.list"},
      {
        name:"Blog",url:"#",icon:"fa fa-list",parent:"",id:"menu-blog",hassubmenu:true,permission:"post.list",submenu:[
        {name:"Posts",url:"post",icon:null,parent:"menu-blog",id:"menu-blog-post",hassubmenu:false,permission:"post.list"},
        {name:"Category",url:"category",icon:null,parent:"menu-blog",id:"menu-blog-category",hassubmenu:false,permission:"post_category.list"}
    ]
  }
    ];

    this.permission = {
      "page":[{title:"Page",premi:["page.list","page.edit","page.create","page.delete"]}],
      "blog":[
        {title:"Post",premi:["post.list","post.edit","post.create","post.delete"]},
        {title:"Category",premi:["post_category.list","post_category.edit","post_category.create","post_category.delete"]}
      ]
    };

  }
}
