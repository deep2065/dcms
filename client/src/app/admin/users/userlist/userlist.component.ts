import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(()=>{
      $("#example1").DataTable();
    })
  }

}
