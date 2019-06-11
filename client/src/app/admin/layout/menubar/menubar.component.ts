import { Component, OnInit } from '@angular/core';
import { GlobleService } from 'src/app/services/globle.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
sidemenu:any=[];
  constructor(private service:GlobleService) { }

  ngOnInit() {
    this.service.getAll("menus",(res)=>{
      this.sidemenu=res;
    });
  }

}
