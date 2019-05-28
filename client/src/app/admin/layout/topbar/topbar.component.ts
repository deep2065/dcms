import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  loginPage="admin/login";
  constructor(private route:Router) { }

  ngOnInit() {
  }


  logout(){
    localStorage.removeItem('login');
    window.location.reload();
  }

}
